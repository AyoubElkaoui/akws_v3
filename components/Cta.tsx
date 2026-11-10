'use client';

import Link from 'next/link';
import { useState } from 'react';
import { BRAND } from '@/lib/data';
import { track } from '@/lib/track';

type CtaProps = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  body?: string;
  variant?: 'form' | 'simple';
};

export function Cta({
  eyebrow = 'De volgende stap',
  title,
  subtitle = '30 minuten, vrijblijvend',
  body = 'We bespreken waar het knelt en wat het zou opleveren om dat op te lossen. Geen verkooppraat. Eerlijk advies, ook als ik niet de juiste partij blijk.',
  variant = 'form',
}: CtaProps) {
  const wa = `https://wa.me/31${BRAND.phoneRaw.slice(1)}?text=${encodeURIComponent('Hoi Ayoub, ik heb een vraag over een website.')}`;
  const pil = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '12px 18px',
    borderRadius: 999,
    border: '1px solid rgba(255,255,255,.3)',
    color: '#fff',
    fontWeight: 600,
    fontSize: 15,
    textDecoration: 'none',
  } as const;
  return (
    <section className="section cta">
      <div className="wrap">
        <div className="cta-grid">
          <div>
            <span className="eyebrow">
              <span className="dot" /> {eyebrow}
            </span>
            <h2>
              {title}
              <em>/ {subtitle}</em>
            </h2>
            <p className="cta-sub">{body}</p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 24 }}>
              <a href={`tel:${BRAND.phoneRaw}`} style={pil}>Bel {BRAND.phone.replace(/ — /g, ' ')}</a>
              <a href={wa} target="_blank" rel="noopener noreferrer" style={pil}>Stuur een appje</a>
            </div>
            <div className="cta-checks">
              <span className="ok">Reactie &lt; 24 uur</span>
              <span>Vrijblijvend</span>
              <span>Geen verkooppraat</span>
            </div>
          </div>

          {variant === 'simple' ? (
            <div style={{ textAlign: 'center' }}>
              <Link
                href="/contact"
                className="btn btn-purple"
                style={{ fontSize: 17, padding: '22px 32px' }}
              >
                Plan strategiegesprek <span className="arrow">→</span>
              </Link>
              <div
                style={{
                  marginTop: 20,
                  fontFamily: 'var(--mono)',
                  fontSize: 12,
                  color: 'rgba(255,255,255,.5)',
                  letterSpacing: '.06em',
                }}
              >
                of laat hiernaast je nummer achter
              </div>
            </div>
          ) : (
            <CtaSimpleForm />
          )}
        </div>
      </div>
    </section>
  );
}

function CtaSimpleForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    const fd = new FormData(e.currentTarget);
    const contact = (fd.get('contact') as string) ?? '';
    const isEmail = contact.includes('@');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fd.get('name'),
          email: isEmail ? contact : undefined,
          phone: isEmail ? undefined : contact,
        }),
      });
      if (res.ok) track('Aanvraag verstuurd', { formulier: 'terugbel', pagina: window.location.pathname });
      setStatus(res.ok ? 'ok' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'ok') {
    return (
      <div className="form-card" style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 32, marginBottom: 12 }}>✓</div>
        <div style={{ fontFamily: 'var(--cond)', fontWeight: 800, fontSize: 22, textTransform: 'uppercase' }}>
          Aanvraag ontvangen
        </div>
        <p style={{ color: 'rgba(255,255,255,.7)', marginTop: 8, fontSize: 14 }}>
          Ayoub neemt binnen 24 uur contact op.
        </p>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="lbl">Liever dat ik bel?</div>
      <div className="head">Ik neem contact op</div>
      <div className="form-fields">
        <input name="name" placeholder="Naam en bedrijf" required />
        <input name="contact" placeholder="Telefoon of e-mail" required />
      </div>
      <button className="submit" type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Versturen...' : 'Verstuur aanvraag'}
        {status !== 'loading' && <span className="arrow">→</span>}
      </button>
      {status === 'error' && (
        <p style={{ color: '#fca5a5', fontSize: 12, marginTop: 8 }}>
          Er is iets misgegaan. Probeer het opnieuw.
        </p>
      )}
    </form>
  );
}

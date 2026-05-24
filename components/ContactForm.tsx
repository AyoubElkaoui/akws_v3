'use client';

import { useState } from 'react';
import Script from 'next/script';
import { BRAND } from '@/lib/data';

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? '';
const BRANCHES = ['Loodgieters', 'CV & HVAC', 'Elektriciens', 'Installatiebedrijven', 'Dakdekkers', 'Anders'];

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'error'>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setError('');

    const fd = new FormData(e.currentTarget);

    let recaptchaToken = '';
    if (SITE_KEY) {
      try {
        // wacht tot grecaptcha beschikbaar is (max 5 seconden)
        await new Promise<void>((resolve, reject) => {
          const deadline = setTimeout(() => reject(new Error('timeout')), 5000);
          const poll = () => {
            if (typeof window !== 'undefined' && window.grecaptcha) {
              clearTimeout(deadline);
              window.grecaptcha.ready(resolve);
            } else {
              setTimeout(poll, 100);
            }
          };
          poll();
        });
        recaptchaToken = await window.grecaptcha.execute(SITE_KEY, { action: 'contact' });
      } catch (err) {
        console.warn('[recaptcha] niet geladen:', err);
      }
    }

    const body = {
      company: fd.get('company'),
      name: fd.get('name'),
      phone: fd.get('phone'),
      email: fd.get('email'),
      branche: fd.get('branche'),
      message: fd.get('message'),
      recaptchaToken,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error ?? 'Er is iets misgegaan.');
        setStatus('error');
        return;
      }
      setStatus('ok');
    } catch {
      setError('Verbinding mislukt. Probeer het opnieuw of bel direct.');
      setStatus('error');
    }
  }

  if (status === 'ok') {
    return (
      <div
        className="contact-form"
        style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center', justifyContent: 'center', minHeight: 400 }}
      >
        <div style={{ fontSize: 40 }}>✓</div>
        <div style={{ fontFamily: 'var(--cond)', fontWeight: 800, fontSize: 28, textTransform: 'uppercase', textAlign: 'center' }}>
          Aanvraag ontvangen
        </div>
        <p style={{ color: 'rgba(255,255,255,.7)', textAlign: 'center', margin: 0, fontSize: 15 }}>
          Ayoub neemt binnen 24 uur contact op via je opgegeven telefoonnummer of e-mailadres.
        </p>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'rgba(255,255,255,.5)', marginTop: 8 }}>
          Of bel direct: {BRAND.phone}
        </div>
      </div>
    );
  }

  return (
    <>
      {SITE_KEY && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`}
          strategy="afterInteractive"
        />
      )}

      <form className="contact-form" onSubmit={handleSubmit}>
        <span className="chip chip-purple-fill">Vrijblijvend strategiegesprek</span>
        <div className="head">
          Plan 30 minuten<br />met Ayoub.
        </div>
        <p className="sub">
          Vertel kort waar je tegenaan loopt. Binnen 24 uur reactie op werkdagen.
        </p>

        <div className="field">
          <span className="lbl">Bedrijfsnaam</span>
          <input name="company" placeholder="Bijv. Van der Berg Installaties" />
        </div>
        <div className="field">
          <span className="lbl">Naam *</span>
          <input name="name" placeholder="Bijv. Jan van der Berg" required />
        </div>
        <div className="contact-fields-row">
          <div className="field">
            <span className="lbl">Telefoon</span>
            <input name="phone" placeholder="06 12 34 56 78" />
          </div>
          <div className="field">
            <span className="lbl">E-mail</span>
            <input name="email" type="email" placeholder="jan@bedrijf.nl" />
          </div>
        </div>

        <div className="field">
          <span className="lbl">Type bedrijf</span>
          <select
            name="branche"
            style={{
              width: '100%',
              padding: '13px 14px',
              borderRadius: 10,
              border: '1px solid rgba(255,255,255,.14)',
              background: 'rgba(255,255,255,.05)',
              color: '#fff',
              fontFamily: 'var(--sans)',
              fontSize: 14,
              outline: 'none',
              appearance: 'none',
            }}
          >
            <option value="" style={{ background: '#1a0f33' }}>Kies een categorie...</option>
            {BRANCHES.map((b) => (
              <option key={b} value={b} style={{ background: '#1a0f33' }}>{b}</option>
            ))}
          </select>
        </div>

        <div className="field">
          <span className="lbl">Korte toelichting (optioneel)</span>
          <textarea
            name="message"
            rows={3}
            placeholder="Bijv. We hebben een site uit 2019 en willen meer aanvragen via Google."
          />
        </div>

        {status === 'error' && (
          <div
            style={{
              background: 'rgba(220,60,60,.15)',
              border: '1px solid rgba(220,60,60,.3)',
              borderRadius: 10,
              padding: '12px 14px',
              fontSize: 13,
              color: '#fca5a5',
            }}
          >
            {error}
          </div>
        )}

        <button className="submit" type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Versturen...' : 'Verstuur aanvraag'}
          {status !== 'loading' && <span className="arrow">→</span>}
        </button>

        <div
          style={{
            marginTop: 18,
            paddingTop: 18,
            borderTop: '1px solid rgba(255,255,255,.1)',
            fontFamily: 'var(--mono)',
            fontSize: 11,
            color: 'rgba(255,255,255,.5)',
            letterSpacing: '.06em',
            display: 'flex',
            gap: 24,
            flexWrap: 'wrap',
          }}
        >
          <span style={{ color: 'var(--p-soft)' }}>Reactie &lt; 24 uur</span>
          <span>Vrijblijvend</span>
          <span>Geen verkooppraat</span>
        </div>

        {SITE_KEY && (
          <p style={{ marginTop: 10, fontSize: 10, color: 'rgba(255,255,255,.3)', lineHeight: 1.5, margin: '10px 0 0' }}>
            Beschermd door reCAPTCHA —{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,.4)' }}>Privacy</a>
            {' '}·{' '}
            <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,.4)' }}>Voorwaarden</a>
          </p>
        )}
      </form>
    </>
  );
}

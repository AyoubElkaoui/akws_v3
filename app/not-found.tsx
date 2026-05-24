import Link from 'next/link';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';

export default function NotFound() {
  return (
    <>
      <SiteNav />
      <section style={{ padding: '120px 0', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <div
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 11,
              color: 'var(--p1)',
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              marginBottom: 24,
            }}
          >
            404
          </div>
          <h1
            style={{
              fontFamily: 'var(--cond)',
              fontWeight: 900,
              fontSize: 'clamp(64px, 12vw, 140px)',
              lineHeight: 0.92,
              letterSpacing: '-.025em',
              textTransform: 'uppercase',
              margin: '0 0 32px',
            }}
          >
            Pagina<br />
            <span className="gradient-text">niet gevonden.</span>
          </h1>
          <p
            style={{
              fontSize: 18,
              color: 'var(--ink-soft)',
              maxWidth: 520,
              margin: '0 auto 16px',
              lineHeight: 1.55,
            }}
          >
            Iets klopt niet, maar daar ben ik voor. De pagina die je zoekt bestaat niet, is verplaatst,
            of er is een typfout in de URL. Hier zijn een paar plekken waar je waarschijnlijk wel terecht kunt:
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 24 }}>
            <Link href="/" className="btn btn-primary">
              Naar de homepage <span className="arrow">→</span>
            </Link>
            <Link href="/diensten" className="btn btn-ghost">Diensten</Link>
            <Link href="/cases" className="btn btn-ghost">Cases</Link>
            <Link href="/contact" className="btn btn-ghost">Plan gesprek</Link>
          </div>
          <p style={{ fontSize: 14, color: 'var(--mute)', fontFamily: 'var(--mono)', letterSpacing: '.04em' }}>
            Of mail wat je zocht:{' '}
            <a href="mailto:info@akwebsolutions.nl" style={{ color: 'var(--p1)' }}>info@akwebsolutions.nl</a>
          </p>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}

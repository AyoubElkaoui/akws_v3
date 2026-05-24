import Link from 'next/link';
import type { Metadata } from 'next';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { Cta } from '@/components/Cta';
import { PageHead } from '@/components/PageHead';
import { PRIJZEN } from '@/lib/data';
import { buildMetadata, breadcrumbSchema, serviceSchema } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Websites voor installatiebedrijven — Snel, vindbaar, Next.js | AKWS',
  description:
    'Websites voor installatiebedrijven gebouwd op Next.js. Snel, mobiel-first, lokale SEO ingebouwd. Starter v.a. €2.250 + €85/mnd. Freelancer Baarn.',
  path: '/diensten/websites',
});

export default function WebsitesPage() {
  return (
    <>
      <SiteNav active="/diensten" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Diensten', href: '/diensten' },
          { name: 'Websites', href: '/diensten/websites' },
        ])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema('Website ontwikkeling voor installatiebedrijven')) }}
      />

      <PageHead
        crumbs={[{ href: '/', label: 'Home' }, { href: '/diensten', label: 'Diensten' }, { label: 'Websites' }]}
        chip="Next.js · Snel · Mobiel-first · AVG"
        title="Websites die leads opleveren."
        subtitle="Snel, vindbaar, mobiel-first. Gebouwd in Next.js voor maximale snelheid en SEO."
      />

      <section className="section over">
        <div className="wrap">
          <div style={{ maxWidth: 800 }}>
            <p style={{ fontSize: 19, lineHeight: 1.65, color: 'var(--ink-soft)', marginBottom: 32 }}>
              Een website voor een installatiebedrijf is iets anders dan een corporate site of een blog.
              Je klanten zijn ofwel in paniek (spoedklus) ofwel praktisch (offerte voor planmatig werk).
              Beide hebben geen geduld voor trage sites of onduidelijke navigatie. Mijn sites zijn gebouwd
              om in beide situaties te werken.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 64 }}>
            {[
              { t: 'Wat je krijgt', items: ['Productie-klare site in Next.js', 'Gehost op Vercel met SSL standaard', 'Monitoring 24/7 en automatische back-ups', 'Volledig responsive op alle apparaten', 'AVG-proof contactformulier', 'Lokale SEO-fundamenten ingebouwd'] },
              { t: 'Wat je niet krijgt', items: ['Geen WordPress-template met 50 plugins', 'Geen sleepwerk-bouwer om in te hobby\'en', 'Geen drie maanden wachten op oplevering', 'Geen verdwijnact na livegang', 'Geen templates die eruitzien als elke andere site'] },
            ].map((col) => (
              <div key={col.t} style={{ background: '#fff', borderRadius: 16, padding: '32px 32px', border: '1px solid var(--rule)' }}>
                <h3 style={{ fontFamily: 'var(--cond)', fontWeight: 800, fontSize: 24, textTransform: 'uppercase', margin: '0 0 20px' }}>{col.t}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
                  {col.items.map((item) => (
                    <li key={item} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.5 }}>
                      <span style={{ color: 'var(--p1)', fontWeight: 700, flexShrink: 0 }}>{col.t === 'Wat je krijgt' ? '✓' : '×'}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Tech stack */}
          <span className="eyebrow" style={{ marginBottom: 24, display: 'inline-flex' }}>
            <span className="rule" /> Tech stack
          </span>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 64, marginTop: 16 }}>
            {[
              { k: 'Framework', v: 'Next.js 16 (App Router)' },
              { k: 'Styling', v: 'Tailwind CSS' },
              { k: 'Hosting', v: 'Vercel' },
              { k: 'Analytics', v: 'Plausible (privacy, geen cookies)' },
              { k: 'Formulieren', v: 'Server Actions + Resend' },
              { k: 'CMS', v: 'Sanity of MDX' },
            ].map((item) => (
              <div key={item.k} style={{ padding: '10px 16px', background: '#fff', borderRadius: 10, border: '1px solid var(--rule)' }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--mute)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 4 }}>{item.k}</div>
                <div style={{ fontFamily: 'var(--cond)', fontWeight: 700, fontSize: 16, textTransform: 'uppercase' }}>{item.v}</div>
              </div>
            ))}
          </div>

          {/* Performance */}
          <span className="eyebrow" style={{ marginBottom: 24, display: 'inline-flex' }}>
            <span className="rule" /> Performance
          </span>
          <div style={{ marginTop: 16, padding: '32px 36px', background: 'linear-gradient(135deg, color-mix(in oklab, var(--p1) 6%, #fff), #fff)', border: '1px solid color-mix(in oklab, var(--p1) 20%, transparent)', borderRadius: 16, maxWidth: 720 }}>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--ink-soft)', margin: 0 }}>
              Mijn sites scoren standaard <strong style={{ color: 'var(--ink)' }}>95+ op Lighthouse</strong> (Performance,
              Accessibility, Best Practices, SEO). LCP onder 1.5 seconde, CLS onder 0.05. Dat is niet
              alleen techniek-gedoe: het is direct zichtbaar in je Google-rankings en in je
              conversie-percentage.
            </p>
          </div>
        </div>
      </section>

      {/* Pakketten */}
      <section className="section prijzen">
        <div className="wrap">
          <span className="eyebrow">
            <span className="num">→</span>
            <span className="rule" /> Pakketten
          </span>
          <div className="section-head" style={{ marginTop: 24 }}>
            <h2>Kies een pakket.<em>/ of vraag een offerte op maat.</em></h2>
            <p className="lead">Alle prijzen exclusief 21% BTW. Onderhoudscontract verplicht onderdeel.</p>
          </div>
          <div className="prijs-grid">
            {PRIJZEN.filter(p => p.naam !== 'Maatwerk software').map((p) => (
              <div className={`prijs${p.feat ? ' feat' : ''}`} key={p.naam}>
                {p.feat && <div className="prijs-tag">Meest gekozen</div>}
                <div className="naam">{p.naam}</div>
                <div className="sub">{p.sub}</div>
                <div className="price">{p.prijs}</div>
                <div className="eenh">{p.eenh}</div>
                <div className="divider" />
                <ul>
                  {p.bullets.map((b) => (
                    <li key={b}><span className="v">✓</span><span>{b}</span></li>
                  ))}
                </ul>
                <Link href="/contact"><button type="button">{p.cta} →</button></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Cta
        eyebrow="Klaar voor een nieuwe site?"
        title="Plan een gesprek."
        subtitle="30 minuten · vrijblijvend"
      />

      <SiteFooter />
    </>
  );
}

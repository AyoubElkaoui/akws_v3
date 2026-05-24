import Link from 'next/link';
import type { Metadata } from 'next';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { Cta } from '@/components/Cta';
import { PageHead } from '@/components/PageHead';
import { buildMetadata, breadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Onderhoud & support — Hosting, updates, monitoring | AKWS',
  description:
    'Hosting, SSL, updates, beveiliging en kleine wijzigingen. Vast bedrag per maand, geen verrassingen. Maandelijks opzegbaar, geen vendor lock-in.',
  path: '/diensten/onderhoud',
});

const PAKKETTEN = [
  {
    titel: 'Starter onderhoud',
    prijs: '€85/mnd',
    bij: 'Bij Starter-pakket',
    items: ['Hosting op Vercel', 'SSL-certificaat', 'CMS & plugin-updates', 'Beveiligingsmonitoring', 'Uptime-monitoring', '1 uur wijzigingen per maand', 'E-mail support (reactie < 24 uur)'],
  },
  {
    titel: 'Pro onderhoud',
    prijs: '€145/mnd',
    bij: 'Bij Pro-pakket',
    items: ['Alles uit Starter onderhoud', '2 uur wijzigingen per maand', 'Google Ads maandelijks beheer', 'Maandelijkse rapportage', 'Conversie-tracking onderhoud'],
    featured: true,
  },
  {
    titel: 'Premium onderhoud',
    prijs: '€250/mnd',
    bij: 'Op aanvraag',
    items: ['Alles uit Pro onderhoud', '4 uur wijzigingen per maand', 'Kwartaalstrategie-sessie', 'Prioriteitsbehandeling bij storing', 'SEO-rapportage met aanbevelingen'],
  },
];

export default function OnderhoudPage() {
  return (
    <>
      <SiteNav active="/diensten" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Diensten', href: '/diensten' },
          { name: 'Onderhoud & support', href: '/diensten/onderhoud' },
        ])) }}
      />

      <PageHead
        crumbs={[{ href: '/', label: 'Home' }, { href: '/diensten', label: 'Diensten' }, { label: 'Onderhoud & support' }]}
        chip="Hosting · Updates · Support · Monitoring"
        title="Onderhoud & support."
        subtitle="Vast bedrag per maand. Hosting, updates, beveiliging, support. Geen verrassingen."
      />

      <section className="section over">
        <div className="wrap">
          <p style={{ fontSize: 19, lineHeight: 1.65, color: 'var(--ink-soft)', maxWidth: 800, marginBottom: 56 }}>
            Een website is geen statisch product. Software heeft updates nodig, beveiligingspatches
            komen uit, content wijzigt, en af en toe gaat er iets stuk. Mijn onderhoudscontract dekt
            al die situaties tegen een vast maandbedrag, zonder ticketstapels of meerwerk-discussies.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 64 }}>
            {[
              {
                titel: 'Wat zit erin',
                items: ['Hosting op Vercel of dedicated server, incl. SSL', 'Monitoring 24/7 met automatische meldingen bij uitval', 'Back-ups dagelijks, herstelbaar tot 30 dagen', 'Beveiligingsupdates voor framework en dependencies', 'Performance-checks maandelijks (Lighthouse 95+)', 'Kleine wijzigingen binnen het maandbudget', 'E-mail support met reactie < 24 uur op werkdagen'],
                kleur: 'var(--p1)',
              },
              {
                titel: 'Wat zit er niet in',
                items: ['Grote wijzigingen of nieuwe features (apart voorstel)', 'Geen 24/7 telefonische ondersteuning', 'Geen garantie op 100% uptime bij force majeure', 'Geen ondersteuning voor andere websites dan bij mij gebouwd'],
                kleur: 'var(--mute)',
              },
            ].map((col) => (
              <div key={col.titel} style={{ background: '#fff', borderRadius: 16, padding: '32px 28px', border: '1px solid var(--rule)' }}>
                <h3 style={{ fontFamily: 'var(--cond)', fontWeight: 800, fontSize: 22, textTransform: 'uppercase', margin: '0 0 20px' }}>{col.titel}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
                  {col.items.map((item) => (
                    <li key={item} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.5 }}>
                      <span style={{ color: col.kleur, fontWeight: 700, flexShrink: 0 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Geen vendor lock-in */}
          <div style={{ padding: '32px 36px', background: 'linear-gradient(135deg, color-mix(in oklab, var(--p1) 6%, #fff), #fff)', border: '1px solid color-mix(in oklab, var(--p1) 20%, transparent)', borderRadius: 16, maxWidth: 720, marginBottom: 64 }}>
            <h3 style={{ fontFamily: 'var(--cond)', fontWeight: 800, fontSize: 24, textTransform: 'uppercase', margin: '0 0 16px' }}>Geen vendor lock-in</h3>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--ink-soft)', margin: 0 }}>
              Het contract is maandelijks opzegbaar. Stop je het contract: je houdt je site, je code
              en je content. Ik help je met overdracht naar een andere partij als dat nodig is.
              Geen drempels om weg te gaan, geen verborgen kosten bij vertrek.
            </p>
          </div>

          {/* Waarom verplicht */}
          <div style={{ padding: '32px 36px', background: 'var(--bg-alt)', borderRadius: 16, maxWidth: 720 }}>
            <h3 style={{ fontFamily: 'var(--cond)', fontWeight: 800, fontSize: 24, textTransform: 'uppercase', margin: '0 0 16px' }}>Waarom verplicht?</h3>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--ink-soft)', margin: 0 }}>
              Een site zonder onderhoud is een tijdbom. Geen updates betekent: security-lekken na een
              halfjaar, traagheid die rankings kost na een jaar, en grote vervangkosten als je over
              twee jaar wakker wordt. Het maandelijkse bedrag is een investering in continuïteit.
            </p>
          </div>
        </div>
      </section>

      {/* Pakketten */}
      <section className="section prijzen">
        <div className="wrap">
          <span className="eyebrow">
            <span className="num">→</span>
            <span className="rule" /> Onderhoudscontracten
          </span>
          <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {PAKKETTEN.map((p) => (
              <div key={p.titel} className={p.featured ? 'prijs feat' : 'prijs'} style={{ position: 'relative' }}>
                {p.featured && <div className="prijs-tag">Meest gekozen</div>}
                <div className="naam">{p.titel}</div>
                <div className="sub">{p.bij}</div>
                <div className="price">{p.prijs}</div>
                <div className="eenh">per maand excl. BTW</div>
                <div className="divider" />
                <ul>
                  {p.items.map((item) => (
                    <li key={item}><span className="v">✓</span><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Cta
        eyebrow="Vragen over onderhoud?"
        title="Plan een gesprek."
        subtitle="30 minuten · vrijblijvend"
      />

      <SiteFooter />
    </>
  );
}

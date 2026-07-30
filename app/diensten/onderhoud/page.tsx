import Link from 'next/link';
import type { Metadata } from 'next';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { Cta } from '@/components/Cta';
import { PageHead } from '@/components/PageHead';
import { buildMetadata, breadcrumbSchema, faqSchema } from '@/lib/seo';

const FAQ_ONDERHOUD = [
  { q: 'Wat zit er precies in het onderhoud?', a: 'Beheerde hosting, SSL-certificaat, software- en beveiligingsupdates, uptime- en beveiligingsmonitoring, automatische back-ups en een aantal uur kleine wijzigingen per maand. Kortom: alles om je site snel, veilig en actueel te houden zonder dat jij eraan hoeft te denken.' },
  { q: 'Is onderhoud verplicht?', a: 'Onderhoud is een vast onderdeel van elk traject. Een website zonder onderhoud is een tijdbom: na een halfjaar zitten er security-lekken in, na een jaar kost traagheid je rankings. Het is een investering in continuïteit, geen bijkomende kostenpost.' },
  { q: 'Kan ik maandelijks opzeggen?', a: 'Ja, maandelijks opzegbaar — geen jaarcontract. Bij opzegging help ik je met de overdracht naar een andere partij. Je houdt je site, je code en je content: geen vendor lock-in.' },
  { q: 'Wat gebeurt er als mijn site eruit ligt?', a: 'Dat merk ik meestal eerder dan jij. Door de uptime-monitoring krijg ik automatisch een melding als er iets mis is en pak ik het op — je hoeft niet eerst een klant te krijgen die meldt dat je offline staat.' },
  { q: 'Krijg ik ook hulp bij kleine tekst- of fotowijzigingen?', a: 'Ja, kleine wijzigingen zitten in het maandbedrag. En omdat ik de site desgewenst met een CMS lever, kun je de meeste teksten en foto’s ook gewoon zelf aanpassen wanneer het jou uitkomt.' },
  { q: 'Wat kost onderhoud?', a: 'Een vast bedrag per maand, op maat afgestemd op je site en wat je nodig hebt. Je weet vooraf precies waar je aan toe bent — geen verrassingen, geen uurtje-factuurtje.' },
];

export const metadata: Metadata = buildMetadata({
  title: 'Onderhoud & support — Hosting, updates, monitoring | AKWS',
  description:
    'Hosting, SSL, updates, beveiliging en kleine wijzigingen. Vast bedrag per maand, geen verrassingen. Maandelijks opzegbaar, geen vendor lock-in.',
  path: '/diensten/onderhoud',
});

const PAKKETTEN = [
  {
    titel: 'Basis onderhoud',
    prijs: 'Op maat',
    bij: 'Bij elke website',
    items: ['Hosting op Vercel', 'SSL-certificaat', 'CMS & plugin-updates', 'Beveiligingsmonitoring', 'Uptime-monitoring', '1 uur wijzigingen per maand', 'E-mail support (reactie < 24 uur)'],
  },
  {
    titel: 'Pro onderhoud',
    prijs: 'Op maat',
    bij: 'Bij Website + Google Ads',
    items: ['Alles uit Starter onderhoud', '2 uur wijzigingen per maand', 'Google Ads maandelijks beheer', 'Maandelijkse rapportage', 'Conversie-tracking onderhoud'],
    featured: true,
  },
  {
    titel: 'Premium onderhoud',
    prijs: 'Op maat',
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

      {/* FAQ */}
      <section className="section over" style={{ paddingTop: 60, paddingBottom: 80 }}>
        <div className="wrap">
          <span className="eyebrow">
            <span className="num">→</span>
            <span className="rule" /> Veelgestelde vragen over onderhoud
          </span>
          <div style={{ marginTop: 40, display: 'grid', gap: 14, maxWidth: 920 }}>
            {FAQ_ONDERHOUD.map((f) => (
              <details key={f.q} style={{ background: '#fff', borderRadius: 14, border: '1px solid var(--rule)', overflow: 'hidden' }}>
                <summary style={{ padding: '24px 28px', cursor: 'pointer', fontFamily: 'var(--cond)', fontWeight: 700, fontSize: 22, textTransform: 'uppercase', letterSpacing: '.005em', display: 'flex', justifyContent: 'space-between', alignItems: 'center', listStyle: 'none' }}>
                  {f.q}
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 14, color: 'var(--p1)', flexShrink: 0, marginLeft: 16 }}>+</span>
                </summary>
                <div style={{ padding: '0 28px 24px', fontSize: 16, lineHeight: 1.6, color: 'var(--ink-soft)' }}>{f.a}</div>
              </details>
            ))}
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQ_ONDERHOUD)) }}
        />
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

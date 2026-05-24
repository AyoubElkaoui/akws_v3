import Link from 'next/link';
import type { Metadata } from 'next';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { Cta } from '@/components/Cta';
import { PageHead } from '@/components/PageHead';
import { PRIJZEN } from '@/lib/data';
import { buildMetadata, breadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Prijzen — Websites en software voor installateurs | AKWS',
  description:
    'Vaste prijzen zonder verrassingen. Starter v.a. €2.250, Pro v.a. €3.750, Maatwerk software v.a. €4.000. Alle prijzen excl. 21% BTW.',
  path: '/prijzen',
});

const FAQ_PRIJZEN = [
  { q: 'Zijn dit de definitieve prijzen of indicaties?', a: 'Dit zijn vaste prijzen, geen indicaties. Wat in het voorstel staat is wat je betaalt. Als er iets meer kost dan verwacht, is dat mijn probleem, niet het jouwe.' },
  { q: 'Wat zit er in het maandelijkse bedrag?', a: 'Hosting op Vercel, SSL, CMS-updates, beveiligingsmonitoring, uptime-monitoring en een uur kleine wijzigingen (Starter) of twee uur (Pro). Pro voegt ook Google Ads-beheer toe.' },
  { q: 'Is het onderhoudscontract verplicht?', a: 'Ja. Een website zonder onderhoud is een tijdbom. Na een halfjaar zitten er security-lekken in, na een jaar kost traagheid je rankings. Het maandelijkse bedrag is een investering in continuïteit.' },
  { q: 'Kan ik stoppen met het onderhoudscontract?', a: 'Maandelijks opzegbaar. Bij opzegging help ik je met overdracht naar een andere partij. Je houdt je site, je code en je content. Geen vendor lock-in.' },
  { q: 'Zit het advertentiebudget bij Google Ads in het Pro-pakket?', a: 'Nee. Het beheer en de setup zitten in het Pro-pakket (€145/mnd). Het advertentiebudget dat je aan Google betaalt staat los — dat stel je zelf in. Realistisch begin je met €300 tot €600 per maand.' },
  { q: 'Zijn er kortingen bij meerdere modules?', a: 'Voor software-projecten die uit meerdere modules bestaan, bespreek ik de prijs in de intake op basis van scope. Er is geen standaardkorting, wel een eerlijk voorstel op maat.' },
];

export default function PrijzenPage() {
  return (
    <>
      <SiteNav active="/prijzen" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Prijzen', href: '/prijzen' },
        ])) }}
      />

      <PageHead
        crumbs={[{ href: '/', label: 'Home' }, { label: 'Prijzen' }]}
        chip="Vaste prijzen · geen uurtje-factuurtje"
        title="Prijzen."
        subtitle="Wat je met mij afspreekt is wat je betaalt. Geen verrassingen achteraf, geen uurtje-factuurtje, geen verborgen meerkosten."
      />

      <section className="section prijzen">
        <div className="wrap">
          <div className="prijs-grid">
            {PRIJZEN.map((p) => (
              <div className={`prijs${p.feat ? ' feat' : ''}`} key={p.naam}>
                {p.feat && <div className="prijs-tag">Meest gekozen</div>}
                <div className="naam">{p.naam}</div>
                <div className="sub">{p.sub}</div>
                <div className="price">{p.prijs}</div>
                <div className="eenh">{p.eenh}</div>
                <div className="divider" />
                <ul>
                  {p.bullets.map((b) => (
                    <li key={b}>
                      <span className="v">✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact"><button type="button">{p.cta} →</button></Link>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: 28, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--mute)', letterSpacing: '.06em' }}>
            Alle prijzen exclusief 21% BTW. Onderhoudscontract is verplicht onderdeel van elk traject.
          </p>
        </div>
      </section>

      {/* Wat zit erin per pakket */}
      <section className="section over">
        <div className="wrap">
          <span className="eyebrow">
            <span className="num">→</span>
            <span className="rule" /> Wat zit erin
          </span>
          <div className="section-head" style={{ marginTop: 24, marginBottom: 48 }}>
            <h2>
              Per pakket uitgelegd.<em>/ zodat je weet wat je kiest.</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gap: 24 }}>
            {[
              {
                naam: 'Starter — €2.250 eenmalig + €85/mnd',
                tekst: 'Het Starter-pakket is bedoeld voor installatiebedrijven die online vindbaar willen zijn en serieuze aanvragen willen ontvangen via hun website. Je krijgt een maatwerk ontwerp op jouw huisstijl, tot 6 pagina\'s, een lokale SEO-basis, Google Bedrijfsprofiel en een contactformulier. Het maandelijkse bedrag dekt hosting, SSL en kleine wijzigingen.',
                voor: 'Geschikt voor: starters online, bedrijven met een verouderde site, en bedrijven die puur via mond-tot-mond werken maar dat willen veranderen.',
              },
              {
                naam: 'Pro — €3.750 eenmalig + €145/mnd',
                tekst: 'Het Pro-pakket voegt Google Ads-beheer toe aan alles uit Starter. Tot 12 pagina\'s, lokale landingspagina\'s per stad in je werkgebied, Google Ads opzet en maandelijks beheer (excl. advertentiebudget), conversie-tracking en maandelijkse rapportage. 2 uur wijzigingen per maand inbegrepen.',
                voor: 'Geschikt voor: bedrijven die actief aanvragen willen genereren via Google, lokale marktleider willen worden, en een consistente aanwas van leads nodig hebben.',
              },
              {
                naam: 'Maatwerk software — v.a. €4.000 per fase',
                tekst: 'Voor installatiebedrijven die meer dan een website nodig hebben. Urenregistratie, planningssystemen, werkbon-apps, klantportalen, koppelingen met Snelstart, Exact of Moneybird. Vaste prijs per afgebakende fase, na intake en procesanalyse. Doorlooptijd 4 tot 8 weken per fase.',
                voor: 'Geschikt voor: bedrijven met administratieve pijnpunten, meerdere monteurs, handmatige processen die schaalbaar moeten worden.',
              },
            ].map((item) => (
              <div key={item.naam} style={{ background: '#fff', borderRadius: 16, padding: '32px 36px', border: '1px solid var(--rule)' }}>
                <h3 style={{ fontFamily: 'var(--cond)', fontWeight: 800, fontSize: 26, textTransform: 'uppercase', margin: '0 0 16px', color: 'var(--ink)' }}>
                  {item.naam}
                </h3>
                <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--ink-soft)', margin: '0 0 16px' }}>{item.tekst}</p>
                <p style={{ fontSize: 14, fontFamily: 'var(--mono)', color: 'var(--p1)', letterSpacing: '.04em', margin: 0 }}>{item.voor}</p>
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
            <span className="rule" /> Veelgestelde vragen over prijzen
          </span>
          <div style={{ marginTop: 40, display: 'grid', gap: 14, maxWidth: 920 }}>
            {FAQ_PRIJZEN.map((f) => (
              <details
                key={f.q}
                style={{ background: '#fff', borderRadius: 14, border: '1px solid var(--rule)', overflow: 'hidden' }}
              >
                <summary style={{ padding: '24px 28px', cursor: 'pointer', fontFamily: 'var(--cond)', fontWeight: 700, fontSize: 22, textTransform: 'uppercase', letterSpacing: '.005em', display: 'flex', justifyContent: 'space-between', alignItems: 'center', listStyle: 'none' }}>
                  {f.q}
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 14, color: 'var(--p1)', flexShrink: 0, marginLeft: 16 }}>+</span>
                </summary>
                <div style={{ padding: '0 28px 24px', fontSize: 16, lineHeight: 1.6, color: 'var(--ink-soft)' }}>
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Cta
        eyebrow="Wil je een offerte?"
        title="Plan een gesprek."
        subtitle="30 minuten · vrijblijvend"
        body="Vertel wat je nodig hebt. Ik stuur binnen 3 werkdagen een vast bod met scope, planning en prijs op papier."
      />

      <SiteFooter />
    </>
  );
}

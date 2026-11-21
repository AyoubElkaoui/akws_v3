import Link from 'next/link';
import type { Metadata } from 'next';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { Cta } from '@/components/Cta';
import { PageHead } from '@/components/PageHead';
import { TariefTabel } from '@/components/TariefTabel';
import { PRIJZEN } from '@/lib/data';
import { buildMetadata, breadcrumbSchema, faqSchema } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Prijzen website laten maken en maatwerk software | Vanaf €69 p/m | AKWS',
  description:
    'Wat kost een website of maatwerk software? Starter vanaf €69 per maand, website vanaf €1.495, website met Google Ads vanaf €2.495, software vanaf €3.500 per fase. Vaste prijs vooraf, excl. btw.',
  path: '/prijzen',
});

const FAQ_PRIJZEN = [
  { q: 'Wat is het verschil tussen Starter en een losse website?', a: 'Bij Starter betaal je €495 opstart en daarna €69 per maand, minimaal 12 maanden. Hosting, onderhoud en kleine wijzigingen zitten erin. Bij een losse website betaal je vooraf vanaf €1.495 en daarna €49 per maand. Na een jaar kom je ongeveer op hetzelfde uit; Starter is vooral handig als je niet in één keer een groter bedrag wilt uitgeven.' },
  { q: 'Wat kost een website laten maken?', a: 'Een compacte website tot zo\'n zes pagina\'s begint bij €1.495. Met meer dienst- en plaatspagina\'s, een CMS om zelf teksten aan te passen of een offerteformulier met extra stappen kom je meestal uit tussen €2.000 en €3.500. Dat is in lijn met wat andere freelancers vragen; grotere bureaus zitten vaak een stuk hoger. Na het eerste gesprek krijg je een vaste prijs.' },
  { q: 'Waarom staat er "vanaf"?', a: 'Omdat een eenmanszaak iets anders nodig heeft dan een bedrijf met vijf monteurs. De vanaf-prijs is wat de kleinste versie echt kost, geen lokkertje. Wat jij nodig hebt, staat binnen 3 werkdagen na de kennismaking op papier.' },
  { q: 'Is het een vaste prijs of een schatting?', a: 'Een vaste prijs. Wat in het voorstel staat is wat je betaalt. Blijkt iets meer werk dan verwacht, dan is dat mijn probleem en niet het jouwe. Wil je tussendoor iets extra\'s, dan hoor je vooraf wat dat kost.' },
  { q: 'Wat zit er in de €49 per maand?', a: 'Hosting, SSL, updates, beveiligings- en uptime-monitoring en kleine tekstwijzigingen (tot een half uur per maand). Grotere aanpassingen reken ik tegen €85 per uur of een vaste prijs vooraf.' },
  { q: 'Is onderhoud verplicht?', a: 'Hosting en onderhoud horen bij elk traject. De eerste looptijd is 12 maanden, daarna is het maandelijks opzegbaar. Geen vendor lock-in: je houdt je site, code en content als je weggaat.' },
  { q: 'Zit het advertentiebudget van Google Ads erbij?', a: 'Nee. Het beheer kost €195 per maand; het budget dat je aan Google betaalt staat los en bepaal je zelf. Voor lokaal werk begin je realistisch met €300 tot €600 per maand. Wat past bij jouw werkgebied bespreken we vooraf.' },
  { q: 'Wat kost maatwerk software?', a: 'Een klikbaar prototype begint bij €750. Een eerste werkende versie van een web-app met login en database, zoals een urenregistratie of voorraadsysteem, ligt meestal tussen €3.500 en €8.000. Grotere platforms bouw ik in fases met elk een vaste prijs. Hosting en onderhoud van software vanaf €49 per maand.' },
]

export default function PrijzenPage() {
  return (
    <>
      <SiteNav active="/prijzen" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Pakketten', href: '/prijzen' },
        ])) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQ_PRIJZEN)) }}
      />

      <PageHead
        crumbs={[{ href: '/', label: 'Home' }, { label: 'Pakketten' }]}
        chip="Vaste prijs · excl. btw"
        title="Wat het kost."
        subtitle="Normale prijzen, gewoon op de site. Dit zijn de bedragen waar je mee start; na een gratis kennismaking krijg je een vaste prijs voor wat jij nodig hebt. Wat we afspreken is wat je betaalt."
      />

      <section className="section prijzen">
        <div className="wrap">
          <div className="prijs-grid">
            {PRIJZEN.map((p) => (
              <div className={`prijs${p.feat ? ' feat' : ''}`} key={p.naam}>
                {p.feat && <div className="prijs-tag">Aanrader</div>}
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
            Alle prijzen exclusief 21% btw. Hosting en onderhoud zijn een vast onderdeel van elk traject.
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
              Per pakket uitgelegd.<em>zodat je weet wat je kiest.</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gap: 24 }}>
            {[
              {
                naam: 'Starter',
                tekst: 'Voor zzp\'ers en kleine installatiebedrijven die online goed zichtbaar willen zijn zonder eerst een groot bedrag te betalen. Een compacte site van 3 tot 5 pagina\'s in je huisstijl, met belknop, WhatsApp, contactformulier, een basis voor lokale SEO en een ingericht Google Bedrijfsprofiel. €495 opstart en daarna €69 per maand, inclusief hosting, onderhoud en kleine wijzigingen. Minimaal 12 maanden, daarna maandelijks opzegbaar. Wil je later groeien, dan bouwen we gewoon verder.',
                voor: 'Geschikt voor: zzp\'ers en kleine bedrijven die nu nog geen of een verouderde site hebben.',
              },
              {
                naam: 'Website',
                tekst: 'Voor vakmensen die online vindbaar willen zijn en serieuze aanvragen willen ontvangen. Je krijgt een maatwerk ontwerp in jouw huisstijl, een lokale SEO-basis, een ingericht Google Bedrijfsprofiel en een contactformulier dat werkt. Vanaf €1.495 voor een compacte site; met meer pagina\'s of een CMS meestal €2.000 tot €3.500. Hosting en onderhoud €49 per maand.',
                voor: 'Geschikt voor: starters online, bedrijven met een verouderde site, en bedrijven die puur via mond-tot-mond werken maar dat willen veranderen.',
              },
              {
                naam: 'Website + Google Ads',
                tekst: 'Alles uit Website, plus actieve aanvragen via Google. Lokale landingspagina\'s per plaats in je werkgebied, Google Ads opzet, conversiemeting en een maandelijkse rapportage waarin je ziet wat het oplevert. Vanaf €2.495 eenmalig, daarna €195 per maand voor beheer, hosting en onderhoud. Het advertentiebudget betaal je rechtstreeks aan Google.',
                voor: 'Geschikt voor: bedrijven die actief aanvragen willen genereren via Google, lokale marktleider willen worden, en een consistente aanwas van leads nodig hebben.',
              },
              {
                naam: 'Maatwerk software',
                tekst: 'Voor bedrijven die meer dan een website nodig hebben: urenregistratie, voorraad, werkbonnen, dashboards, klantportalen en koppelingen met je boekhouding of ERP. Prototype vanaf €750, eerste werkende fase vanaf €3.500 (meestal €3.500 tot €8.000). Vaste prijs per fase van 4 tot 8 weken; uitbreidingen daarna €85 per uur of per blok.',
                voor: 'Geschikt voor: bedrijven met administratieve pijnpunten, meerdere monteurs, handmatige processen die schaalbaar moeten worden.',
              },
            ].map((item) => (
              <div key={item.naam} style={{ background: '#fff', borderRadius: 16, padding: '32px 36px', border: '1px solid var(--rule)' }}>
                <h3 style={{ fontFamily: 'var(--cond)', fontWeight: 800, fontSize: 22, margin: '0 0 16px', color: 'var(--ink)' }}>
                  {item.naam}
                </h3>
                <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--ink-soft)', margin: '0 0 16px' }}>{item.tekst}</p>
                <p style={{ fontSize: 14, fontFamily: 'var(--mono)', color: 'var(--p1)', letterSpacing: '.04em', margin: 0 }}>{item.voor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Losse prijzen */}
      <section className="section diensten">
        <div className="wrap">
          <span className="eyebrow">
            <span className="num">→</span>
            <span className="rule" /> Losse prijzen
          </span>
          <div className="section-head" style={{ marginTop: 24, marginBottom: 32 }}>
            <h2>Alles op een rij.<em>exclusief 21% btw.</em></h2>
          </div>
          <TariefTabel />
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
                <summary style={{ padding: '24px 28px', cursor: 'pointer', fontFamily: 'var(--cond)', fontWeight: 700, fontSize: 19, letterSpacing: '.005em', display: 'flex', justifyContent: 'space-between', alignItems: 'center', listStyle: 'none' }}>
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
        body="Vertel wat je nodig hebt. Je krijgt binnen 3 werkdagen een vaste prijs met scope en planning op papier."
      />

      <SiteFooter />
    </>
  );
}

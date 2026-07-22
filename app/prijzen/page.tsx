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
    'Elke klus op maat. Geen standaardpakketten die niet passen, geen uurtje-factuurtje. Gratis kennismaking, daarna een vast bod op papier.',
  path: '/prijzen',
});

const FAQ_PRIJZEN = [
  { q: 'Waarom staan er geen prijzen op de site?', a: 'Omdat een installatiebedrijf met vijf monteurs iets anders nodig heeft dan een eenmanszaak. Een standaardprijs klopt bijna nooit — hij is te hoog voor de één en te laag voor de ander. Ik maak liever een eerlijk bod dat past bij wat jij écht nodig hebt.' },
  { q: 'Hoe kom ik dan aan een prijs?', a: 'Simpel: we plannen een gratis kennismaking van 30 minuten. Je vertelt wat je nodig hebt, ik stel vragen, en binnen 3 werkdagen krijg je een vast bod op papier met scope, planning en prijs. Geen verplichtingen.' },
  { q: 'Is het een vaste prijs of een schatting?', a: 'Een vaste prijs. Wat in het voorstel staat is wat je betaalt. Als iets meer werk blijkt dan verwacht, is dat mijn probleem, niet het jouwe. Geen uurtje-factuurtje, geen nacalculatie.' },
  { q: 'Wat zit er in het maandelijkse bedrag?', a: 'Hosting, SSL, updates, beveiligings- en uptime-monitoring en kleine wijzigingen. Bij een traject met Google Ads komt daar het maandelijkse campagnebeheer bij. Precieze invulling bespreken we in de kennismaking.' },
  { q: 'Is onderhoud verplicht?', a: 'Onderhoud is een vast onderdeel van elk traject. Een website zonder onderhoud is een tijdbom: na een halfjaar zitten er security-lekken in, na een jaar kost traagheid je rankings. Maandelijks opzegbaar, geen vendor lock-in — je houdt je site, code en content.' },
  { q: 'Zit het advertentiebudget van Google Ads erbij?', a: 'Nee. Het beheer en de setup regel ik; het advertentiebudget dat je aan Google betaalt staat los en stel je zelf in. Realistisch begin je met een paar honderd euro per maand — wat past bij jouw werkgebied bespreken we vooraf.' },
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
        chip="Op maat · geen uurtje-factuurtje"
        title="Wat het kost."
        subtitle="Elk installatiebedrijf is anders, dus geef ik geen standaardprijs die tóch niet past. Je krijgt een vast bod op maat na een gratis kennismaking — wat we afspreken is wat je betaalt."
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
            Prijzen op maat, exclusief 21% BTW. Onderhoud is een vast onderdeel van elk traject.
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
                naam: 'Website',
                tekst: 'Voor installatiebedrijven die online vindbaar willen zijn en serieuze aanvragen willen ontvangen via hun website. Je krijgt een maatwerk ontwerp op jouw huisstijl, een lokale SEO-basis, Google Bedrijfsprofiel en een contactformulier dat werkt. Hosting, SSL en kleine wijzigingen zitten in het vaste maandbedrag.',
                voor: 'Geschikt voor: starters online, bedrijven met een verouderde site, en bedrijven die puur via mond-tot-mond werken maar dat willen veranderen.',
              },
              {
                naam: 'Website + Google Ads',
                tekst: 'Alles uit Website, plus actieve leadgeneratie via Google. Lokale landingspagina\'s per stad in je werkgebied, Google Ads opzet en maandelijks beheer (excl. advertentiebudget), conversie-tracking en maandelijkse rapportage waarin je precies ziet hoeveel aanvragen het oplevert.',
                voor: 'Geschikt voor: bedrijven die actief aanvragen willen genereren via Google, lokale marktleider willen worden, en een consistente aanwas van leads nodig hebben.',
              },
              {
                naam: 'Maatwerk software',
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

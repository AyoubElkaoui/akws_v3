import Link from 'next/link';
import type { Metadata } from 'next';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { Cta } from '@/components/Cta';
import { PageHead } from '@/components/PageHead';
import { RegioLinks } from '@/components/RegioLinks';
import { SoftwareLinks } from '@/components/SoftwarePagina';
import { MAATWERK_SOFTWARE } from '@/lib/dienst-steden';
import { CASES, CASE_DETAILS } from '@/lib/data';
import { buildMetadata, breadcrumbSchema, serviceSchema, faqSchema } from '@/lib/seo';

const FAQ_SOFTWARE = [
  { q: 'Wanneer is maatwerk software slimmer dan een bestaand pakket?', a: 'Als je huidige tools niet aansluiten op hoe jij werkt en je daardoor veel handmatig werk of dubbele invoer hebt. Voor standaardprocessen is een bestaand pakket vaak prima; maatwerk loont zodra je maand na maand tijd verliest aan iets wat geautomatiseerd zou kunnen. In de intake bekijk ik eerlijk welke kant voor jou beter is.' },
  { q: 'Kan de software koppelen met mijn administratie?', a: 'Ja. Ik koppel met pakketten als Snelstart, Exact en Moneybird, mits die een koppeling toelaten. Zo hoef je gegevens niet dubbel in te voeren en komt bijvoorbeeld een werkbon of urenregistratie direct in je administratie terecht.' },
  { q: 'Hoe lang duurt een softwareproject?', a: 'Ik werk in afgebakende fases van doorgaans 4 tot 8 weken, elk met een vaste prijs. Zo lever ik snel iets werkends op en breiden we uit op basis van gebruik, in plaats van maandenlang aan één groot systeem te bouwen zonder tussenresultaat.' },
  { q: 'Wat kost software laten maken?', a: 'Een klikbaar prototype begint bij €750, een kleine tool of koppeling kost €500 tot €1.500 en een eerste werkende fase van een web-app met login en database ligt meestal tussen €3.500 en €8.000. Grotere platforms bouw ik in fases met elk een vaste prijs. Hosting en onderhoud vanaf €49 per maand, uitbreidingen €85 per uur of per blok.' },
  { q: 'Werkt de software ook op de bouwplaats, zonder goed bereik?', a: 'Ja. Ik bouw mobiel-first en waar nodig als Progressive Web App die offline werkt en synct zodra er weer verbinding is. Zo kan een monteur uren of een werkbon ter plekke registreren, ook in een kruipruimte zonder bereik.' },
  { q: 'Wat als maatwerk toch niet de juiste oplossing blijkt?', a: 'Dan zeg ik dat. Soms is een bestaand pakket of een slimme koppeling goedkoper en beter dan iets nieuws bouwen. Ik verdien liever je vertrouwen met eerlijk advies dan een project dat je niet nodig had.' },
];

export const metadata: Metadata = buildMetadata({
  title: 'Software laten maken | Maatwerk vanaf €3.500 per fase | AKWS',
  description:
    'Software laten maken door een freelance developer: urenregistratie, voorraad, dashboards en koppelingen met je ERP of boekhouding. Prototype vanaf €750, eerste fase vanaf €3.500. Bekijk 6 echte projecten.',
  path: '/diensten/maatwerk-software',
});

const PRIJSKLASSEN = {
  prototype: { titel: 'Klikbaar prototype', prijs: 'vanaf €750', d: '1 tot 2 weken', tekst: 'Alle schermen om te proberen, met voorbeelddata. Je weet wat je krijgt voordat er gebouwd wordt.' },
  tool: { titel: 'Kleine tool of koppeling', prijs: '€500 – €1.500', d: '1 tot 2 weken', tekst: 'Een export omzetten naar je ERP, een los hulpprogramma of een koppeling tussen twee pakketten.' },
  module: { titel: 'Eerste fase web-app', prijs: '€3.500 – €8.000', d: '4 tot 8 weken', tekst: 'Eén afgebakende module met login en database: urenregistratie, voorraad, dashboard of werkbonnen.' },
  platform: { titel: 'Platform in fases', prijs: 'vanaf €8.000', d: '2 tot 4 maanden', tekst: 'Meerdere gekoppelde modules, zoals tickets, voorraad en facturatie. Elke fase een eigen vaste prijs.' },
};

/** Welke prijsklasse past bij een vergelijkbaar project (indicatie, geen factuurbedrag van de klant). */
const KLASSE_PER_CASE: Record<string, keyof typeof PRIJSKLASSEN> = {
  urenportaal: 'prototype',
  'financieel-dashboard': 'module',
  'voorraad-app': 'module',
  'facturatie-app': 'platform',
  clockd: 'platform',
  itflow: 'platform',
};

const WERKWIJZE_MAATWERK = [
  { n: '01', t: 'Intake', d: 'gratis', s: 'Wat moet de software doen, wat is het probleem nu? 30 minuten, geen verkooppraat.' },
  { n: '02', t: 'Procesanalyse', d: 'verrekend in project', s: 'Ik bel uitgebreid of kom langs, schrijf op hoe je nu werkt, en breng in kaart wat de software moet doen.' },
  { n: '03', t: 'Voorstel', d: 'binnen 5 werkdagen', s: 'Vaste prijs per fase, scope op papier. Geen uurtje-factuurtje, geen nacalculatie.' },
  { n: '04', t: 'Bouw', d: 'sprints van 2 weken', s: 'Demo\'s tussendoor. Je ziet elke sprint wat er gebouwd is.' },
  { n: '05', t: 'Oplevering', d: 'training + documentatie', s: 'Productie-klaar systeem, training voor je team, documentatie voor beheer.' },
  { n: '06', t: 'Doorontwikkeling', d: 'maandblokken of aanvraag', s: 'Uitbreidingen en aanpassingen op basis van gebruik. Vaste prijs per blok.' },
];

export default function MaatwerkSoftwarePage() {
  const softwareCases = CASES.filter(c => c.meta === 'Maatwerk software');
  const softwareDetails = CASE_DETAILS.filter(c => c.meta === 'Maatwerk software');

  return (
    <>
      <SiteNav active="/diensten" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Diensten', href: '/diensten' },
          { name: 'Maatwerk software', href: '/diensten/maatwerk-software' },
        ])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema('Software laten maken')) }}
      />

      <PageHead
        crumbs={[{ href: '/', label: 'Home' }, { href: '/diensten', label: 'Diensten' }, { label: 'Maatwerk software' }]}
        chip="Urenregistratie · Koppelingen · Vaste prijs"
        title="Software laten maken."
        subtitle="Maatwerk dat past bij hoe jouw bedrijf werkt. Geen generieke SaaS met overbodige features."
      />

      <section className="section over">
        <div className="wrap">
          <p style={{ fontSize: 19, lineHeight: 1.65, color: 'var(--ink-soft)', maxWidth: 800, marginBottom: 56 }}>
            Soms is een website niet genoeg. Je hebt urenregistratie nodig die werkt op de bouwplaats.
            Je wil een klantportaal voor onderhoudsklanten. Je Excel-bestanden voor planning lopen vast.
            Je administratiepakket en facturatiesysteem praten niet met elkaar. Op dat moment is het
            tijd voor maatwerk software.
          </p>

          {/* Wat ik bouw */}
          <span className="eyebrow" style={{ marginBottom: 24, display: 'inline-flex' }}>
            <span className="rule" /> Wat ik bouw
          </span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginBottom: 64, marginTop: 16 }}>
            {[
              { titel: 'Urenregistratie & planning', tekst: 'Voor monteurs in het veld, met offline-modus. Goedkeuringsflow, doorboeking naar administratie.' },
              { titel: 'Werkbon-systemen', tekst: 'Handtekening, foto\'s en materiaalregistratie op locatie. Directe doorvoer naar Snelstart, Exact of Moneybird.' },
              { titel: 'Klantportalen', tekst: 'Waar klanten hun orders, facturen, documenten en service-aanvragen zien.' },
              { titel: 'Ticketsystemen', tekst: 'Voor service-aanvragen, onderhoud en storingen. Inclusief SLA-tracking.' },
              { titel: 'Koppelingen', tekst: 'Snelstart, Exact, Moneybird, Mollie, externe ERP\'s via API.' },
              { titel: 'Dashboards', tekst: 'Jouw bedrijfsvoering inzichtelijk. Uren, projecten, omzet, openstaande items.' },
            ].map((item) => (
              <div key={item.titel} style={{ background: '#fff', borderRadius: 14, padding: '24px 24px', border: '1px solid var(--rule)' }}>
                <h3 style={{ fontFamily: 'var(--cond)', fontWeight: 700, fontSize: 17, margin: '0 0 10px' }}>{item.titel}</h3>
                <p style={{ fontSize: 14, color: 'var(--mute)', margin: 0, lineHeight: 1.55 }}>{item.tekst}</p>
              </div>
            ))}
          </div>

          {/* Geen SaaS, wel maatwerk */}
          <div style={{ padding: '36px 40px', background: 'linear-gradient(135deg, color-mix(in oklab, var(--p1) 6%, #fff), #fff)', border: '1px solid color-mix(in oklab, var(--p1) 20%, transparent)', borderRadius: 16, maxWidth: 720, marginBottom: 64 }}>
            <h3 style={{ fontFamily: 'var(--cond)', fontWeight: 800, fontSize: 24, margin: '0 0 16px' }}>Geen SaaS, wel maatwerk</h3>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--ink-soft)', margin: 0 }}>
              Het verschil met generieke software (Zoho, AFAS, Simplicate) is dat ik bouw wat jouw bedrijf
              nodig heeft, niet wat 10.000 andere bedrijven nodig hebben. Geen overbodige features, geen
              abonnementsvallen. Software die precies past op jouw werkwijze, koppelt met jouw bestaande
              tools, en met je meegroeit.
            </p>
          </div>

          {/* Tech stack */}
          <span className="eyebrow" style={{ marginBottom: 16, display: 'inline-flex' }}>
            <span className="rule" /> Tech stack
          </span>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 64, marginTop: 16 }}>
            {['Next.js', 'TypeScript', 'React', 'PostgreSQL', 'Supabase', 'Prisma', 'NextAuth', 'Tailwind CSS', 'Vercel', 'React Native (indien nodig)'].map(t => (
              <span className="chip" key={t}>{t}</span>
            ))}
          </div>

          {/* Werkwijze */}
          <span className="eyebrow" style={{ marginBottom: 24, display: 'inline-flex' }}>
            <span className="rule" /> Werkwijze voor maatwerk
          </span>
          <div className="proces-list" style={{ marginTop: 16 }}>
            {WERKWIJZE_MAATWERK.map((s) => (
              <div className="proces-row" key={s.n}>
                <div className="proces-num">{s.n}</div>
                <div className="proces-t">{s.t}</div>
                <div className="proces-s">{s.s}</div>
                <div className="proces-dur">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      {softwareCases.length > 0 && (
        <section className="section cases">
          <div className="wrap">
            <span className="eyebrow">
              <span className="num">→</span>
              <span className="rule" /> Voorbeelden
            </span>
            <div className="section-head" style={{ marginTop: 24, marginBottom: 40 }}>
              <h2>Eerder gebouwd.<em>met echte technische uitdagingen.</em></h2>
            </div>
            <div className="case-grid">
              {softwareCases.map((c) => (
                <Link href={`/cases/${c.slug}`} className="case" key={c.slug}>
                  <div className="case-img" style={{ backgroundImage: `repeating-linear-gradient(135deg, rgba(0,0,0,.08) 0, rgba(0,0,0,.08) 1px, transparent 1px, transparent 14px), ${c.gradient}` }}>
                    <span className="case-tag chip chip-dark">{c.meta}</span>
                    <div className="case-result">
                      <div className="lbl">Resultaat</div>
                      <div className="v">{c.resultaat}<br /><span style={{ fontSize: '.5em' }}>{c.resultaatSub}</span></div>
                    </div>
                  </div>
                  <div className="case-foot">
                    <div>
                      <div className="naam">{c.naam}</div>
                      <div className="branche">{c.branche}</div>
                    </div>
                    <span className="link">Lees case →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Per project uitgelegd */}
      <section className="section over">
        <div className="wrap">
          <span className="eyebrow">
            <span className="num">→</span>
            <span className="rule" /> Per project uitgelegd
          </span>
          <div className="section-head" style={{ marginTop: 24, marginBottom: 40 }}>
            <h2>Wat ik bouwde.<em>probleem, oplossing en wat het opleverde.</em></h2>
            <p className="lead">
              Geen vage beloftes: per project lees je wat er misging, wat de software doet en wat het
              nu oplevert. De prijsklasse is wat een vergelijkbaar project bij mij kost.
            </p>
          </div>
          <div style={{ display: 'grid', gap: 20 }}>
            {softwareDetails.map((c) => {
              const klasse = PRIJSKLASSEN[KLASSE_PER_CASE[c.slug] ?? 'module'];
              return (
                <article key={c.slug} style={{ background: '#fff', borderRadius: 16, border: '1px solid var(--rule)', padding: '28px 32px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap', alignItems: 'baseline' }}>
                    <div>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--p1)', fontWeight: 600 }}>
                        {c.sector} · {c.locatie}
                      </div>
                      <h3 style={{ fontFamily: 'var(--cond)', fontWeight: 800, fontSize: 26, margin: '6px 0 0', color: 'var(--ink)' }}>{c.naam}</h3>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--mute)' }}>Vergelijkbaar project</div>
                      <div style={{ fontFamily: 'var(--cond)', fontWeight: 800, fontSize: 18, color: 'var(--ink)' }}>{klasse.prijs}</div>
                    </div>
                  </div>
                  <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--ink-soft)', margin: '14px 0 20px' }}>{c.intro}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
                    <div>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--mute)', marginBottom: 8 }}>Het probleem</div>
                      <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-soft)', margin: 0 }}>{c.situatie[0]}</p>
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--mute)', marginBottom: 8 }}>Wat het doet</div>
                      <ul style={{ margin: 0, paddingLeft: 18, fontSize: 15, lineHeight: 1.6, color: 'var(--ink-soft)' }}>
                        {c.aanpak.map((a) => <li key={a.titel}><strong style={{ color: 'var(--ink)' }}>{a.titel}.</strong> {a.tekst}</li>)}
                      </ul>
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--mute)', marginBottom: 8 }}>Resultaat</div>
                      <ul style={{ margin: 0, paddingLeft: 18, fontSize: 15, lineHeight: 1.6, color: 'var(--ink-soft)' }}>
                        {c.resultaat.map((r) => <li key={r}>{r}</li>)}
                      </ul>
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginTop: 22, paddingTop: 18, borderTop: '1px solid var(--rule)' }}>
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                      {(c.techStack ?? []).slice(0, 5).map((t) => <span className="chip" key={t}>{t}</span>)}
                    </div>
                    <Link href={`/cases/${c.slug}`} style={{ fontWeight: 600, color: 'var(--p1)' }}>Bekijk schermen en details →</Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Prijzen */}
      <section className="section prijzen">
        <div className="wrap">
          <span className="eyebrow">
            <span className="num">→</span>
            <span className="rule" /> Prijzen
          </span>
          <div className="section-head" style={{ marginTop: 24, marginBottom: 32 }}>
            <h2>Wat het kost.<em>normale prijzen, vooraf vast.</em></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
            {[
              ...Object.values(PRIJSKLASSEN),
            ].map((item) => (
              <div key={item.titel} style={{ background: '#fff', borderRadius: 16, padding: '28px 28px', border: '1px solid var(--rule)' }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--p1)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 8 }}>{item.titel}</div>
                <div style={{ fontFamily: 'var(--cond)', fontWeight: 800, fontSize: 24, marginBottom: 4 }}>{item.prijs}</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--mute)', letterSpacing: '.06em', marginBottom: 16 }}>{item.d}</div>
                <p style={{ fontSize: 14, color: 'var(--mute)', margin: 0, lineHeight: 1.55 }}>{item.tekst}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 20, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--mute)', letterSpacing: '.06em' }}>
            Alle prijzen exclusief 21% btw. Vaste prijs per fase; hosting en onderhoud vanaf €49 per maand, uitbreidingen €85 per uur.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section over" style={{ paddingTop: 60, paddingBottom: 80 }}>
        <div className="wrap">
          <span className="eyebrow">
            <span className="num">→</span>
            <span className="rule" /> Veelgestelde vragen over maatwerk software
          </span>
          <div style={{ marginTop: 40, display: 'grid', gap: 14, maxWidth: 920 }}>
            {FAQ_SOFTWARE.map((f) => (
              <details key={f.q} style={{ background: '#fff', borderRadius: 14, border: '1px solid var(--rule)', overflow: 'hidden' }}>
                <summary style={{ padding: '24px 28px', cursor: 'pointer', fontFamily: 'var(--cond)', fontWeight: 700, fontSize: 19, letterSpacing: '.005em', display: 'flex', justifyContent: 'space-between', alignItems: 'center', listStyle: 'none' }}>
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQ_SOFTWARE)) }}
        />
      </section>

      <section className="section over" style={{ paddingTop: 20, paddingBottom: 40 }}>
        <div className="wrap">
          <span className="eyebrow">
            <span className="num">→</span>
            <span className="rule" /> Per soort en per vak
          </span>
          <SoftwareLinks />
        </div>
      </section>

      <RegioLinks dienst={MAATWERK_SOFTWARE} />

      <Cta
        eyebrow="Een software-uitdaging?"
        title="Bespreek je vraagstuk."
        subtitle="30 minuten · vrijblijvend"
        body="Vertel wat er nu vastloopt. Ik geef een eerlijke inschatting van wat mogelijk is, ook als maatwerk niet de juiste oplossing blijkt."
      />

      <SiteFooter />
    </>
  );
}

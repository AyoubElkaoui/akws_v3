import Link from 'next/link';
import type { Metadata } from 'next';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { Cta } from '@/components/Cta';
import { PageHead } from '@/components/PageHead';
import { CASES } from '@/lib/data';
import { buildMetadata, breadcrumbSchema, serviceSchema } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Maatwerk software voor installatiebedrijven | AKWS',
  description:
    'Urenregistratie, ticketsystemen, koppelingen met Snelstart en Exact. Software die past bij jouw processen, geen generieke SaaS. Vaste prijs per fase.',
  path: '/diensten/maatwerk-software',
});

const WERKWIJZE_MAATWERK = [
  { n: '01', t: 'Intake', d: 'gratis', s: 'Wat moet de software doen, wat is het probleem nu? 30 minuten, geen verkooppraat.' },
  { n: '02', t: 'Procesanalyse', d: '€500 vast, verrekend in project', s: 'Ik bel uitgebreid of kom langs, schrijf op hoe je nu werkt, en breng in kaart wat de software moet doen.' },
  { n: '03', t: 'Voorstel', d: 'binnen 5 werkdagen', s: 'Vaste prijs per fase, scope op papier. Geen uurtje-factuurtje, geen nacalculatie.' },
  { n: '04', t: 'Bouw', d: 'sprints van 2 weken', s: 'Demo\'s tussendoor. Je ziet elke sprint wat er gebouwd is.' },
  { n: '05', t: 'Oplevering', d: 'training + documentatie', s: 'Productie-klaar systeem, training voor je team, documentatie voor beheer.' },
  { n: '06', t: 'Doorontwikkeling', d: 'maandblokken of aanvraag', s: 'Uitbreidingen en aanpassingen op basis van gebruik. Vaste prijs per blok.' },
];

export default function MaatwerkSoftwarePage() {
  const softwareCases = CASES.filter(c => c.meta === 'Maatwerk software');

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema('Maatwerk software voor installatiebedrijven')) }}
      />

      <PageHead
        crumbs={[{ href: '/', label: 'Home' }, { href: '/diensten', label: 'Diensten' }, { label: 'Maatwerk software' }]}
        chip="Urenregistratie · Koppelingen · Vaste prijs"
        title="Maatwerk software."
        subtitle="Software die past bij hoe jouw bedrijf werkt. Geen generieke SaaS met overbodige features."
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
              { titel: 'Klantportalen', tekst: 'Waar klanten hun installatiehistorie, facturen en service-aanvragen zien.' },
              { titel: 'Ticketsystemen', tekst: 'Voor service-aanvragen, onderhoud en storingen. Inclusief SLA-tracking.' },
              { titel: 'Koppelingen', tekst: 'Snelstart, Exact, Moneybird, Mollie, externe ERP\'s via API.' },
              { titel: 'Dashboards', tekst: 'Jouw bedrijfsvoering inzichtelijk. Uren, projecten, omzet, openstaande items.' },
            ].map((item) => (
              <div key={item.titel} style={{ background: '#fff', borderRadius: 14, padding: '24px 24px', border: '1px solid var(--rule)' }}>
                <h3 style={{ fontFamily: 'var(--cond)', fontWeight: 700, fontSize: 20, textTransform: 'uppercase', margin: '0 0 10px' }}>{item.titel}</h3>
                <p style={{ fontSize: 14, color: 'var(--mute)', margin: 0, lineHeight: 1.55 }}>{item.tekst}</p>
              </div>
            ))}
          </div>

          {/* Geen SaaS, wel maatwerk */}
          <div style={{ padding: '36px 40px', background: 'linear-gradient(135deg, color-mix(in oklab, var(--p1) 6%, #fff), #fff)', border: '1px solid color-mix(in oklab, var(--p1) 20%, transparent)', borderRadius: 16, maxWidth: 720, marginBottom: 64 }}>
            <h3 style={{ fontFamily: 'var(--cond)', fontWeight: 800, fontSize: 28, textTransform: 'uppercase', margin: '0 0 16px' }}>Geen SaaS, wel maatwerk</h3>
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
              <h2>Eerder gebouwd.<em>/ met echte technische uitdagingen.</em></h2>
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

      {/* Prijzen */}
      <section className="section prijzen">
        <div className="wrap">
          <span className="eyebrow">
            <span className="num">→</span>
            <span className="rule" /> Prijzen
          </span>
          <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {[
              { titel: 'Eenvoudige module', prijs: 'v.a. €4.000', d: '4 tot 6 weken', tekst: 'Eén afgebakende module. Urenregistratie, werkbon-systeem, of koppeling.' },
              { titel: 'Middelgroot project', prijs: '€8.000 tot €18.000', d: '2 tot 3 maanden', tekst: 'Meerdere gekoppelde modules. Dashboard, klantportaal, planningssysteem.' },
              { titel: 'Groot project', prijs: 'Op offerte', d: 'na inventarisatie', tekst: 'Volledig maatwerk platform. Intake en procesanalyse vooraf verplicht.' },
            ].map((item) => (
              <div key={item.titel} style={{ background: '#fff', borderRadius: 16, padding: '28px 28px', border: '1px solid var(--rule)' }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--p1)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 8 }}>{item.titel}</div>
                <div style={{ fontFamily: 'var(--cond)', fontWeight: 800, fontSize: 28, textTransform: 'uppercase', marginBottom: 4 }}>{item.prijs}</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--mute)', letterSpacing: '.06em', marginBottom: 16 }}>{item.d}</div>
                <p style={{ fontSize: 14, color: 'var(--mute)', margin: 0, lineHeight: 1.55 }}>{item.tekst}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 20, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--mute)', letterSpacing: '.06em' }}>
            Alle prijzen exclusief 21% BTW. Vaste prijs per fase — geen uurtje-factuurtje.
          </p>
        </div>
      </section>

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

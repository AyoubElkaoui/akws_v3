import Link from 'next/link';
import type { Metadata } from 'next';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { Cta } from '@/components/Cta';
import { PageHead } from '@/components/PageHead';
import { buildMetadata, breadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Werkwijze — Van kennismaking tot oplevering | AKWS',
  description:
    'Vijf stappen van kennismaking tot oplevering. Geen powerpoints. Wekelijkse demo\'s. Wijzigingen welkom binnen scope. Vaste prijs, geen verrassingen.',
  path: '/werkwijze',
});

const STAPPEN = [
  {
    n: '01',
    titel: 'Kennismaking',
    duur: '30 min · gratis · vrijblijvend',
    tekst: 'Een gesprek van 30 minuten waarin ik drie dingen vaststel: wat is je situatie nu, wat zou beter moeten en wat levert dat op, past mijn aanpak bij wat je zoekt? Geen verkooppraat. Als ik niet de juiste partij blijk, zeg ik dat. Eerlijk advies, ook als je elders beter af bent.',
    details: [
      'Wat werkt en wat niet?',
      'Wat is realistisch om te bereiken?',
      'Past mijn aanpak en prijsniveau bij jou?',
    ],
  },
  {
    n: '02',
    titel: 'Voorstel',
    duur: 'binnen 3 werkdagen',
    tekst: "Binnen drie werkdagen na de kennismaking krijg je een schriftelijk voorstel: scope (wat ga ik bouwen, wat valt erbuiten), planning (wanneer is wat klaar), prijs (vast bedrag per fase), en voorwaarden. Geen kleine lettertjes, geen 'op nacalculatie', geen verborgen kosten.",
    details: [
      'Scope: wat zit erin, wat niet',
      'Planning: concrete milestones',
      'Prijs: vast bedrag per fase',
      'Wijzigingsbeleid: helder en eerlijk',
    ],
  },
  {
    n: '03',
    titel: 'Bouw',
    duur: '3 tot 6 weken',
    tekst: 'Na akkoord start de bouw. Wekelijkse demo via videocall (max 30 min). Tussenversies live op een staging-omgeving zodat je precies ziet wat er gebouwd wordt. Feedback ophalen tussendoor, niet aan het eind. Wijzigingen binnen scope zijn welkom en worden direct opgepakt.',
    details: [
      'Wekelijkse demo (max 30 min)',
      'Staging-omgeving voor tussenresultaten',
      'Feedback tussendoor, niet aan het eind',
      'Wijzigingen binnen scope welkom',
    ],
  },
  {
    n: '04',
    titel: 'Live',
    duur: 'opleverweek + nazorg',
    tekst: 'In de opleverweek gaat de site of software live. Google Bedrijfsprofiel ingericht, Google Ads-campagne actief (Pro-pakket), training of demo voor jouw team (maatwerk software). De eerste maand zit ik er extra bovenop: snellere reactietijd, dagelijkse monitoring, kleine optimalisaties zonder extra kosten.',
    details: [
      'Live deployment',
      'Google Bedrijfsprofiel ingericht',
      'Google Ads live (Pro-pakket)',
      'Eerste maand intensieve monitoring',
    ],
  },
  {
    n: '05',
    titel: 'Doorontwikkeling',
    duur: 'doorlopend',
    tekst: 'Na live ga je het onderhoudscontract in. Vast aanspreekpunt voor kleine wijzigingen (binnen maandbudget), snelle reactie binnen 24 uur op werkdagen, maandelijkse performance- en SEO-checks. Grotere uitbreidingen op aanvraag met los voorstel.',
    details: [
      'Wijzigingen binnen maandbudget',
      'Reactie binnen 24 uur op werkdagen',
      'Maandelijkse performance-checks',
      'Uitbreidingen op aanvraag',
    ],
  },
];

export default function WerkwijzePage() {
  return (
    <>
      <SiteNav active="/werkwijze" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Werkwijze', href: '/werkwijze' },
        ])) }}
      />

      <PageHead
        crumbs={[{ href: '/', label: 'Home' }, { label: 'Werkwijze' }]}
        chip="Vijf stappen · vaste prijs · geen verrassingen"
        title="Werkwijze."
        subtitle="Van kennismaking tot oplevering. Geen powerpoints. Wekelijkse demo's. Wijzigingen welkom binnen scope."
      />

      <section className="section over">
        <div className="wrap">
          <span className="eyebrow">
            <span className="num">→</span>
            <span className="rule" /> Hoe het werkt
          </span>
          <div className="section-head" style={{ marginTop: 24 }}>
            <h2>
              Vijf stappen.<em>/ transparant van begin tot eind.</em>
            </h2>
            <p className="lead">
              Mijn werkwijze is opgezet om verrassingen te minimaliseren. Je weet vooraf wat je krijgt,
              wanneer je het krijgt, en wat het kost. Tijdens de bouw zie je elke week vooruitgang in
              plaats van te wachten op een grote oplevering.
            </p>
          </div>

          <div className="proces-list">
            {STAPPEN.map((s) => (
              <div key={s.n} style={{ borderBottom: '1px solid var(--rule)', padding: '48px 0' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: 32, alignItems: 'start' }}>
                  <div style={{ fontFamily: 'var(--cond)', fontWeight: 900, fontSize: 64, lineHeight: 0.9, background: 'linear-gradient(135deg, var(--p2), var(--p1))', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', letterSpacing: '-.04em' }}>
                    {s.n}
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, flexWrap: 'wrap', marginBottom: 16 }}>
                      <h2 style={{ fontFamily: 'var(--cond)', fontWeight: 800, fontSize: 40, textTransform: 'uppercase', margin: 0, letterSpacing: '-.01em' }}>
                        {s.titel}
                      </h2>
                      <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--p1)', letterSpacing: '.08em', textTransform: 'uppercase' }}>
                        {s.duur}
                      </span>
                    </div>
                    <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--ink-soft)', margin: '0 0 24px', maxWidth: 640 }}>
                      {s.tekst}
                    </p>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      {s.details.map((d) => (
                        <span key={d} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 12px', borderRadius: 999, background: 'color-mix(in oklab, var(--p1) 10%, #fff)', color: 'var(--p3)', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.06em' }}>
                          ✓ {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wat dit niet is */}
      <section className="section diensten">
        <div className="wrap">
          <span className="eyebrow">
            <span className="num">→</span>
            <span className="rule" /> Wat dit niet is
          </span>
          <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {[
              { t: 'Geen lange trajecten zonder zichtbare voortgang', s: 'Je ziet elke week wat er gebouwd is. Geen grote oplevering na drie maanden stilte.' },
              { t: 'Geen onbeperkte revisies zonder extra kosten', s: 'Wijzigingen binnen de afgesproken scope zijn altijd welkom. Buiten scope bespreek ik apart, transparant, zonder verrassingen achteraf.' },
              { t: 'Geen verborgen kosten', s: 'Het voorstel is compleet. Geen "toevallige" meerkosten die pas na oplevering opduiken.' },
              { t: 'Geen verdwijnact na livegang', s: 'Na live blijf ik beschikbaar voor onderhoud, vragen en uitbreidingen. Vast aanspreekpunt.' },
            ].map((item) => (
              <div key={item.t} className="dienst" style={{ cursor: 'default' }}>
                <h3 style={{ fontSize: 20, marginBottom: 10 }}>{item.t}</h3>
                <p style={{ margin: 0 }}>{item.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Cta
        eyebrow="Klaar om te beginnen?"
        title="Plan een gesprek."
        subtitle="30 minuten · vrijblijvend"
        body="We doorlopen stap 01 samen: 30 minuten, geen verkooppraat, eerlijk over wat realistisch is."
      />

      <SiteFooter />
    </>
  );
}

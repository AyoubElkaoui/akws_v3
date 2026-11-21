import Link from 'next/link';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { Cta } from '@/components/Cta';
import { PageHead } from '@/components/PageHead';
import { CASES, BRANCHES } from '@/lib/data';
import { SOFTWARE_SOORTEN, SOFTWARE_VAKKEN, soortBySlug } from '@/lib/software';
import { breadcrumbSchema, serviceSchema, faqSchema } from '@/lib/seo';

const kaart = { background: '#fff', borderRadius: 16, padding: '26px 26px', border: '1px solid var(--rule)' } as const;
const label = { fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--mute)' } as const;

type Props = {
  path: string;
  crumbLabel: string;
  chip: string;
  h1: string;
  subtitel: string;
  intro: string;
  description: string;
  problemenTitel: string;
  problemen: string[];
  functiesTitel: string;
  functies: { titel: string; tekst: string; href?: string }[];
  cases: string[];
  caseNoot?: string;
  prijzen: { titel: string; prijs: string; tekst: string }[];
  faq: { q: string; a: string }[];
  ctaBody: string;
};

function Eyebrow({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <span className="eyebrow">
      <span className="num">{n}</span>
      <span className="rule" /> {children}
    </span>
  );
}

export function SoftwarePagina(p: Props) {
  const cases = p.cases.map((s) => CASES.find((c) => c.slug === s)).filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <>
      <SiteNav active="/diensten" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Software laten maken', href: '/diensten/maatwerk-software' },
          { name: p.crumbLabel, href: p.path },
        ])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema('Maatwerk software', { name: p.h1, url: p.path, description: p.description })) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(p.faq)) }} />

      <PageHead
        crumbs={[{ href: '/', label: 'Home' }, { href: '/diensten/maatwerk-software', label: 'Software laten maken' }, { label: p.crumbLabel }]}
        chip={p.chip}
        title={p.h1}
        subtitle={p.subtitel}
      >
        <p className="lead" style={{ maxWidth: 820 }}>{p.intro}</p>
        <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Link href="/contact" className="btn btn-primary">Plan gratis kennismaking <span className="arrow">→</span></Link>
          <Link href="/diensten/maatwerk-software" className="btn btn-ghost">Alles over software laten maken</Link>
        </div>
      </PageHead>

      <section className="section over">
        <div className="wrap">
          <Eyebrow n="01">{p.problemenTitel}</Eyebrow>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14, marginTop: 28 }}>
            {p.problemen.map((x) => (
              <div key={x} style={{ ...kaart, padding: '20px 22px', fontSize: 16, lineHeight: 1.5 }}>
                <span style={{ color: 'var(--p1)', fontWeight: 700, marginRight: 8 }}>×</span>{x}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section diensten">
        <div className="wrap">
          <Eyebrow n="02">{p.functiesTitel}</Eyebrow>
          <div className="dienst-grid" style={{ marginTop: 32 }}>
            {p.functies.map((f, i) => {
              const inner = (
                <>
                  <div className="dienst-head"><div className="dienst-icon">{String(i + 1).padStart(2, '0')}</div></div>
                  <h3>{f.titel}</h3>
                  <p>{f.tekst}</p>
                </>
              );
              return f.href ? (
                <Link href={f.href} className="dienst" key={f.titel}>{inner}</Link>
              ) : (
                <div className="dienst" key={f.titel} style={{ cursor: 'default' }}>{inner}</div>
              );
            })}
          </div>
        </div>
      </section>

      {cases.length > 0 && (
        <section className="section over">
          <div className="wrap">
            <Eyebrow n="03">Echt gebouwd</Eyebrow>
            <div className="section-head" style={{ marginTop: 24, marginBottom: 28 }}>
              <h2>Eerder gemaakt.<em>lees per project wat het oplost.</em></h2>
            </div>
            {p.caseNoot && <p style={{ fontSize: 16, color: 'var(--ink-soft)', maxWidth: 760, marginBottom: 20 }}>{p.caseNoot}</p>}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
              {cases.map((c) => (
                <Link key={c.slug} href={`/cases/${c.slug}`} style={{ ...kaart, textDecoration: 'none', color: 'inherit', display: 'block' }}>
                  <div style={{ ...label, color: 'var(--p1)', fontWeight: 600 }}>{c.branche} · {c.locatie}</div>
                  <h3 style={{ fontFamily: 'var(--cond)', fontWeight: 800, fontSize: 22, margin: '8px 0 6px', color: 'var(--ink)' }}>{c.naam}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--mute)', margin: '6px 0 12px' }}>{c.excerpt}</p>
                  <span style={{ fontWeight: 600, color: 'var(--p1)' }}>Lees case →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section prijzen">
        <div className="wrap">
          <Eyebrow n="04">Prijzen</Eyebrow>
          <div className="section-head" style={{ marginTop: 24, marginBottom: 28 }}>
            <h2>Wat het kost.<em>vaste prijs per fase, exclusief btw.</em></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
            {p.prijzen.map((x) => (
              <div key={x.titel} style={kaart}>
                <div style={{ ...label, color: 'var(--p1)' }}>{x.titel}</div>
                <div style={{ fontFamily: 'var(--cond)', fontWeight: 800, fontSize: 26, margin: '8px 0' }}>{x.prijs}</div>
                <p style={{ fontSize: 14, color: 'var(--mute)', margin: 0, lineHeight: 1.55 }}>{x.tekst}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 20, fontSize: 15, color: 'var(--mute)' }}>
            Alle tarieven op een rij: <Link href="/prijzen" style={{ color: 'var(--p1)' }}>bekijk de prijzen</Link>.
          </p>
        </div>
      </section>

      <section className="section over" style={{ paddingTop: 80, paddingBottom: 100 }}>
        <div className="wrap">
          <Eyebrow n="05">Veelgestelde vragen</Eyebrow>
          <div style={{ display: 'grid', gap: 14, maxWidth: 920, marginTop: 32 }}>
            {p.faq.map((f) => (
              <details key={f.q} style={{ background: '#fff', borderRadius: 14, border: '1px solid var(--rule)', overflow: 'hidden' }}>
                <summary style={{ padding: '22px 26px', cursor: 'pointer', fontFamily: 'var(--cond)', fontWeight: 700, fontSize: 19, listStyle: 'none' }}>{f.q}</summary>
                <div style={{ padding: '0 26px 22px', fontSize: 16, lineHeight: 1.6, color: 'var(--ink-soft)' }}>{f.a}</div>
              </details>
            ))}
          </div>
          <SoftwareLinks huidig={p.path} />
        </div>
      </section>

      <Cta eyebrow="Software laten maken?" title="Plan een gesprek." subtitle="30 minuten, vrijblijvend" body={p.ctaBody} />
      <SiteFooter />
    </>
  );
}

/** Interne links naar alle soort- en vakpagina's. */
export function SoftwareLinks({ huidig }: { huidig?: string }) {
  return (
    <div style={{ marginTop: 56, display: 'grid', gap: 12 }}>
      <div style={label}>Software per soort</div>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        {SOFTWARE_SOORTEN.filter((s) => `/software-laten-maken/${s.slug}` !== huidig).map((s) => (
          <Link key={s.slug} href={`/software-laten-maken/${s.slug}`} className="btn btn-ghost">{s.h1}</Link>
        ))}
      </div>
      <div style={{ ...label, marginTop: 16 }}>Software per vak</div>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        {BRANCHES.filter((b) => SOFTWARE_VAKKEN[b.slug] && `/software-voor/${b.slug}` !== huidig).map((b) => (
          <Link key={b.slug} href={`/software-voor/${b.slug}`} className="btn btn-ghost">Software voor {SOFTWARE_VAKKEN[b.slug].meervoud}</Link>
        ))}
      </div>
    </div>
  );
}

export { soortBySlug };

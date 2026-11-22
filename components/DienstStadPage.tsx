import Link from 'next/link';
import type { Metadata } from 'next';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { Cta } from '@/components/Cta';
import { CASES } from '@/lib/data';
import { stadBySlug } from '@/lib/steden';
import { DIENST_LOCATIES, dienstSteden, dienstTekst, type DienstLocatie, heeftEigenTekst } from '@/lib/dienst-steden';
import { buildMetadata, breadcrumbSchema, serviceSchema, faqSchema } from '@/lib/seo';

export function dienstStadMetadata(d: DienstLocatie, slug: string): Metadata {
  const s = stadBySlug(slug);
  if (!s) return {};
  return buildMetadata({
    title: d.metaTitle(s.naam),
    description: d.metaDescription(s.naam),
    path: `${d.base}/${s.slug}`,
    noIndex: !heeftEigenTekst(d, s.slug),
  });
}

const kaart = { background: '#fff', borderRadius: 16, padding: '28px 28px', border: '1px solid var(--rule)' } as const;
const label = { fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--mute)' } as const;

export function DienstStadPage({ dienst: d, slug }: { dienst: DienstLocatie; slug: string }) {
  const s = stadBySlug(slug);
  if (!s) return null;
  const tekst = dienstTekst(d, s);

  const cases = CASES.filter((c) => d.caseMeta.includes(c.meta)).slice(0, 3);
  const faq = d.faq(s.naam);
  const andere = [...s.buurt, ...dienstSteden(d)].filter((x, i, arr) => x !== slug && arr.indexOf(x) === i).slice(0, 8).map(stadBySlug).filter((x): x is NonNullable<typeof x> => Boolean(x));
  const andereDiensten = DIENST_LOCATIES.filter((x) => x.key !== d.key);

  return (
    <>
      <SiteNav active="/diensten" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: d.naam, href: d.dienstHref },
          { name: s.naam, href: `${d.base}/${s.slug}` },
        ])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(d.naam, {
          name: d.h1(s.naam),
          url: `${d.base}/${s.slug}`,
          description: d.metaDescription(s.naam),
          areaServed: s.naam,
        })) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faq)) }} />

      <section className="page-head">
        <div className="wrap">
          <div className="page-crumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href={d.dienstHref}>{d.naam}</Link>
            <span className="sep">/</span>
            <span>{s.naam}</span>
          </div>
          <span className="chip chip-purple">{d.chip.toUpperCase()} · {s.naam.toUpperCase()}</span>
          <h1>{d.h1(s.naam)}<em>{d.subtitel(s.naam)}</em></h1>
          <p className="lead">{tekst}</p>
          <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary">
              Plan gratis kennismaking <span className="arrow">→</span>
            </Link>
            <Link href={d.dienstHref} className="btn btn-ghost">Meer over {d.naam.toLowerCase()}</Link>
          </div>
        </div>
      </section>

      <section className="section diensten">
        <div className="wrap">
          <span className="eyebrow">
            <span className="num">01</span>
            <span className="rule" /> Wat ik doe
          </span>
          <div className="section-head" style={{ marginTop: 24, marginBottom: 48 }}>
            <h2>Concreet.<em>voor bedrijven in {s.naam}.</em></h2>
          </div>
          <div className="dienst-grid">
            {d.blokken.map((b, i) => (
              <div className="dienst" key={b.titel} style={{ cursor: 'default' }}>
                <div className="dienst-head">
                  <div className="dienst-icon">{String(i + 1).padStart(2, '0')}</div>
                </div>
                <h3>{b.titel}</h3>
                <p>{b.tekst}</p>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 32 }}>
            {s.gebieden.map((g) => <span className="chip" key={g}>{g}</span>)}
          </div>
          <p style={{ ...label, marginTop: 16 }}>{s.afstand}</p>
        </div>
      </section>

      {cases.length > 0 && (
        <section className="section over">
          <div className="wrap">
            <span className="eyebrow">
              <span className="num">02</span>
              <span className="rule" /> Echt werk
            </span>
            <div className="section-head" style={{ marginTop: 24, marginBottom: 32 }}>
              <h2>Eerder gebouwd.<em>met resultaat dat je kunt nakijken.</em></h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
              {cases.map((c) => (
                <Link key={c.slug} href={`/cases/${c.slug}`} style={{ ...kaart, textDecoration: 'none', color: 'inherit', display: 'block' }}>
                  <div style={{ ...label, color: 'var(--p1)', fontWeight: 600 }}>{c.branche} · {c.locatie}</div>
                  <h3 style={{ fontFamily: 'var(--cond)', fontWeight: 800, fontSize: 22, margin: '8px 0 6px', color: 'var(--ink)' }}>{c.naam}</h3>
                  <div style={{ fontFamily: 'var(--cond)', fontWeight: 800, fontSize: 18, color: 'var(--ink)' }}>
                    {c.resultaat} <span style={{ fontWeight: 500, fontSize: 15, color: 'var(--mute)' }}>{c.resultaatSub}</span>
                  </div>
                  <p style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--mute)', margin: '10px 0 12px' }}>{c.excerpt}</p>
                  <span style={{ fontWeight: 600, color: 'var(--p1)' }}>Lees case →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section prijzen">
        <div className="wrap">
          <span className="eyebrow">
            <span className="num">03</span>
            <span className="rule" /> Prijzen
          </span>
          <div className="section-head" style={{ marginTop: 24, marginBottom: 32 }}>
            <h2>Wat het kost.<em>vooraf vast, exclusief btw.</em></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
            {d.prijzen.map((p) => (
              <div key={p.titel} style={kaart}>
                <div style={{ ...label, color: 'var(--p1)' }}>{p.titel}</div>
                <div style={{ fontFamily: 'var(--cond)', fontWeight: 800, fontSize: 26, margin: '8px 0' }}>{p.prijs}</div>
                <p style={{ fontSize: 14, color: 'var(--mute)', margin: 0, lineHeight: 1.55 }}>{p.tekst}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 20, fontSize: 15, color: 'var(--mute)' }}>
            Alle prijzen op een rij: <Link href="/prijzen" style={{ color: 'var(--p1)' }}>bekijk de prijzen</Link>.
          </p>
        </div>
      </section>

      <section className="section over" style={{ paddingTop: 80, paddingBottom: 100 }}>
        <div className="wrap">
          <span className="eyebrow">
            <span className="num">04</span>
            <span className="rule" /> Veelgestelde vragen
          </span>
          <div style={{ display: 'grid', gap: 14, maxWidth: 920, marginTop: 32 }}>
            {faq.map((f) => (
              <details key={f.q} style={{ background: '#fff', borderRadius: 14, border: '1px solid var(--rule)', overflow: 'hidden' }}>
                <summary style={{ padding: '24px 28px', cursor: 'pointer', fontFamily: 'var(--cond)', fontWeight: 700, fontSize: 19, display: 'flex', justifyContent: 'space-between', alignItems: 'center', listStyle: 'none' }}>
                  {f.q}
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 14, color: 'var(--p1)', flexShrink: 0, marginLeft: 16 }}>+</span>
                </summary>
                <div style={{ padding: '0 28px 24px', fontSize: 16, lineHeight: 1.6, color: 'var(--ink-soft)' }}>{f.a}</div>
              </details>
            ))}
          </div>

          <div style={{ marginTop: 56, display: 'grid', gap: 12 }}>
            <div style={label}>Ook in {s.naam}</div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <Link href={`/website-laten-maken/${s.slug}`} className="btn btn-ghost">Website laten maken in {s.naam}</Link>
              {andereDiensten.map((x) => (
                <Link key={x.key} href={`${x.base}/${s.slug}`} className="btn btn-ghost">{x.h1(s.naam)}</Link>
              ))}
            </div>
            <div style={{ ...label, marginTop: 20 }}>{d.naam} in andere plaatsen</div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {andere.map((b) => (
                <Link key={b.slug} href={`${d.base}/${b.slug}`} className="btn btn-ghost">{b.naam}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Cta
        eyebrow={`Bedrijf in ${s.naam}?`}
        title="Plan een gesprek."
        subtitle="30 minuten, vrijblijvend"
        body={`Vertel wat je nodig hebt. Je krijgt binnen 3 werkdagen een vaste prijs voor ${d.naam.toLowerCase()} voor jouw bedrijf in ${s.naam}.`}
      />

      <SiteFooter />
    </>
  );
}

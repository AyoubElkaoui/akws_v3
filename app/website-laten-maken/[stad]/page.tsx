import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { Cta } from '@/components/Cta';
import { BRANCHES, CASES } from '@/lib/data';
import { STEDEN, stadBySlug } from '@/lib/steden';
import { buildMetadata, breadcrumbSchema, serviceSchema, faqSchema } from '@/lib/seo';

type Params = { stad: string };

export const dynamicParams = false;

export async function generateStaticParams() {
  return STEDEN.map((s) => ({ stad: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { stad } = await params;
  const s = stadBySlug(stad);
  if (!s) return {};
  return buildMetadata({
    title: s.metaTitle,
    description: s.metaDescription,
    path: `/website-laten-maken/${s.slug}`,
  });
}

const WAT_JE_KRIJGT = [
  {
    titel: 'Een site die direct laadt',
    tekst: 'Gebouwd in Next.js, zonder zware thema\'s of plugins. Op de telefoon staat je pagina er binnen een seconde. Dat scheelt afhakers en Google weegt het mee.',
  },
  {
    titel: 'Lokale vindbaarheid ingebouwd',
    tekst: 'Een pagina per dienst en per plaats waar je werkt, nette titels en structured data, en een goed ingericht Google Bedrijfsprofiel. Geen losse SEO-klus achteraf.',
  },
  {
    titel: 'Eén aanspreekpunt',
    tekst: 'Je belt of appt met degene die je site bouwt. Vaste prijs vooraf, binnen twee weken live en daarna onderhoud en hosting bij dezelfde persoon.',
  },
  {
    titel: 'Zelf bij te werken',
    tekst: "Wil je zelf teksten, foto's of vacatures aanpassen, dan bouw ik er een CMS bij. Je logt in, past aan en het staat live. Geen ticket en geen wachttijd.",
  },
];

export default async function StadPage({ params }: { params: Promise<Params> }) {
  const { stad } = await params;
  const s = stadBySlug(stad);
  if (!s) notFound();

  const lokaleCase = s.caseSlug ? CASES.find((c) => c.slug === s.caseSlug) : undefined;
  const buren = s.buurt.map(stadBySlug).filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <>
      <SiteNav />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Website laten maken', href: '/website-laten-maken' },
          { name: s.naam, href: `/website-laten-maken/${s.slug}` },
        ])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema('Website laten maken', {
          name: `Website laten maken in ${s.naam}`,
          url: `/website-laten-maken/${s.slug}`,
          description: s.metaDescription,
          areaServed: s.naam,
        })) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(s.faq)) }}
      />

      {/* Hero */}
      <section className="page-head">
        <div className="wrap">
          <div className="page-crumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/website-laten-maken">Website laten maken</Link>
            <span className="sep">/</span>
            <span>{s.naam}</span>
          </div>
          <span className="chip chip-purple">{s.naam.toUpperCase()} E.O.</span>
          <h1>Website laten maken in {s.naam}<em>/ {s.subtitel}</em></h1>
          <p className="lead">{s.lead}</p>
          <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary">
              Plan strategiegesprek <span className="arrow">→</span>
            </Link>
            <Link href="/cases" className="btn btn-ghost">Bekijk cases</Link>
          </div>
        </div>
      </section>

      {/* Wat je krijgt */}
      <section className="section diensten">
        <div className="wrap">
          <span className="eyebrow">
            <span className="num">01</span>
            <span className="rule" /> Wat je krijgt
          </span>
          <div className="section-head" style={{ marginTop: 24, marginBottom: 48 }}>
            <h2>
              Snel, vindbaar, geregeld.<em>/ voor bedrijven in {s.naam}.</em>
            </h2>
          </div>
          <div className="dienst-grid">
            {WAT_JE_KRIJGT.map((w, i) => (
              <div className="dienst" key={w.titel} style={{ cursor: 'default' }}>
                <div className="dienst-head">
                  <div className="dienst-icon">{String(i + 1).padStart(2, '0')}</div>
                </div>
                <h3>{w.titel}</h3>
                <p>{w.tekst}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lokaal */}
      <section className="section over">
        <div className="wrap">
          <span className="eyebrow">
            <span className="num">02</span>
            <span className="rule" /> Lokaal
          </span>
          <div className="section-head" style={{ marginTop: 24, marginBottom: 32 }}>
            <h2>
              Gevonden worden in {s.naam}.<em>/ wat hier anders is.</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gap: 20, maxWidth: 820 }}>
            {s.lokaal.map((alinea) => (
              <p key={alinea.slice(0, 40)} style={{ fontSize: 18, lineHeight: 1.65, color: 'var(--ink-soft)', margin: 0 }}>
                {alinea}
              </p>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 32 }}>
            {s.gebieden.map((g) => (
              <span className="chip" key={g}>{g}</span>
            ))}
          </div>
          <p style={{ marginTop: 20, fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--mute)' }}>
            {s.afstand}
          </p>

          {lokaleCase && (
            <Link
              href={`/cases/${lokaleCase.slug}`}
              style={{
                display: 'block',
                marginTop: 40,
                maxWidth: 820,
                background: '#fff',
                borderRadius: 16,
                padding: '28px 32px',
                border: '1px solid var(--rule)',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--p1)', fontWeight: 600 }}>
                Case · {lokaleCase.locatie}
              </div>
              <h3 style={{ fontFamily: 'var(--cond)', fontWeight: 800, fontSize: 28, textTransform: 'uppercase', margin: '8px 0 10px', color: 'var(--ink)' }}>
                {lokaleCase.naam}
              </h3>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--mute)', margin: 0 }}>{s.caseTekst}</p>
              <div style={{ marginTop: 14, fontWeight: 600, color: 'var(--p1)' }}>Bekijk de case →</div>
            </Link>
          )}
        </div>
      </section>

      {/* Branches */}
      <section className="section diensten">
        <div className="wrap">
          <span className="eyebrow">
            <span className="num">03</span>
            <span className="rule" /> Voor wie
          </span>
          <div className="section-head" style={{ marginTop: 24, marginBottom: 32 }}>
            <h2>
              Jouw vak, jouw site.<em>/ per branche uitgewerkt.</em>
            </h2>
            <p className="lead">
              Een loodgieter heeft een andere site nodig dan een hovenier. Per branche lees je
              waar het meestal vastloopt en hoe ik dat aanpak.
            </p>
          </div>
          <div className="branch-list">
            {BRANCHES.map((b) => (
              <Link href={`/voor-wie/${b.slug}`} className="branch" key={b.slug}>
                <div>
                  <div className="naam">{b.naam}</div>
                  <div className="sub">{b.sub}</div>
                </div>
                <span className="branch-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section over" style={{ paddingTop: 80, paddingBottom: 100 }}>
        <div className="wrap">
          <span className="eyebrow">
            <span className="num">04</span>
            <span className="rule" /> Veelgestelde vragen
          </span>
          <div className="section-head" style={{ marginTop: 24, marginBottom: 48 }}>
            <h2>
              Vragen uit {s.naam}.<em>/ misschien staat het hier al.</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gap: 14, maxWidth: 920 }}>
            {s.faq.map((f) => (
              <details
                key={f.q}
                style={{ background: '#fff', borderRadius: 14, border: '1px solid var(--rule)', overflow: 'hidden' }}
              >
                <summary style={{ padding: '24px 28px', cursor: 'pointer', fontFamily: 'var(--cond)', fontWeight: 700, fontSize: 22, textTransform: 'uppercase', letterSpacing: '.005em', display: 'flex', justifyContent: 'space-between', alignItems: 'center', listStyle: 'none' }}>
                  {f.q}
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 14, color: 'var(--p1)', flexShrink: 0, marginLeft: 16 }}>+</span>
                </summary>
                <div style={{ padding: '0 28px 24px', fontSize: 16, lineHeight: 1.6, color: 'var(--ink-soft)' }}>{f.a}</div>
              </details>
            ))}
          </div>

          <div style={{ marginTop: 56 }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--mute)', marginBottom: 12 }}>
              Ook in de buurt
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {buren.map((b) => (
                <Link key={b.slug} href={`/website-laten-maken/${b.slug}`} className="btn btn-ghost">
                  Website laten maken in {b.naam}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Cta
        eyebrow={`Bedrijf in ${s.naam}?`}
        title="Plan een gesprek."
        subtitle="30 minuten, vrijblijvend"
        body={`Vertel wat je nodig hebt. Je krijgt binnen 24 uur een eerlijke inschatting voor een website of software voor jouw bedrijf in ${s.naam}.`}
      />

      <SiteFooter />
    </>
  );
}

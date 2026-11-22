import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { Cta } from '@/components/Cta';
import { BRANCHES, BRANCHE_DETAILS, CASES } from '@/lib/data';
import { STEDEN, stadBySlug } from '@/lib/steden';
import { BRANCHE_HAKEN } from '@/lib/branche-steden';
import { buildMetadata, breadcrumbSchema, serviceSchema, faqSchema } from '@/lib/seo';

type Params = { stad: string; branche: string };

export const dynamicParams = false;

export async function generateStaticParams() {
  return STEDEN.flatMap((s) => Object.keys(BRANCHE_HAKEN).map((branche) => ({ stad: s.slug, branche })));
}

function laad(stad: string, branche: string) {
  const s = stadBySlug(stad);
  const h = BRANCHE_HAKEN[branche];
  const b = BRANCHE_DETAILS.find((x) => x.slug === branche);
  if (!s || !h || !b) return null;
  return { s, h, b };
}

const hoofdletter = (t: string) => t.charAt(0).toUpperCase() + t.slice(1);

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { stad, branche } = await params;
  const d = laad(stad, branche);
  if (!d) return {};
  return buildMetadata({
    title: `Website voor ${d.h.meervoud} in ${d.s.naam} | Vanaf €1.495 | AKWS`,
    description: `Website laten maken als ${d.h.enkelvoud} in ${d.s.naam}? Snelle site met lokale SEO, belknop en een pagina per dienst en plaats. Vaste prijs vanaf €1.495, binnen 3–4 weken live.`,
    path: `/website-laten-maken/${d.s.slug}/${branche}`,
    // 27 vakken x 24 plaatsen lijken te veel op elkaar (~65% gelijk tussen plaatsen).
    // Wel bereikbaar en gelinkt, niet in Google: zo geen risico op 'doorway pages'.
    noIndex: true,
  });
}

const kaart = { background: '#fff', borderRadius: 16, padding: '24px 26px', border: '1px solid var(--rule)' } as const;
const label = { fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--mute)' } as const;

export default async function BrancheStadPage({ params }: { params: Promise<Params> }) {
  const { stad, branche } = await params;
  const d = laad(stad, branche);
  if (!d) notFound();
  const { s, h, b } = d;

  const lokaleCase = CASES.find((c) => c.slug === (h.caseSlug ?? s.caseSlug));
  const faq = [
    { q: `Wat kost een website voor een ${h.enkelvoud} in ${s.naam}?`, a: `Een compacte site begint bij €1.495. Met een pagina per dienst en per plaats in je werkgebied zit je meestal tussen €2.000 en €3.500. Hosting en onderhoud kost €49 per maand. Je krijgt vooraf een vaste prijs.` },
    { q: `Hoe snel sta ik in Google op "${h.zoektermen[0]} ${s.naam}"?`, a: 'De site staat binnen drie tot vier weken live. Vindbaarheid bouwt daarna op: de eerste vertoningen zie je meestal binnen een paar weken, een goede positie kost vaak een paar maanden. We beloven geen posities, wel een opbouw die daar de beste kans op geeft. Google Ads werkt direct.' },
    ...b.faq.slice(2, 4),
  ];
  const andereBranches = BRANCHES.filter((x) => x.slug !== branche && BRANCHE_HAKEN[x.slug]);
  const buren = s.buurt.map(stadBySlug).filter((x): x is NonNullable<typeof x> => Boolean(x));
  const pad = `/website-laten-maken/${s.slug}/${branche}`;

  return (
    <>
      <SiteNav />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Home', href: '/' },
        { name: 'Website laten maken', href: '/website-laten-maken' },
        { name: s.naam, href: `/website-laten-maken/${s.slug}` },
        { name: hoofdletter(h.meervoud), href: pad },
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema('Website laten maken', {
        name: `Website voor ${h.meervoud} in ${s.naam}`,
        url: pad,
        description: `Websites met lokale SEO voor ${h.meervoud} in ${s.naam}.`,
        areaServed: s.naam,
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faq)) }} />

      <section className="page-head">
        <div className="wrap">
          <div className="page-crumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/website-laten-maken">Website laten maken</Link>
            <span className="sep">/</span>
            <Link href={`/website-laten-maken/${s.slug}`}>{s.naam}</Link>
            <span className="sep">/</span>
            <span>{hoofdletter(h.meervoud)}</span>
          </div>
          <span className="chip chip-purple">{b.sectorLabel} · {s.naam.toUpperCase()}</span>
          <h1>Website voor {h.meervoud} in {s.naam}<em>{b.subtitel}</em></h1>
          <p className="lead">{h.intro(s)}</p>
          <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary">Plan gratis kennismaking <span className="arrow">→</span></Link>
            <Link href="/prijzen" className="btn btn-ghost">Bekijk prijzen</Link>
          </div>
        </div>
      </section>

      <section className="section diensten">
        <div className="wrap">
          <span className="eyebrow"><span className="num">01</span><span className="rule" /> Waar het vastloopt</span>
          <div className="section-head" style={{ marginTop: 24, marginBottom: 40 }}>
            <h2>Herkenbaar?<em>wat we bij {h.meervoud} vaak zien.</em></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {b.pijnpunten.slice(0, 3).map((p) => (
              <div key={p.titel} style={kaart}>
                <h3 style={{ fontFamily: 'var(--cond)', fontWeight: 700, fontSize: 19, margin: '0 0 10px' }}>{p.titel}</h3>
                <p style={{ fontSize: 15, color: 'var(--mute)', margin: 0, lineHeight: 1.6 }}>{p.tekst}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section over">
        <div className="wrap">
          <span className="eyebrow"><span className="num">02</span><span className="rule" /> Wat erop komt</span>
          <div className="section-head" style={{ marginTop: 24, marginBottom: 32 }}>
            <h2>Jouw site in {s.naam}.<em>gebouwd om gebeld te worden.</em></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32, alignItems: 'start' }}>
            <ul style={{ margin: 0, paddingLeft: 20, fontSize: 17, lineHeight: 1.9, color: 'var(--ink-soft)' }}>
              {h.opSite.map((o) => <li key={o}>{o}</li>)}
            </ul>
            <div>
              <div style={label}>Zoektermen in {s.naam}</div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 12 }}>
                {h.zoektermen.map((z) => <span className="chip" key={z}>{z} {s.naam.toLowerCase()}</span>)}
              </div>
              <div style={{ ...label, marginTop: 24 }}>Ook in de buurt</div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 12 }}>
                {s.gebieden.map((g) => <span className="chip" key={g}>{g}</span>)}
              </div>
            </div>
          </div>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--ink-soft)', maxWidth: 820, marginTop: 40 }}>{s.lokaal[1] ?? s.lokaal[0]}</p>
        </div>
      </section>

      <section className="section diensten">
        <div className="wrap">
          <span className="eyebrow"><span className="num">03</span><span className="rule" /> Aanpak</span>
          <div className="dienst-grid" style={{ marginTop: 32 }}>
            {b.oplossingen.map((o, i) => (
              <div className="dienst" key={o.titel} style={{ cursor: 'default' }}>
                <div className="dienst-head"><div className="dienst-icon">{String(i + 1).padStart(2, '0')}</div></div>
                <h3>{o.titel}</h3>
                <p>{o.tekst}</p>
              </div>
            ))}
          </div>

          {lokaleCase && (
            <Link href={`/cases/${lokaleCase.slug}`} style={{ ...kaart, display: 'block', marginTop: 40, maxWidth: 820, textDecoration: 'none', color: 'inherit' }}>
              <div style={{ ...label, color: 'var(--p1)', fontWeight: 600 }}>Echt resultaat · {lokaleCase.naam}</div>
              <div style={{ fontFamily: 'var(--cond)', fontWeight: 800, fontSize: 26, margin: '8px 0 6px', color: 'var(--ink)' }}>
                {lokaleCase.resultaat} <span style={{ fontWeight: 500, fontSize: 17, color: 'var(--mute)' }}>{lokaleCase.resultaatSub}</span>
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--mute)', margin: '0 0 10px' }}>{lokaleCase.excerpt}</p>
              <span style={{ fontWeight: 600, color: 'var(--p1)' }}>Bekijk de case →</span>
            </Link>
          )}
        </div>
      </section>

      <section className="section prijzen">
        <div className="wrap">
          <span className="eyebrow"><span className="num">04</span><span className="rule" /> Prijzen</span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginTop: 32 }}>
            {[
              { t: 'Compacte website', p: 'vanaf €1.495', x: 'Tot zo\'n zes pagina\'s, lokale SEO-basis en contactformulier.' },
              { t: 'Site met pagina per dienst en plaats', p: '€2.000 – €3.500', x: `Zoals bij AD Loodgieters: gevonden in ${s.naam} én de plaatsen eromheen.` },
              { t: 'Google Ads beheer', p: '€195 p/m', x: 'Direct bovenaan in je werkgebied. Advertentiebudget apart.' },
            ].map((k) => (
              <div key={k.t} style={kaart}>
                <div style={{ ...label, color: 'var(--p1)' }}>{k.t}</div>
                <div style={{ fontFamily: 'var(--cond)', fontWeight: 800, fontSize: 24, margin: '8px 0' }}>{k.p}</div>
                <p style={{ fontSize: 14, color: 'var(--mute)', margin: 0, lineHeight: 1.55 }}>{k.x}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 16, fontSize: 14, color: 'var(--mute)' }}>Exclusief 21% btw. Hosting en onderhoud €49 per maand.</p>
        </div>
      </section>

      <section className="section over" style={{ paddingTop: 80, paddingBottom: 100 }}>
        <div className="wrap">
          <span className="eyebrow"><span className="num">05</span><span className="rule" /> Veelgestelde vragen</span>
          <div style={{ display: 'grid', gap: 14, maxWidth: 920, marginTop: 32 }}>
            {faq.map((f) => (
              <details key={f.q} style={{ background: '#fff', borderRadius: 14, border: '1px solid var(--rule)', overflow: 'hidden' }}>
                <summary style={{ padding: '22px 26px', cursor: 'pointer', fontFamily: 'var(--cond)', fontWeight: 700, fontSize: 18, display: 'flex', justifyContent: 'space-between', alignItems: 'center', listStyle: 'none' }}>
                  {f.q}
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 14, color: 'var(--p1)', flexShrink: 0, marginLeft: 16 }}>+</span>
                </summary>
                <div style={{ padding: '0 26px 22px', fontSize: 16, lineHeight: 1.6, color: 'var(--ink-soft)' }}>{f.a}</div>
              </details>
            ))}
          </div>

          <div style={{ marginTop: 56, display: 'grid', gap: 12 }}>
            <div style={label}>{hoofdletter(h.meervoud)} in andere plaatsen</div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {buren.map((x) => (
                <Link key={x.slug} href={`/website-laten-maken/${x.slug}/${branche}`} className="btn btn-ghost">{hoofdletter(h.meervoud)} in {x.naam}</Link>
              ))}
              <Link href={`/voor-wie/${branche}`} className="btn btn-ghost">Alles over websites voor {h.meervoud}</Link>
            </div>
            <div style={{ ...label, marginTop: 20 }}>Andere vakken in {s.naam}</div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {andereBranches.map((x) => (
                <Link key={x.slug} href={`/website-laten-maken/${s.slug}/${x.slug}`} className="btn btn-ghost">{x.naam}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Cta
        eyebrow={`${hoofdletter(h.enkelvoud)} in ${s.naam}?`}
        title="Plan een gesprek."
        subtitle="30 minuten, vrijblijvend"
        body={`Vertel hoe je nu aan klanten komt. Je krijgt binnen 3 werkdagen een vaste prijs voor een website die je in ${s.naam} vindbaar maakt.`}
      />

      <SiteFooter />
    </>
  );
}

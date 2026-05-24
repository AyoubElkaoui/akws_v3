import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { Cta } from '@/components/Cta';
import { BRANCHE_DETAILS, PRIJZEN } from '@/lib/data';
import { buildMetadata, breadcrumbSchema, serviceSchema, faqSchema } from '@/lib/seo';

type Params = { branche: string };

export async function generateStaticParams() {
  return BRANCHE_DETAILS.map((b) => ({ branche: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { branche } = await params;
  const b = BRANCHE_DETAILS.find((x) => x.slug === branche);
  if (!b) return {};
  return buildMetadata({
    title: b.metaTitle,
    description: b.metaDescription,
    path: `/voor-wie/${branche}`,
  });
}

export default async function BranchePage({ params }: { params: Promise<Params> }) {
  const { branche } = await params;
  const b = BRANCHE_DETAILS.find((x) => x.slug === branche);
  if (!b) notFound();

  return (
    <>
      <SiteNav active="/voor-wie" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Voor wie', href: '/voor-wie' },
          { name: b.naam, href: `/voor-wie/${b.slug}` },
        ])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(`Website en software voor ${b.naam.toLowerCase()}`)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(b.faq)) }}
      />

      {/* Hero */}
      <section className="page-head">
        <div className="wrap">
          <div className="page-crumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/voor-wie">Voor wie</Link>
            <span className="sep">/</span>
            <span>{b.naam}</span>
          </div>
          <span className="chip chip-purple">{b.sectorLabel}</span>
          <h1>{b.h1}<em>/ {b.subtitel}</em></h1>
          <p className="lead">{b.lead}</p>
          <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary">
              Plan strategiegesprek <span className="arrow">→</span>
            </Link>
            <Link href="/cases" className="btn btn-ghost">Bekijk cases</Link>
          </div>
        </div>
      </section>

      {/* Pijnpunten */}
      <section className="section diensten">
        <div className="wrap">
          <span className="eyebrow">
            <span className="num">01</span>
            <span className="rule" /> Herkenbare uitdagingen
          </span>
          <div className="section-head" style={{ marginTop: 24, marginBottom: 48 }}>
            <h2>
              Wat loopt er vast?<em>/ herkenbaar voor {b.naam.toLowerCase()}.</em>
            </h2>
          </div>
          <div className="dienst-grid">
            {b.pijnpunten.map((p, i) => (
              <div className="dienst" key={i} style={{ cursor: 'default' }}>
                <div className="dienst-head">
                  <div className="dienst-icon">{String(i + 1).padStart(2, '0')}</div>
                </div>
                <h3>{p.titel}</h3>
                <p>{p.tekst}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Oplossingen */}
      <section className="section over">
        <div className="wrap">
          <span className="eyebrow">
            <span className="num">02</span>
            <span className="rule" /> Hoe ik dat oplos
          </span>
          <div className="section-head" style={{ marginTop: 24, marginBottom: 48 }}>
            <h2>
              Concrete aanpak.<em>/ voor {b.naam.toLowerCase()}.</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gap: 24 }}>
            {b.oplossingen.map((o, i) => (
              <div
                key={i}
                style={{
                  background: '#fff',
                  borderRadius: 16,
                  padding: '32px 36px',
                  border: '1px solid var(--rule)',
                  display: 'grid',
                  gridTemplateColumns: '40px 1fr',
                  gap: '0 24px',
                  alignItems: 'start',
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: 'linear-gradient(135deg, var(--p1), var(--p3))',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--mono)',
                    fontWeight: 700,
                    fontSize: 13,
                    flexShrink: 0,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--cond)', fontWeight: 800, fontSize: 26, textTransform: 'uppercase', margin: '0 0 10px', color: 'var(--ink)' }}>
                    {o.titel}
                  </h3>
                  <p style={{ fontSize: 16, color: 'var(--mute)', lineHeight: 1.6, margin: 0 }}>
                    {o.tekst}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zoekwoorden */}
      <section className="section diensten">
        <div className="wrap">
          <span className="eyebrow">
            <span className="num">03</span>
            <span className="rule" /> Lokale SEO
          </span>
          <div className="section-head" style={{ marginTop: 24, marginBottom: 32 }}>
            <h2>
              Zoekwoorden die ertoe doen.<em>/ voor {b.naam.toLowerCase()}.</em>
            </h2>
            <p className="lead">
              Dit zijn de zoekopdrachten waarop ik jouw site optimaliseer. Klanten die dit googelen,
              zijn op zoek naar precies wat jij aanbiedt.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {b.zoekwoorden.map((z) => (
              <span className="chip" key={z}>{z}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Pakketten */}
      <section className="section prijzen">
        <div className="wrap">
          <span className="eyebrow">
            <span className="num">04</span>
            <span className="rule" /> Pakketten
          </span>
          <div className="section-head" style={{ marginTop: 24 }}>
            <h2>
              Vaste prijzen.<em>/ geen verrassingen achteraf.</em>
            </h2>
            <p className="lead">
              Alle prijzen exclusief 21% BTW. Onderhoudscontract is verplicht onderdeel van elk traject.
            </p>
          </div>
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
                  {p.bullets.map((bl) => (
                    <li key={bl}><span className="v">✓</span><span>{bl}</span></li>
                  ))}
                </ul>
                <Link href="/contact"><button type="button">{p.cta} →</button></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section over" style={{ paddingTop: 80, paddingBottom: 100 }}>
        <div className="wrap">
          <span className="eyebrow">
            <span className="num">05</span>
            <span className="rule" /> Veelgestelde vragen
          </span>
          <div className="section-head" style={{ marginTop: 24, marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'var(--cond)', fontWeight: 800, fontSize: 64, letterSpacing: '-.02em', lineHeight: .95, textTransform: 'uppercase', margin: 0 }}>
              Vragen over {b.naam.toLowerCase()}.
              <em style={{ fontFamily: '"Barlow",sans-serif', fontStyle: 'italic', fontWeight: 300, textTransform: 'none', letterSpacing: '-.015em', color: 'var(--mute)', fontSize: '.5em', display: 'block', marginTop: 6 }}>
                / misschien staat het hier al.
              </em>
            </h2>
          </div>
          <div style={{ display: 'grid', gap: 14, maxWidth: 920 }}>
            {b.faq.map((f) => (
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
        </div>
      </section>

      <Cta
        eyebrow={`Website voor ${b.naam.toLowerCase()}?`}
        title="Plan een gesprek."
        subtitle="30 minuten, vrijblijvend"
        body={`Vertel wat je nodig hebt. Ik geef binnen 24 uur een eerlijke inschatting voor een website of software voor jouw ${b.naam.toLowerCase()}bedrijf.`}
      />

      <SiteFooter />
    </>
  );
}

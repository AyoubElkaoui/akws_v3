import Link from 'next/link';
import type { Metadata } from 'next';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { PageHead } from '@/components/PageHead';
import { Cta } from '@/components/Cta';
import Image from 'next/image';
import { CASES, CASE_DETAILS, REVIEWS, STATS } from '@/lib/data';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Cases — Websites en software voor installatiebedrijven | AKWS',
  description:
    'Een selectie van mijn werk voor installatie- en technische bedrijven: websites, urenregistratie, ticketsystemen en koppelingen.',
  path: '/cases',
});

export default function CasesPage() {
  return (
    <>
      <SiteNav active="/cases" />

      <PageHead
        crumbs={[{ href: '/', label: 'Home' }, { label: 'Cases' }]}
        chip="Echte klanten, echte resultaten"
        title="Cases."
        subtitle="Werk dat ik trots laat zien, eerlijk over wat is gedaan, geen verzonnen cijfers. De aanpak, het resultaat en wat ik onderweg leerde."
      />

      {/* Cases grid */}
      <section className="blog-bg">
        <div className="wrap">
          <div className="blog-filter" style={{ marginBottom: 48 }}>
            <span className="filt active">Alle cases</span>
            <span className="filt">Websites</span>
            <span className="filt">Maatwerk software</span>
            <span className="count">{CASES.length} cases</span>
          </div>

          {/* Omgekeerde piramide: 3 boven, 2 gecentreerd onder — zie .pyramid-grid CSS */}
          <div className="pyramid-grid" style={{ marginBottom: 80 }}>
            {CASES.map((c, idx) => {
              const detail = CASE_DETAILS.find((d) => d.slug === c.slug);
              const cover = detail?.images?.cover;
              return (
              <Link href={`/cases/${c.slug}`} className={`post pyramid-item pyramid-item-${idx}`} key={c.slug}>
                <div
                  className="img"
                  style={cover ? { position: 'relative' } : {
                    backgroundImage: `repeating-linear-gradient(135deg, rgba(0,0,0,.08) 0, rgba(0,0,0,.08) 1px, transparent 1px, transparent 14px), ${c.gradient}`,
                  }}
                >
                  {cover && (
                    <>
                      <Image src={cover} alt={`${c.naam} — ${c.meta} preview`} fill sizes="(max-width:768px) 100vw, 33vw" style={{ objectFit: 'cover', objectPosition: 'top' }} />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,.1) 0%, rgba(0,0,0,.55) 100%)', zIndex: 1 }} />
                    </>
                  )}
                  <span className="cat chip chip-dark" style={{ position: 'relative', zIndex: 2 }}>{c.meta}</span>
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 14,
                      left: 14,
                      fontFamily: 'var(--cond)',
                      fontWeight: 900,
                      fontSize: 42,
                      color: '#fff',
                      lineHeight: 0.9,
                      letterSpacing: '-.02em',
                      zIndex: 2,
                    }}
                  >
                    {c.resultaat}
                  </div>
                </div>
                <div className="body">
                  <div className="meta">{c.branche} · {c.locatie}</div>
                  <h3>{c.naam}</h3>
                  <p className="excerpt">{c.excerpt}</p>
                  <div className="read">
                    <span>Lees case →</span>
                    <span style={{ color: 'var(--mute)' }}>{c.meta}</span>
                  </div>
                </div>
              </Link>
            );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section cases" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="wrap">
          <span className="eyebrow">
            <span className="num">→</span>
            <span className="rule" /> Resultaten in cijfers
          </span>
          <div className="section-head" style={{ marginTop: 24, marginBottom: 32 }}>
            <h2>
              Vijf projecten in vier getallen.<em>/ gemeten, niet geclaimd.</em>
            </h2>
            <p className="lead" style={{ color: 'rgba(255,255,255,.55)' }}>
              Over mijn portfolio. Bron: eigen analytics en klantfeedback.
            </p>
          </div>
          <div className="stats" style={{ marginTop: 0, borderTop: 'none' }}>
            {STATS.map((s) => (
              <div className="stat" key={s.k}>
                <div className="k">{s.k}</div>
                <div className="v">
                  {s.v.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < s.v.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews conditioneel */}
      {REVIEWS.length > 0 && (
        <section className="section reviews">
          <div className="wrap">
            <span className="eyebrow">
              <span className="num">→</span>
              <span className="rule" /> Wat klanten zeggen
            </span>
            <div className="section-head" style={{ marginTop: 24 }}>
              <h2>
                Geen verzonnen quotes.<em>/ gewoon wat klanten zeiden.</em>
              </h2>
            </div>
            <div className="review-grid">
              {REVIEWS.map((r) => (
                <div className="review" key={r.n}>
                  <div className="review-stars">
                    {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                  </div>
                  <p className="review-q">&quot;{r.q}&quot;</p>
                  <div className="review-by">
                    <div className="avatar">{r.av}</div>
                    <div>
                      <div className="n">{r.n}</div>
                      <div className="f">{r.f}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Cta
        eyebrow="Wil je hier ook bij?"
        title="Plan een gesprek."
        subtitle="30 minuten, vrijblijvend"
        body="Vertel wat je wil bouwen of verbeteren. Ik geef binnen 24 uur een eerlijke inschatting."
      />

      <SiteFooter />
    </>
  );
}

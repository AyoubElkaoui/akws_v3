import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { Cta } from '@/components/Cta';
import { CASE_DETAILS } from '@/lib/data';
import { buildMetadata, breadcrumbSchema } from '@/lib/seo';
import { ImageLightbox } from '@/components/ImageLightbox';

type Params = { slug: string };

export async function generateStaticParams() {
  return CASE_DETAILS.map((c) => ({ slug: c.slug }));
}

const CASE_META: Record<string, { title: string; description: string }> = {
  'ad-loodgietersbedrijf': {
    title: 'AD Loodgietersbedrijf — Website & Google Ads Amsterdam | AKWS Case',
    description: 'Case: nieuwe website en Google Ads-beheer voor AD Loodgietersbedrijf in Amsterdam. Voor en na vergelijking.',
  },
  'mba-installaties': {
    title: 'MBA-installaties — Eerste website Midden-Nederland | AKWS Case',
    description: 'Case: eerste professionele website voor installatiebedrijf MBA-installaties in Midden-Nederland.',
  },
  'mkh-bouw': {
    title: 'MKH Bouw — Website voor bouw en stukwerk | AKWS Case',
    description: 'Case: moderne website voor MKH Bouw in Midden-Nederland. Stukwerk en bouw met heldere dienstenpresentatie.',
  },
  'clockd': {
    title: 'Clockd — Urenregistratie en factuurkoppeling | AKWS Case',
    description: 'Case: maatwerk webapplicatie voor urenregistratie met directe koppeling naar Syntess Atrium ERP. Tech: Next.js, Supabase, OAuth.',
  },
  'itflow': {
    title: 'ITflow — Geïntegreerd ticketsysteem voor IT-dienstverlener | AKWS Case',
    description: 'Case: maatwerk platform dat Zoho Desk en Clockwise vervangt. Tickets, klantbeheer, assets en uren in één systeem.',
  },
};

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const c = CASE_DETAILS.find((x) => x.slug === slug);
  if (!c) return {};
  const m = CASE_META[slug];
  return buildMetadata({
    title: m?.title ?? `${c.naam} — Case | AKWS`,
    description: m?.description ?? c.intro,
    path: `/cases/${slug}`,
  });
}

const IMG_STYLE: React.CSSProperties = {
  borderRadius: 12,
  border: '1px solid var(--rule)',
  width: '100%',
  height: 'auto',
  display: 'block',
};

const FIGCAP_STYLE = {
  marginTop: 10,
  fontFamily: 'var(--mono)',
  fontSize: 10,
  color: 'var(--mute)',
  letterSpacing: '.1em',
  textTransform: 'uppercase' as const,
};

export default async function CaseDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const c = CASE_DETAILS.find((x) => x.slug === slug);
  if (!c) notFound();

  const hasImages = c.images && Object.keys(c.images).length > 0;
  const hasBeforeAfter = c.images?.before && c.images?.after;
  const hasScreens = c.images?.screens && c.images.screens.length > 0;
  const hasExtra = c.images?.extra && c.images.extra.length > 0;

  return (
    <>
      <SiteNav active="/cases" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([
            { name: 'Home', href: '/' },
            { name: 'Cases', href: '/cases' },
            { name: c.naam, href: `/cases/${c.slug}` },
          ])),
        }}
      />

      {/* Hero */}
      <section className="article-hero">
        <div className="wrap-narrow">
          <div className="page-crumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/cases">Cases</Link>
            <span className="sep">/</span>
            <span>{c.naam}</span>
          </div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
            <span className="chip chip-purple">{c.sector}</span>
            <span className="chip">{c.locatie}</span>
            <span className="chip">{c.meta}</span>
          </div>
          <h1 style={{ fontFamily: 'var(--cond)', fontWeight: 900, fontSize: 'clamp(48px, 8vw, 84px)', letterSpacing: '-.02em', lineHeight: .92, textTransform: 'uppercase', margin: '0 0 24px' }}>
            {c.naam}
          </h1>
          <p className="deck">{c.intro}</p>
          {c.liveUrl && (
            <div style={{ marginTop: 24 }}>
              <a href={c.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ fontSize: 14, padding: '10px 18px' }}>
                Bekijk live site →
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Cover — echt screenshot of gradient-placeholder */}
      <div className="wrap article-cover">
        {c.images?.cover ? (
          <div style={{ position: 'relative', width: '100%', height: 480, borderRadius: 18, overflow: 'hidden' }}>
            <Image
              src={c.images.cover}
              alt={`${c.naam} — live website, screenshot 2024`}
              fill
              sizes="(max-width: 1440px) 100vw, 1312px"
              priority
              style={{ objectFit: 'cover', objectPosition: 'top' }}
            />
          </div>
        ) : (
          <div
            style={{
              width: '100%', height: 480, borderRadius: 18, overflow: 'hidden',
              backgroundImage: `repeating-linear-gradient(135deg, rgba(0,0,0,.05) 0, rgba(0,0,0,.05) 1px, transparent 1px, transparent 14px), ${c.gradient}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'rgba(255,255,255,.55)', fontFamily: 'var(--mono)', fontSize: 12,
              letterSpacing: '.1em', textTransform: 'uppercase',
            }}
          >
            {/* TODO: Ayoub — screenshot toevoegen (gebruik mock-data voor software-cases) */}
            screenshot · {c.naam.toLowerCase()}
          </div>
        )}
      </div>

      {/* Content */}
      <section className="article" style={{ paddingBottom: 80 }}>
        <div className="wrap-narrow">

          {/* De situatie */}
          <div style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'var(--cond)', fontWeight: 800, fontSize: 44, letterSpacing: '-.015em', lineHeight: 1, textTransform: 'uppercase', margin: '0 0 24px', color: 'var(--ink)' }}>
              De situatie
            </h2>
            {c.situatie.map((p, i) => (
              <p key={i} style={{ fontSize: 18, lineHeight: 1.75, color: 'var(--ink-soft)', marginBottom: 20 }}>{p}</p>
            ))}
          </div>

          {/* Voor / Na vergelijking (alleen AD) */}
          {hasBeforeAfter && (
            <div style={{ marginBottom: 64 }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--mute)', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: 20 }}>
                FIG 0.1 / Voor en na
              </div>
              <div className="case-before-after" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                <ImageLightbox
                  src={c.images!.before!}
                  alt={`Oude website ${c.naam} voor redesign 2024`}
                  caption="Voor / De oude site"
                  style={IMG_STYLE}
                />
                <ImageLightbox
                  src={c.images!.after!}
                  alt={`Nieuwe website ${c.naam} na redesign 2024`}
                  caption="Na / De nieuwe site"
                  style={IMG_STYLE}
                />
              </div>
              <p style={{ marginTop: 20, fontSize: 16, lineHeight: 1.65, color: 'var(--ink-soft)' }}>
                Van een verouderde site die slecht laadde naar een snelle, mobiel-first website die bovenaan ranked voor spoedklus-zoekwoorden in Amsterdam.
              </p>
            </div>
          )}

          {/* De aanpak */}
          <div style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'var(--cond)', fontWeight: 800, fontSize: 44, letterSpacing: '-.015em', lineHeight: 1, textTransform: 'uppercase', margin: '0 0 32px', color: 'var(--ink)' }}>
              De aanpak
            </h2>
            {c.aanpak.map((item, i) => (
              <div key={i} style={{ marginBottom: 32, paddingLeft: 24, borderLeft: '3px solid var(--p1)' }}>
                <h3 style={{ fontFamily: 'var(--cond)', fontWeight: 700, fontSize: 24, textTransform: 'uppercase', margin: '0 0 8px', color: 'var(--ink)' }}>
                  {item.titel}
                </h3>
                <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--ink-soft)', margin: 0 }}>{item.tekst}</p>
              </div>
            ))}

            {/* Extra screenshot na aanpak (bijv. diensten-pagina AD) */}
            {hasExtra && c.images!.extra!.map((src, i) => (
              <div key={i} style={{ marginTop: 32 }}>
                <ImageLightbox
                  src={src}
                  alt={`${c.naam} — ${c.sector} screenshot ${i + 1} (mockdata)`}
                  caption={`FIG 0.${(hasBeforeAfter ? 3 : 1) + i} / ${c.naam} detail`}
                  style={IMG_STYLE}
                />
              </div>
            ))}
          </div>

          {/* Het resultaat */}
          <div style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'var(--cond)', fontWeight: 800, fontSize: 44, letterSpacing: '-.015em', lineHeight: 1, textTransform: 'uppercase', margin: '0 0 24px', color: 'var(--ink)' }}>
              Het resultaat
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
              {c.resultaat.map((r, i) => (
                <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'start', fontSize: 17, color: 'var(--ink-soft)', lineHeight: 1.55 }}>
                  <span style={{ width: 22, height: 22, borderRadius: 999, background: 'linear-gradient(135deg, var(--p1), var(--p3))', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, flexShrink: 0, marginTop: 2 }}>✓</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          {c.techStack && c.techStack.length > 0 && (
            <div style={{ marginBottom: 48 }}>
              <h2 style={{ fontFamily: 'var(--cond)', fontWeight: 800, fontSize: 44, letterSpacing: '-.015em', lineHeight: 1, textTransform: 'uppercase', margin: '0 0 24px', color: 'var(--ink)' }}>
                Tech stack
              </h2>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {c.techStack.map((t) => <span className="chip" key={t}>{t}</span>)}
              </div>
            </div>
          )}

          {/* Screenshots grid (software-cases) */}
          {hasScreens && (
            <div style={{ marginBottom: 48 }}>
              <h2 style={{ fontFamily: 'var(--cond)', fontWeight: 800, fontSize: 44, letterSpacing: '-.015em', lineHeight: 1, textTransform: 'uppercase', margin: '0 0 8px', color: 'var(--ink)' }}>
                Screenshots
              </h2>
              <p style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--mute)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 28 }}>
                Met mock-data — geen echte klantgegevens
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: c.images!.screens!.length > 2 ? '1fr 1fr' : '1fr', gap: 20 }}>
                {c.images!.screens!.map((src, i) => (
                  <ImageLightbox
                    key={i}
                    src={src}
                    alt={`${c.naam} — ${c.sector} screenshot ${i + 1} (mockdata)`}
                    caption={`Fig 0.${i + 1}`}
                    style={IMG_STYLE}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Screens voor website-cases (MBA, MKH) */}
          {!hasBeforeAfter && !hasExtra && hasScreens && c.sector !== 'Maatwerk software' && (
            <div />  /* al gerenderd in screens sectie hierboven */
          )}

          {/* Quote */}
          {c.quote ? (
            <blockquote style={{ borderLeft: '4px solid var(--p1)', paddingLeft: 28, margin: '0 0 48px', fontFamily: 'var(--cond)', fontSize: 24, fontWeight: 600, textTransform: 'uppercase', color: 'var(--ink)', lineHeight: 1.3 }}>
              &quot;{c.quote.tekst}&quot;
              <span style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 400, textTransform: 'uppercase', color: 'var(--mute)', marginTop: 12 }}>
                — {c.quote.naam} · {c.quote.functie}
              </span>
            </blockquote>
          ) : (
            <div style={{ background: 'var(--bg-alt)', borderRadius: 14, padding: '24px 28px', marginBottom: 48 }}>
              <p style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--mute)', letterSpacing: '.06em', textTransform: 'uppercase', margin: '0 0 8px' }}>
                Klantreactie
              </p>
              <p style={{ fontSize: 15, color: 'var(--mute)', margin: 0 }}>
                Quote wordt toegevoegd zodra klant schriftelijk akkoord heeft gegeven voor publicatie.
              </p>
            </div>
          )}

        </div>
      </section>

      <Cta
        eyebrow="Een vergelijkbaar project?"
        title="Plan een gesprek."
        subtitle="30 minuten, vrijblijvend"
        body="Vertel wat je wil bouwen. Ik geef binnen 24 uur een eerlijke inschatting, ook als het project niet bij mij past."
      />

      <SiteFooter />
    </>
  );
}

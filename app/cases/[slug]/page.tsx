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
    title: 'AD Loodgietersbedrijf — Website & lokale SEO Utrecht | AKWS Case',
    description: 'Case: nieuwe website en lokale SEO voor AD Loodgietersbedrijf in Utrecht en omgeving. Voor en na vergelijking.',
  },
  'mba-installaties': {
    title: 'MBA-installaties — Eerste website Midden-Nederland | AKWS Case',
    description: 'Case: eerste professionele website voor installatiebedrijf MBA-installaties in Midden-Nederland.',
  },
  'mkh-bouw': {
    title: 'MKH Bouw — Website en lokale SEO voor afbouw | AKWS Case',
    description: 'Case: nieuwe website voor afbouw- en renovatiebedrijf MKH Bouw in Amsterdam, met lokale SEO per dienst en plaats.',
  },
  'clockd': {
    title: 'Clockd — Urenregistratie en factuurkoppeling | AKWS Case',
    description: 'Case: maatwerk webapplicatie voor urenregistratie met directe koppeling naar Syntess Atrium ERP. Tech: Next.js, Supabase, OAuth.',
  },
  'itflow': {
    title: 'ITflow — Ticket-, voorraad- en urenplatform voor een IT-dienstverlener | AKWS Case',
    description: 'Case: maatwerk platform dat Zoho Desk verving. Tickets, voorraad, assets, kennisbank en klantportaal in één systeem.',
  },
  'itfin-website': {
    title: 'ITFIN — Nieuwe website voor IT-dienstverlener Amersfoort | AKWS Case',
    description: 'Case: nieuwe website voor ITFIN in Amersfoort, met security quickscan, situatiekeuze en een pagina per dienst.',
  },
  'facturatie-app': {
    title: 'Facturatie-app met iDEAL-betaallink en urenimport | AKWS Case',
    description: 'Case: eigen facturatie-app met offertes, terugkerende facturen, herinneringen en een betaallink op elke factuur.',
  },
  'voorraad-app': {
    title: 'Productie- en voorraadapp met QR en barcode | AKWS Case',
    description: 'Case: app om groepenkasten te registreren met QR-code en serienummer en het magazijn bij te houden met scanner of telefoon.',
  },
  'financieel-dashboard': {
    title: 'Financieel dashboard op Syntess / Firebird | AKWS Case',
    description: 'Case: read-only dashboard voor omzet, marge en debiteuren, live uit de Firebird-database van een ERP-pakket.',
  },
  'urenportaal': {
    title: 'Urenportaal voor een administratiekantoor | AKWS Case',
    description: 'Case: urenregistratie per klant met weekgoedkeuring en teamoverzicht, uitgewerkt als klikbaar prototype.',
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

export default async function CaseDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const c = CASE_DETAILS.find((x) => x.slug === slug);
  if (!c) notFound();

  const idx = CASE_DETAILS.findIndex((x) => x.slug === slug);
  const next = CASE_DETAILS[(idx + 1) % CASE_DETAILS.length];
  const hasBeforeAfter = c.images?.before && c.images?.after;
  const screens = (c.images?.screens ?? []).filter((s) => s !== c.images?.cover);
  const extra = c.images?.extra ?? [];
  const gallery = [...screens, ...extra];

  return (
    <>
      <SiteNav active="/cases" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([
            { name: 'Home', href: '/' },
            { name: 'Werk', href: '/cases' },
            { name: c.naam, href: `/cases/${c.slug}` },
          ])),
        }}
      />

      <section className="v4-case-hero">
        <div className="wrap">
          <div className="page-crumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/cases">Werk</Link>
            <span className="sep">/</span>
            <span>{c.naam}</span>
          </div>
          <div className="v4-case-chips">
            <span className="chip chip-purple">{c.sector}</span>
            <span className="chip">{c.locatie}</span>
            <span className="chip">{c.meta}</span>
          </div>
          <h1>{c.naam}</h1>
          <p className="deck">{c.intro}</p>
          {c.liveUrl && (
            <div style={{ marginTop: 24 }}>
              <a href={c.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                {c.liveLabel ?? 'Bekijk de live site'} →
              </a>
            </div>
          )}
        </div>
      </section>

      {c.images?.cover && (
        <section style={{ paddingBottom: 56 }}>
          <div className="wrap">
            <div className="v4-case-cover">
              <Image src={c.images.cover} alt={`${c.naam}, ${c.meta.toLowerCase()}`} width={1440} height={900} sizes="(max-width: 1280px) 100vw, 1200px" priority />
            </div>
            {c.demoNote && <span className="v4-demo-note">{c.demoNote}</span>}
          </div>
        </section>
      )}

      <section style={{ paddingBottom: 80 }}>
        <div className="wrap v4-case-body">
          <div>
            <div className="v4-case-section">
              <h2>De situatie</h2>
              {c.situatie.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {hasBeforeAfter && (
              <div className="v4-case-section">
                <h2>Voor en na</h2>
                <div className="v4-ba">
                  <ImageLightbox src={c.images!.before!} alt={`Oude website ${c.naam}`} caption="Voor: de oude site" style={IMG_STYLE} />
                  <ImageLightbox src={c.images!.after!} alt={`Nieuwe website ${c.naam}`} caption="Na: de nieuwe site" style={IMG_STYLE} />
                </div>
              </div>
            )}

            <div className="v4-case-section">
              <h2>De aanpak</h2>
              <div className="v4-aanpak">
                {c.aanpak.map((a) => (
                  <div key={a.titel}>
                    <h3>{a.titel}</h3>
                    <p>{a.tekst}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="v4-case-section">
              <h2>Het resultaat</h2>
              <ul className="v4-result">
                {c.resultaat.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>

            {gallery.length > 0 && (
              <div className="v4-case-section">
                <h2>Schermen</h2>
                <div className="v4-shots">
                  {gallery.map((src, i) => (
                    <ImageLightbox key={src} src={src} alt={`${c.naam} scherm ${i + 1}`} caption={c.demoNote ? 'Voorbeelddata' : undefined} style={IMG_STYLE} />
                  ))}
                </div>
              </div>
            )}

            {c.quote && (
              <div className="v4-case-section">
                <blockquote className="v4-quote">
                  &ldquo;{c.quote.tekst}&rdquo;
                  <footer style={{ marginTop: 10, fontSize: 14, color: 'var(--mute-2)' }}>
                    {c.quote.naam} · {c.quote.functie}
                  </footer>
                </blockquote>
              </div>
            )}

            <div className="v4-next">
              <Link href="/cases">← Al het werk</Link>
              {next && next.slug !== c.slug && <Link href={`/cases/${next.slug}`}>Volgende: {next.naam} →</Link>}
            </div>
          </div>

          <aside className="v4-aside">
            <div>
              <div className="l">Klant</div>
              <div className="v">{c.sector} · {c.locatie}</div>
            </div>
            <div>
              <div className="l">Wat</div>
              <div className="v">{c.meta}</div>
            </div>
            {c.techStack && c.techStack.length > 0 && (
              <div>
                <div className="l">Gebouwd met</div>
                <div className="v4-stack">
                  {c.techStack.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            )}
            <Link href="/contact" className="btn btn-primary" style={{ justifyContent: 'center' }}>
              Zoiets ook nodig? →
            </Link>
          </aside>
        </div>
      </section>

      <Cta
        eyebrow="Een vergelijkbaar project?"
        title="Plan een gesprek."
        subtitle="30 minuten, vrijblijvend"
        body="Vertel wat je wil bouwen. Ik geef binnen één werkdag een eerlijke inschatting, ook als het project niet bij mij past."
      />

      <SiteFooter />
    </>
  );
}

import Link from 'next/link';
import type { Metadata } from 'next';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { Cta } from '@/components/Cta';
import { PageHead } from '@/components/PageHead';
import { buildMetadata, breadcrumbSchema, serviceSchema } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'SEO & Google Ads voor installateurs | AKWS',
  description:
    'Vindbaar in je werkgebied via lokale SEO en Google Ads. Meten op leads, niet op ijdelheidscijfers. Inbegrepen bij Pro-pakket of los te boeken.',
  path: '/diensten/seo-en-google-ads',
});

export default function SeoPage() {
  return (
    <>
      <SiteNav active="/diensten" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Diensten', href: '/diensten' },
          { name: 'SEO & Google Ads', href: '/diensten/seo-en-google-ads' },
        ])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema('SEO en Google Ads voor installatiebedrijven')) }}
      />

      <PageHead
        crumbs={[{ href: '/', label: 'Home' }, { href: '/diensten', label: 'Diensten' }, { label: 'SEO & Google Ads' }]}
        chip="Lokaal SEO · Google Ads · Meten · Rapportage"
        title="SEO & Google Ads voor installateurs."
        subtitle="Vindbaar in je werkgebied. Advertenties die geld opleveren in plaats van verbranden."
      />

      <section className="section over">
        <div className="wrap">
          <p style={{ fontSize: 19, lineHeight: 1.65, color: 'var(--ink-soft)', maxWidth: 800, marginBottom: 64 }}>
            SEO en Google Ads zijn twee verschillende dingen die elkaar versterken. SEO bouwt zichtbaarheid
            die je niet kunt kopen. Ads kopen zichtbaarheid voor zoekwoorden waar SEO te traag werkt.
            Voor een installateur in een lokale markt is de combinatie nagenoeg altijd de juiste mix.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24, marginBottom: 64 }}>
            {[
              {
                n: '01',
                titel: 'Lokale SEO',
                tekst: "Per stad in je werkgebied een eigen landingspagina. Google Bedrijfsprofiel volledig ingericht met categorieën, foto's, openingstijden en reviews. Technische SEO ingebouwd in elke pagina. Schema markup zodat Google begrijpt wat je doet.\n\nWat dit oplevert: je verschijnt in de lokale 3-pack boven aan Google voor zoekopdrachten in je werkgebied. Dat is gratis verkeer, voor altijd.",
              },
              {
                n: '02',
                titel: 'Google Ads',
                tekst: "Lokaal gerichte campagnes voor spoedklussen en hoog-intent zoekwoorden. Campagnes per dagdeel: spoedwerk 's avonds, onderhoud overdag. Negatieve zoekwoorden om verspilling te voorkomen. Conversie-tracking zodat je weet welke advertentie tot een telefoontje leidt.\n\nWat dit oplevert: voorspelbaar verkeer met meetbare ROI. Je weet binnen een maand wat een lead kost.",
              },
            ].map((item) => (
              <div key={item.n} style={{ background: '#fff', borderRadius: 16, padding: '36px 32px', border: '1px solid var(--rule)' }}>
                <div style={{ fontFamily: 'var(--cond)', fontWeight: 900, fontSize: 56, lineHeight: 0.9, background: 'linear-gradient(135deg, var(--p2), var(--p1))', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', marginBottom: 16 }}>{item.n}</div>
                <h3 style={{ fontFamily: 'var(--cond)', fontWeight: 800, fontSize: 28, textTransform: 'uppercase', margin: '0 0 16px' }}>{item.titel}</h3>
                {item.tekst.split('\n\n').map((p, i) => (
                  <p key={i} style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--ink-soft)', margin: '0 0 12px' }}>{p}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Wat dit niet is */}
          <div style={{ padding: '32px 36px', background: 'var(--bg-alt)', borderRadius: 16, marginBottom: 64 }}>
            <h3 style={{ fontFamily: 'var(--cond)', fontWeight: 800, fontSize: 24, textTransform: 'uppercase', margin: '0 0 20px' }}>Wat dit niet is</h3>
            <div style={{ display: 'grid', gap: 12 }}>
              {[
                'Geen SEO-rapport van 30 pagina\'s per maand zonder dat er iets verandert',
                'Geen Google Ads-campagne die geld kost zonder dat iemand belt',
                'Geen vage cijfers over "zichtbaarheid" of "ranking"',
                'Ik meet één ding: hoeveel aanvragen krijgt jouw bedrijf',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', gap: 12, alignItems: 'start', fontSize: 15, color: 'var(--ink-soft)' }}>
                  <span style={{ color: 'var(--p1)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Verbonden met website */}
          <div style={{ padding: '32px 36px', background: 'linear-gradient(135deg, color-mix(in oklab, var(--p1) 6%, #fff), #fff)', border: '1px solid color-mix(in oklab, var(--p1) 20%, transparent)', borderRadius: 16, maxWidth: 720 }}>
            <h3 style={{ fontFamily: 'var(--cond)', fontWeight: 800, fontSize: 24, textTransform: 'uppercase', margin: '0 0 16px' }}>Verbonden met je website</h3>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--ink-soft)', margin: 0 }}>
              SEO en Ads werken alleen goed als je website ze ondersteunt. Daarom doe ik beide bij
              voorkeur samen met de site. Op een bestaande site doe ik eerst een snelheids- en
              SEO-audit. Anders verbrand je advertentiebudget op een site die niet converteert.
            </p>
          </div>
        </div>
      </section>

      {/* Prijzen */}
      <section className="section diensten">
        <div className="wrap">
          <span className="eyebrow">
            <span className="num">→</span>
            <span className="rule" /> Prijzen
          </span>
          <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {[
              { titel: 'Inbegrepen bij Pro-pakket', prijs: '€3.750 + €145/mnd', tekst: 'Google Ads-setup en maandelijks beheer inbegrepen bij het Pro-pakket. Advertentiebudget (wat je aan Google betaalt) staat los.' },
              { titel: 'Los te boeken op bestaande site', prijs: 'v.a. €350/mnd', tekst: 'Inclusief beheer, rapportage en optimalisatie. Excl. advertentiebudget. Vereist eerst een audit van je bestaande site.' },
            ].map((item) => (
              <div key={item.titel} style={{ background: '#fff', borderRadius: 16, padding: '32px', border: '1px solid var(--rule)' }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--p1)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 8 }}>{item.titel}</div>
                <div style={{ fontFamily: 'var(--cond)', fontWeight: 800, fontSize: 32, textTransform: 'uppercase', marginBottom: 12 }}>{item.prijs}</div>
                <p style={{ fontSize: 14, color: 'var(--mute)', margin: 0, lineHeight: 1.55 }}>{item.tekst}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Cta
        eyebrow="Meer aanvragen via Google?"
        title="Plan een gesprek."
        subtitle="30 minuten · vrijblijvend"
        body="We bespreken je huidige situatie, je werkgebied en wat realistisch is te bereiken met SEO en Ads."
      />

      <SiteFooter />
    </>
  );
}

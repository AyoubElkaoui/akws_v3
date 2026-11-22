import Link from 'next/link';
import type { Metadata } from 'next';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { Cta } from '@/components/Cta';
import { PageHead } from '@/components/PageHead';
import { RegioLinks } from '@/components/RegioLinks';
import { LOKALE_SEO } from '@/lib/dienst-steden';
import { buildMetadata, breadcrumbSchema, serviceSchema, faqSchema } from '@/lib/seo';

const FAQ_SEO = [
  { q: 'Wat is het verschil tussen SEO en Google Ads?', a: 'SEO is de lange termijn: je bouwt gratis, duurzaam verkeer op door hoger in de organische resultaten te komen. Dat kost maanden, maar blijft. Google Ads is direct: je betaalt per klik en staat meteen bovenaan, maar het verkeer stopt zodra je de campagne uitzet. De sterkste aanpak combineert beide.' },
  { q: 'Hoe lang duurt het voordat ik resultaat zie?', a: 'Met Google Ads heb je binnen dagen de eerste klikken en aanvragen. Met SEO praat je over maanden: lokale SEO en een goed Google Bedrijfsprofiel laten meestal binnen enkele maanden verbetering zien in de lokale resultaten. We zetten daarom vaak Ads in om het gat te overbruggen terwijl de SEO rijpt.' },
  { q: 'Wat kost een Google Ads-campagne?', a: 'Beheer kost €195 per maand, inclusief conversiemeting en maandrapport. Op een bestaande site beginnen we met een audit en opzet van €395 eenmalig. Het advertentiebudget dat je aan Google betaalt staat daar los van: voor lokaal werk begin je realistisch met €300 tot €600 per maand.' },
  { q: 'Kom ik ook in de lokale top 3 van Google?', a: 'Dat is precies het doel van lokale SEO. Met een volledig ingericht Google Bedrijfsprofiel, lokale landingspagina’s per stad en actief om reviews vragen, werk je toe naar dat kaartje met drie bedrijven bovenaan — waar de meeste klikken naartoe gaan.' },
  { q: 'Kan ik alleen Ads laten draaien op mijn bestaande site?', a: 'Soms wel, soms niet. Een advertentie stuurt bezoekers naar je site; als die traag is of slecht converteert, verbrand je geld. Daarom checken we eerst je huidige site. Is die qua snelheid en mobiel in orde, dan kunnen we los Ads doen; zo niet, dan is een betere basis eerst slimmer.' },
  { q: 'Hoe weet ik of het werkt?', a: 'We meten leads, geen ijdelheidscijfers. Met conversie-tracking op telefoontjes en formulieren zie je maandelijks precies hoeveel aanvragen je campagne oplevert en wat een aanvraag je kost. Geen vaag "meer bereik", maar concrete klussen.' },
];

export const metadata: Metadata = buildMetadata({
  title: 'SEO & Google Ads voor het MKB | Lokaal vindbaar | AKWS',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema('SEO en Google Ads')) }}
      />

      <PageHead
        crumbs={[{ href: '/', label: 'Home' }, { href: '/diensten', label: 'Diensten' }, { label: 'SEO & Google Ads' }]}
        chip="Lokaal SEO · Google Ads · Meten · Rapportage"
        title="SEO & Google Ads voor het MKB."
        subtitle="Vindbaar in je werkgebied. Advertenties die geld opleveren in plaats van verbranden."
      />

      <section className="section over">
        <div className="wrap">
          <p style={{ fontSize: 19, lineHeight: 1.65, color: 'var(--ink-soft)', maxWidth: 800, marginBottom: 64 }}>
            SEO en Google Ads zijn twee verschillende dingen die elkaar versterken. SEO bouwt zichtbaarheid
            die je niet kunt kopen. Ads kopen zichtbaarheid voor zoekwoorden waar SEO te traag werkt.
            Voor een bedrijf dat in een eigen regio werkt is de combinatie nagenoeg altijd de juiste mix.
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
                <div style={{ fontFamily: 'var(--cond)', fontWeight: 800, fontSize: 35, lineHeight: 0.9, background: 'linear-gradient(135deg, var(--p2), var(--p1))', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', marginBottom: 16 }}>{item.n}</div>
                <h3 style={{ fontFamily: 'var(--cond)', fontWeight: 800, fontSize: 24, margin: '0 0 16px' }}>{item.titel}</h3>
                {item.tekst.split('\n\n').map((p, i) => (
                  <p key={i} style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--ink-soft)', margin: '0 0 12px' }}>{p}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Wat dit niet is */}
          <div style={{ padding: '32px 36px', background: 'var(--bg-alt)', borderRadius: 16, marginBottom: 64 }}>
            <h3 style={{ fontFamily: 'var(--cond)', fontWeight: 800, fontSize: 20, margin: '0 0 20px' }}>Wat dit niet is</h3>
            <div style={{ display: 'grid', gap: 12 }}>
              {[
                'Geen SEO-rapport van 30 pagina\'s per maand zonder dat er iets verandert',
                'Geen Google Ads-campagne die geld kost zonder dat iemand belt',
                'Geen vage cijfers over "zichtbaarheid" of "ranking"',
                'We meten één ding: hoeveel aanvragen krijgt jouw bedrijf',
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
            <h3 style={{ fontFamily: 'var(--cond)', fontWeight: 800, fontSize: 20, margin: '0 0 16px' }}>Verbonden met je website</h3>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--ink-soft)', margin: 0 }}>
              SEO en Ads werken alleen goed als je website ze ondersteunt. Daarom doen we beide bij
              voorkeur samen met de site. Op een bestaande site doen we eerst een snelheids- en
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
              { titel: 'Samen met een nieuwe website', prijs: 'vanaf €2.495 + €195 p/m', tekst: 'Website met lokale pagina\'s, Google Ads-setup en maandelijks beheer, hosting en onderhoud. Advertentiebudget (wat je aan Google betaalt) staat los.' },
              { titel: 'Los op een bestaande site', prijs: '€395 + €195 p/m', tekst: 'Eerst een audit en opzet van €395 eenmalig, daarna beheer, rapportage en optimalisatie voor €195 per maand. Excl. advertentiebudget.' },
              { titel: 'Lokale SEO uitbreiden', prijs: '€149 per pagina', tekst: 'Extra pagina\'s per dienst en plaats met eigen tekst, structured data en interne links. Google Bedrijfsprofiel inrichten: €195 eenmalig.' },
            ].map((item) => (
              <div key={item.titel} style={{ background: '#fff', borderRadius: 16, padding: '32px', border: '1px solid var(--rule)' }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--p1)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 8 }}>{item.titel}</div>
                <div style={{ fontFamily: 'var(--cond)', fontWeight: 800, fontSize: 27, marginBottom: 12 }}>{item.prijs}</div>
                <p style={{ fontSize: 14, color: 'var(--mute)', margin: 0, lineHeight: 1.55 }}>{item.tekst}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section over" style={{ paddingTop: 60, paddingBottom: 80 }}>
        <div className="wrap">
          <span className="eyebrow">
            <span className="num">→</span>
            <span className="rule" /> Veelgestelde vragen over SEO &amp; Google Ads
          </span>
          <div style={{ marginTop: 40, display: 'grid', gap: 14, maxWidth: 920 }}>
            {FAQ_SEO.map((f) => (
              <details key={f.q} style={{ background: '#fff', borderRadius: 14, border: '1px solid var(--rule)', overflow: 'hidden' }}>
                <summary style={{ padding: '24px 28px', cursor: 'pointer', fontFamily: 'var(--cond)', fontWeight: 700, fontSize: 19, letterSpacing: '.005em', display: 'flex', justifyContent: 'space-between', alignItems: 'center', listStyle: 'none' }}>
                  {f.q}
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 14, color: 'var(--p1)', flexShrink: 0, marginLeft: 16 }}>+</span>
                </summary>
                <div style={{ padding: '0 28px 24px', fontSize: 16, lineHeight: 1.6, color: 'var(--ink-soft)' }}>{f.a}</div>
              </details>
            ))}
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQ_SEO)) }}
        />
      </section>

      <RegioLinks dienst={LOKALE_SEO} />

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

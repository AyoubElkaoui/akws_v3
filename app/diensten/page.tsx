import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { PageHead } from '@/components/PageHead';
import { Cta } from '@/components/Cta';
import { DIENSTEN, PRIJZEN } from '@/lib/data';
import { buildMetadata, breadcrumbSchema, serviceSchema } from '@/lib/seo';

// Unsplash foto's per dienst (royalty-free, credit in footer)
const DIENST_IMAGES: Record<string, string> = {
  '01': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80', // laptop webdesign
  '02': 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=900&q=80',    // monitor met Google Analytics dashboard
  '03': 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=900&q=80',    // code op scherm
  '04': 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&q=80',    // clean werkruimte met monitor en devices
};

export const metadata: Metadata = buildMetadata({
  title: 'Diensten — Websites, SEO en software voor installateurs | AKWS',
  description:
    'Vier diensten, één freelancer. Websites, Google Ads, maatwerk software en onderhoud voor installatiebedrijven. Vaste prijzen, geen verrassingen.',
  path: '/diensten',
});

export default function DienstenPage() {
  return (
    <>
      <SiteNav active="/diensten" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Diensten', href: '/diensten' },
        ])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema('Webontwikkeling voor installatiebedrijven', {
          name: 'Websites die leads opleveren',
          url: '/diensten/websites',
          description: 'Snelle, mobiel-first websites gebouwd op Next.js voor installatiebedrijven. Lokale SEO, AVG-proof, vaste prijs.',
        })) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema('SEO en online adverteren voor installatiebedrijven', {
          name: 'SEO & Google Ads',
          url: '/diensten/seo-en-google-ads',
          description: 'Lokale SEO en Google Ads voor installateurs. Vindbaar in je werkgebied, leads meten, maandelijkse rapportage.',
        })) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema('Maatwerk software voor installatiebedrijven', {
          name: 'Maatwerk software',
          url: '/diensten/maatwerk-software',
          description: 'Op maat gemaakte software: urenregistratie, werkbonnen, koppelingen. Gebouwd rond hoe jouw bedrijf werkt.',
        })) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema('Website onderhoud en support voor installatiebedrijven', {
          name: 'Onderhoud & support',
          url: '/diensten/onderhoud',
          description: 'Maandelijks onderhoud, updates, hosting en support. Eén aanspreekpunt voor alles wat na de livegang komt.',
        })) }}
      />

      <PageHead
        crumbs={[{ href: '/', label: 'Home' }, { label: 'Diensten' }]}
        chip="Vier modules, één aanspreekpunt"
        title="Diensten."
        subtitle="Begin met een website. Voeg software toe wanneer het uitkomt. Eén freelancer, één factuur, één telefoonnummer."
      >
        <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {DIENSTEN.map((d) => (
            <Link key={d.n} href={`#m${d.n}`} className="chip">
              {d.n} · {d.titel}
            </Link>
          ))}
        </div>
      </PageHead>

      <style>{`
        .dienst-deep{padding:100px 0;border-bottom:1px solid var(--rule);position:relative}
        .dienst-deep:nth-child(even){background:var(--bg-alt)}
        .dienst-deep .grid{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center}
        .dienst-deep:nth-child(even) .grid{direction:rtl}
        .dienst-deep:nth-child(even) .grid > *{direction:ltr}
        .dienst-deep .visual{height:480px;border-radius:18px;background:linear-gradient(135deg, color-mix(in oklab, var(--p1) 18%, var(--bg-alt)) 0%, var(--bg-alt) 100%);position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center}
        .dienst-deep .visual::before{content:'';position:absolute;inset:0;background-image:repeating-linear-gradient(135deg, rgba(20,16,28,.05) 0, rgba(20,16,28,.05) 1px, transparent 1px, transparent 14px)}
        .dienst-deep .visual-label{position:relative;font-family:var(--mono);font-size:11px;color:var(--mute);letter-spacing:.08em;text-transform:uppercase}
        .dienst-deep .num{font-family:var(--cond);font-weight:900;font-size:120px;line-height:.9;background:linear-gradient(135deg, var(--p2), var(--p1) 50%, var(--p3));-webkit-background-clip:text;background-clip:text;color:transparent;letter-spacing:-.04em;margin-bottom:12px}
        .dienst-deep h2{font-family:var(--cond);font-weight:800;font-size:56px;letter-spacing:-.02em;line-height:.98;text-transform:uppercase;margin:0 0 20px}
        .dienst-deep .deck{font-size:17px;line-height:1.65;color:var(--ink-soft);margin:0 0 28px;max-width:520px}
        .dienst-deep .features{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:28px}
        .dienst-deep .feat{display:flex;gap:10px;align-items:start;font-size:14px;color:var(--ink-soft);line-height:1.5}
        .dienst-deep .feat .ic{width:22px;height:22px;border-radius:7px;background:color-mix(in oklab, var(--p1) 12%, #fff);color:var(--p1);display:inline-flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0;box-shadow:inset 0 0 0 1px color-mix(in oklab, var(--p1) 20%, transparent)}
        .dienst-deep .price-strip{display:flex;align-items:center;gap:24px;padding-top:24px;border-top:1px solid var(--rule);flex-wrap:wrap}
        .dienst-deep .price-strip .lbl{font-family:var(--mono);font-size:11px;color:var(--mute);letter-spacing:.08em;text-transform:uppercase}
        .dienst-deep .price-strip .v{font-family:var(--cond);font-weight:800;font-size:28px;text-transform:uppercase;letter-spacing:.005em}
        @media(max-width:768px){
          .dienst-deep .grid{grid-template-columns:1fr!important;direction:ltr!important}
          .dienst-deep .grid > *{direction:ltr!important}
          .dienst-deep h2{font-size:40px}
          .dienst-deep .num{font-size:80px}
          .dienst-deep .features{grid-template-columns:1fr}
        }
      `}</style>

      {DIENSTEN.map((d) => (
        <section className="dienst-deep" id={`m${d.n}`} key={d.n}>
          <div className="wrap">
            <div className="grid">
              <div>
                <div className="num">{d.n}</div>
                <span className="eyebrow">
                  <span className="rule" /> {d.sub}
                </span>
                <h2>{d.titel}.</h2>
                <p className="deck">{d.deepDeck}</p>
                <div className="features">
                  {d.features.map((f) => (
                    <div className="feat" key={f}>
                      <span className="ic">✓</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <div className="price-strip">
                  <div>
                    <div className="lbl">Prijs</div>
                    <div className="v">{d.price.v}</div>
                  </div>
                  <div>
                    <div className="lbl">Maandelijks</div>
                    <div className="v">{d.price.m}</div>
                  </div>
                  <div>
                    <div className="lbl">Doorlooptijd</div>
                    <div className="v">{d.price.d}</div>
                  </div>
                </div>
              </div>
              <div className="visual" style={{ position: 'relative', overflow: 'hidden' }}>
                {DIENST_IMAGES[d.n] ? (
                  <>
                    <Image
                      src={DIENST_IMAGES[d.n]}
                      alt={d.titel}
                      fill
                      sizes="(max-width:768px) 100vw, 50vw"
                      style={{ objectFit: 'cover' }}
                      priority={d.n === '01' || d.n === '02'}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(124,58,237,.15) 0%, rgba(0,0,0,.1) 100%)' }} />
                  </>
                ) : (
                  <span className="visual-label">{d.titel.toLowerCase()}</span>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Pakketten */}
      <section className="section prijzen" style={{ borderTop: '1px solid var(--rule)' }}>
        <div className="wrap">
          <span className="eyebrow">
            <span className="num">→</span>
            <span className="rule" /> Pakketten
          </span>
          <div className="section-head" style={{ marginTop: 24 }}>
            <h2>Of kies een pakket.<em>/ losse modules of alles-in-één.</em></h2>
            <p className="lead">
              Begin klein en breid uit, of pak meteen de complete digitale werkplaats. Beide zijn prima.
              Alle prijzen exclusief 21% BTW.
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
                  {p.bullets.map((b) => (
                    <li key={b}>
                      <span className="v">✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact"><button type="button">{p.cta} →</button></Link>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: 24, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--mute)', letterSpacing: '.06em' }}>
            Alle prijzen exclusief 21% BTW. Onderhoudscontract is verplicht onderdeel van elk traject.
          </p>
        </div>
      </section>

      <Cta
        title="Klaar om te starten?"
        subtitle="30 minuten kennismaking, vrijblijvend"
        body="Ik kijk samen met jou welke dienst of modules bij jouw bedrijf passen. Eerlijk advies, ook als ik niet de juiste partij blijk."
      />

      <SiteFooter />
    </>
  );
}

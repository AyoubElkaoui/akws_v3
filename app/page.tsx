import Image from "next/image";
import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Cta } from "@/components/Cta";
import { BRAND, BRANCHES, CASES, CASE_DETAILS, PRIJZEN } from "@/lib/data";
import { buildMetadata, faqSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Website & software laten maken voor het MKB | AK Web Solutions Baarn",
  description:
    "Websites, webshops en software op maat voor het MKB in Midden-Nederland: van kapper en installateur tot zorg en IT. Vaste prijs vooraf, website vanaf €1.495.",
  path: "/",
});

const HOME_FAQ = [
  {
    q: "Voor wat voor bedrijven werk je?",
    a: "Voor het MKB: van loodgieter, aannemer en transportbedrijf tot kapper, praktijk, administratiekantoor, IT-bedrijf en winkel. Websites én software, allebei als hoofdvak. Vooral in Midden-Nederland, op afstand in heel Nederland.",
  },
  {
    q: "Wat kost een website?",
    a: "Een compacte website begint bij €1.495, een uitgebreide site met pagina's per dienst en plaats zit meestal tussen €2.000 en €3.500. Hosting en onderhoud kost €49 per maand. Na een gratis kennismaking krijg je binnen drie werkdagen een vaste prijs op papier, zonder verrassingen achteraf.",
  },
  {
    q: "Hoe snel is mijn site live?",
    a: "Reken op drie tot vier weken van akkoord tot livegang, met elke week een demo zodat je kunt bijsturen. Komt er Google Ads of maatwerk software bij, dan plannen we dat apart.",
  },
  {
    q: "Wat als ik al een administratiepakket heb?",
    a: "Dan koppel ik ermee: Snelstart, Exact, Moneybird of een ERP-pakket zoals Syntess. Liever houden wat werkt dan opnieuw beginnen.",
  },
];

const WEBSITE_CASES = ["ad-loodgietersbedrijf", "mkh-bouw", "zando-transport"];
const SOFTWARE_CASES = ["facturatie-app", "voorraad-app", "financieel-dashboard", "itflow"];

const DIENSTEN_KORT = [
  {
    href: "/diensten/websites",
    t: "Websites die aanvragen opleveren",
    d: "Snel, mobiel-first en gebouwd rond één doel: dat een klant belt of een offerte aanvraagt.",
    icon: <><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M3 9h18" /><path d="M8 21h8" /></>,
  },
  {
    href: "/diensten/seo-en-google-ads",
    t: "Lokale SEO & Google Ads",
    d: "Pagina's per dienst en plaats, je Google Bedrijfsprofiel op orde en Ads voor spoed- en seizoenswerk.",
    icon: <><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.5-4.5" /></>,
  },
  {
    href: "/diensten/maatwerk-software",
    t: "Maatwerk software",
    d: "Urenregistratie, voorraad, dashboards of een koppeling met je administratie. Vaste prijs per fase.",
    icon: <><path d="M8 7l-5 5 5 5" /><path d="M16 7l5 5-5 5" /></>,
  },
  {
    href: "/diensten/onderhoud",
    t: "Onderhoud & support",
    d: "Hosting, updates, beveiliging en kleine wijzigingen. Eén vast aanspreekpunt, reactie binnen één werkdag.",
    icon: <><path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z" /><path d="M9 12l2 2 4-4" /></>,
  },
];

const STAPPEN = [
  { n: "01 · 30 minuten", t: "Kennismaking", d: "Vrijblijvend. Wat loopt er vast en wat moet de site of software voor je opleveren?" },
  { n: "02 · binnen 3 werkdagen", t: "Vast bod", d: "Prijs, planning en wat er wel en niet in zit, op papier." },
  { n: "03 · 3–4 weken", t: "Bouw met weekdemo", d: "Elke week zie je de vooruitgang en stuur je bij." },
  { n: "04 · doorlopend", t: "Live & meten", d: "Live, Google op orde, en je ziet wat je site oplevert." },
];

function Check({ color = "var(--ok)" }: { color?: string }) {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}

function detail(slug: string) {
  return CASE_DETAILS.find((d) => d.slug === slug);
}

export default function HomePage() {
  const websites = WEBSITE_CASES.map((s) => CASES.find((c) => c.slug === s)!).filter(Boolean);
  const software = SOFTWARE_CASES.map((s) => CASES.find((c) => c.slug === s)!).filter(Boolean);

  return (
    <>
      <SiteNav />

      {/* Hero */}
      <section className="v4-hero">
        <div className="wrap v4-hero-grid">
          <div className="v4-hero-copy">
            <span className="v4-pill">
              <span className="dot" /> Websites &amp; software voor het MKB · Midden-Nederland
            </span>
            <h1>
              Een website die de telefoon laat <span>rinkelen</span>.
            </h1>
            <p className="v4-hero-sub">
              Ik bouw snelle websites die gevonden worden, en software op maat
              die het werk erachter makkelijker maakt. Voor ondernemers van
              kapper tot installateur. Gemeten op aanvragen, niet op mooie plaatjes.
            </p>
            <div className="v4-actions">
              <Link href="/contact" className="btn btn-primary">
                Plan een gratis gesprek <span className="arrow">→</span>
              </Link>
              <Link href="/cases" className="btn btn-ghost">
                Bekijk mijn werk
              </Link>
            </div>
            <div className="v4-checks">
              <span><Check />Vaste prijs vooraf</span>
              <span><Check />Live in 3–4 weken</span>
              <span><Check />Eén vast aanspreekpunt</span>
            </div>
          </div>

          <div className="v4-hero-visual" aria-label="Websites van klanten">
            <div className="v4-browser v4-b1">
              <div className="v4-browser-bar"><i /><i /><i /><span>zandotransport.nl</span></div>
              <Image src="/zando-transport/screen-home.jpg" alt="Website van Zando Transport" width={1280} height={800} sizes="(max-width: 900px) 70vw, 420px" />
            </div>
            <div className="v4-browser v4-b2">
              <div className="v4-browser-bar"><i /><i /><i /><span>mkhbouw.nl</span></div>
              <Image src="/mkh-bouw/home-v2.jpg" alt="Website van MKH Bouw" width={1424} height={890} sizes="(max-width: 900px) 70vw, 420px" />
            </div>
            <div className="v4-browser v4-b3">
              <div className="v4-browser-bar"><i /><i /><i /><span>adloodgietersbedrijf.nl</span></div>
              <Image src="/ad-loodgietersbedrijf/home-v4.jpg" alt="Website van AD Loodgietersbedrijf" width={1440} height={900} sizes="(max-width: 900px) 70vw, 420px" priority />
            </div>
            <div className="v4-stat-float">
              <span className="k">AD Loodgieters · Google</span>
              <span className="v">
                Pagina 1
                <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--ok)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 17l6-6 4 4 6-7" /><path d="M14 8h6v6" /></svg>
              </span>
              <span className="d">op &ldquo;loodgieter Maarssen&rdquo;, &ldquo;Bunnik&rdquo; en &ldquo;Harmelen&rdquo;</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bewijs */}
      <section className="v4-proof" aria-label="Resultaten">
        <div className="wrap v4-proof-grid">
          <div className="v4-proof-item">
            <span className="k">13×</span>
            <span className="t">meer vertoningen in Google</span>
            <span className="s">AD Loodgieters · ~100 → 1.311 per dag (nov 2026)</span>
          </div>
          <div className="v4-proof-item">
            <span className="k">70</span>
            <span className="t">lokale dienstpagina&apos;s live</span>
            <span className="s">MKH Bouw · 10 diensten × 7 plaatsen</span>
          </div>
          <div className="v4-proof-item">
            <span className="k">1</span>
            <span className="t">systeem voor tickets, voorraad en assets</span>
            <span className="s">ITflow · verving Zoho Desk</span>
          </div>
          <div className="v4-proof-item">
            <span className="k">{CASES.length}</span>
            <span className="t">websites en apps gebouwd</span>
            <span className="s">Van loodgieter tot spoedkoerier</span>
          </div>
        </div>
      </section>

      {/* Klanten */}
      <section className="v4-clients" aria-label="Klanten">
        <div className="wrap v4-clients-row">
          <span className="lbl">Gebouwd voor onder andere</span>
          <div className="names">
            <span>AD Loodgieters</span>
            <span>MKH Bouw</span>
            <span>Zando Transport</span>
            <span>R.I.N. B.V.</span>
            <span>MBA-installaties</span>
            <span>ITFIN</span>
          </div>
        </div>
      </section>

      {/* Websites */}
      <section className="v4-sec">
        <div className="wrap">
          <div className="v4-sec-head">
            <div className="l">
              <span className="v4-kicker">Websites</span>
              <h2 className="v4-h2">Echte sites voor echte ondernemers.</h2>
            </div>
            <Link href="/cases" className="v4-more">Alle cases →</Link>
          </div>
          <div className="v4-work">
            {websites.map((c) => {
              const d = detail(c.slug);
              return (
                <Link href={`/cases/${c.slug}`} className="v4-work-card" key={c.slug}>
                  <div className="v4-work-img">
                    {d?.images?.cover && (
                      <Image src={d.images.cover} alt={`Website van ${c.naam}`} width={1440} height={1080} sizes="(max-width: 900px) 100vw, 400px" />
                    )}
                  </div>
                  <span className="v4-work-meta">{d?.sector ?? c.branche} · {c.locatie} · {c.meta}</span>
                  <span className="v4-work-title">{c.naam}</span>
                  <span className="v4-work-res">{c.excerpt}</span>
                  <span className="v4-work-link">Bekijk case →</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Software */}
      <section className="v4-sec alt">
        <div className="wrap">
          <div className="v4-sec-head">
            <div className="l">
              <span className="v4-kicker">Maatwerk software</span>
              <h2 className="v4-h2">Software die het werk achter de website regelt.</h2>
              <p className="v4-lead">
                Facturatie, voorraad, uren en cijfers: gebouwd op hoe een bedrijf
                werkt, gekoppeld aan wat er al is.
              </p>
            </div>
            <Link href="/diensten/maatwerk-software" className="v4-more">Meer over maatwerk →</Link>
          </div>
          <div className="v4-sw">
            {software.map((c) => {
              const d = detail(c.slug);
              return (
                <Link href={`/cases/${c.slug}`} className="v4-sw-card" key={c.slug}>
                  {d?.images?.cover && (
                    <Image src={d.images.cover} alt={`Scherm van ${c.naam}`} width={1440} height={900} sizes="(max-width: 900px) 100vw, 300px" />
                  )}
                  <div className="v4-sw-body">
                    <span className="t">{c.naam}</span>
                    <span className="d">{c.excerpt}</span>
                    {d?.demoNote && <span className="demo">Voorbeelddata</span>}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Weekrapport */}
      <section className="v4-sec">
        <div className="wrap v4-portal">
          <div className="v4-portal-copy">
            <span className="v4-kicker">Klantportaal · binnenkort</span>
            <h2 className="v4-h2">Elke week zwart-op-wit wat je website opleverde.</h2>
            <p className="v4-lead">
              Geen grafieken vol bouncepercentages. Gewoon hoeveel mensen belden,
              appten of een offerte vroegen, en wat je kunt doen om er volgende
              week meer te krijgen.
            </p>
            <ul className="v4-list">
              <li><Check color="var(--p1)" />Telefoontjes, WhatsApp-klikken en offerteaanvragen</li>
              <li><Check color="var(--p1)" />Op welke zoektermen je gevonden wordt, en op welke plek</li>
              <li><Check color="var(--p1)" />Snelheid, uptime en SSL in één oogopslag</li>
              <li><Check color="var(--p1)" />Elke week één concrete tip voor meer aanvragen</li>
            </ul>
          </div>
          <div className="v4-report" aria-label="Voorbeeld van een weekrapport">
            <div className="v4-report-head">
              <div>
                <div className="s">Weekrapport · week 47</div>
                <div className="t">Loodgietersbedrijf Voorbeeld</div>
              </div>
              <span className="v4-tag-demo">Voorbeeld · fictieve cijfers</span>
            </div>
            <div className="v4-kpis">
              <div className="v4-kpi"><span className="l">Telefoontjes</span><span className="n">14</span><span className="d">↑ 3 t.o.v. vorige week</span></div>
              <div className="v4-kpi"><span className="l">Offertes</span><span className="n">5</span><span className="d">↑ 2 t.o.v. vorige week</span></div>
              <div className="v4-kpi"><span className="l">Uit Google</span><span className="n">412</span><span className="d">↑ 18% bezoekers</span></div>
            </div>
            <div className="v4-rank">
              <span className="h">Positie in Google</span>
              <div><span>loodgieter maarssen</span><b>#3</b></div>
              <div><span>lekkage utrecht</span><b>#7</b></div>
              <div><span>wc verstopt maarssen</span><b>#5</b></div>
            </div>
            <div className="v4-status">
              <span><i />Site online 100%</span>
              <span><i />SSL geldig</span>
              <span><i />Snelheid 96/100</span>
            </div>
            <div className="v4-tip">
              <b>Tip van de week:</b> &ldquo;cv-ketel vervangen&rdquo; wordt veel gezocht in je regio en je staat op plek 14. Met een eigen pagina kun je hier naar pagina 1.
            </div>
          </div>
        </div>
      </section>

      {/* Diensten */}
      <section className="v4-sec alt">
        <div className="wrap">
          <div className="v4-sec-head">
            <div className="l">
              <span className="v4-kicker">Diensten</span>
              <h2 className="v4-h2">Alles wat je online nodig hebt, bij één persoon.</h2>
            </div>
            <Link href="/diensten" className="v4-more">Alle diensten →</Link>
          </div>
          <div className="v4-cards4">
            {DIENSTEN_KORT.map((d) => (
              <Link href={d.href} className="v4-card" key={d.href}>
                <span className="v4-ico">
                  <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{d.icon}</svg>
                </span>
                <span className="t">{d.t}</span>
                <span className="d">{d.d}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Voor wie */}
      <section className="v4-sec">
        <div className="wrap">
          <div className="v4-sec-head">
            <div className="l">
              <span className="v4-kicker">Voor wie</span>
              <h2 className="v4-h2">Elke branche een eigen aanpak.</h2>
              <p className="v4-lead">
                Een kapper wil online boekingen, een loodgieter belletjes, een
                praktijk aanmeldingen en een IT-bedrijf vertrouwen. Daarom heeft
                elke branche hier een eigen pagina met wat er voor jullie werkt.
              </p>
            </div>
          </div>
          <div className="v4-branches">
            {BRANCHES.map((b) => (
              <Link href={`/voor-wie/${b.slug}`} key={b.slug}>{b.naam}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pakketten */}
      <section className="v4-sec alt">
        <div className="wrap">
          <div className="v4-sec-head">
            <div className="l">
              <span className="v4-kicker">Pakketten</span>
              <h2 className="v4-h2">Duidelijke afspraken. Geen uurtje-factuurtje.</h2>
              <p className="v4-lead">
                Je krijgt na een gratis kennismaking altijd een vast bod op papier.
                Dat is wat je betaalt.
              </p>
            </div>
            <Link href="/prijzen" className="v4-more">Pakketten vergelijken →</Link>
          </div>
          <div className="v4-pricing">
            {PRIJZEN.map((p) => (
              <div className={`v4-plan${p.feat ? " feat" : ""}`} key={p.naam}>
                <div>
                  <div className="n">
                    {p.naam}
                    {p.feat && <span className="badge">Aanrader</span>}
                  </div>
                  <div className="s">{p.sub}</div>
                </div>
                <div>
                  <div className="p">{p.prijs}</div>
                  <div className="pe">{p.eenh} · excl. btw</div>
                </div>
                <ul>
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <Link href="/contact" className={`btn ${p.feat ? "btn-primary" : "btn-ghost"}`}>
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Werkwijze */}
      <section className="v4-sec">
        <div className="wrap">
          <div className="v4-sec-head">
            <div className="l">
              <span className="v4-kicker">Werkwijze</span>
              <h2 className="v4-h2">Van eerste gesprek tot je eerste aanvraag.</h2>
            </div>
            <Link href="/werkwijze" className="v4-more">Hoe ik werk →</Link>
          </div>
          <div className="v4-steps">
            {STAPPEN.map((s) => (
              <div className="v4-step" key={s.t}>
                <span className="n">{s.n}</span>
                <span className="t">{s.t}</span>
                <span className="d">{s.d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Over */}
      <section className="v4-sec alt">
        <div className="wrap v4-about">
          <div className="v4-about-photo" aria-hidden="true">
            <span className="mono">AE</span>
          </div>
          <div className="v4-about-copy">
            <span className="v4-kicker">Over</span>
            <h2 className="v4-h2">Je praat met degene die je site bouwt.</h2>
            <p className="v4-lead">
              Ik ben {BRAND.founder}, webdeveloper uit {BRAND.location}. Met een
              achtergrond als junior accountmanager en in HBO Software Development
              denk ik eerst vanuit jouw klanten, en bouw ik daarna. Geen
              accountmanager ertussen, niets uitbesteed.
            </p>
            <div className="v4-contacts">
              <a href={`tel:${BRAND.phoneRaw}`}>{BRAND.phone.replace(/ — /g, " ")}</a>
              <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
              <a href={BRAND.whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <Link href="/over">Mijn verhaal →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="v4-sec">
        <div className="wrap">
          <div className="v4-sec-head">
            <div className="l">
              <span className="v4-kicker">Veelgestelde vragen</span>
              <h2 className="v4-h2">Misschien staat je vraag er al tussen.</h2>
            </div>
          </div>
          <div className="v4-faq">
            {HOME_FAQ.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(HOME_FAQ)) }}
        />
      </section>

      <Cta title="Benieuwd wat jouw website kan opleveren?" subtitle="30 minuten, vrijblijvend" variant="form" />

      <SiteFooter />
    </>
  );
}

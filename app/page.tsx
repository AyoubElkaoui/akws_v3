import Image from "next/image";
import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Cta } from "@/components/Cta";
import {
  USPS,
  BRANCHES,
  DIENSTEN,
  PROCES,
  CASES,
  CASE_DETAILS,
  REVIEWS,
  PRIJZEN,
  STATS,
} from "@/lib/data";
import { buildMetadata, faqSchema } from "@/lib/seo";
import { CountUp } from "@/components/CountUp";

export const metadata = buildMetadata({
  title: "Websites & software voor installateurs | AK Web Solutions Baarn",
  description:
    "Freelance webdeveloper voor installatiebedrijven in Midden-Nederland. Websites, Google Ads en maatwerk software. Vaste prijzen, geen verrassingen.",
  path: "/",
});

const HOME_FAQ = [
  {
    q: "Werken jullie alleen voor installatiebedrijven?",
    a: "Ja. Ik richt me specifiek op installatiebedrijven, voornamelijk in Midden-Nederland (remote door heel NL mogelijk). Die focus maakt dat ik de branche ken en geen uitleg vooraf nodig heb.",
  },
  {
    q: "Wat kost een website?",
    a: "Elk bedrijf is anders, dus werk ik met een offerte op maat in plaats van vaste pakketprijzen. Na een gratis kennismaking van 30 minuten weet ik wat je nodig hebt en krijg je een vast bod op papier — geen uurtje-factuurtje, geen verrassingen achteraf.",
  },
  {
    q: "Hoe snel is mijn site live?",
    a: "Het Starter-pakket is gemiddeld 3 weken van kennismaking tot live. Het Pro-pakket duurt 4 tot 5 weken door de extra pagina's en Google Ads-setup.",
  },
  {
    q: "Wat als ik al een administratiepakket heb?",
    a: "Snelstart, Exact, Moneybird: ik koppel ermee. Liever houden wat werkt dan opnieuw beginnen.",
  },
];

export default function HomePage() {
  return (
    <>
      <SiteNav />

      {/* Hero */}
      <section className="hero">
        <div className="hero-bg">
          <div className="orb1" />
          <div className="orb2" />
        </div>
        <div className="wrap">
          <div className="hero-meta">
            <span className="live">
              <span className="dot" /> Beschikbaar voor nieuwe projecten
            </span>
            <span>Freelance webdeveloper · Baarn</span>
            <span>akwebsolutions.nl</span>
          </div>

          <div className="hero-grid">
            <div>
              <span className="chip chip-purple">
                Voor installatiebedrijven door heel Nederland
              </span>
              <h1>
                Websites &amp;
                <br />
                software voor
                <br />
                <span className="gradient-text">installateurs</span>.
                <em>/ Geen onzin. Wel resultaat.</em>
              </h1>
            </div>
            <div style={{ paddingBottom: 24 }}>
              <p className="hero-sub">
                Eén freelancer voor je website, leads en de software die jouw
                werk eenvoudiger maakt. Gemaakt door iemand die de
                installatiebranche kent, niet door een marketingbureau dat
                zonder uitleg de mist in gaat.
              </p>
              <div className="hero-cta">
                <Link href="/contact" className="btn btn-primary">
                  Plan strategiegesprek <span className="arrow">→</span>
                </Link>
                <Link href="/cases" className="btn btn-ghost">
                  Bekijk cases
                </Link>
              </div>
              <div className="hero-note">
                30 min, vrijblijvend, geen verkooppraat
              </div>
            </div>
          </div>

          <div className="usps">
            {USPS.map((u) => (
              <div className="usp" key={u.num}>
                <div className="lbl">{u.num}</div>
                <div className="k">{u.k}</div>
                <div className="v">{u.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voor wie */}
      <section className="section branches">
        <div className="wrap">
          <span className="eyebrow">
            <span className="num">01</span>
            <span className="rule" /> Voor wie
          </span>
          <div className="section-head" style={{ marginTop: 24 }}>
            <h2>
              Ik bouw voor
              <br />
              de installatiebranche.<em>/ dat is een keuze, geen toeval.</em>
            </h2>
            <p className="lead">
              Ik ken jullie markt: spoedklussen die op zaterdagavond
              binnenkomen, planning van monteurs, urenregistratie die op de
              bouwplaats moet werken, en koppelingen met Snelstart en Exact.
              Geen uitleg vooraf nodig.
            </p>
          </div>
          <div className="branch-list">
            {BRANCHES.map((b) => (
              <Link
                href={`/voor-wie/${b.slug}`}
                className="branch"
                key={b.naam}
              >
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

      {/* Diensten */}
      <section className="section diensten">
        <div className="wrap">
          <span className="eyebrow">
            <span className="num">02</span>
            <span className="rule" /> Diensten
          </span>
          <div className="section-head" style={{ marginTop: 24 }}>
            <h2>
              Vier diensten.<em>/ één aanspreekpunt. Één factuur.</em>
            </h2>
            <p className="lead">
              Begin met een website. Voeg software toe wanneer het uitkomt.
              Alles werkt samen, niets staat op een eiland.
            </p>
          </div>

          <div className="dienst-grid">
            {DIENSTEN.map((d) => (
              <article className="dienst" key={d.n}>
                <div className="dienst-head">
                  <div className="dienst-icon">{d.n}</div>
                  <div className="dienst-meta">{d.sub}</div>
                </div>
                <h3>{d.titel}</h3>
                <p>{d.body}</p>
                <div className="dienst-tags">
                  {d.tags.map((t) => (
                    <span className="chip chip-soft" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div style={{ marginTop: 48, textAlign: "center" }}>
            <Link href="/diensten" className="btn btn-ghost">
              Alle diensten in detail →
            </Link>
          </div>
        </div>
      </section>

      {/* Werkwijze */}
      <section className="section proces">
        <div className="wrap">
          <span className="eyebrow">
            <span className="num">03</span>
            <span className="rule" /> Werkwijze
          </span>
          <div className="section-head" style={{ marginTop: 24 }}>
            <h2>
              Vijf stappen.
              <em>/ geen powerpoints, wel wekelijkse demo&apos;s.</em>
            </h2>
            <p className="lead">
              Elke week zie je vooruitgang. Geen lange stilte gevolgd door een
              grote oplevering. Wijzigingen mogen tijdens de bouw, binnen de
              afgesproken scope.
            </p>
          </div>

          <div className="proces-list">
            {PROCES.map((p) => (
              <div className="proces-row" key={p.n}>
                <div className="proces-num">{p.n}</div>
                <div className="proces-t">{p.t}</div>
                <div className="proces-s">{p.s}</div>
                <div className="proces-dur">{p.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="section cases">
        <div className="wrap">
          <span className="eyebrow">
            <span className="num">04</span>
            <span className="rule" /> Cases
          </span>
          <div className="section-head" style={{ marginTop: 24 }}>
            <h2>
              Werk dat ik trots laat zien.<em>/ eerlijk over wat is gedaan.</em>
            </h2>
            <p className="lead" style={{ color: "rgba(255,255,255,.55)" }}>
              Een selectie van projecten voor installatie- en technische
              bedrijven.
            </p>
          </div>

          {/* Omgekeerde piramide: 3 boven, 2 gecentreerd onder */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: 24,
            }}
          >
            {CASES.map((c, idx) => {
              const detail = CASE_DETAILS.find((d) => d.slug === c.slug);
              const cover = detail?.images?.cover;
              const gridColumn =
                idx < 3 ? "span 2" : idx === 3 ? "2 / span 2" : "4 / span 2";
              return (
                <Link
                  href={`/cases/${c.slug}`}
                  className="case"
                  key={c.slug}
                  style={{ gridColumn }}
                >
                  <div
                    className="case-img"
                    style={
                      cover
                        ? undefined
                        : {
                            backgroundImage: `repeating-linear-gradient(135deg, rgba(0,0,0,.08) 0, rgba(0,0,0,.08) 1px, transparent 1px, transparent 14px), ${c.gradient}`,
                          }
                    }
                  >
                    {cover && (
                      <Image
                        src={cover}
                        alt={`${c.naam} — website preview`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectFit: "cover", objectPosition: "top" }}
                      />
                    )}
                    {/* Overlay zodat tekst leesbaar blijft op foto's */}
                    {cover && (
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(180deg, rgba(0,0,0,.15) 0%, rgba(0,0,0,.5) 100%)",
                          zIndex: 1,
                        }}
                      />
                    )}
                    <span
                      className="case-tag chip chip-dark"
                      style={{ position: "relative", zIndex: 2 }}
                    >
                      {c.meta}
                    </span>
                    <div
                      className="case-result"
                      style={{ position: "relative", zIndex: 2 }}
                    >
                      <div className="lbl">Resultaat</div>
                      <div className="v">
                        {c.resultaat}
                        <br />
                        <span
                          style={{ fontSize: ".5em", letterSpacing: ".04em" }}
                        >
                          {c.resultaatSub}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="case-foot">
                    <div>
                      <div className="naam">{c.naam}</div>
                      <div className="branche">{c.branche}</div>
                    </div>
                    <span className="link">Lees case →</span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="stats" style={{ marginTop: 48 }}>
            {STATS.map((s) => (
              <div className="stat" key={s.k}>
                <CountUp value={s.k} className="k" />
                <div className="v">
                  {s.v.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < s.v.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews — conditioneel, alleen tonen als echte quotes beschikbaar */}
      {REVIEWS.length > 0 ? (
        <section className="section reviews">
          <div className="wrap">
            <span className="eyebrow">
              <span className="num">05</span>
              <span className="rule" /> Wat klanten zeggen
            </span>
            <div className="section-head" style={{ marginTop: 24 }}>
              <h2>
                Echte reacties.<em>/ niet samengesteld, niet gekocht.</em>
              </h2>
            </div>
            <div className="review-grid">
              {REVIEWS.map((r) => (
                <div className="review" key={r.n}>
                  <div className="review-stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
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
      ) : (
        // TODO: Ayoub — verwijder dit blok zodra eerste echte testimonials binnen zijn
        <section className="section reviews">
          <div className="wrap">
            <span className="eyebrow">
              <span className="num">05</span>
              <span className="rule" /> Wat klanten zeggen
            </span>
            <div
              className="section-head"
              style={{ marginTop: 24, marginBottom: 0 }}
            >
              <h2>
                Echte reacties.<em>/ binnen na de eerste opleveringen.</em>
              </h2>
              <p className="lead">
                Ik vraag actief feedback aan klanten na oplevering. Quotes
                verschijnen hier zodra ze schriftelijk akkoord hebben gegeven
                voor publicatie.
              </p>
            </div>
            <div
              style={{
                marginTop: 48,
                padding: "36px 40px",
                background: "#fff",
                borderRadius: 16,
                border: "1px solid var(--rule)",
                maxWidth: 680,
              }}
            >
              <div className="review-stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="review-q" style={{ fontSize: 17 }}>
                &quot;Ik geloof niet in verzonnen reviews. Liever drie echte
                uitspraken dan dertig die nep voelen. Dit deel vult zich
                naarmate projecten worden opgeleverd.&quot;
              </p>
              <div className="review-by">
                <div className="avatar">AE</div>
                <div>
                  <div className="n">Ayoub Elkaoui</div>
                  <div className="f">Oprichter, AK Web Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Prijzen */}
      <section className="section prijzen">
        <div className="wrap">
          <span className="eyebrow">
            <span className="num">06</span>
            <span className="rule" /> Wat het kost
          </span>
          <div className="section-head" style={{ marginTop: 24 }}>
            <h2>
              Alles op maat.<em>/ jij betaalt voor wat je nodig hebt.</em>
            </h2>
            <p className="lead">
              Geen standaardprijs die niet bij jouw bedrijf past, geen
              uurtje-factuurtje. We beginnen met een gratis kennismaking en je
              krijgt een vast bod op papier — dat is wat je betaalt.
            </p>
          </div>
          <div className="prijs-grid">
            {PRIJZEN.map((p) => (
              <div className={`prijs${p.feat ? " feat" : ""}`} key={p.naam}>
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
                <Link href="/contact" className={p.feat ? "" : ""}>
                  <button type="button">{p.cta} →</button>
                </Link>
              </div>
            ))}
          </div>
          <p
            style={{
              textAlign: "center",
              marginTop: 24,
              fontFamily: "var(--mono)",
              fontSize: 11,
              color: "var(--mute)",
              letterSpacing: ".06em",
            }}
          >
            Prijzen op maat, exclusief 21% BTW. Onderhoud is een vast onderdeel
            van elk traject. Vraag een vrijblijvende offerte aan.
          </p>
        </div>
      </section>

      {/* Over */}
      <section className="section over">
        <div className="wrap">
          <div className="over-grid">
            <div className="over-photo">
              <div className="ph">
                {/* TODO: Ayoub — vervang dit door een echte foto van jezelf */}
                <span className="ph-label">Ayoub Elkaoui / Baarn, NL</span>
                <div className="badge">
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 10,
                        color: "var(--mute)",
                        letterSpacing: ".08em",
                        textTransform: "uppercase",
                      }}
                    >
                      HBO + MBO
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--cond)",
                        fontSize: 18,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        marginTop: 2,
                      }}
                    >
                      Software & business
                    </div>
                  </div>
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 999,
                      background: "linear-gradient(135deg,var(--p2),var(--p3))",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 14,
                      fontWeight: 700,
                    }}
                  >
                    AE
                  </div>
                </div>
              </div>
            </div>
            <div>
              <span className="eyebrow">
                <span className="num">07</span>
                <span className="rule" /> Over AK
              </span>
              <h2>
                Eén gezicht.
                <br />
                <em>geen accountmanager ertussen.</em>
              </h2>
              <p>
                Ik ben <strong>Ayoub Elkaoui</strong>, freelance webdeveloper
                uit Baarn. Ik bouw websites en maatwerk software voor
                installatiebedrijven in Midden-Nederland. Mijn achtergrond is
                een combinatie van MBO Junior Accountmanager en HBO Software
                Development. Eerst leerde ik denken vanuit bedrijven en klanten,
                daarna leerde ik bouwen. Die combinatie maakt het verschil: ik
                begrijp waar jouw bedrijf vastloopt én ik kan de software maken
                die het oplost.
              </p>
              <p>
                Geen agency, geen tussenpersonen, geen uitbesteed werk in het
                buitenland. Jij praat met de developer die je site bouwt en
                onderhoudt. Dat houdt lijntjes kort en prijzen eerlijk.
              </p>
              <div className="over-foot">
                <div>
                  <div className="lbl">Bel direct</div>
                  <div className="v">06 — 85 72 23 87</div>
                </div>
                <div>
                  <div className="lbl">Mail</div>
                  <div className="v">info@akwebsolutions.nl</div>
                </div>
                <div>
                  <div className="lbl">Werkgebied</div>
                  <div className="v">Midden-NL (remote heel NL)</div>
                </div>
              </div>
              <div style={{ marginTop: 32 }}>
                <Link href="/over" className="btn btn-ghost">
                  Lees mijn verhaal →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="section over"
        style={{ paddingTop: 80, paddingBottom: 80 }}
      >
        <div className="wrap">
          <span className="eyebrow">
            <span className="num">08</span>
            <span className="rule" /> Veelgestelde vragen
          </span>
          <div
            className="section-head"
            style={{ marginTop: 24, marginBottom: 48 }}
          >
            <h2
              style={{
                fontFamily: "var(--cond)",
                fontWeight: 800,
                fontSize: 64,
                letterSpacing: "-.02em",
                lineHeight: 0.95,
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              Veelgestelde vragen.
              <em
                style={{
                  fontFamily: '"Barlow", sans-serif',
                  fontStyle: "italic",
                  fontWeight: 300,
                  textTransform: "none",
                  letterSpacing: "-.015em",
                  color: "var(--mute)",
                  fontSize: ".5em",
                  display: "block",
                  marginTop: 6,
                }}
              >
                / misschien staat het hier al.
              </em>
            </h2>
          </div>
          <div style={{ display: "grid", gap: 14, maxWidth: 920 }}>
            {HOME_FAQ.map((f) => (
              <details
                key={f.q}
                style={{
                  background: "#fff",
                  borderRadius: 14,
                  border: "1px solid var(--rule)",
                  overflow: "hidden",
                }}
              >
                <summary
                  style={{
                    padding: "24px 28px",
                    cursor: "pointer",
                    fontFamily: "var(--cond)",
                    fontWeight: 700,
                    fontSize: 22,
                    textTransform: "uppercase",
                    letterSpacing: ".005em",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    listStyle: "none",
                  }}
                >
                  {f.q}
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 14,
                      color: "var(--p1)",
                      flexShrink: 0,
                      marginLeft: 16,
                    }}
                  >
                    +
                  </span>
                </summary>
                <div
                  style={{
                    padding: "0 28px 24px",
                    fontSize: 16,
                    lineHeight: 1.6,
                    color: "var(--ink-soft)",
                  }}
                >
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema(HOME_FAQ)),
          }}
        />
      </section>

      <Cta
        title={
          <>
            Plan een
            <br />
            strategie&shy;gesprek.
          </>
        }
        variant="form"
      />

      <SiteFooter />
    </>
  );
}

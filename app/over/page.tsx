import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { Cta } from '@/components/Cta';
import { PageHead } from '@/components/PageHead';
import { BRAND } from '@/lib/data';
import { buildMetadata, breadcrumbSchema, personSchema } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Over AK Web Solutions — Webbureau uit Baarn | AKWS',
  description:
    'AK Web Solutions is een webbureau uit Baarn. We bouwen websites, webshops en software op maat voor het MKB in Midden-Nederland, met korte lijnen en een vaste prijs vooraf.',
  path: '/over',
});

const TIMELINE = [
  { yr: '2024', t: 'AK Web Solutions opgericht', s: 'Gestart in Baarn. Eerste klanten: AD Loodgietersbedrijf en MBA-installaties.' },
  { yr: '2025', t: 'Software op maat', s: 'Clockd en ITflow opgeleverd: urenregistratie en ticketsystemen voor technische bedrijven.' },
  { yr: '2026', t: 'Breed MKB', s: 'Websites, webshops en software voor bouw, transport, bandenservice, administratie en meer. Van Baarn tot Amsterdam.' },
];

const PRINCIPES = [
  { num: '01', t: 'Eerlijk over wat het kost.', s: 'Een vaste prijs op papier voordat we beginnen. Kost iets meer dan we inschatten, dan is dat ons probleem, niet het jouwe.' },
  { num: '02', t: 'Korte lijnen.', s: 'Je praat direct met wie je site of software bouwt. Geen accountmanager ertussen, geen werk dat naar het buitenland gaat.' },
  { num: '03', t: 'Eerst begrijpen, dan bouwen.', s: 'We beginnen bij hoe jouw bedrijf werkt en waar het vastloopt. Pas daarna kiezen we wat er gebouwd wordt: een website, software of allebei.' },
];

export default function OverPage() {
  return (
    <>
      <SiteNav active="/over" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Over', href: '/over' },
        ])) }}
      />

      <PageHead
        crumbs={[{ href: '/', label: 'Home' }, { label: 'Over' }]}
        chip="Webbureau · Baarn · Sinds 2024"
        title={<>Over AK Web Solutions.</>}
        subtitle="Websites, webshops en software op maat voor het MKB in Midden-Nederland. Vanuit Baarn."
      />

      {/* Wie we zijn */}
      <section className="section over">
        <div className="wrap">
          <div className="over-grid">
            <div className="over-photo">
              <div className="ph">
                {/* Tot er een foto van Ayoub is: vier echte projecten */}
                <div className="over-werk">
                  {[
                    ['/ad-loodgietersbedrijf/home-v4.jpg', 'Website AD Loodgieters'],
                    ['/zando-transport/screen-home.jpg', 'Website Zando Transport'],
                    ['/factuur-app/facturen.jpg', 'Facturatie-app'],
                    ['/mkh-bouw/home-v2.jpg', 'Website MKH Bouw'],
                  ].map(([src, alt]) => (
                    <div key={src}><Image src={src} alt={alt} fill sizes="(max-width: 900px) 50vw, 280px" style={{ objectFit: 'cover', objectPosition: 'top' }} /></div>
                  ))}
                </div>
                <div className="badge">
                  <div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--mute)', letterSpacing: '.08em', textTransform: 'uppercase' }}>
                      Sinds 2024
                    </div>
                    <div style={{ fontFamily: 'var(--cond)', fontSize: 18, fontWeight: 700, marginTop: 2 }}>
                      Websites & software
                    </div>
                  </div>
                  <div style={{ width: 42, height: 42, borderRadius: 999, background: 'linear-gradient(135deg,var(--p2),var(--p3))', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700 }}>
                    AK
                  </div>
                </div>
              </div>
            </div>
            <div>
              <span className="eyebrow">
                <span className="num">01</span>
                <span className="rule" /> Wie we zijn
              </span>
              <h2>
                Websites en software<br />
                <em>die gewoon werken.</em>
              </h2>
              <p>
                <strong>AK Web Solutions</strong> is een webbureau uit Baarn. We bouwen websites, webshops
                en software op maat voor het MKB: van installateur en aannemer tot transportbedrijf,
                bandenservice en administratiekantoor.
              </p>
              <p>
                Ontwerp, bouw, vindbaarheid in Google en onderhoud doen we in eigen huis. Daardoor heb je
                één aanspreekpunt, weet je vooraf wat het kost en hoef je niet te wachten op een
                andere partij.
              </p>
              <p>
                Geen dikke offertes of eindeloze vergaderrondes. We houden het kort, laten elke week zien
                waar we staan en leveren op wat we afspreken.
              </p>
              <div className="over-foot">
                <div><div className="lbl">Bedrijf</div><div className="v">AK Web Solutions</div></div>
                <div><div className="lbl">Gevestigd</div><div className="v">Baarn, Utrecht</div></div>
                <div><div className="lbl">Actief sinds</div><div className="v">2024</div></div>
                <div><div className="lbl">Werkgebied</div><div className="v">Midden-NL</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voor wie */}
      <section className="section diensten">
        <div className="wrap">
          <span className="eyebrow">
            <span className="num">02</span>
            <span className="rule" /> Voor wie
          </span>
          <div className="section-head" style={{ marginTop: 24, marginBottom: 48 }}>
            <h2>Van loodgieter tot kantoor.<em>en alles daartussen.</em></h2>
            <p className="lead">
              Onze klanten lijken weinig op elkaar. Wat ze delen: ze willen dat hun website en software gewoon werken.
            </p>
          </div>
          <div style={{ maxWidth: 720 }}>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--ink-soft)', marginBottom: 20 }}>
              AD Loodgietersbedrijf en MBA-installaties waren onze eerste klanten. Daarna
              kwamen een bouwbedrijf, twee transportbedrijven, een bandenzaak, een boekhouder en
              software als Clockd en ITflow. Elk bedrijf heeft een andere vraag, maar het doel is steeds
              hetzelfde: meer klanten en minder gedoe.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--ink-soft)', marginBottom: 0 }}>
              Veel MKB-bedrijven lopen tegen dezelfde dingen aan. Trage websites die aanvragen
              missen. Excel-bestanden voor planning die vastlopen. Urenregistratie die handmatig
              in een ERP gaat. Dat lossen we op: met een snelle website, een slimme koppeling of
              software die precies doet wat jouw bedrijf nodig heeft.
            </p>
          </div>
        </div>
      </section>

      {/* Principes */}
      <section className="section over">
        <div className="wrap">
          <span className="eyebrow">
            <span className="num">03</span>
            <span className="rule" /> Principes
          </span>
          <div className="section-head" style={{ marginTop: 24, marginBottom: 48 }}>
            <h2>Drie principes.<em>geen muurposters, gewoon hoe we werken.</em></h2>
          </div>
          <div className="values">
            {PRINCIPES.map((v) => (
              <div className="value" key={v.num}>
                <div className="num">{v.num}</div>
                <h3>{v.t}</h3>
                <p>{v.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tijdlijn */}
      <section className="section diensten">
        <div className="wrap">
          <span className="eyebrow">
            <span className="num">04</span>
            <span className="rule" /> Tijdlijn
          </span>
          <div className="section-head" style={{ marginTop: 24, marginBottom: 60 }}>
            <h2>Hoe het ging.<em>van de eerste klant tot nu.</em></h2>
          </div>
          <div className="timeline">
            {TIMELINE.map((t) => (
              <div className="timeline-row" key={t.yr}>
                <div className="yr">{t.yr}</div>
                <div className="t">{t.t}</div>
                <div className="s">{t.s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section over" style={{ paddingTop: 60, paddingBottom: 60 }}>
        <div className="wrap">
          <span className="eyebrow">
            <span className="num">05</span>
            <span className="rule" /> Contact
          </span>
          <div style={{ marginTop: 32, maxWidth: 680 }}>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--ink-soft)', marginBottom: 40 }}>
              Benieuwd wat we voor jouw bedrijf kunnen doen? Bel, app of mail ons. We reageren binnen
              een werkdag en plannen graag een vrijblijvend gesprek, bij jou op de zaak of online.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 24, paddingTop: 28, borderTop: '1px solid var(--rule)' }}>
              <div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--mute)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 6 }}>E-mail</div>
                <a href={`mailto:${BRAND.email}`} style={{ fontFamily: 'var(--cond)', fontWeight: 700, fontSize: 18, color: 'var(--p1)', textDecoration: 'none' }}>
                  {BRAND.email}
                </a>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--mute)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 6 }}>Gevestigd</div>
                <div style={{ fontFamily: 'var(--cond)', fontWeight: 700, fontSize: 18 }}>Baarn, Utrecht</div>
              </div>
              {BRAND.linkedin !== 'TODO_LINKEDIN' && (
                <div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--mute)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 6 }}>LinkedIn</div>
                  <a href={BRAND.linkedin} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--cond)', fontWeight: 700, fontSize: 18, color: 'var(--p1)', textDecoration: 'none' }}>
                    Profiel →
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Cta eyebrow="Kennismaken?" title="Plan een gesprek." subtitle="30 min, vrijblijvend" />

      <SiteFooter />
    </>
  );
}

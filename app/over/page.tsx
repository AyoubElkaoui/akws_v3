import Link from 'next/link';
import type { Metadata } from 'next';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { Cta } from '@/components/Cta';
import { PageHead } from '@/components/PageHead';
import { BRAND } from '@/lib/data';
import { buildMetadata, breadcrumbSchema, personSchema } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Over Ayoub Elkaoui — Freelance webdeveloper Baarn | AKWS',
  description:
    'Ayoub Elkaoui, freelance webdeveloper in Baarn. MBO Junior Accountmanager + HBO Software Development. Specialist in websites en maatwerk software voor installatiebedrijven.',
  path: '/over',
});

const TIMELINE = [
  { yr: '2019', t: 'Eerste sites gebouwd', s: 'Voor familie en vrienden. Klein, gratis, veel leren. Bevestigde dat ik dit wilde doen.' },
  { yr: '2022', t: 'MBO Junior Accountmanager', s: 'Diploma gehaald. Leerde denken vanuit klanten, bedrijven, sales en gesprek.' },
  { yr: '2023', t: 'HBO Software Development', s: 'Leerde bouwen: database-design, architectuur, schaalbaarheid, security. De combinatie met MBO maakt het verschil.' },
  { yr: '2024', t: 'Fulltime als ZZP', s: 'Van hobby naar bedrijf. Eerste betaalde klanten: AD Loodgietersbedrijf en MKH Bouw.' },
  { yr: '2025', t: 'Maatwerk software', s: 'Clockd en ITflow opgeleverd. Meer dan alleen websites: complete digitale oplossingen voor technische bedrijven.' },
  { yr: '2026', t: 'Focus op installateurs', s: 'Websites, SEO, Google Ads en maatwerk software, specifiek voor de installatiebranche.' },
];

const PRINCIPES = [
  { num: '01', t: 'Eerlijk over wat het kost.', s: 'Vaste prijs op papier voor de start. Als iets meer kost dan ik dacht, is dat mijn probleem, niet het jouwe.' },
  { num: '02', t: 'Geen tussenpersonen.', s: 'Jij werkt direct met de developer die je site bouwt en onderhoudt. Geen accountmanager, geen uitbesteed werk. Lijntjes kort, prijzen eerlijk.' },
  { num: '03', t: 'Focus op de installatiebranche.', s: 'Ik zeg regelmatig nee tegen werk buiten de installatiebranche. Die focus maakt dat ik de markt ken en geen uitleg vooraf nodig heb.' },
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
        chip="Freelance ZZP · Baarn · Actief sinds 2024"
        title={<>Ayoub Elkaoui.</>}
        subtitle="Freelance webdeveloper, Baarn. Websites en maatwerk software voor installatiebedrijven in Midden-Nederland."
      />

      {/* Wie ik ben */}
      <section className="section over">
        <div className="wrap">
          <div className="over-grid">
            <div className="over-photo">
              <div className="ph">
                {/* TODO: Ayoub — vervang dit door een echte foto */}
                <span className="ph-label">Ayoub Elkaoui / Baarn, NL</span>
                <div className="badge">
                  <div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--mute)', letterSpacing: '.08em', textTransform: 'uppercase' }}>
                      HBO + MBO
                    </div>
                    <div style={{ fontFamily: 'var(--cond)', fontSize: 18, fontWeight: 700, textTransform: 'uppercase', marginTop: 2 }}>
                      Software & business
                    </div>
                  </div>
                  <div style={{ width: 42, height: 42, borderRadius: 999, background: 'linear-gradient(135deg,var(--p2),var(--p3))', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700 }}>
                    AE
                  </div>
                </div>
              </div>
            </div>
            <div>
              <span className="eyebrow">
                <span className="num">01</span>
                <span className="rule" /> Wie ik ben
              </span>
              <h2>
                Twee opleidingen,<br />
                <em>één aanpak.</em>
              </h2>
              <p>
                Ik ben <strong>Ayoub Elkaoui</strong>. Freelance webdeveloper, ZZP&apos;er, gevestigd in Baarn.
                Sinds 2024 bouw ik websites en maatwerk software voor installatiebedrijven in Midden-Nederland.
              </p>
              <p>
                Mijn achtergrond is een combinatie van <strong>MBO Junior Accountmanager</strong> (leerde mij
                denken vanuit klanten, bedrijven en gesprek) en <strong>HBO Software Development</strong> (leerde
                mij bouwen: database-design, architectuur, schaalbaarheid). Die combinatie maakt het verschil:
                ik begrijp waar jouw bedrijf vastloopt én ik kan de software bouwen die het oplost.
              </p>
              <p>
                Geen agency, geen tussenpersonen, geen uitbesteed werk in het buitenland. Jij praat met de
                developer die je site bouwt en onderhoudt.
              </p>
              <div className="over-foot">
                <div><div className="lbl">Naam</div><div className="v">Ayoub Elkaoui</div></div>
                <div><div className="lbl">Gevestigd</div><div className="v">Baarn, Utrecht</div></div>
                <div><div className="lbl">ZZP sinds</div><div className="v">2024</div></div>
                <div><div className="lbl">Werkgebied</div><div className="v">NL (remote)</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waarom installatiebranche */}
      <section className="section diensten">
        <div className="wrap">
          <span className="eyebrow">
            <span className="num">02</span>
            <span className="rule" /> Waarom installatiebranche
          </span>
          <div className="section-head" style={{ marginTop: 24, marginBottom: 48 }}>
            <h2>Hier liegt het werk.<em>/ hier ben ik thuis.</em></h2>
            <p className="lead">
              Mijn eerste klanten kwamen uit deze hoek. Op een gegeven moment was het patroon duidelijk.
            </p>
          </div>
          <div style={{ maxWidth: 720 }}>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--ink-soft)', marginBottom: 20 }}>
              AD Loodgietersbedrijf en MBA-installaties waren mijn eerste professionele klanten. Daarna kwamen
              Clockd en ITflow — beide voor installatie- of technische bedrijven. Op een gegeven moment was
              het patroon duidelijk: hier ligt het werk, hier ben ik thuis.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--ink-soft)', marginBottom: 0 }}>
              Installatiebedrijven hebben serieuze digitale problemen die ik kan oplossen. Trage websites die
              spoedklussen missen. Excel-bestanden voor planning die vastlopen. Urenregistratie die handmatig
              in een ERP gaat. Stuk voor stuk problemen waar mijn combinatie van business en techniek
              precies tot zijn recht komt.
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
            <h2>Drie principes.<em>/ geen muurposters, gewoon hoe ik werk.</em></h2>
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
            <h2>Hoe het ging.<em>/ chronologisch, geen pretentie.</em></h2>
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

      {/* Persoonlijk */}
      <section className="section over" style={{ paddingTop: 60, paddingBottom: 60 }}>
        <div className="wrap">
          <span className="eyebrow">
            <span className="num">05</span>
            <span className="rule" /> Persoonlijk
          </span>
          <div style={{ marginTop: 32, maxWidth: 680 }}>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--ink-soft)', marginBottom: 20 }}>
              Ik woon in Baarn met mijn vrouw Youssra. Ik werk op Fedora Linux. In mijn vrije tijd ben ik in mijn
              werkplaats bezig met DIY-projecten, en ik bouw eigen software — Clockd is daar deels uit
              voortgekomen.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--ink-soft)', marginBottom: 40 }}>
              Buiten werk: gewoon een Nederlandse ondernemer die houdt van directe communicatie, eerlijke
              afspraken en goed werk. Geen LinkedIn-poses, geen marketingtaal.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 24, paddingTop: 28, borderTop: '1px solid var(--rule)' }}>
              <div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--mute)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 6 }}>E-mail</div>
                <a href={`mailto:${BRAND.email}`} style={{ fontFamily: 'var(--cond)', fontWeight: 700, fontSize: 18, textTransform: 'uppercase', color: 'var(--p1)', textDecoration: 'none' }}>
                  {BRAND.email}
                </a>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--mute)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 6 }}>Gevestigd</div>
                <div style={{ fontFamily: 'var(--cond)', fontWeight: 700, fontSize: 18, textTransform: 'uppercase' }}>Baarn, Utrecht</div>
              </div>
              {BRAND.linkedin !== 'TODO_LINKEDIN' && (
                <div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--mute)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 6 }}>LinkedIn</div>
                  <a href={BRAND.linkedin} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--cond)', fontWeight: 700, fontSize: 18, textTransform: 'uppercase', color: 'var(--p1)', textDecoration: 'none' }}>
                    Profiel →
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Cta eyebrow="Persoonlijk kennismaken?" title="Plan een gesprek." subtitle="30 min, vrijblijvend" />

      <SiteFooter />
    </>
  );
}

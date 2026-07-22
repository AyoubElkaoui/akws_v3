import type { Metadata } from 'next';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { PageHead } from '@/components/PageHead';
import { ContactForm } from '@/components/ContactForm';
import { BRAND } from '@/lib/data';
import { buildMetadata, breadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Contact — Plan een strategiegesprek | AK Web Solutions',
  description:
    'Plan een gratis kennismakingsgesprek van 30 minuten. Vrijblijvend, geen verkooppraat. Bereikbaar via e-mail en contactformulier.',
  path: '/contact',
});

const CHANNELS = [
  { ico: '☎', lbl: 'Bel direct', v: BRAND.phone, href: `tel:${BRAND.phoneRaw}` },
  { ico: '✉', lbl: 'E-mail', v: BRAND.email, href: `mailto:${BRAND.email}` },
  { ico: 'w', lbl: 'WhatsApp', v: BRAND.phone, href: `https://wa.me/31${BRAND.phoneRaw.slice(1)}`, brand: '#25d366' },
  { ico: 'in', lbl: 'LinkedIn', v: 'AK Web Solutions', href: BRAND.linkedin, brand: '#0a66c2' },
];

const FAQ = [
  { q: 'Werken jullie alleen voor installatiebedrijven?', a: 'Ja. Ik richt me specifiek op installatiebedrijven. Die focus maakt dat ik de branche ken en geen uitleg vooraf nodig heb.', open: true },
  { q: 'Kan ik de website zelf bijhouden?', a: 'Ja. Tekst en foto\'s pas je zelf aan in het CMS. Voor structurele wijzigingen help ik. Kleine aanpassingen zijn inbegrepen in het onderhoudsbedrag.' },
  { q: 'Wat als ik al een boekhoudpakket heb?', a: 'Snelstart, Exact, Moneybird: ik koppel ermee. Liever houden wat werkt dan opnieuw beginnen.' },
  { q: 'Wat kost een website?', a: 'Dat hangt af van wat je nodig hebt, dus werk ik met een offerte op maat in plaats van vaste pakketprijzen. In een gratis kennismaking van 30 minuten hoor ik wat je zoekt en krijg je daarna een vast bod op papier — geen uurtje-factuurtje, alle prijzen excl. 21% BTW.' },
  { q: 'Hoe lang duurt een traject?', a: 'Het Starter-pakket is gemiddeld 3 weken van kennismaking tot live. Het Pro-pakket duurt 4 tot 5 weken door de extra pagina\'s en Google Ads-setup.' },
  { q: 'Wat als ik niet tevreden ben?', a: 'Ik werk met wekelijkse demo\'s en vaste mijlpalen. Bij elke mijlpaal kun je bijsturen. Als het echt niet klikt, stoppen we.' },
];

export default function ContactPage() {
  return (
    <>
      <SiteNav active="/contact" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Contact', href: '/contact' },
        ])) }}
      />

      <PageHead
        crumbs={[{ href: '/', label: 'Home' }, { label: 'Contact' }]}
        chip="Reactie binnen 24 uur op werkdagen"
        title={
          <>
            Plan een gesprek<br />of stuur een mail.
          </>
        }
        subtitle="Geen accountmanager, geen tussenlaag. Je hebt direct contact met Ayoub, de developer die jouw site bouwt."
      />

      <section className="blog-bg">
        <div className="wrap">
          <div className="contact-grid">
            {/* Links: kanalen */}
            <div className="contact-info">
              <span className="eyebrow">
                <span className="num">01</span>
                <span className="rule" /> Direct contact
              </span>
              <h2>
                Bereikbaar.<br />
                <em>zonder wachtrij.</em>
              </h2>
              <p>
                Bereikbaar op werkdagen. Via e-mail reageer ik binnen 24 uur.
                Liever bellen? Vul het formulier in, dan neem ik contact op voor een gesprekstijd.
              </p>

              <div className="contact-channels">
                {CHANNELS.map((c) => (
                  <a className="contact-channel" key={c.lbl} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                    <div className="ico" style={c.brand ? { background: c.brand, color: '#fff', boxShadow: 'none' } : undefined}>{c.ico}</div>
                    <div>
                      <div className="lbl">{c.lbl}</div>
                      <div className="v">{c.v}</div>
                    </div>
                    <span className="arrow">→</span>
                  </a>
                ))}
              </div>

              <div className="contact-meta">
                <div>
                  <div className="lbl">Gevestigd</div>
                  <div className="v">Baarn<br /><span style={{ fontFamily: 'var(--sans)', fontWeight: 400, fontSize: 14, color: 'var(--mute)', textTransform: 'none' }}>Utrecht, Midden-Nederland</span></div>
                </div>
                <div>
                  <div className="lbl">Reactietijd</div>
                  <div className="v">24 uur<br /><span style={{ fontFamily: 'var(--sans)', fontWeight: 400, fontSize: 14, color: 'var(--mute)', textTransform: 'none' }}>Op werkdagen</span></div>
                </div>
                <div>
                  <div className="lbl">Werkgebied</div>
                  <div className="v">Midden-NL<br /><span style={{ fontFamily: 'var(--sans)', fontWeight: 400, fontSize: 14, color: 'var(--mute)', textTransform: 'none' }}>Remote heel NL</span></div>
                </div>
                <div>
                  <div className="lbl">Type werk</div>
                  <div className="v">Installateurs<br /><span style={{ fontFamily: 'var(--sans)', fontWeight: 400, fontSize: 14, color: 'var(--mute)', textTransform: 'none' }}>NL & BE</span></div>
                </div>
              </div>
            </div>

            {/* Rechts: formulier */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section over" style={{ paddingTop: 80, paddingBottom: 100 }}>
        <div className="wrap">
          <span className="eyebrow">
            <span className="num">02</span>
            <span className="rule" /> Veelgestelde vragen
          </span>
          <div className="section-head" style={{ marginTop: 24, marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'var(--cond)', fontWeight: 800, fontSize: 64, letterSpacing: '-.02em', lineHeight: .95, textTransform: 'uppercase', margin: 0 }}>
              Voordat je schrijft.
              <em style={{ fontFamily: '"Barlow", sans-serif', fontStyle: 'italic', fontWeight: 300, textTransform: 'none', letterSpacing: '-.015em', color: 'var(--mute)', fontSize: '.5em', display: 'block', marginTop: 6 }}>
                / misschien staat het hier al.
              </em>
            </h2>
            <p className="lead">Geen antwoord op je vraag? Stuur een bericht. Ayoub pakt het op.</p>
          </div>

          <div style={{ display: 'grid', gap: 14, maxWidth: 920 }}>
            {FAQ.map((f) => (
              <details
                key={f.q}
                style={{ background: '#fff', borderRadius: 14, border: '1px solid var(--rule)', overflow: 'hidden' }}
                {...(f.open ? { open: true } : {})}
              >
                <summary style={{ padding: '24px 28px', cursor: 'pointer', fontFamily: 'var(--cond)', fontWeight: 700, fontSize: 22, textTransform: 'uppercase', letterSpacing: '.005em', display: 'flex', justifyContent: 'space-between', alignItems: 'center', listStyle: 'none' }}>
                  {f.q}
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 14, color: 'var(--p1)', flexShrink: 0, marginLeft: 16 }}>+</span>
                </summary>
                <div style={{ padding: '0 28px 24px', fontSize: 16, lineHeight: 1.6, color: 'var(--ink-soft)' }}>
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

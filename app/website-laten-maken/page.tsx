import Link from 'next/link';
import type { Metadata } from 'next';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { PageHead } from '@/components/PageHead';
import { Cta } from '@/components/Cta';
import { STEDEN } from '@/lib/steden';
import { buildMetadata, breadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Website laten maken in Midden-Nederland | Baarn, Amersfoort, Utrecht | AKWS',
  description:
    'Website laten maken door een freelance webdeveloper uit Baarn. Actief in Baarn, Soest, Amersfoort, Hilversum, Bussum, Nijkerk en Utrecht. Binnen 2 weken live.',
  path: '/website-laten-maken',
});

export default function WebsiteLatenMakenPage() {
  return (
    <>
      <SiteNav />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Website laten maken', href: '/website-laten-maken' },
        ])) }}
      />

      <PageHead
        crumbs={[{ href: '/', label: 'Home' }, { label: 'Website laten maken' }]}
        chip={`${STEDEN.length} plaatsen · vanuit Baarn`}
        title="Website laten maken."
        subtitle="/ bij jou in de buurt."
      >
        <p className="lead">
          Ik werk vanuit Baarn voor bedrijven in Midden-Nederland. Elke plaats heeft zijn eigen
          markt en zijn eigen zoekgedrag. Kies je plaats en lees wat daar speelt en hoe ik je
          website daarop inricht.
        </p>
      </PageHead>

      <section className="section over">
        <div className="wrap">
          <div className="branch-list">
            {STEDEN.map((s) => (
              <Link
                href={`/website-laten-maken/${s.slug}`}
                className="branch"
                key={s.slug}
                style={{ textDecoration: 'none' }}
              >
                <div>
                  <div className="naam">{s.naam}</div>
                  <div className="sub">{s.afstand}</div>
                  <div style={{ marginTop: 8, fontSize: 13, color: 'var(--mute)', lineHeight: 1.5 }}>
                    {s.subtitel}
                  </div>
                </div>
                <span className="branch-arrow">→</span>
              </Link>
            ))}
          </div>
          <p style={{ marginTop: 32, fontSize: 16, color: 'var(--mute)', maxWidth: 720, lineHeight: 1.6 }}>
            Staat jouw plaats er niet tussen? Ik werk ook daarbuiten. Zoek je juist iets voor jouw
            vak, kijk dan bij <Link href="/voor-wie" style={{ color: 'var(--p1)' }}>voor wie ik bouw</Link>.
          </p>
        </div>
      </section>

      <Cta
        eyebrow="Website nodig?"
        title="Plan een gesprek."
        subtitle="30 minuten, vrijblijvend"
      />

      <SiteFooter />
    </>
  );
}

import Link from 'next/link';
import type { Metadata } from 'next';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { Cta } from '@/components/Cta';
import { PageHead } from '@/components/PageHead';
import { BRANCHES, BRANCHE_DETAILS } from '@/lib/data';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Voor wie — Websites voor installatiebedrijven | AKWS',
  description:
    'Ik bouw websites en software specifiek voor installatiebedrijven: loodgieters, CV-monteurs, elektriciens, installatiebedrijven en dakdekkers. Kies jouw branche.',
  path: '/voor-wie',
});

export default function VoorWiePage() {
  return (
    <>
      <SiteNav active="/voor-wie" />

      <PageHead
        crumbs={[{ href: '/', label: 'Home' }, { label: 'Voor wie' }]}
        chip="5 branches, 1 specialist"
        title="Voor wie."
        subtitle="Ik bouw specifiek voor installatiebedrijven. Geen generalist die ook wel een loodgieter-site kan — iemand die de branche kent."
      />

      <section className="section over">
        <div className="wrap">
          <div className="branch-list">
            {BRANCHES.map((b) => {
              const detail = BRANCHE_DETAILS.find((d) => d.slug === b.slug);
              return (
                <Link href={`/voor-wie/${b.slug}`} className="branch" key={b.slug} style={{ textDecoration: 'none' }}>
                  <div>
                    <div className="naam">{b.naam}</div>
                    <div className="sub">{b.sub}</div>
                    {detail && (
                      <div style={{ marginTop: 8, fontSize: 13, color: 'var(--mute)', lineHeight: 1.5 }}>
                        {detail.overzichtTekst}
                      </div>
                    )}
                  </div>
                  <span className="branch-arrow">→</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Cta
        eyebrow="Staat jouw branche er niet tussen?"
        title="Neem contact op."
        subtitle="30 minuten, vrijblijvend"
        body="Staat jouw type bedrijf er niet bij? Plan een gesprek. Als ik kan helpen, zeg ik het. Als je beter af bent bij iemand anders, zeg ik dat ook."
      />

      <SiteFooter />
    </>
  );
}

import Link from 'next/link';
import type { Metadata } from 'next';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { Cta } from '@/components/Cta';
import { PageHead } from '@/components/PageHead';
import { BRANCHES, BRANCHE_DETAILS } from '@/lib/data';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Voor wie — Websites voor installateurs, bouw & vakmensen | AKWS',
  description:
    'Ik bouw websites en software voor vakmensen: loodgieters, CV-monteurs, elektriciens, installatiebedrijven, dakdekkers, aannemers, hoveniers en schilders. Kies jouw vak.',
  path: '/voor-wie',
});

export default function VoorWiePage() {
  return (
    <>
      <SiteNav active="/voor-wie" />

      <PageHead
        crumbs={[{ href: '/', label: 'Home' }, { label: 'Voor wie' }]}
        chip="8 vakgebieden, 1 specialist"
        title="Voor wie."
        subtitle="Ik bouw voor vakmensen in installatie, bouw en techniek. Geen generalist die ook wel een vaksite kan — iemand die jullie markt en werkdag kent."
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

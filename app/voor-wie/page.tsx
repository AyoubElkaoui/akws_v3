import Link from 'next/link';
import type { Metadata } from 'next';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { Cta } from '@/components/Cta';
import { PageHead } from '@/components/PageHead';
import { BRANCHES, BRANCHE_DETAILS } from '@/lib/data';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Voor wie — Websites en software per branche | AKWS',
  description:
    'Websites en software voor het MKB: van installateurs, bouw en transport tot kappers, praktijken, zorg, administratiekantoren, IT-bedrijven en winkels. Kies jouw branche.',
  path: '/voor-wie',
});

export default function VoorWiePage() {
  return (
    <>
      <SiteNav active="/voor-wie" />

      <PageHead
        crumbs={[{ href: '/', label: 'Home' }, { label: 'Voor wie' }]}
        chip={`${BRANCHES.length} branches, 1 aanspreekpunt`}
        title="Voor wie."
        subtitle="Voor het MKB, met per branche een eigen aanpak. Een kapper heeft iets anders nodig dan een loodgieter, een praktijk iets anders dan een IT-bedrijf. Kies jouw branche en lees wat voor jou werkt."
      />

      <section className="section over">
        <div className="wrap">
          {([['bouw', 'Bouw, installatie & techniek'], ['mkb', 'Dienstverlening, zorg, winkels & meer']] as const).map(([groep, kop]) => (
          <div key={groep} style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: 'var(--cond)', fontWeight: 800, fontSize: 26, margin: '0 0 18px' }}>{kop}</h2>
          <div className="branch-list">
            {BRANCHES.filter((b) => b.groep === groep).map((b) => {
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
          ))}
        </div>
      </section>

      <Cta
        eyebrow="Staat jouw branche er niet tussen?"
        title="Neem contact op."
        subtitle="30 minuten, vrijblijvend"
        body="Staat jouw type bedrijf er niet bij? Plan een gesprek. Als we kunnen helpen, zeggen we het. Als je beter af bent bij iemand anders, zeggen we dat ook."
      />

      <SiteFooter />
    </>
  );
}

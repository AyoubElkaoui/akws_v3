import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { PageHead } from '@/components/PageHead';
import { Cta } from '@/components/Cta';
import { CASES, CASE_DETAILS, OOK_GEBOUWD } from '@/lib/data';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Werk — Websites en software voor het MKB | AKWS',
  description:
    'Websites met lokale SEO en maatwerk software: facturatie, voorraad, dashboards en ticketsystemen voor installatiebedrijven, bouw, logistiek en ander MKB.',
  path: '/cases',
});

function detail(slug: string) {
  return CASE_DETAILS.find((d) => d.slug === slug);
}

export default function CasesPage() {
  const websites = CASES.filter((c) => c.meta !== 'Maatwerk software');
  const software = CASES.filter((c) => c.meta === 'Maatwerk software');

  return (
    <>
      <SiteNav active="/cases" />

      <PageHead
        crumbs={[{ href: '/', label: 'Home' }, { label: 'Werk' }]}
        title="Werk dat we laten zien."
        subtitle="Websites voor vakmensen en de software erachter. Met wat er gedaan is en wat het opleverde, zonder verzonnen cijfers."
      >
        <div className="v4-filter" style={{ marginTop: 28, marginBottom: 0 }}>
          <a href="#websites">Websites ({websites.length})</a>
          <a href="#software">Maatwerk software ({software.length})</a>
          <a href="#ook-gebouwd">Ook gebouwd</a>
        </div>
      </PageHead>

      <section className="v4-sec" style={{ paddingTop: 24 }}>
        <div className="wrap">
          <div id="websites" className="v4-sec-head" style={{ scrollMarginTop: 96 }}>
            <div className="l">
              <span className="v4-kicker">Websites</span>
              <h2 className="v4-h2">Sites die aanvragen opleveren.</h2>
            </div>
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

      <section className="v4-sec alt">
        <div className="wrap">
          <div id="software" className="v4-sec-head" style={{ scrollMarginTop: 96 }}>
            <div className="l">
              <span className="v4-kicker">Maatwerk software</span>
              <h2 className="v4-h2">Software die werk uit handen neemt.</h2>
              <p className="v4-lead">
                De schermen hieronder tonen voorbeelddata. Echte klantgegevens en
                bedragen laten we nooit zien.
              </p>
            </div>
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

          <div id="ook-gebouwd" style={{ marginTop: 64, scrollMarginTop: 96 }}>
            <div className="v4-sec-head">
              <div className="l">
                <span className="v4-kicker">Ook gebouwd</span>
                <h2 className="v4-h2" style={{ fontSize: 'clamp(24px, 2.6vw, 32px)' }}>Kleinere tools en lopend werk.</h2>
              </div>
            </div>
            <div className="v4-also">
              {OOK_GEBOUWD.map((o) => (
                <div className="v4-card" key={o.naam}>
                  <span className="meta">{o.meta}</span>
                  <span className="t">{o.naam}</span>
                  <span className="d">{o.tekst}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Cta
        eyebrow="Iets vergelijkbaars nodig?"
        title="Plan een gesprek."
        subtitle="30 minuten, vrijblijvend"
        body="Vertel wat je wil bouwen of verbeteren. We geven binnen één werkdag een eerlijke inschatting."
      />

      <SiteFooter />
    </>
  );
}

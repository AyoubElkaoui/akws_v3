import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SoftwarePagina } from '@/components/SoftwarePagina';
import { SOFTWARE_VAKKEN, soortBySlug } from '@/lib/software';
import { BRANCHES } from '@/lib/data';
import { buildMetadata } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(SOFTWARE_VAKKEN).map((branche) => ({ branche }));
}

function titel(m: string) {
  return `Software voor ${m}`;
}

export async function generateMetadata({ params }: { params: Promise<{ branche: string }> }): Promise<Metadata> {
  const slug = (await params).branche;
  const v = SOFTWARE_VAKKEN[slug];
  if (!v) return {};
  const soorten = v.soorten.map((s) => soortBySlug(s)?.naam.toLowerCase()).filter(Boolean).slice(0, 3).join(', ');
  return buildMetadata({
    title: `${titel(v.meervoud)} op maat laten maken | AKWS`,
    description: `Software voor ${v.meervoud} laten maken: ${soorten} en koppelingen met je administratie. Op maat, vaste prijs per fase vanaf €3.500, prototype vanaf €750.`,
    path: `/software-voor/${slug}`,
  });
}

export default async function Page({ params }: { params: Promise<{ branche: string }> }) {
  const slug = (await params).branche;
  const v = SOFTWARE_VAKKEN[slug];
  if (!v) notFound();
  const naam = BRANCHES.find((b) => b.slug === slug)?.naam ?? v.meervoud;
  const soorten = v.soorten.map(soortBySlug).filter((s): s is NonNullable<typeof s> => Boolean(s));
  const h = titel(v.meervoud);

  return (
    <SoftwarePagina
      path={`/software-voor/${slug}`}
      crumbLabel={naam}
      chip={`${naam} · Maatwerk software`}
      h1={h}
      subtitel="Op maat, gekoppeld aan je administratie."
      intro={v.intro}
      description={`${h} op maat: ${soorten.map((s) => s.naam.toLowerCase()).join(', ')}.`}
      problemenTitel={`Waar ${v.meervoud} tijd verliezen`}
      problemen={v.knelpunten}
      functiesTitel="Wat ik voor je kan bouwen"
      functies={soorten.map((s) => ({ titel: s.h1, tekst: s.functies[0].tekst + ' ' + s.functies[1].tekst, href: `/software-laten-maken/${s.slug}` }))}
      cases={v.cases}
      prijzen={[
        { titel: 'Klikbaar prototype', prijs: 'vanaf €750', tekst: 'Alle schermen om te proberen met je team, in 1 tot 2 weken.' },
        { titel: 'Kleine tool of koppeling', prijs: '€500 – €1.500', tekst: 'Een export omzetten of twee pakketten koppelen.' },
        { titel: 'Eerste werkende fase', prijs: '€3.500 – €8.000', tekst: 'Eén module met login en database, in 4 tot 8 weken live.' },
      ]}
      faq={[
        { q: `Wat kost software voor ${v.meervoud}?`, a: 'Een klikbaar prototype begint bij €750, een koppeling of kleine tool kost €500 tot €1.500 en een eerste werkende module met login en database €3.500 tot €8.000. Hosting en onderhoud vanaf €49 per maand.' },
        { q: 'Is een bestaand pakket niet goedkoper?', a: 'Soms wel, en dan zeg ik dat. Maatwerk loont als je elke week handwerk hebt omdat een pakket niet past of niet koppelt. Vaak is één module of koppeling naast je huidige software genoeg.' },
        { q: 'Werkt het met mijn huidige administratie?', a: 'Meestal wel. Ik koppel met Syntess Atrium, Exact, Moneybird, Snelstart en alles met een API. In de intake check ik wat jouw pakket toelaat.' },
        { q: 'Van wie is de software?', a: 'Van jou. Je krijgt de broncode en documentatie, zodat je nooit vastzit.' },
      ]}
      ctaBody={`Vertel waar je nu tijd verliest. Je krijgt binnen 5 werkdagen een voorstel met een vaste prijs voor software voor jouw bedrijf.`}
    />
  );
}

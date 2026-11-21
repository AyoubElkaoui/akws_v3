import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SoftwarePagina } from '@/components/SoftwarePagina';
import { SOFTWARE_SOORTEN, soortBySlug } from '@/lib/software';
import { buildMetadata } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return SOFTWARE_SOORTEN.map((s) => ({ soort: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ soort: string }> }): Promise<Metadata> {
  const s = soortBySlug((await params).soort);
  if (!s) return {};
  return buildMetadata({ title: s.metaTitle, description: s.metaDescription, path: `/software-laten-maken/${s.slug}` });
}

export default async function Page({ params }: { params: Promise<{ soort: string }> }) {
  const s = soortBySlug((await params).soort);
  if (!s) notFound();
  return (
    <SoftwarePagina
      path={`/software-laten-maken/${s.slug}`}
      crumbLabel={s.naam}
      chip={`${s.naam} · Maatwerk · Vaste prijs`}
      h1={s.h1}
      subtitel={s.subtitel}
      intro={s.intro}
      description={s.metaDescription}
      problemenTitel="Herkenbaar?"
      problemen={s.problemen}
      functiesTitel="Wat erin zit"
      functies={s.functies}
      cases={s.cases}
      caseNoot={s.caseNoot}
      prijzen={s.prijzen}
      faq={s.faq}
      ctaBody={`Vertel hoe het nu gaat. Je krijgt binnen 5 werkdagen een voorstel met een vaste prijs voor ${s.naam.toLowerCase()} op maat.`}
    />
  );
}

import { notFound } from 'next/navigation';
import { stadBySlug } from '@/lib/steden';
import type { Metadata } from 'next';
import { DienstStadPage, dienstStadMetadata } from '@/components/DienstStadPage';
import { LOKALE_SEO, dienstSteden } from '@/lib/dienst-steden';

type Params = { stad: string };

export const dynamicParams = false;

export async function generateStaticParams() {
  return dienstSteden(LOKALE_SEO).map((stad) => ({ stad }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { stad } = await params;
  return dienstStadMetadata(LOKALE_SEO, stad);
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { stad } = await params;
  if (!stadBySlug(stad)) notFound();
  return <DienstStadPage dienst={LOKALE_SEO} slug={stad} />;
}

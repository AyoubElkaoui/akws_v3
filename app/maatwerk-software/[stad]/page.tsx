import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { DienstStadPage, dienstStadMetadata } from '@/components/DienstStadPage';
import { MAATWERK_SOFTWARE, dienstSteden } from '@/lib/dienst-steden';

type Params = { stad: string };

export const dynamicParams = false;

export async function generateStaticParams() {
  return dienstSteden(MAATWERK_SOFTWARE).map((stad) => ({ stad }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { stad } = await params;
  return dienstStadMetadata(MAATWERK_SOFTWARE, stad);
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { stad } = await params;
  if (!MAATWERK_SOFTWARE.lokaal[stad]) notFound();
  return <DienstStadPage dienst={MAATWERK_SOFTWARE} slug={stad} />;
}

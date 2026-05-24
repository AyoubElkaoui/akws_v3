import type { Metadata } from 'next';

const BASE_URL = 'https://akwebsolutions.nl';
const SITE_NAME = 'AK Web Solutions';
const DEFAULT_OG_IMAGE = '/og-image.png';

type SeoInput = {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path = '',
  ogImage = DEFAULT_OG_IMAGE,
  noIndex = false,
}: SeoInput): Metadata {
  const url = `${BASE_URL}${path}`;
  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'nl_NL',
      url,
      siteName: SITE_NAME,
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

// JSON-LD helpers

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE_NAME,
    image: `${BASE_URL}${DEFAULT_OG_IMAGE}`,
    '@id': BASE_URL,
    url: BASE_URL,
    telephone: '+31685722387',
    email: 'info@akwebsolutions.nl',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Baarn',
      addressRegion: 'Utrecht',
      addressCountry: 'NL',
    },
    areaServed: [
      'Baarn', 'Soest', 'Hilversum', 'Bussum', 'Naarden',
      'Huizen', 'Laren', 'Amersfoort', 'Utrecht', 'Midden-Nederland',
    ],
    founder: {
      '@type': 'Person',
      name: 'Ayoub Elkaoui',
    },
  };
}

export function serviceSchema(serviceType: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType,
    provider: { '@type': 'ProfessionalService', name: SITE_NAME },
    areaServed: 'Midden-Nederland',
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.href}`,
    })),
  };
}

export function faqSchema(faq: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ayoub Elkaoui',
    jobTitle: 'Freelance Webdeveloper',
    worksFor: { '@type': 'Organization', name: SITE_NAME },
    address: { '@type': 'PostalAddress', addressLocality: 'Baarn', addressCountry: 'NL' },
    email: 'info@akwebsolutions.nl',
    url: BASE_URL,
  };
}

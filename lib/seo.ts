import type { Metadata } from 'next';

const BASE_URL = 'https://akwebsolutions.nl';
const SITE_NAME = 'AK Web Solutions';
// Logo voor JSON-LD. De social-preview (OG) wordt dynamisch gegenereerd
// door app/opengraph-image.tsx — daarom hier géén vaste og-image opgeven.
const LOGO_IMAGE = '/akws-logo.png';
const BUSINESS_ID = `${BASE_URL}/#bedrijf`;

type SeoInput = {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
  /** Voor blogartikelen: zet og:type op article met publicatiedatum. */
  article?: { publishedTime: string; author: string };
};

export function buildMetadata({
  title,
  description,
  path = '',
  ogImage,
  noIndex = false,
  article,
}: SeoInput): Metadata {
  const url = `${BASE_URL}${path}`;
  return {
    // absolute: de titels bevatten zelf al de merknaam; zonder dit plakt het
    // template uit de layout er nog een keer "| AKWS" achter.
    title: { absolute: title },
    description,
    metadataBase: new URL(BASE_URL),
    alternates: { canonical: url },
    openGraph: {
      ...(article
        ? { type: 'article' as const, publishedTime: article.publishedTime, authors: [article.author] }
        : { type: 'website' as const }),
      locale: 'nl_NL',
      url,
      siteName: SITE_NAME,
      title,
      description,
      // Alleen expliciet meegegeven beeld overschrijft de gegenereerde OG-image.
      ...(ogImage ? { images: [{ url: ogImage, width: 1200, height: 630, alt: SITE_NAME }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      ...(ogImage ? { images: [ogImage] } : {}),
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
    image: `${BASE_URL}${LOGO_IMAGE}`,
    '@id': BUSINESS_ID,
    url: BASE_URL,
    description:
      'Websites, lokale SEO, Google Ads en maatwerk software voor installateurs, vakmensen en lokaal MKB in Midden-Nederland.',
    sameAs: ['https://www.linkedin.com/company/ak-web-solutions-nl/'],
    knowsAbout: ['Webdesign', 'Lokale SEO', 'Google Ads', 'Maatwerk software', 'Next.js'],
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
      'Baarn', 'Soest', 'Hilversum', 'Bussum', 'Naarden', 'Huizen',
      'Laren', 'Amersfoort', 'Nijkerk', 'Utrecht',
    ].map((name) => ({ '@type': 'City', name })),
    founder: {
      '@type': 'Person',
      name: 'Ayoub Elkaoui',
    },
  };
}

export function serviceSchema(
  serviceType: string,
  opts?: { name?: string; url?: string; description?: string; areaServed?: string },
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType,
    name: opts?.name ?? serviceType,
    ...(opts?.url ? { url: `${BASE_URL}${opts.url}` } : {}),
    ...(opts?.description ? { description: opts.description } : {}),
    provider: { '@type': 'ProfessionalService', '@id': BUSINESS_ID, name: SITE_NAME },
    areaServed: opts?.areaServed
      ? { '@type': 'City', name: opts.areaServed }
      : 'Midden-Nederland',
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

// Blogdatums staan als '28 juli 2026' / '14 mei 2026' / '26 mrt 2026' in data.ts.
const MAANDEN: Record<string, string> = {
  jan: '01', feb: '02', mrt: '03', maa: '03', apr: '04', mei: '05', jun: '06',
  jul: '07', aug: '08', sep: '09', okt: '10', nov: '11', dec: '12',
};

export function isoDatum(nl: string): string {
  const [dag, maand, jaar] = nl.trim().split(/\s+/);
  const mm = MAANDEN[(maand ?? '').slice(0, 3).toLowerCase()] ?? '01';
  return `${jaar}-${mm}-${(dag ?? '1').padStart(2, '0')}`;
}

export function articleSchema(post: {
  slug: string;
  titel: string;
  excerpt: string;
  date: string;
  author: string;
  cover?: string;
}) {
  const url = `${BASE_URL}/blog/${post.slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.titel,
    description: post.excerpt,
    datePublished: isoDatum(post.date),
    dateModified: isoDatum(post.date),
    mainEntityOfPage: url,
    url,
    inLanguage: 'nl-NL',
    ...(post.cover ? { image: `${BASE_URL}${post.cover}` } : {}),
    author: { '@type': 'Person', name: post.author, url: `${BASE_URL}/over` },
    publisher: {
      '@type': 'Organization',
      '@id': BUSINESS_ID,
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: `${BASE_URL}${LOGO_IMAGE}` },
    },
  };
}

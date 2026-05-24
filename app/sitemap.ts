import type { MetadataRoute } from 'next';
import { BLOG_POSTS, CASE_DETAILS, BRANCHE_DETAILS } from '@/lib/data';

const BASE = 'https://akwebsolutions.nl';
const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE,                                    lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/voor-wie`,                      lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/diensten`,                      lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/diensten/websites`,             lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/diensten/seo-en-google-ads`,    lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/diensten/maatwerk-software`,    lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/diensten/onderhoud`,            lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/cases`,                         lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/werkwijze`,                     lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/prijzen`,                       lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/over`,                          lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/contact`,                       lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/blog`,                          lastModified: now, changeFrequency: 'weekly',  priority: 0.6 },
    { url: `${BASE}/privacy`,                       lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE}/algemene-voorwaarden`,          lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
  ];

  const brancheRoutes: MetadataRoute.Sitemap = BRANCHE_DETAILS.map((b) => ({
    url: `${BASE}/voor-wie/${b.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const caseRoutes: MetadataRoute.Sitemap = CASE_DETAILS.map((c) => ({
    url: `${BASE}/cases/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...brancheRoutes, ...caseRoutes, ...blogRoutes];
}

import type { MetadataRoute } from 'next';
import { BLOG_POSTS, CASE_DETAILS, BRANCHE_DETAILS } from '@/lib/data';
import { STEDEN } from '@/lib/steden';
import { DIENST_LOCATIES, dienstSteden } from '@/lib/dienst-steden';
import { BRANCHE_HAKEN } from '@/lib/branche-steden';
import { isoDatum } from '@/lib/seo';

const BASE = 'https://akwebsolutions.nl';
const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE,                                    lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/voor-wie`,                      lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/website-laten-maken`,           lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
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

  const stadRoutes: MetadataRoute.Sitemap = STEDEN.map((s) => ({
    url: `${BASE}/website-laten-maken/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const dienstStadRoutes: MetadataRoute.Sitemap = DIENST_LOCATIES.flatMap((d) =>
    dienstSteden(d).map((slug) => ({
      url: `${BASE}${d.base}/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  );

  const brancheStadRoutes: MetadataRoute.Sitemap = STEDEN.flatMap((s) =>
    Object.keys(BRANCHE_HAKEN).map((b) => ({
      url: `${BASE}/website-laten-maken/${s.slug}/${b}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  );

  const caseRoutes: MetadataRoute.Sitemap = CASE_DETAILS.map((c) => ({
    url: `${BASE}/cases/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(isoDatum(p.date)),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...stadRoutes, ...dienstStadRoutes, ...brancheRoutes, ...brancheStadRoutes, ...caseRoutes, ...blogRoutes];
}

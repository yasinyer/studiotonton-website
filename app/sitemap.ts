import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { caseStudies, servicePages } from '@/lib/pages';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.url, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${site.url}/offerte`, lastModified: now, changeFrequency: 'yearly', priority: 0.9 },
    ...servicePages.map((p) => ({ url: `${site.url}/diensten/${p.slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 })),
    ...caseStudies.map((c) => ({ url: `${site.url}/werk/${c.slug}`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.6 })),
    { url: `${site.url}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ];
}

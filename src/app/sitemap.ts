import { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/data/blogData';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://beyondthetimeline.com';

  const coreRoutes = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/case-studies',
    '/blog',
    '/pricing',
    '/testimonials',
    '/faqs',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...coreRoutes, ...blogRoutes];
}

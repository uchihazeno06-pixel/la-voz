export const prerender = true;
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { siteConfig } from '../../site.config';
import { sortByDateDesc, isPublished } from '../lib/utils';

export async function GET(context: APIContext) {
  const posts = sortByDateDesc((await getCollection('posts')).filter(isPublished));
  const ed = sortByDateDesc((await getCollection('earthDaily')).filter(isPublished));

  const items = [
    ...posts.map((p) => ({
      title: p.data.title,
      description: p.data.hook,
      pubDate: p.data.date,
      link: `/posts/${p.slug}/`,
    })),
    ...ed.map((p) => ({
      title: p.data.title,
      description: p.data.hook,
      pubDate: p.data.date,
      link: `/earth-daily/${p.slug}/`,
    })),
  ].sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

  return rss({
    title: siteConfig.name,
    description: siteConfig.description,
    site: context.site ?? siteConfig.url,
    items,
    customData: `<language>en-us</language>`,
  });
}
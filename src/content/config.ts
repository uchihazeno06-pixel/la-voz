import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    hook: z.string().max(300),            // 2–3 sentence teaser for the card
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),          // image path
    coverAlt: z.string().optional(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),  // shows as hero on home
  }),
});

const earthDaily = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    hook: z.string().max(300),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts, earthDaily };
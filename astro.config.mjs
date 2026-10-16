import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import decapCmsOauth from 'astro-decap-cms-oauth';

export default defineConfig({
  site: 'https://la-voz-seven.vercel.app',
  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
    decapCmsOauth(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
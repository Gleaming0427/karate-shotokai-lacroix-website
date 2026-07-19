// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  base: process.env.BASE_URL || '/',
  site: 'https://gleaming0427.github.io',
  output: 'static',
  integrations: [sitemap()],
});

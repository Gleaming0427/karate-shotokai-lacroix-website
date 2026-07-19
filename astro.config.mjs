// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Si tu utilises un domaine personnalisé (shotokailacroixfalgarde.fr), commente la ligne base
  base: '/karate-shotokai-lacroix-website',
  site: 'https://gleaming0427.github.io',
  output: 'static',
  integrations: [sitemap()],
});

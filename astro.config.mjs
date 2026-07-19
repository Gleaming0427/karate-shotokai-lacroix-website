// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Décommenter et ajuster si déploiement sur un repo projet GitHub Pages
  // base: '/karate-shotokai-lacroix-website',
  site: 'https://shotokailacroixfalgarde.fr',
  output: 'static',
  integrations: [sitemap()],
});

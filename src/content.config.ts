import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const techniques = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/techniques' }),
  schema: z.object({
    title: z.string(),
    date: z.string().transform(v => {
      // Parse DD/MM/YYYY [HH:mm] or ISO format
      const parts = v.trim().split(' ');
      const datePart = parts[0];
      if (datePart.includes('/')) {
        const d = datePart.split('/');
        return new Date(+d[2], +d[1] - 1, +d[0]);
      }
      return new Date(v);
    }),
    image: z.string().optional(),
  }),
});

export const collections = { techniques };

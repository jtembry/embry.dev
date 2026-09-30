import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One entry per finished print. Files live in src/content/prints/<slug>.md; images in public/prints/.
const prints = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/prints' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    image: z.string(),                 // e.g. /prints/2026-09-30-bracket.jpg
    video: z.string().optional(),      // e.g. /prints/2026-09-30-bracket.mp4 (timelapse)
    material: z.string().optional(),   // PLA, PETG, TPU, ASA…
    color: z.string().optional(),
    printTime: z.string().optional(),  // "3 h 12 m"
    model: z.string().url().optional(),// MakerWorld / Printables / own design
    designedByMe: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

export const collections = { prints };

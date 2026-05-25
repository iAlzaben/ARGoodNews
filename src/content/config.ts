import { defineCollection, z } from 'astro:content';

const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    vibe: z.enum(['inspiring', 'hopeful', 'heartwarming', 'arab-pride']),
    vibeLabel: z.string(),
    author: z.string(),
    date: z.string(),
    readTime: z.string(),
    likes: z.number(),
    imageUrl: z.string(),
  })
});

export const collections = {
  'news': newsCollection,
};

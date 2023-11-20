import { z } from 'zod';

export const ProductSchema = z.object({
  category: z.object({
    // TODO: Could look at making this an enum.
    name: z.string()
  }),
  description: z.string(),
  id: z.number(),
  images: z.array(z.string()),
  price: z.number(),
  title: z.string()
});
import { z } from 'zod';

const CategorySchema = z.enum([
  'electronics',
  'jewelery',
  "men's clothing",
  "women's clothing",
]);

const RatingSchema = z.object({
  rate: z.number(),
  count: z.number(),
});

export const ProductSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  description: z.string(),
  category: CategorySchema,
  image: z.string(),
  rating: RatingSchema,
});
export type Product = z.infer<typeof ProductSchema>;

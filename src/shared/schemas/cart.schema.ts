import { z } from 'zod';

const ProductSchema = z.object({
  productId: z.number(),
  quantity: z.number(),
});

export const CartSchema = z.object({
  id: z.number(),
  userId: z.number(),
  date: z.coerce.date(),
  products: z.array(ProductSchema),
});

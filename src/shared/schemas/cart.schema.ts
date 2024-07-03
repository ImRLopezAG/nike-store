import { z } from 'zod';
import { ProductSchema } from './product.schema';

const TotalsSchema = z.object({
  products: z.number(),
  subtotal: z.number(),
  totalVAT: z.number(),
  total: z.number(),
});

export const CartSchema = z.object({
  id: z.string(),
  lines: z.array(ProductSchema.extend({
    quantity: z.number().default(1),
  })),
  totals: TotalsSchema,
});

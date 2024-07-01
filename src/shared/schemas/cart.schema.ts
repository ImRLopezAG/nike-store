import { z } from 'zod';
import { ProductSchema } from './product.schema';


export const CartSchema = z.object({
  id: z.string().uuid().default(crypto.randomUUID()),
  products: z.array(ProductSchema),
});

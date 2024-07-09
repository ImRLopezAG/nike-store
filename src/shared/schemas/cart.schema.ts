import { z } from 'zod';
import { ProductSchema } from './product.schema';
export const CardSchema = z.object({
  number: z.string().length(16),
  cvc: z.string().length(3),
  month: z.string().length(2),
  year: z.string().length(2),
  holder: z.enum(['Visa', 'MasterCard', 'American Express', 'Discover']),
});

const TotalsSchema = z.object({
  products: z.number(),
  subtotal: z.number(),
  totalVAT: z.number(),
  shipping: z.number(),
  total: z.number(),
});

export const CustomerPaymentSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  zip: z.string(),
  country: z.string(),
  phone: z.string(),
});

export const PaymentSchema = z.object({
  customer: CustomerPaymentSchema,
  card: CardSchema,
});

export const CartSchema = z.object({
  id: z.string().nanoid(),
  lines: z.array(
    ProductSchema.extend({
      quantity: z.number().default(1),
    })
  ),
  totals: TotalsSchema,
  payment: PaymentSchema,
  createdAt: z.string()
});

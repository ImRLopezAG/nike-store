import { z } from 'zod';

const ImagesSchema = z.object({
  portraitURL: z.string(),
  squarishURL: z.string(),
});

const PriceSchema = z.object({
  currency: z.string(),
  currentPrice: z.number(),
  fullPrice: z.number(),
  employeePrice: z.number(),
});

export const ColorwaySchema = z.object({
  colorDescription: z.string(),
  pid: z.string(),
  images: ImagesSchema,
  price: PriceSchema,
});

export const ProductSchema = z.object({
  id: z.string(),
  title: z.string(),
  subtitle: z.string(),
  productType: z.string(),
  colorDescription: z.string(),
  images: ImagesSchema,
  price: PriceSchema,
  colorways: z.array(ColorwaySchema),
});

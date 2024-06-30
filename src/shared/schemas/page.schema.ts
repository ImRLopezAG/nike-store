import { z } from 'zod';

export const PageSchema = z.object({
  next: z.string().optional(),
  prev: z.string().optional(),
  totalPages: z.number(),
  totalResources: z.number(),
});
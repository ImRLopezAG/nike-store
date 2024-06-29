import * as schema from '@shared/schemas'
import type { z } from 'zod'
declare global {
  type Product = z.infer<typeof schema.ProductSchema>
  type Cart = z.infer<typeof schema.CartSchema>
  type User = z.infer<typeof schema.UserSchema>
  interface Props {
    children?: React.ReactNode
    className?: string
  }
}
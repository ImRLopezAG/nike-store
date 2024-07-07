import * as schema from '@shared/schemas'
import type { z } from 'zod'
declare global {
  type Product = z.infer<typeof schema.ProductSchema>
  type Cart = z.infer<typeof schema.CartSchema>
  type Customer = z.infer<typeof schema.CustomerSchema>
  type Page = z.infer<typeof schema.PageSchema>
  type Colorway = z.infer<typeof schema.ColorwaySchema>
  type Item = Product & {
    quantity: number
  }
  interface PaymentForm {
    name: string
    email: string
    number: string
    cvv: string
    month: string
    year: string
    address: string
    city: string
    state: string
    zip: string
    country: string
    holder:  'Visa' | 'MasterCard' | 'American Express' | 'Discover'
  }
  interface Props {
    children?: React.ReactNode
    className?: string
  }
}
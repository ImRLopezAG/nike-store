import * as schema from '@shared/schemas'
import type { z } from 'zod'
declare global {
  type Product = z.infer<typeof schema.ProductSchema>
  type Cart = z.infer<typeof schema.CartSchema>
  type Customer = z.infer<typeof schema.CustomerSchema>
  type Page = z.infer<typeof schema.PageSchema>
  type Colorway = z.infer<typeof schema.ColorwaySchema>
  type Payment = z.infer<typeof schema.PaymentSchema>
  type CustomerPayment = z.infer<typeof schema.CustomerPaymentSchema>
  type Card = z.infer<typeof schema.CardSchema>
  type Item = Product & {
    quantity: number
  }
  type KeyOf<T> = {
    [K in keyof T]: T[K] extends unknown ? K : never
  }[keyof T]
  
  interface Props {
    children?: React.ReactNode
    className?: string
  }
}
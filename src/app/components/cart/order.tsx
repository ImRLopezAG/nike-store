import { useCartStore } from '@hooks/use-cart';
import { Card, CardContent, CardTitle, CardFooter } from '@ui/card';
import { Separator } from '@ui/separator'
import { PaymentMethod } from './payment'
export const OrderDetails = () => {
  const totals = useCartStore((state) => state.cart.totals)
  const { subtotal, totalVAT, total } = totals

  return (
    <Card className='w-full max-w-md'>
        <CardTitle className='text-4xl text-center text-blue-500'>Order details</CardTitle>
      <CardContent className='flex flex-col gap-2'>
          <Cell title='Subtotal' value={`$${subtotal}`} />
          <Cell title='VAT' value={`$${totalVAT}`} />
          <Separator />
          <Cell title='Total' value={`$${total}`} />
      </CardContent>
      <CardFooter>
        <PaymentMethod />
      </CardFooter>
    </Card>
  )
}

const Cell: React.FC<{ title: string; value: string }> = ({ title, value }) => (
  <div className='flex justify-between'>
    <span>{title}</span>
    <span>{value}</span>
  </div>
)

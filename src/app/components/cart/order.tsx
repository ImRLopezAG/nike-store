import { useCartStore } from '@/app/hooks/use-cart.store';
import { Card, CardContent, CardFooter, CardTitle } from '@ui/card';
import { Separator } from '@ui/separator';
import { PaymentMethod } from './payment';
import { Button } from '@ui/button';
import { generateInvoice } from '@services/pdf'
import { cartService } from '@services/cart'
export const OrderDetails = () => {
  const { cart } = useCartStore((state) => state);
  const {f} = cartService()
  const { subtotal, totalVAT, total, shipping } = cart.totals;

  return (
    <Card className='w-full min-w-md max-w-lg'>
      <CardTitle className='text-4xl text-center text-blue-500'>
        Order details
      </CardTitle>
      <CardContent className='flex flex-col gap-2'>
        <Cell title='Subtotal' value={f(subtotal)} />
        <Cell title='VAT' value={f(totalVAT)} />
        <Cell title='Shipping' value={f(shipping)} />
        <Separator />
        <Cell title='Total' value={f(total)} />
      </CardContent>
      <CardFooter className='flex gap-2'>
        <PaymentMethod />
        <Button className='' onClick={() => {
          generateInvoice(cart)
        }} >Place order</Button>
      </CardFooter>
    </Card>
  );
};

const Cell: React.FC<{ title: string; value: string }> = ({ title, value }) => (
  <div className='flex justify-between'>
    <span>{title}</span>
    <span>{value}</span>
  </div>
);

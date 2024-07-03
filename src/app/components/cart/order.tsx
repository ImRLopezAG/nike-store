import { useCartStore } from '@/app/hooks/use-cart.store';
import { Card, CardContent, CardFooter, CardTitle } from '@ui/card';
import { Separator } from '@ui/separator';
import { PaymentMethod } from './payment';
import { Button } from '@ui/button';
import { generateInvoice } from '@services/pdf'

export const OrderDetails = () => {
  const totals = useCartStore((state) => state.cart.totals);
  const { subtotal, totalVAT, total } = totals;

  return (
    <Card className='w-full max-w-md'>
      <CardTitle className='text-4xl text-center text-blue-500'>
        Order details
      </CardTitle>
      <CardContent className='flex flex-col gap-2'>
        <Cell title='Subtotal' value={`$${subtotal}`} />
        <Cell title='VAT' value={`$${totalVAT}`} />
        <Separator />
        <Cell title='Total' value={`$${total}`} />
      </CardContent>
      <CardFooter className='flex gap-2'>
        <PaymentMethod />
        <Button className='' onClick={generateInvoice} >Place order</Button>
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

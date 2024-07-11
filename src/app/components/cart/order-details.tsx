import { Login } from '@components/account';
import { PaymentMethod } from '@components/cart';
import { CustomerInfo, PreviewOrder } from '@components/cart/components';
import { useStore } from '@hooks/use-cart.store';
import { cartService } from '@services/cart';
import { Button } from '@ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@ui/card';
import { Copy } from 'lucide-react';
export const OrderDetails: React.FC<Props> = () => {
  const { cart } = useStore((state) => state);
  const { f } = cartService();
  const { subtotal, totalVAT, total, shipping } = cart.totals;
  const { name } = cart.payment.customer;

  return (
    <Card className='overflow-hidden' x-chunk='dashboard-05-chunk-4'>
      <CardHeader className='flex flex-row items-start bg-muted/50'>
        <div className='grid gap-0.5'>
          <CardTitle className='group flex items-center gap-2 text-lg'>
            {cart.id}
            <Button
              size='icon'
              variant='outline'
              className='h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100'
            >
              <Copy className='h-3 w-3' />
              <span className='sr-only'>Copy Order ID</span>
            </Button>
          </CardTitle>
          <CardDescription>Date: {cart.createdAt}</CardDescription>
        </div>
        <PreviewOrder />
      </CardHeader>
      <CardContent className='p-6 text-sm'>
        <div className='grid gap-3'>
          <h1 className='font-semibold'>Order Details</h1>
          <ul className='grid gap-3'>
            <Cells title='Subtotal' value={f(subtotal)} />
            <Cells title='Shipping' value={f(shipping)} />
            <Cells title='Tax' value={f(totalVAT)} />
            <Cells title='Total' value={f(total)} />
          </ul>
        </div>
        {name && <CustomerInfo />}
      </CardContent>
      <CardFooter className='flex flex-row items-center border-t bg-muted/50 px-6 py-3'>
        {name && <PaymentMethod />}
        {!name && <Login />}
      </CardFooter>
    </Card>
  );
};

interface CellsProps {
  title: string;
  value: string;
}
const Cells: React.FC<CellsProps> = ({ title, value }) => (
  <li className='flex items-center justify-between'>
    <span className='text-muted-foreground'>{title}</span>
    <span>{value}</span>
  </li>
);

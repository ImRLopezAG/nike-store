import { useStore } from '@/app/hooks/use-cart.store';
import {
  AmericanExpressIcon,
  DiscoverIcon,
  MasterCardIcon,
  VisaIcon,
} from '@components/icons';
import { Separator } from '@ui/separator';

export const CustomerInfo = () => {
  const { card, customer } = useStore((state) => state.cart.payment);
  return (
    <>
      <Separator className='my-4' />
      <div className='grid grid-cols-2 gap-4'>
        <div className='grid gap-3'>
          <div className='font-semibold'>Shipping Information</div>
          <address className='grid gap-0.5 not-italic text-muted-foreground'>
            <span>{customer.name}</span>
            <span>{customer.address}</span>
            <span>{customer.city}</span>
            <span>{customer.state}</span>
            <span>{customer.zip}</span>
            <span>{customer.country}</span>
          </address>
        </div>
        <div className='grid auto-rows-max gap-3'>
          <div className='font-semibold'>Billing Information</div>
          <div className='text-muted-foreground'>Same as shipping address</div>
        </div>
      </div>
      <Separator className='my-4' />
      <div className='grid gap-3'>
        <div className='font-semibold'>Customer Information</div>
        <dl className='grid gap-3'>
          <div className='flex items-center justify-between'>
            <dt className='text-muted-foreground'>Customer</dt>
            <dd>{customer.name}</dd>
          </div>
          <div className='flex items-center justify-between'>
            <dt className='text-muted-foreground'>Email</dt>
            <dd>
              <a href='mailto:'>{customer.email}</a>
            </dd>
          </div>
          <div className='flex items-center justify-between'>
            <dt className='text-muted-foreground'>Phone</dt>
            <dd>
              <a href='tel:'>{customer.phone}</a>
            </dd>
          </div>
        </dl>
      </div>
      <Separator className='my-4' />
      <div className='grid gap-3'>
        <div className='font-semibold'>Payment Information</div>
        <dl className='grid gap-3'>
          <div className='flex items-center justify-between'>
            <dt className='flex items-center gap-1 text-muted-foreground'>
              <div className='flex items-center'>
                {
                  {
                    MasterCard: <MasterCardIcon />,
                    Visa: <VisaIcon />,
                    Discover: <DiscoverIcon />,
                    'American Express': <AmericanExpressIcon />,
                  }[card.holder]
                }
              </div>
              <span>{card.holder}</span>
            </dt>
            <dd>**** **** **** {card.number.slice(-4)}</dd>
          </div>
        </dl>
      </div>
    </>
  );
};

import {
  PaymentInput,
  PaymentMethodRadio,
  PaymentSelect,
} from '@components/cart/components';
import {
  AmericanExpressIcon,
  DiscoverIcon,
  MasterCardIcon,
  VisaIcon,
} from '@components/icons';
import { usePayment } from '@hooks/use-payment';
import { Button } from '@ui/button';
import * as DW from '@ui/drawer-dialog';
import { SelectItem } from '@ui/select';
import { User2Icon } from 'lucide-react';

export function PaymentMethod() {
  const {
    isOpen,
    card,
    customer,
    customerError,
    cardError,
    handleCard,
    handleCustomer,
    handleBlur,
    handleIsOpen,
    generateHolders,
    handleMonth,
    handleYear,
    regInvoice,
  } = usePayment();
  return (
    <DW.DrawerDialog open={isOpen} setOpen={handleIsOpen}>
      <DW.DrawerDialogTrigger>
        <Button>Invoice</Button>
      </DW.DrawerDialogTrigger>
      <DW.DrawerDialogContent>
        <DW.DrawerDialogTitle>Payment Method</DW.DrawerDialogTitle>
        <span className='text-sm text-muted-foreground'>
          Add a new payment method to your account.
        </span>
        <section className='flex flex-col gap-1'>
          <PaymentMethodRadio generateHolders={generateHolders} />
          <div className='grid gap-2 grid-cols-2'>
            <PaymentInput
              identifier='name'
              value={customer.name}
              handleChange={handleCustomer}
              handleBlur={handleBlur}
              errors={customerError.name}
              type='text'
              placeholder='First Last'
            />
            <PaymentInput
              identifier='email'
              value={customer.email}
              handleChange={handleCustomer}
              handleBlur={handleBlur}
              errors={customerError.email}
              type='email'
              placeholder='Email'
            />
          </div>
          <div className='grid gap-2 grid-cols-2'>
            <PaymentInput
              identifier='address'
              value={customer.address}
              handleChange={handleCustomer}
              handleBlur={handleBlur}
              errors={customerError.address}
              type='text'
              placeholder='1234 Main St'
            />
            <PaymentInput
              identifier='phone'
              value={customer.phone}
              handleChange={handleCustomer}
              handleBlur={handleBlur}
              errors={customerError.phone}
              type='tel'
              placeholder='Phone'
            />
          </div>
          <div className='grid gap-2 grid-cols-3'>
            <PaymentInput
              identifier='city'
              value={customer.city}
              handleChange={handleCustomer}
              handleBlur={handleBlur}
              errors={customerError.city}
              type='text'
              placeholder='City'
            />
            <PaymentInput
              identifier='state'
              value={customer.state}
              handleChange={handleCustomer}
              handleBlur={handleBlur}
              errors={customerError.state}
              type='text'
              placeholder='State'
            />

            <PaymentInput
              identifier='country'
              value={customer.country}
              handleChange={handleCustomer}
              handleBlur={handleBlur}
              errors={customerError.country}
              type='text'
              placeholder='Country'
            />
          </div>
          <div className='grid gap-2 grid-cols-2'>
            <PaymentInput
              identifier='zip'
              value={customer.zip}
              handleChange={handleCustomer}
              handleBlur={handleBlur}
              errors={customerError.zip}
              type='text'
              placeholder='Zip'
            />
            <PaymentInput
              identifier='number'
              value={card.number}
              handleChange={handleCard}
              handleBlur={handleBlur}
              errors={cardError.number}
              type='text'
              placeholder='Card Number'
            >
              <div className='absolute right-0 -top-1 bottom-0 flex items-center pr-2'>
                {
                  {
                    MasterCard: <MasterCardIcon />,
                    Visa: <VisaIcon />,
                    Discover: <DiscoverIcon />,
                    'American Express': <AmericanExpressIcon />,
                  }[card.holder]
                }
              </div>
            </PaymentInput>
          </div>
          <div className='grid grid-cols-3 gap-4'>
            <PaymentSelect
              identifier='month'
              value={card.month}
              onValueChange={handleMonth}
              errors={cardError.month}
              handleBlur={handleBlur}
            >
              {Array.from({ length: 12 }, (_, i) => {
                const date = new Date(0, i + 1, 0).toUTCString().split(' ')[2];
                return (
                  <SelectItem key={i} value={`${i + 1}`}>
                    {date}
                  </SelectItem>
                );
              })}
            </PaymentSelect>
            <PaymentSelect
              identifier='year'
              value={card.year}
              onValueChange={handleYear}
              errors={cardError.year}
              handleBlur={handleBlur}
            >
              {Array.from({ length: 10 }, (_, i) => {
                const date = (new Date().getFullYear() + i)
                  .toLocaleString()
                  .slice(-2);
                return (
                  <SelectItem key={i} value={`${date}`}>
                    {date}
                  </SelectItem>
                );
              })}
            </PaymentSelect>
            <PaymentInput
              identifier='cvc'
              value={card.cvc}
              handleChange={handleCard}
              handleBlur={handleBlur}
              errors={cardError.cvc}
              type='text'
              placeholder='CVC'
            />
          </div>
        </section>
        <DW.DrawerDialogFooter className='px-0'>
          <Button
            className='w-full'
            onClick={() => {
              regInvoice();
            }}
          >
            <User2Icon className='mr-2' />
            Register
          </Button>
        </DW.DrawerDialogFooter>
      </DW.DrawerDialogContent>
    </DW.DrawerDialog>
  );
}

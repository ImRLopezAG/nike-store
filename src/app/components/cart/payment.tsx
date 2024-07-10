import { PaymentMethodRadio } from '@components/cart/components';
import {
  AmericanExpressIcon,
  DiscoverIcon,
  MasterCardIcon,
  VisaIcon,
} from '@components/icons';
import { usePayment } from '@hooks/use-payment';
import { Button } from '@ui/button';
import * as DW from '@ui/drawer-dialog';
import { InputField } from '@ui/input';
import { SelectField, SelectItem } from '@ui/select';
import { HandCoins } from 'lucide-react';

export function PaymentMethod() {
  const {
    isOpen,
    card,
    cardError,
    handleCardImp,
    handleBlur,
    handleIsOpen,
    generateHolders,
    handleMonth,
    handleYear,
    handlePay,
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
        <section className='flex flex-col gap-4'>
          <PaymentMethodRadio generateHolders={generateHolders} />
          <InputField
            identifier='number'
            value={card.number}
            handleChange={handleCardImp}
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
          </InputField>
          <div className='grid grid-cols-3 gap-4'>
            <SelectField
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
            </SelectField>
            <SelectField
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
            </SelectField>
            <InputField
              identifier='cvc'
              value={card.cvc}
              handleChange={handleCardImp}
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
              handlePay(true);
            }}
          >
            <HandCoins className='mr-2' />
            Pay
          </Button>
        </DW.DrawerDialogFooter>
      </DW.DrawerDialogContent>
    </DW.DrawerDialog>
  );
}

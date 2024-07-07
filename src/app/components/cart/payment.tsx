import {
  PaymentInput,
  PaymentMethodRadio,
  PaymentSelect,
} from '@components/cart/components';
import { CartIcon, InvoiceIcon, AmericanExpressIcon, VisaIcon, MasterCardIcon, DiscoverIcon } from '@components/icons';
import { usePayment } from '@hooks/use-payment';
import { Button } from '@ui/button';
import * as DW from '@ui/drawer-dialog';
import { SelectItem } from '@ui/select';

export function PaymentMethod() {
  const {
    errors,
    fields,
    handleBlur,
    handleChange,
    handleIsOpen,
    handlePay,
    isOpen,
    generateHolders,
    handleMonth,
    handleYear,
  } = usePayment();
  return (
    <DW.DrawerDialog open={isOpen} setOpen={handleIsOpen}>
      <DW.DrawerDialogTrigger>
        <Button>Payment Method</Button>
      </DW.DrawerDialogTrigger>
      <DW.DrawerDialogContent>
        <DW.DrawerDialogTitle>Payment Method</DW.DrawerDialogTitle>
        <span className='text-sm text-muted-foreground'>
          Add a new payment method to your account.
        </span>
        <section className='flex flex-col gap-3'>
          <PaymentMethodRadio generateHolders={generateHolders} />
          <div className='grid gap-2 grid-cols-2'>
            <PaymentInput
              identifier='name'
              value={fields.name}
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors.name}
              type='text'
              placeholder='First Last'
            />
            <PaymentInput
              identifier='address'
              value={fields.address}
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors.address}
              type='text'
              placeholder='1234 Main St'
            />
          </div>
          <div className='grid gap-2 grid-cols-3'>
            <PaymentInput
              identifier='city'
              value={fields.city}
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors.city}
              type='text'
              placeholder='City'
            />
            <PaymentInput
              identifier='state'
              value={fields.state}
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors.state}
              type='text'
              placeholder='State'
            />
            <PaymentInput
              identifier='zip'
              value={fields.zip}
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors.zip}
              type='text'
              placeholder='Zip'
            />
          </div>
          <div className='grid gap-2 grid-cols-2'>
            <PaymentInput
              identifier='country'
              value={fields.country}
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors.country}
              type='text'
              placeholder='Country'
            />
            <PaymentInput
              identifier='number'
              value={fields.number}
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors.number}
              type='text'
              placeholder='Card Number'
            >
              <div className='absolute right-0 -top-1 bottom-0 flex items-center pr-2'>
                {{
                  MasterCard: <MasterCardIcon />,
                  Visa: <VisaIcon />,
                  Discover: <DiscoverIcon />,
                  'American Express': <AmericanExpressIcon />,
                }[fields.holder]}
              </div>
            </PaymentInput>
          </div>
          <div className='grid grid-cols-3 gap-4'>
            <PaymentSelect
              identifier='month'
              value={fields.month}
              onValueChange={handleMonth}
              errors={errors.month}
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
              value={fields.year}
              onValueChange={handleYear}
              errors={errors.year}
              handleBlur={handleBlur}
            >
              {Array.from({ length: 10 }, (_, i) => {
                const date = (new Date().getFullYear() + i).toLocaleString().slice(-2);
                return (
                  <SelectItem key={i} value={`${date}`}>
                    {date}
                  </SelectItem>
                );
              })}
            </PaymentSelect>
            <PaymentInput
              identifier='cvc'
              value={fields.cvc}
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors.cvc}
              type='text'
              placeholder='CVC'
            />
          </div>
        </section>
        <DW.DrawerDialogFooter className='px-0'>
          <Button
            className='w-full'
            onClick={() => {
              handlePay(false);
            }}
          >
            <CartIcon className='mr-2' />
            Pay
          </Button>
          <Button
            className='w-full'
            onClick={() => {
              handlePay(true);
            }}
          >
            <InvoiceIcon className='mr-2' />
            Pay and invoice
          </Button>
        </DW.DrawerDialogFooter>
      </DW.DrawerDialogContent>
    </DW.DrawerDialog>
  );
}

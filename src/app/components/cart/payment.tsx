import {
  AppleIcon,
  CartIcon,
  CreditCardIcon,
  InvoiceIcon,
  PaypalIcon,
} from '@components/icons';
import { usePayment } from '@hooks/use-payment';
import { cn } from '@shared/lib/utils';
import { Button } from '@ui/button';
import { CardDescription } from '@ui/card';
import * as DW from '@ui/drawer-dialog';
import { Input } from '@ui/input';
import { Label } from '@ui/label';
import { RadioGroup, RadioGroupItem } from '@ui/radio-group';
import * as SL from '@ui/select';

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
        <CardDescription>
          Add a new payment method to your account.
        </CardDescription>
        <div className='grid gap-6'>
          <RadioGroup
            defaultValue='card'
            className='grid grid-cols-3 gap-4'
            onValueChange={() => {
              generateHolders();
            }}
          >
            <div>
              <RadioGroupItem value='card' id='card' className='peer sr-only' />
              <Label
                htmlFor='card'
                className='flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary'
              >
                <CreditCardIcon className='mb-3' />
                Card
              </Label>
            </div>
            <div>
              <RadioGroupItem
                value='paypal'
                id='paypal'
                className='peer sr-only'
              />
              <Label
                htmlFor='paypal'
                className='flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary'
              >
                <PaypalIcon className='mb-3' />
                Paypal
              </Label>
            </div>
            <div>
              <RadioGroupItem
                value='apple'
                id='apple'
                className='peer sr-only'
              />
              <Label
                htmlFor='apple'
                className='flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary'
              >
                <AppleIcon className='mb-3' />
                Apple
              </Label>
            </div>
          </RadioGroup>
          <div className='grid gap-2'>
            <Label htmlFor='name'>Name</Label>
            <Input
              id='name'
              name='name'
              placeholder='First Last'
              value={fields.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={cn(errors.name && 'border-red-500')}
            />
            <span className='text-red-500 text-sm min-h-4'>{errors.name}</span>
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='number'>Card number</Label>
            <Input
              id='number'
              name='number'
              placeholder=''
              value={fields.number}
              onChange={handleChange}
              onBlur={handleBlur}
              className={cn(errors.number && 'border-red-500')}
            />
            <span className='text-red-500 text-sm min-h-4'>
              {errors.number}
            </span>
          </div>
          <div className='grid grid-cols-3 gap-4'>
            <div className='grid gap-2'>
              <Label htmlFor='month'>Expires</Label>
              <SL.Select
                value={fields.month}
                name='month'
                onValueChange={handleMonth}
              >
                <SL.SelectTrigger id='month' name='month'>
                  <SL.SelectValue placeholder='Month' />
                </SL.SelectTrigger>
                <SL.SelectContent
                  onBlur={handleBlur}
                  className={cn(errors.month && 'border-red-500')}
                >
                  <SL.SelectItem value='1'>January</SL.SelectItem>
                  <SL.SelectItem value='2'>February</SL.SelectItem>
                  <SL.SelectItem value='3'>March</SL.SelectItem>
                  <SL.SelectItem value='4'>April</SL.SelectItem>
                  <SL.SelectItem value='5'>May</SL.SelectItem>
                  <SL.SelectItem value='6'>June</SL.SelectItem>
                  <SL.SelectItem value='7'>July</SL.SelectItem>
                  <SL.SelectItem value='8'>August</SL.SelectItem>
                  <SL.SelectItem value='9'>September</SL.SelectItem>
                  <SL.SelectItem value='10'>October</SL.SelectItem>
                  <SL.SelectItem value='11'>November</SL.SelectItem>
                  <SL.SelectItem value='12'>December</SL.SelectItem>
                </SL.SelectContent>
              </SL.Select>
              <span className='text-red-500 text-sm min-h-4'>
                {errors.month}
              </span>
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='year'>Year</Label>
              <SL.Select
                value={fields.year}
                name='year'
                onValueChange={handleYear}
              >
                <SL.SelectTrigger id='year' name='year'>
                  <SL.SelectValue placeholder='Year' />
                </SL.SelectTrigger>
                <SL.SelectContent
                  onBlur={handleBlur}
                  className={cn(errors.year && 'border-red-500')}
                >
                  {Array.from({ length: 10 }, (_, i) => (
                    <SL.SelectItem
                      key={i}
                      value={`${new Date().getFullYear() + i}`}
                    >
                      {new Date().getFullYear() + i}
                    </SL.SelectItem>
                  ))}
                </SL.SelectContent>
              </SL.Select>
              <span className='text-red-500 text-sm min-h-4'>
                {errors.year}
              </span>
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='cvc'>CVC</Label>
              <Input
                id='cvc'
                name='cvc'
                placeholder='CVC'
                value={fields.cvc}
                onChange={handleChange}
                onBlur={handleBlur}
                className={cn(errors.cvc && 'border-red-500')}
              />
              <span className='text-red-500 text-sm min-h-4'>{errors.cvc}</span>
            </div>
          </div>
        </div>
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

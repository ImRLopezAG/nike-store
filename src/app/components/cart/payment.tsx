import { AppleIcon, CartIcon, CreditCardIcon, PaypalIcon } from '@components/icons';
import { useCartStore } from '@hooks/use-cart';
import { Button } from '@ui/button';
import { CardDescription } from '@ui/card';
import {
  DrawerDialog,
  DrawerDialogContent,
  DrawerDialogFooter,
  DrawerDialogTitle,
  DrawerDialogTrigger,
} from '@ui/drawer-dialog';
import { Input } from '@ui/input';
import { Label } from '@ui/label';
import { RadioGroup, RadioGroupItem } from '@ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@ui/select';
import { useState } from 'react';
import {cn} from '@shared/lib/utils';
export function PaymentMethod() {
  const [isOpen, setIsOpen] = useState(false);
  const { payCart } = useCartStore();
  const CARD = {
    Visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    MasterCard: /^5[1-5][0-9]{14}$/
  }
  const [fields, setFields] = useState({
    name: '',
    number: '',
    month: '',
    year: '',
    cvc: ''
  })
  const [errors, setErrors] = useState({
    name: '',
    number: '',
    month: '',
    year: '',
    cvc: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields({ ...fields, [e.target.name]: e.target.value })
  }
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    switch (name) {
      case 'name':
        setErrors({ ...errors, name: value ? '' : 'Name is required' })
        break
      case 'number':
        setErrors({ ...errors, number: CARD.MasterCard.test(value.replace(' ', '')) || CARD.Visa.test(value.replace(' ', ''))  ? '' : 'Invalid card number' })
        break
      case 'month':
        setErrors({ ...errors, month: value ? '' : 'Month is required' })
        break
      case 'year':
        setErrors({ ...errors, year: value ? '' : 'Year is required' })
        break
      case 'cvc':
        setErrors({ ...errors, cvc: value && value.length === 3 ? '' : 'CVC is required' })
        break
    }
  }

  const isValid = Object.values(errors).every((error) => error === '')

  const handlePay = () => {
    if (isValid) {
      payCart()
      setFields({
        name: '',
        number: '',
        month: '',
        year: '',
        cvc: ''
      })
      setIsOpen(false)
    }
  }

  const generateHolders = () => {
    let cardNumber: string
    let cardHolder: string

    const next = (a: number, b: number) => Math.floor(Math.random() * (b - a + 1) + a)

    do {
      cardNumber = Array.from({ length: 16 }, () => next(0, 9).toString()).join('')
      cardHolder = Object.keys(CARD).find((key) => CARD[key].test(cardNumber.replace(/\s/g, ''))) ?? 'Unknown'
    } while (cardHolder === 'Unknown')
    setFields({
      ...fields,
      number: cardNumber.match(/.{1,4}/g)?.join(' ') ?? '',
      month: next(1, 12).toString(),
      year: (new Date().getFullYear() + next(0, 9)).toString(),
      cvc: Array.from({ length: 3 }, () => next(0, 9).toString()).join('')
    })
  }


  return (
    <DrawerDialog open={isOpen} setOpen={setIsOpen}>
      <DrawerDialogTrigger>
        <Button>Payment Method</Button>
      </DrawerDialogTrigger>
      <DrawerDialogContent>
        <DrawerDialogTitle>Payment Method</DrawerDialogTitle>
        <CardDescription>
          Add a new payment method to your account.
        </CardDescription>
        <div className='grid gap-6'>
          <RadioGroup defaultValue='card' className='grid grid-cols-3 gap-4' onValueChange={() => {
            generateHolders()
          }}>
            <div>
              <RadioGroupItem value='card' id='card' className='peer sr-only'/>
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
            <Input id='name' name='name' placeholder='First Last' value={fields.name} onChange={handleChange} onBlur={handleBlur} className={cn(errors.name && 'border-red-500')} />
            <span className='text-red-500 text-sm min-h-4'>{errors.name}</span>
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='number'>Card number</Label>
            <Input id='number' name='number' placeholder='' value={fields.number} onChange={handleChange} onBlur={handleBlur} className={cn(errors.number && 'border-red-500')} />
            <span className='text-red-500 text-sm min-h-4'>{errors.number}</span>
          </div>
          <div className='grid grid-cols-3 gap-4'>
            <div className='grid gap-2'>
              <Label htmlFor='month'>Expires</Label>
              <Select value={fields.month} onValueChange={(value) => setFields({ ...fields, month: value })}>
                <SelectTrigger id='month' name='month'>
                  <SelectValue placeholder='Month' />
                </SelectTrigger>
                <SelectContent onBlur={handleBlur} className={cn(errors.month && 'border-red-500')}>
                  <SelectItem value='1'>January</SelectItem>
                  <SelectItem value='2'>February</SelectItem>
                  <SelectItem value='3'>March</SelectItem>
                  <SelectItem value='4'>April</SelectItem>
                  <SelectItem value='5'>May</SelectItem>
                  <SelectItem value='6'>June</SelectItem>
                  <SelectItem value='7'>July</SelectItem>
                  <SelectItem value='8'>August</SelectItem>
                  <SelectItem value='9'>September</SelectItem>
                  <SelectItem value='10'>October</SelectItem>
                  <SelectItem value='11'>November</SelectItem>
                  <SelectItem value='12'>December</SelectItem>
                </SelectContent>
              </Select>
              <span className='text-red-500 text-sm min-h-4'>{errors.month}</span>
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='year'>Year</Label>
              <Select value={fields.year} onValueChange={(value) => setFields({ ...fields, year: value })}>
                <SelectTrigger id='year' name='year'>
                  <SelectValue placeholder='Year' />
                </SelectTrigger>
                <SelectContent onBlur={handleBlur} className={cn(errors.year && 'border-red-500')}>
                  {Array.from({ length: 10 }, (_, i) => (
                    <SelectItem
                      key={i}
                      value={`${new Date().getFullYear() + i}`}
                    >
                      {new Date().getFullYear() + i}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <span className='text-red-500 text-sm min-h-4'>{errors.year}</span>
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='cvc'>CVC</Label>
              <Input id='cvc' name='cvc' placeholder='CVC'  value={fields.cvc} onChange={handleChange} onBlur={handleBlur} className={cn(errors.cvc && 'border-red-500')} />
              <span className='text-red-500 text-sm min-h-4'>{errors.cvc}</span>
            </div>
          </div>
        </div>
        <DrawerDialogFooter className='px-0'>
          <Button className='w-full' onClick={handlePay}>
            <CartIcon className='mr-2' />
            Pay
          </Button>
        </DrawerDialogFooter>
      </DrawerDialogContent>
    </DrawerDialog>
  );
}

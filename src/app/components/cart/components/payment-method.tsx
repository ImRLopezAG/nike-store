
import { Label } from '@ui/label';
import { RadioGroup, RadioGroupItem } from '@ui/radio-group';
import {AppleIcon, CreditCardIcon, PaypalIcon} from '@components/icons'

type PaymentMethodProps = Props & {
  generateHolders: () => void;
};
export const PaymentMethodRadio: React.FC<PaymentMethodProps> = ({ generateHolders }) => (
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
      <RadioGroupItem value='paypal' id='paypal' className='peer sr-only' />
      <Label
        htmlFor='paypal'
        className='flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary'
      >
        <PaypalIcon className='mb-3' />
        Paypal
      </Label>
    </div>
    <div>
      <RadioGroupItem value='apple' id='apple' className='peer sr-only' />
      <Label
        htmlFor='apple'
        className='flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary'
      >
        <AppleIcon className='mb-3' />
        Apple
      </Label>
    </div>
  </RadioGroup>
);

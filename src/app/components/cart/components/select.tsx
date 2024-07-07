import { cn } from '@shared/lib/utils';
import { Label } from '@ui/label';
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '@ui/select';
type PaymentSelectProps  = Props & {
  identifier: string;
  value: string;
  onValueChange: (e: string) => void;
  errors?: string;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  children: React.ReactNode;
}
export const PaymentSelect: React.FC<PaymentSelectProps> = (props) => (
  <div className={cn('grid gap-2 relative', props.className)}>
    <Label htmlFor='month' className='capitalize'>
      {props.identifier}
    </Label>
    <Select
      value={props.value}
      name={props.identifier}
      onValueChange={props.onValueChange}
    >
      <SelectTrigger id='month' name='month'>
        <SelectValue placeholder='Month' />
      </SelectTrigger>
      <SelectContent
        onBlur={props.handleBlur}
        className={cn(props.errors && 'border-red-500')}
      >
        {props.children}
      </SelectContent>
    </Select>
    <span className='text-red-500 text-sm min-h-4'>{props.errors}</span>
  </div>
);

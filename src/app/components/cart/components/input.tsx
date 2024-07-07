import { Input } from '@ui/input'
import { Label } from '@ui/label'
import { cn } from '@shared/lib/utils'

type PaymentInputProps = Props & {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  errors?: string;
  identifier: string;
  type: string;
  placeholder?: string;
} 

export const PaymentInput: React.FC<PaymentInputProps> = (props) => (
  <div className={cn('grid gap-2 relative', props.className)}>
    <Label htmlFor={props.identifier} className='capitalize'>{props.identifier}</Label>
    {props.children}
    <Input
      id={props.identifier}
      name={props.identifier}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.handleChange}
      onBlur={props.handleBlur}
      type={props.type}
      className={cn(props.errors && 'border-red-500')}
    />
    <span className='text-red-500 text-sm min-h-4'>{props.errors}</span>
  </div>
);

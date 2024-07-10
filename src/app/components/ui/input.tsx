import * as React from "react"
import { Label } from "@ui/label"

import { cn } from "@/shared/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

type InputFieldProps = Props & {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  errors?: string;
  identifier: string;
  type: string;
  placeholder?: string;
}
const InputField: React.FC<InputFieldProps> = (props) => (
  <div className={cn('grid gap-2 relative', props.className)}>
    <Label htmlFor={props.identifier} className='capitalize'>
      {props.identifier}
    </Label>
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
      autoComplete='off'
    />
    <span className='text-red-500 text-sm min-h-4'>{props.errors}</span>
  </div>
);


export { Input, InputField }


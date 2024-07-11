import { InputField } from '@ui/input';
import { useRegister } from '@hooks/use-register';
import { Button } from '@ui/button';
import * as DW from '@ui/drawer-dialog';
import { User2Icon } from 'lucide-react';

export function Register() {
  const {
    isOpen,
    customer,
    customerError,
    handleCustomer,
    handleBlur,
    handleIsOpen,
    register,
  } = useRegister();
  return (
    <DW.DrawerDialog open={isOpen} setOpen={handleIsOpen}>
      <DW.DrawerDialogTrigger>
        <Button variant='link'>Create Account</Button>
      </DW.DrawerDialogTrigger>
      <DW.DrawerDialogContent>
        <DW.DrawerDialogTitle>Create Account</DW.DrawerDialogTitle>
        <span className='text-sm text-muted-foreground'>
          Register a new account
        </span>
        <form className='flex flex-col gap-1' onSubmit={(e) => e.preventDefault()}>
          <div className='grid gap-2 grid-cols-2'>
            <InputField
              identifier='name'
              value={customer.name}
              handleChange={handleCustomer}
              handleBlur={handleBlur}
              errors={customerError.name}
              type='text'
              placeholder='First Last'
            />
            <InputField
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
            <InputField
              identifier='address'
              value={customer.address}
              handleChange={handleCustomer}
              handleBlur={handleBlur}
              errors={customerError.address}
              type='text'
              placeholder='1234 Main St'
            />
            <InputField
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
            <InputField
              identifier='city'
              value={customer.city}
              handleChange={handleCustomer}
              handleBlur={handleBlur}
              errors={customerError.city}
              type='text'
              placeholder='City'
            />
            <InputField
              identifier='state'
              value={customer.state}
              handleChange={handleCustomer}
              handleBlur={handleBlur}
              errors={customerError.state}
              type='text'
              placeholder='State'
            />

            <InputField
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
            <InputField
              identifier='zip'
              value={customer.zip}
              handleChange={handleCustomer}
              handleBlur={handleBlur}
              errors={customerError.zip}
              type='text'
              placeholder='Zip'
            />
            <InputField
              identifier='password'
              value={customer.password || ''}
              handleChange={handleCustomer}
              handleBlur={handleBlur}
              errors={customerError.password || ''}
              type='password'
              placeholder='Password'
            />
          </div>
        </form>
        <DW.DrawerDialogFooter className='px-0'>
          <Button
            className='w-full'
            onClick={() => {
              register();
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

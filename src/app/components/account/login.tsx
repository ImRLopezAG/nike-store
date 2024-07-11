import { GithubIcon, GoogleIcon } from '@components/icons';
import { Register } from './create'
import { Button } from '@ui/button';

import { Input } from '@ui/input';
import { Label } from '@ui/label';

import { toast } from '@hooks/use-toast';
import * as DW from '@ui/drawer-dialog';
import { useState } from 'react';

type LoginProps = Props & {
  message?: string;
};

export const Login: React.FC<LoginProps> = ({ message = 'To Pay your order Please Login' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => setIsOpen(!isOpen);

  return (
    <DW.DrawerDialog open={isOpen} setOpen={setIsOpen}>
      <DW.DrawerDialogTrigger>
        <Button className='px-2 w-full flex-1 justify-start' variant='ghost'>{message}</Button>
      </DW.DrawerDialogTrigger>
      <DW.DrawerDialogContent>
        <DW.DrawerDialogTitle>Login</DW.DrawerDialogTitle>
        <DW.DrawerDialogDescription>
          Enter your email below to login into your account.
        </DW.DrawerDialogDescription>
        <LoginForm />
        <DW.DrawerDialogFooter>
          <Button variant='ghost' onClick={handleIsOpen}>
            Cancel
          </Button>
        </DW.DrawerDialogFooter>
      </DW.DrawerDialogContent>
    </DW.DrawerDialog>
  );
}

export const LoginForm = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  return (
    <form className='grid gap-4'>
      <div className='grid grid-cols-2 gap-6'>
        <Button variant='outline'>
          <GithubIcon className='mr-2 h-4 w-4' />
          Github
        </Button>
        <Button variant='outline'>
          <GoogleIcon className='mr-2 h-4 w-4' />
          Google
        </Button>
      </div>
      <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
          <span className='w-full border-t' />
        </div>
        <div className='relative flex justify-center text-xs uppercase'>
          <span className='bg-background px-2 text-muted-foreground'>
            Or continue with
          </span>
        </div>
      </div>
      <div className='grid gap-2'>
        <Label htmlFor='email'>Email</Label>
        <Input
          id='email'
          type='email'
          placeholder='m@example.com'
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </div>
      <div className='grid gap-2'>
        <Label htmlFor='password'>Password</Label>
        <Input
          id='password'
          type='password'
          placeholder='Password'
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
      </div>
      <Button
        onClick={() => {
          if (form.email && form.password) {
            toast({
              title: 'Issue reported',
              description: 'We will get back to you as soon as possible.',
            });
          } else {
            toast({
              title: 'Missing information',
              description: 'Please fill out all fields.',
              variant: 'destructive',
            });
          }
        }}
      >
        Submit
      </Button>
      <div className='text-sm text-center text-muted-foreground'>
        don't have an account?
        <Register />
      </div>
    </form>
  );
};

import { Login, ReportIssue } from '@components/account';
import { useStore } from '@hooks/use-store';
import { Button } from '@ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@ui/dropdown-menu';
import { CircleUser } from 'lucide-react';

export const UserMenu: React.FC<Props> = () => {
  const { name } = useStore((state) => state.cart.payment.customer);
  const { logoutUser } = useStore((state) => state);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='secondary' size='icon' className='rounded-full'>
          <CircleUser className='h-5 w-5' />
          <span className='sr-only'>Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem asChild>
          <ReportIssue />
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <>
            {!name && <Login message='Login' />}
            {name && (
              <Button variant='link' onClick={logoutUser}>
                Logout
              </Button>
            )}
          </>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

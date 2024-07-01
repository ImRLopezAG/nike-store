import { cn } from '@shared/lib/utils';
import { Link } from '@tanstack/react-router';
import { Search } from './search';
import { TeamSwitcher } from './team-switcher';
import { UserNav } from './user-nav';
import { CartIcon } from '@components/icons'

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className='hidden flex-col md:flex'>
      <div className='border-b'>
        <div className='flex h-16 items-center px-4 gap-3'>
          <TeamSwitcher />
          <nav
            className={cn(
              'flex items-center space-x-4 lg:space-x-6',
              className
            )}
            {...props}
          >
            <Link
              to='/'
              className='text-sm font-medium transition-colors hover:text-primary text-muted-foreground'
              activeProps={{ className: 'text-primary' }}
            >
              Overview
            </Link>
            <Link
              to='/customers'
              className='text-sm font-medium transition-colors hover:text-primary text-muted-foreground'
              activeProps={{ className: 'text-primary' }}
            >
              Customers
            </Link>
            <Link
              to='/men'
              className='text-sm font-medium transition-colors hover:text-primary text-muted-foreground'
              activeProps={{ className: 'text-primary' }}
            >
              Men
            </Link>
            <Link
              to='/women'
              className='text-sm font-medium transition-colors hover:text-primary text-muted-foreground'
              activeProps={{ className: 'text-primary' }}
            >
              Women
            </Link>
          </nav>
          <div className='ml-auto flex items-center space-x-4'>
            <Link
              to='/cart'
              className='text-sm font-medium transition-colors hover:text-primary text-muted-foreground flex gap-3'
              activeProps={{ className: 'text-primary' }}
            >
              <CartIcon />
              <span className='sr-only'>Cart</span>
            </Link>
            <Search />
            <UserNav />
          </div>
        </div>
      </div>
    </div>
  );
}

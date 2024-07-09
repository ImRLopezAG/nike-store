import { useCartStore } from '@hooks/use-cart.store';
import { cn } from '@shared/utils';
import { Link } from '@tanstack/react-router';
import { Badge } from '@ui/badge';
import { Package2 } from 'lucide-react';
export const Navigation: React.FC<Props> = ({ className }) => {
  const total = useCartStore((state) => state.cart.totals.products);

  return (
    <nav className={cn('gap-6 font-medium text-lg', className)}>
      <Link
        to='/'
        className='flex items-center gap-2 text-lg font-semibold md:text-base'
      >
        <Package2 className='h-6 w-6' />
        <span className='sr-only'>Acme Inc</span>
      </Link>
      <Link
        to='/'
        className='text-foreground transition-colors hover:text-foreground'
      >
        Dashboard
      </Link>
      <Link
        to='/customers'
        className='text-muted-foreground transition-colors hover:text-foreground'
      >
        Customers
      </Link>
      <Link
        to='/women'
        className='text-muted-foreground transition-colors hover:text-foreground'
      >
        Women
      </Link>
      <Link
        to='/men'
        className='text-muted-foreground transition-colors hover:text-foreground'
      >
        Men
      </Link>
      <Link
        to='/cart'
        className='text-muted-foreground transition-colors hover:text-foreground relative'
      >
        {total > 0 && (
          <Badge className='absolute -top-4 -right-5 rounded-full'>
            {total}
          </Badge>
        )}
        Cart
      </Link>
    </nav>
  );
};

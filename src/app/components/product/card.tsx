import { useStore } from '@/app/hooks/use-store';
import { CartIcon, TagIcon } from '@components/icons';
import { AspectRatio } from '@ui/aspect-ratio';
import { Button } from '@ui/button';
import { Card, CardContent, CardFooter, CardTitle } from '@ui/card';
import { Skeleton } from '@ui/skeleton';
import { Portrait } from './portrait';

export function ProductCard(item: Product & { withColorways?: boolean }) {
  const { title, price, productType, colorways, withColorways, subtitle } =
    item;
  const { currentPrice, currency } = price;

  const addToCart = useStore((state) => state.addToCart);

  return (
    <Card className='w-full sm:max-w-sm'>
      <Portrait item={item} />
      <CardContent className='flex flex-col px-2 py-4 gap-2'>
        <div className='flex flex-col gap-3'>
          <CardTitle>{title}</CardTitle>
          <span className='text-sm text-muted-foreground min-h-10'>
            {subtitle}
          </span>
          <div className='flex items-start justify-between gap-2 text-sm text-muted-foreground'>
            <div className='flex gap-1'>
              <TagIcon className='w-4 h-4' />
              <span>{productType}</span>
            </div>
            {withColorways && (
              <span className='text-blue-500 underline text-sm'>
                colors: {colorways.length}
              </span>
            )}
          </div>
        </div>
        <div>
          <div className='text-2xl font-bold'>
            {currency} ${currentPrice}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          size='lg'
          className='w-full'
          onClick={() => {
            addToCart({ ...item, quantity: 1 });
          }}
        >
          <CartIcon className='size-4 mr-3' />
          <span>Add to cart</span>
        </Button>
      </CardFooter>
    </Card>
  );
}

export const ProductCardSkeleton = () => (
  <Card className='w-full max-w-sm'>
    <AspectRatio ratio={1 / 1}>
      <Skeleton className='w-full h-full rounded-lg bg-gray-400' />
    </AspectRatio>
    <CardContent className='flex flex-col px-2 py-4 gap-2'>
      <div className='flex flex-col gap-3'>
        <Skeleton className='h-4 w-3/4 bg-gray-400' />
        <Skeleton className='h-4 w-1/2 bg-gray-400' />
        <div className='flex items-start justify-between gap-2 text-sm text-muted-foreground'>
          <div className='flex gap-1 h-8'>
            <Skeleton className='w-4 h-4 bg-gray-400' />
            <Skeleton className='h-4 w-32 bg-gray-400' />
          </div>
          <Skeleton className='h-4 w-1/4 bg-gray-400' />
        </div>
      </div>
      <div className='space-y-2'>
        <Skeleton className='h-6 w-1/2 bg-gray-400' />
      </div>
      <Skeleton className='h-10 w-full bg-gray-400' />
    </CardContent>
  </Card>
);

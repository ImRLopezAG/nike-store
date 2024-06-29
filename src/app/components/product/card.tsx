import { CartIcon, HalfStarIcon, StarIcon, TagIcon } from '@components/icons';
import { Button } from '@ui/button';
import { Card, CardContent, CardTitle } from '@ui/card';

export function ProductCard(item: Product) {
  const { category, image, price, title, rating } = item;
  const { rate, count } = rating;
  const fullStars = Math.floor(rate);
  const hasHalfStar = rate % 1 !== 0;
  return (
    <Card className='w-full max-w-sm'>
      <img
        src={image}
        alt={title}
        width={600}
        height={600}
        className='rounded-t-lg object-cover w-full aspect-square'
      />
      <CardContent className='p-6 space-y-4'>
        <div className='flex flex-col gap-3'>
          <CardTitle className='min-h-10'>
            {title}
          </CardTitle>
          <div className='flex items-start flex-col gap-2 text-sm text-muted-foreground'>
            <div className='flex gap-1'>
              {[...Array(fullStars)].map((_, index) => (
                <StarIcon key={index} className='w-4 h-4 text-yellow-400' />
              ))}
              {hasHalfStar && (
                <HalfStarIcon className='w-4 h-4 text-yellow-400' />
              )}
              <span>{rate}</span>
              <span>({count} reviews)</span>
            </div>
            <div className='flex gap-1'>
              <TagIcon className='w-4 h-4' />
              <span>{category}</span>
            </div>
          </div>
        </div>
        <div className='space-y-2'>
          <div className='text-2xl font-bold'>${price}</div>
        </div>
        <Button size='lg' className='w-full'>
          <CartIcon className='size-4 mr-3' />
          <span>Add to cart</span>
        </Button>
      </CardContent>
    </Card>
  );
}

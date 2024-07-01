import { TagIcon } from '@components/icons';
import { Card, CardContent, CardDescription, CardTitle } from '@ui/card';

export function ProductCart(item: Product) {
  const { title, price, productType, subtitle, images, colorDescription } = item;
  const { currentPrice, currency } = price;
  const { squarishURL } = images;

  return (
    <Card className='w-full flex border'>
      <img src={squarishURL} alt={title} className='size-48 object-center' />
      <CardContent className='flex p-2 gap-2 w-full'>
        <section className='w-full flex flex-col gap-3'>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{subtitle}</CardDescription>
          <div className='flex items-center gap-2 text-sm text-muted-foreground'>
            <TagIcon className='size-4' />
            <span>{productType}</span>
          </div>
          <span className='text-blue-500 underline text-sm'>  
            {colorDescription}
          </span>
        </section>
        <section>
          <div className='text-2xl font-bold'>
            {currency} ${currentPrice}
          </div>
        </section>
      </CardContent>
    </Card>
  );
}

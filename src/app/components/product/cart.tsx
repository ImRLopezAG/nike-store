import { useCart } from '@hooks/use-cart'
import { MinusIcon, PlusIcon, TagIcon, TrashIcon } from '@components/icons';
import { Button } from '@ui/button';
import { Card, CardContent, CardDescription, CardTitle } from '@ui/card';

export function ProductCart(item: Item) {
  const {currency, currentPrice, handleAddToCart, handleRemoveFromCart, handleRemoveQuantity, productType, quantity, squarishURL, subtitle, title} = useCart(item);

  return (
    <Card className='w-full flex border max-w-xl'>
      <picture className='object-cover p-1 w-3/5'>
        <img src={squarishURL} alt={title} className='size-48 rounded-lg' />
      </picture>
      <CardContent className='flex p-2 gap-2 w-full'>
        <section className='w-full flex flex-col gap-3'>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{subtitle}</CardDescription>
          <div className='flex items-center gap-2 text-sm text-muted-foreground'>
            <TagIcon className='size-4' />
            <span>{productType}</span>
          </div>
          <div className='flex items-center gap-2'>
            <Button
              variant='ghost'
              className='hover:bg-yellow-500/15'
              onClick={handleRemoveQuantity}
              disabled={quantity === 1}
            >
              <MinusIcon className='size-4' />
              <span className='sr-only'>Remove from cart</span>
            </Button>
            <span>{quantity}</span>
            <Button
              variant='ghost'
              className='hover:bg-green-500/15'
              onClick={handleAddToCart}
            >
              <PlusIcon className='size-4' />
              <span className='sr-only'>Add to cart</span>
            </Button>
            <Button
              variant='ghost'
              className='hover:bg-red-500/15'
              onClick={handleRemoveFromCart}
            >
              <TrashIcon className='size-4' />
              <span className='sr-only'>Remove from cart</span>
            </Button>
          </div>
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

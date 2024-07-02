import { MinusIcon, PlusIcon, TagIcon, TrashIcon } from '@components/icons';
import { useCartStore } from '@hooks/use-cart';
import { Button } from '@ui/button';
import { Card, CardContent, CardDescription, CardTitle } from '@ui/card';
import { useEffect, useState } from 'react';

export function ProductCart(item: Product) {
  const { removeFromCart, cart, addQuantity, removeQuantity } = useCartStore();
  const { products } = cart;
  const [quantity, setQuantity] = useState(1);
  const { title, price, productType, subtitle, images } = item;
  const { currentPrice, currency } = price;
  const { squarishURL } = images;

  useEffect(() => {
    const product = products.find((product) => product.id === item.id);
    if (product) {
      setQuantity(product.quantity);
    }
  }, [item.id, products]);

  const handleAddToCart = () => {
    addQuantity({ ...item, quantity });
    setQuantity(quantity + 1);
  };

  const handleRemoveFromCart = () => {
    removeFromCart({ ...item, quantity });
    setQuantity(quantity - 1);
  };

  const handleRemoveQuantity = () => {
    removeQuantity({ ...item, quantity });
    setQuantity(quantity - 1);
  };

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

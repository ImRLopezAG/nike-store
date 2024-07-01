import { PaymentMethod } from '@components/cart';
import { useCartStore } from '@hooks/use-cart';
import { createFileRoute } from '@tanstack/react-router';
import { Button } from '@ui/button';
import { ProductCart } from '@components/product'

export const Route = createFileRoute('/cart/')({
  component: () => <Cart />,
});

function Cart() {
  const { cart, removeFromCart, payCart } = useCartStore();
  const { products } = cart;
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-3xl font-bold'>Cart</h1>
      <div className='grid grid-rows-1 md:grid-cols-2 gap-4'>
        <div>
          <div className='flex flex-col gap-2'>
            {products.map((product) => (
              <ProductCart key={product.id} {...product} />
            ))}
          </div>
        </div>
        <div className=''>
          <PaymentMethod />
        </div>
      </div>
    </div>
  );
}

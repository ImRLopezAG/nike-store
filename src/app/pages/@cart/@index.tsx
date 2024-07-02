import { OrderDetails } from '@components/cart';
import { ProductCart } from '@components/product';
import { useCartStore } from '@hooks/use-cart';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/cart/')({
  component: () => <Cart />,
});

function Cart() {
  const { cart } = useCartStore();
  const { products } = cart;
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-3xl font-bold'>Cart</h1>
      <div className='grid grid-rows-1 md:grid-cols-2 gap-4 justify-center'>
        <div className='flex flex-col gap-2'>
          {products.flatMap((product) => (
            <ProductCart key={product.id} {...product} />
          ))}
        </div>
        <div className='flex justify-end'>
          <OrderDetails />
        </div>
      </div>
    </div>
  );
}

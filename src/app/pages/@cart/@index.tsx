import { useCartStore } from '@hooks/use-cart.store';
import { OrderDetails } from '@components/cart';
import { ProductCart } from '@components/product';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/cart/')({
  component: () => <Cart />,
});

function Cart() {
  const { cart } = useCartStore();
  const { lines } = cart;
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-3xl font-bold'>Cart</h1>
      {/* reverse the grid when lg: */}
      <div className='flex flex-col-reverse gap-4 lg:flex-row lg:gap-8 '>
        <div className='flex flex-col gap-4 w-full'>
          <h2 className='text-2xl font-bold'>Products</h2>
          {lines.map((product) => (
            <ProductCart key={product.id} {...product} />
          ))}
        </div>
        <div className='flex flex-col gap-4 items-center w-full'>
          <OrderDetails />
        </div>
      </div>
    </div>
  );
}

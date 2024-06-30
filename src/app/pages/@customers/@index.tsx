import { ProductCard, ProductCardSkeleton } from '@components/product';
import { useProduct } from '@hooks/use-products';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/customers/')({
  component: Customers,
});

export default function Customers() {
  const { products, isLoading, error } = useProduct();
  return (
    <div className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6'>
      {isLoading &&
        Array.from({ length: 10 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      {error && <div>Error: {error.message}</div>}
      {products?.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}

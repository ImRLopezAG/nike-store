
import { createFileRoute } from '@tanstack/react-router'
import { useProduct } from '@hooks/use-products'
import { ProductCard } from '@components/product'
export const Route = createFileRoute('/products/')({
  component: Product,
});

export default function Product() {
  const { products, isLoading, error } = useProduct<Product[]>();
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-center'>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {products?.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
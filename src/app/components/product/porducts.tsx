import { Wrapper } from '@components/dashboard';
import { usePage } from '@hooks/use-pagination';
import { useProduct } from '@hooks/use-products';
import { useEffect } from 'react';
import { ProductCard, ProductCardSkeleton } from './card';

interface Props {
  product: 'NEW_RELEASES' | 'MEN' | 'WOMEN'
  title: string
}


export const Products: React.FC<Props> = ({product, title}) => {
  const { handleCurrPage, endpoints } = usePage();
  useEffect(() => {
    handleCurrPage(endpoints[product]);
  }, [endpoints, product, handleCurrPage]);
  const { products, isLoading, error } = useProduct();
  return (
    <Wrapper title={title}>
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
    </Wrapper>
  );
};

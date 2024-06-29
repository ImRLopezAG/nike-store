import useSWR from 'swr'

export function useProduct<T>(args?: string) {
  const { data: products, error, isLoading } = useSWR<T>(args ? `/products${args}` : '/products');
  return {
    products,
    error,
    isLoading,
  };
}

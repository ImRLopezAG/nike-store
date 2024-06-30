import useSWR from 'swr'

export function useCart<T = Cart[]>(args: string) {
  const { data: carts, error, isLoading } = useSWR<T>(args ? `/carts${args}` : '/carts');
  return {
    carts,
    error,
    isLoading,
  };
}

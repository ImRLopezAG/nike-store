import useSWR from 'swr'

export function useCustomer<T = Customer[]>(args?: string) {
  const { data: customers, error, isLoading } = useSWR<T>(args ? `/users${args}` : '/users');
  return {
    customers,
    error,
    isLoading,
  };
}

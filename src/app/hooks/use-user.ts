import useSWR from 'swr'

export function useUser<T>(args?: string) {
  const { data: users, error, isLoading } = useSWR<T>(args ? `/users${args}` : '/users');
  return {
    users,
    error,
    isLoading,
  };
}

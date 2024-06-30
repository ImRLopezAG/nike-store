import { useEffect } from 'react';
import { usePage } from './use-pagination';

export function useGo(endpoint: string) {
  const { handleCurrPage } = usePage();
  handleCurrPage(endpoint);
  useEffect(() => {
    handleCurrPage(endpoint);
  }, [endpoint, handleCurrPage]);
}

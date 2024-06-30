import { PaginationContext } from '@providers/context';
import { useContext } from 'react';

export function usePage ()  {
  const context = useContext(PaginationContext);

  if (!context)
    throw new Error('usePagination must be used within a PaginationProvider');

  return context;
}

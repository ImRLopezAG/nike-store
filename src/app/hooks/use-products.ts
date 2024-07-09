import { getProducts } from '@services/api';
import { usePage } from '@hooks/use-pagination';
import { useEffect } from 'react';
import useSWR from 'swr';

export function useProduct() {
  const {
    currPage,
    handleNextPage,
    handlePrevPage,
    handleTotalPages,
    handleTotalResources,
  } = usePage();
  const { data, error, isLoading } = useSWR<{
    products: Product[];
    pages: Page;
  }>(currPage, getProducts, {
    refreshInterval: 1000,
  });

  const products = data?.products ?? [];
  const pages = data?.pages;
  useEffect(() => {
    if (pages) {
      handleTotalPages(pages.totalPages);
      handleTotalResources(pages.totalResources);
      handleNextPage(pages.next ?? '');
      handlePrevPage(pages.prev ?? '');
    }
  }, [
    pages,
    handleNextPage,
    handlePrevPage,
    handleTotalPages,
    handleTotalResources,
  ]);

  return {
    products,
    error,
    isLoading,
  };
}

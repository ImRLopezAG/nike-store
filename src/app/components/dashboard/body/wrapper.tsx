import { usePage } from '@hooks/use-pagination';
import { cn } from '@shared/lib/utils';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@ui/pagination';

type WrapperProps = Props & {
  title: string;
};

export const Wrapper: React.FC<WrapperProps> = ({ title, className, children }) => {
  const { nextPage, prevPage, totalPages, handleCurrPage } = usePage();

  const gotoNextPage = () => {
    handleCurrPage(nextPage);
  };

  const gotoPrevPage = () => {
    handleCurrPage(prevPage);
  };

  return (
    <main className={cn('space-y-5', className)}>
      <h1 className='text-2xl font-bold'>{title}</h1>
      {children}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              isActive={!prevPage}
              href='#'
              onClick={() => {
                gotoPrevPage();
              }}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis>
              {totalPages}
            </PaginationEllipsis>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              isActive={!nextPage}
              href='#'
              onClick={() => {
                gotoNextPage();
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </main>
  );
}



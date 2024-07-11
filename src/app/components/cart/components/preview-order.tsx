import { useStore } from '@hooks/use-cart.store';
import { generateInvoice } from '@services/pdf';
import { Button } from '@ui/button';
import { FileText } from 'lucide-react';
export const PreviewOrder = () => {
  const { cart } = useStore((state) => state);

  return (
    <div className='ml-auto flex items-center gap-1'>
      <Button
        size='sm'
        variant='outline'
        className='h-8 gap-1'
        onClick={() => generateInvoice(cart)}
      >
        <FileText className='h-3.5 w-3.5' />
        <span className='lg:sr-only xl:not-sr-only xl:whitespace-nowrap'>
          Preview Order
        </span>
      </Button>
    </div>
  );
};

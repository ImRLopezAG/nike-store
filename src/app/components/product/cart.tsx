import { useCart } from '@hooks/use-cart';
import { Button } from '@ui/button';
import { TableCell, TableRow } from '@ui/table';
import { MinusCircle, PlusCircle, TrashIcon } from 'lucide-react';
import { cartService } from '@services/cart'

export function ProductCart(item: Item) {
  const {
    currentPrice,
    handleAddToCart,
    handleRemoveFromCart,
    handleRemoveQuantity,
    quantity,
    squarishURL,
    title,
  } = useCart(item);
  const {f} = cartService();

  return (
    <TableRow>
      <TableCell className='hidden sm:table-cell'>
        <img
          alt={title}
          className='aspect-square rounded-md object-cover'
          height='64'
          src={squarishURL}
          width='64'
        />
      </TableCell>
      <TableCell className='font-medium'>{title}</TableCell>
      <TableCell className='hidden md:table-cell'>
        {f(currentPrice)}
      </TableCell>
      <TableCell className='hidden md:table-cell'>{quantity}</TableCell>
      <TableCell>
        <Button size='icon' variant='ghost' onClick={handleAddToCart}>
          <PlusCircle className='h-4 w-4 text-green-500' />
          <span className='sr-only'>Add</span>
        </Button>
        <Button size='icon' variant='ghost' onClick={handleRemoveQuantity}>
          <MinusCircle className='h-4 w-4 text-blue-500' />
          <span className='sr-only'>Remove</span>
        </Button>
        <Button size='icon' variant='ghost' onClick={handleRemoveFromCart}>
          <TrashIcon className='h-4 w-4 text-red-500' />
          <span className='sr-only'>Delete</span>
        </Button>
      </TableCell>
    </TableRow>
  );
}

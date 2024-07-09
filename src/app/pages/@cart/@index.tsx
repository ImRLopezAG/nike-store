import { OrderDetails } from '@components/cart';
import { createFileRoute } from '@tanstack/react-router';
import { useCartStore } from '@hooks/use-cart.store';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@ui/card';
import { ScrollArea, ScrollBar } from '@ui/scroll-area';
import {
  Table,
  TableBody,
} from '@ui/table';
import { ProductCart } from '@components/product'
export const Route = createFileRoute('/cart/')({
  component: () => <Cart />,
});

function Cart() {
  const { cart } = useCartStore();
  const { lines } = cart;
  return (
    <main className='gap-4 p-4 sm:px-6 sm:py-0 grid flex-1 items-start md:gap-8 lg:grid-cols-3 xl:grid-cols-3'>
      <div className='grid auto-rows-max items-start gap-2 md:gap-4 lg:col-span-2'>
        <Card x-chunk='dashboard-06-chunk-0'>
          <CardHeader>
            <CardTitle>Products</CardTitle>
            <CardDescription>
              Manage your products and view their sales performance.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className='h-96'>
              <Table>
                <TableBody className='overflow-auto'>
                  {lines.map((product) => (
                    <ProductCart
                      key={product.id}
                      {...product}
                      />
                  ))}
                </TableBody>
              </Table>
              <ScrollBar />
            </ScrollArea>
          </CardContent>
          <CardFooter>
            <div className='text-xs text-muted-foreground'>
              Showing <strong>1-10</strong> of <strong>32</strong> products
            </div>
          </CardFooter>
        </Card>
      </div>
      <OrderDetails />
    </main>
  );
}

import { Products } from '@components/product';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: () =>  <Products product='NEW_RELEASES' title='New Releases'/>
});
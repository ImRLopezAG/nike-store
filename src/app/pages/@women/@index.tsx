import { Products } from '@components/product';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/women/')({
  component: () => <Products product='WOMEN' title='Women'/>,
});


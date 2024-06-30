import { Products } from '@components/product';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/men/')({
  component: () => <Products title='Men' product='MEN' />,
});

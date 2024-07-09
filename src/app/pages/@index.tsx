import { Landing } from '@components/dashboard';
import { Products } from '@components/product';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: () => (
    <>
      <Landing />
      <Products product='NEW_RELEASES' title='New Releases' />
    </>
  ),
});

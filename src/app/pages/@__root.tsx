import { Providers } from '@app/providers';
import { Header } from '@components/dashboard';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <Providers>
      <Header />
      <main className='flex flex-col gap-4 p-4 md:p-6'>
        <Outlet />
      </main>
      <TanStackRouterDevtools position='bottom-right' />
    </Providers>
  ),
});

import { Providers } from '@app/providers';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import './globals.css';

export const Route = createRootRoute({
  component: () => (
    <>
      <Providers>
        <main className='bg-background h-full w-full p-4 dark:text-white text-black'>
          <Outlet />
        </main>
      </Providers>
      <TanStackRouterDevtools />
    </>
  ),
});

import { Providers } from '@app/providers';
import { MainNav } from '@components/dashboard';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import './globals.css';

export const Route = createRootRoute({
  component: () => (
    <Providers>
      <main className='bg-background min-h-screen w-full p-4 dark:text-white text-black space-y-4'>
        <MainNav />
        <div className='p-5 space-y-5'>
          <Outlet />
        </div>
      </main>
      <TanStackRouterDevtools />
    </Providers>
  ),
});

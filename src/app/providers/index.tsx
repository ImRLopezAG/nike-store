import { Toaster } from '@ui/toaster';
import { PaginationProvider } from './context';
import { SWRProvider } from './swr.provider';
import { ThemeProvider } from './theme.provider';

export const Providers: React.FC<Props> = ({ children }) => (
  <ThemeProvider defaultTheme='dark'>
    <SWRProvider>
      <PaginationProvider>
        {children}
        <Toaster />
      </PaginationProvider>
    </SWRProvider>
  </ThemeProvider>
);

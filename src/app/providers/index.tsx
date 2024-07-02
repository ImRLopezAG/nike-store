import { PaginationProvider } from './context';
import { SWRProvider } from './swr.provider';
import { ThemeProvider } from './theme.provider';
import { Toaster } from '@ui/toaster'

export const Providers: React.FC<Props> = ({ children }) => (
  <PaginationProvider>
    <SWRProvider>
      <ThemeProvider defaultTheme='dark'>
        {children}
        <Toaster />
      </ThemeProvider>
    </SWRProvider>
  </PaginationProvider>
);

import { Toaster } from '@ui/toaster';
import { TooltipProvider } from '@ui/tooltip';
import { PaginationProvider } from './context';
import { SWRProvider } from './swr.provider';
import { ThemeProvider } from './theme.provider';

export const Providers: React.FC<Props> = ({ children }) => (
  <ThemeProvider defaultTheme='dark'>
    <SWRProvider>
      <PaginationProvider>
        <TooltipProvider>
          {children}
          <Toaster />
        </TooltipProvider>
      </PaginationProvider>
    </SWRProvider>
  </ThemeProvider>
);

import { PaginationProvider } from './context';
import { SWRProvider } from './swr.provider';
import { ThemeProvider } from './theme.provider';

export const Providers: React.FC<Props> = ({ children }) => (
  <PaginationProvider>
    <SWRProvider>
      <ThemeProvider defaultTheme='dark'>{children}</ThemeProvider>
    </SWRProvider>
  </PaginationProvider>
);

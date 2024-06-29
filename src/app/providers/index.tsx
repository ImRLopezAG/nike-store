import { SWRProvider } from './swr.provider';
import { ThemeProvider } from './theme.provider';

export const Providers: React.FC<Props> = ({ children }) => (
  <SWRProvider>
    <ThemeProvider defaultTheme='dark'>
      {children}
    </ThemeProvider>
  </SWRProvider>
);

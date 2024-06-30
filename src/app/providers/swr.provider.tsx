import { SWRConfig } from 'swr';

export const SWRProvider: React.FC<Props> = ({ children }) => (
  <SWRConfig
    value={{
      provider: () => new Map(),
      revalidateOnFocus: true,
      fetcher: async (resource: string, init) => {
        const BASE_URL = 'https://fakestoreapi.com';
        const res = await fetch(`${BASE_URL}${resource}`, init);
        return await res.json();
      },
    }}
  >
    {children}
  </SWRConfig>
);

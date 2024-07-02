const BASE_URL = 'https://api.nike.com/cic/browse/v2';

export const getProducts = async (search: string) => {
  const QUERY = `query products($endpoint: String!) {
    products(endpoint: $endpoint) {
        products {
            id
            title
            productType
            colorDescription
            subtitle
            images {
                portraitURL
                squarishURL
            }
            price {
                currency
                currentPrice
                fullPrice
                employeePrice
            }
            colorways {
              pid
              colorDescription
              images {
                  portraitURL
                  squarishURL
              }
              price {
                  currency
                  currentPrice
                  fullPrice
              }
          }
      }
      pages {
          next
          prev
          totalResources
          totalPages
      }
  }
}`;

  const variables = {
    endpoint: search,
  };

  const { products, pages } = await getQuery<{
    products: Product[];
    pages: Page;
  }>(QUERY, variables);

  return { products, pages };
};

export const getQuery = async <T>(
  query: string,
  variables: Record<string, unknown>
) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  }).then((res) => res.json());

  return response.data.products as T;
};

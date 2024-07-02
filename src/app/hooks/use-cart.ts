import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface State {
  cart: Cart;
}

type CartStore = State & {
  addToCart: (item: Item) => void;
  removeFromCart: (item: Item) => void;
  addQuantity: (item: Item) => void;
  removeQuantity: (item: Item) => void;
  payCart: () => void;
  calculateTotals: () => void;
};

export const useCartStore = create(
  persist<CartStore>(
    (set, get) => ({
      cart: {
        id: crypto.randomUUID(),
        products: [],
        totals: {
          subtotal: 0,
          totalVAT: 0,
          total: 0,
        },
      },
      addToCart: (item: Item) => {
        set((state) => {
          const product = state.cart.products.find(
            (product) => product.id === item.id
          );
          return {
            cart: {
              ...state.cart,
              products: product
                ? state.cart.products.map((product) =>
                    product.id === item.id
                      ? { ...product, quantity: product.quantity + 1 }
                      : product
                  )
                : [...state.cart.products, { ...item, quantity: 1 }],
            },
          };
        });
        get().calculateTotals()
      },
      removeFromCart: (item: Product) => {
        set((state) => ({
          cart: {
            ...state.cart,
            products: state.cart.products.filter(
              (product) => product.id !== item.id
            ),
          },
        }));
        get().calculateTotals()
      },
      addQuantity: (item: Item) => {
        set((state) => ({
          cart: {
            ...state.cart,
            products: state.cart.products.map((product) =>
              product.id === item.id
                ? { ...product, quantity: product.quantity + 1 }
                : product
            ),
          },
        }));
        get().calculateTotals()
      },
      removeQuantity: (item: Item) => {
        set((state) => ({
          cart: {
            ...state.cart,
            products: state.cart.products.map((product) =>
              product.id === item.id
                ? { ...product, quantity: product.quantity - 1 }
                : product
            ),
          },
        }));
        get().calculateTotals()
      },
      calculateTotals: () => {
        set((state) => {
          const getProductVAT = (product: Item) =>
            product.price.fullPrice * 0.18;
          const getProductTotalExcludingVAT = (product: Item) =>
            product.price.fullPrice * product.quantity;

          const roundToTwoDecimals = (num: number) =>
            Number(num.toFixed(2));
          const getProductTotal = (product: Item) => {
            const { price } = product;
            return roundToTwoDecimals(
              price.fullPrice * product.quantity +
                getProductVAT(product) * product.quantity
            );
          };

          const subtotal = state.cart.products.reduce(
            (acc, product) => {
              return roundToTwoDecimals(
                acc + getProductTotalExcludingVAT(product)
              );
            },
            0
          );
          const totalVAT = state.cart.products.reduce((acc, product) => {
            return roundToTwoDecimals(
              acc + getProductVAT(product) * product.quantity
            );
          }, 0);
          const total = state.cart.products.reduce((acc, product) => {
            return roundToTwoDecimals(acc + getProductTotal(product));
          }, 0);

          return {
            cart: {
              ...state.cart,
              totals: {
                subtotal,
                totalVAT,
                total,
              },
            },
          };
        });
      },
      payCart: () => {
        set(() => ({
          cart: {
            id: crypto.randomUUID(),
            products: [],
            totals: {
              subtotal: 0,
              totalVAT: 0,
              total: 0
            }
          },
        }));
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);

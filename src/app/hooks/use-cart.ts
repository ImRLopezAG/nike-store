import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface State {
  cart: Cart;
}

type CartStore = State & {
  addToCart: (item: Product) => void;
  removeFromCart: (item: Product) => void;
  payCart: () => void;
};

export const useCartStore = create(
  persist<CartStore>(
    (set) => ({
      cart: {
        id: crypto.randomUUID(),
        products: [],
      },
      addToCart: (item: Product) => {
        set((state) => ({
          cart: {
            ...state.cart,
            products: [...state.cart.products, item],
          },
        }));
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
      },
      payCart: () => {
        set(() => ({
          cart: {
            id: crypto.randomUUID(),
            products: [],
          },
        }));
      }
    }),
    {
      name: 'cart-storage',
    }
  )
);

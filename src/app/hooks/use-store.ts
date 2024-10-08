import { cartService } from '@/services';
import { customAlphabet } from 'nanoid';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
interface State {
  cart: Cart;
  users: CustomerPayment[]
}

type CartStore = State & {
  addToCart: (item: Item) => void;
  removeFromCart: (item: Item) => void;
  addQuantity: (item: Item) => void;
  removeQuantity: (item: Item) => void;
  payCart: () => void;
  calculateTotals: () => void;
  handleCustomer: (customer: CustomerPayment) => void;
  handleCard: (card: Card) => void;
  registerUser: (user: CustomerPayment) => void;
  loginUser: (user: Pick<CustomerPayment, 'email' | 'password'>) => string;
  logoutUser: () => void;
};

const nanoid = customAlphabet('1234567890abcdef', 10);

const initialState: State = {
  cart: {
    id: `INV-${nanoid(5)}`,
    payment: {
      customer: {
        name: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zip: Math.floor(Math.random() * 100000).toString(),
        country: '',
        phone: '',
        password: '',
      },
      card: {
        number: '',
        cvc: '',
        month: '',
        year: '',
        holder: 'Visa',
      },
    },
    lines: [],
    totals: {
      products: 0,
      subtotal: 0,
      totalVAT: 0,
      total: 0,
      shipping: 0,
    },
    createdAt: new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date()),
  },
  users: []
};

export const useStore = create(
  persist<CartStore>(
    (set, get) => ({
      cart: initialState.cart,
      users: initialState.users,
      addToCart: (item: Item) => {
        set((state) => {
          const product = state.cart.lines.find(
            (product) => product.id === item.id
          );
          return {
            cart: {
              ...state.cart,
              lines: product
                ? state.cart.lines.map((product) =>
                    product.id === item.id
                      ? { ...product, quantity: product.quantity + 1 }
                      : product
                  )
                : [...state.cart.lines, { ...item, quantity: 1 }],
            },
          };
        });
        get().calculateTotals();
      },
      removeFromCart: (item: Product) => {
        set((state) => ({
          cart: {
            ...state.cart,
            lines: state.cart.lines.filter((product) => product.id !== item.id),
          },
        }));
        get().calculateTotals();
      },
      addQuantity: (item: Item) => {
        set((state) => ({
          cart: {
            ...state.cart,
            lines: state.cart.lines.map((product) =>
              product.id === item.id
                ? { ...product, quantity: product.quantity + 1 }
                : product
            ),
          },
        }));
        get().calculateTotals();
      },
      removeQuantity: (item: Item) => {
        if (item.quantity === 1) {
          return get().removeFromCart(item);
        }
        set((state) => ({
          cart: {
            ...state.cart,
            lines: state.cart.lines.map((product) =>
              product.id === item.id
                ? { ...product, quantity: product.quantity - 1 }
                : product
            ),
          },
        }));
        get().calculateTotals();
      },
      calculateTotals: () => {
        set((state) => {
          const {
            getProductTotalExcludingVAT,
            getProductVAT,
            getProductTotal,
            round2Decimals,
          } = cartService();
          const totals = state.cart.lines.reduce(
            (acc, product) => {
              const subtotal = round2Decimals(acc.subtotal + getProductTotalExcludingVAT(product))
              const totalVAT = round2Decimals(acc.totalVAT + getProductVAT(product) * product.quantity)
              const total = round2Decimals(acc.total + getProductTotal(product))
              const totalExcludingVAT = getProductTotalExcludingVAT(product)
              return {
                products: round2Decimals(acc.products + product.quantity),
                subtotal,
                totalVAT,
                total,
                totalExcludingVAT,
              }
            },
            { products: 0, subtotal: 0, totalVAT: 0, total: 0 }
          )

          const shipping = round2Decimals(totals.total * 0.08);

          return {
            cart: {
              ...state.cart,
              totals: {
                ...totals,
                shipping,
              },
            },
          };
        });
      },
      handleCustomer: (customer: CustomerPayment) => {
        set((state) => ({
          cart: {
            ...state.cart,
            payment: {
              ...state.cart.payment,
              customer,
            },
          },
        }));
      },
      handleCard: (card: Card) => {
        set((state) => ({
          cart: {
            ...state.cart,
            payment: {
              ...state.cart.payment,
              card,
            },
          },
        }));
      },
      payCart: () => {
        set(() => ({
          cart: {
            ...initialState.cart,
            payment: {
              ...initialState.cart.payment,
              customer: get().cart.payment.customer,
            },
          },
        }));
      },
      registerUser: (user: CustomerPayment) => {
        set((state) => ({
          users: [...state.users, user],
        }));
      },
      loginUser: (cred: Pick<CustomerPayment, 'email' | 'password'>) => {
        const user = get().users.find(
          (user) =>
            user.email === cred.email && user.password === cred.password
        );
        if (user) {
          get().handleCustomer(user);
          console.log(`Welcome back ${user.name}`);
          return  user.name;
        }
        return '';
      },
      logoutUser: () => {
        set(() => ({
          cart: {
            ...initialState.cart,
            payment: {
              ...initialState.cart.payment,
              customer: initialState.cart.payment.customer,
            },
          },
        }));
      }
    }),
    {
      name: 'cart-storage',
    }
  )
);

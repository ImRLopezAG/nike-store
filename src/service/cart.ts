export const cartService = () => {
  const getProductVAT = (product: Item) =>
    product.price.fullPrice * 0.18;
  const getProductTotalExcludingVAT = (product: Item) =>
    product.price.fullPrice * product.quantity;

  const round2Decimals = (num: number) =>
    Number(num.toFixed(2));
  const getProductTotal = (product: Item) => {
    const { price } = product;
    return round2Decimals(
      price.fullPrice * product.quantity +
        getProductVAT(product) * product.quantity
    );
  }

  const f = (value: number) => 
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value);

  return {
    getProductVAT,
    getProductTotalExcludingVAT,
    round2Decimals,
    getProductTotal,
    f,
  };
}
export const initCustomer: Payment = {
  customer: {
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    country: '',
    zip: '',
    phone: '',
  },
  card: {
    number: '',
    cvc: '',
    month: '',
    year: '',
    holder: 'Visa',
  },
};
export const errors = {
  ...initCustomer.customer,
  card: {
    ...initCustomer.card,
    holder: '',
  },
};
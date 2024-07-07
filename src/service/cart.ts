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

  return {
    getProductVAT,
    getProductTotalExcludingVAT,
    round2Decimals,
    getProductTotal,
  };
}
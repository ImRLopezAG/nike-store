import { useEffect, useState } from 'react';
import { useCartStore } from '@hooks/use-cart.store';

export function useCart(item: Item) {
  const { removeFromCart, cart, addQuantity, removeQuantity } = useCartStore();
  const { products } = cart;
  const [quantity, setQuantity] = useState(1);
  const { title, price, productType, subtitle, images } = item;
  const { currentPrice, currency } = price;
  const { squarishURL } = images;

  useEffect(() => {
    const product = products.find((product) => product.id === item.id);
    if (product) {
      setQuantity(product.quantity);
    }
  }, [item.id, products]);

  const handleAddToCart = () => {
    addQuantity({ ...item, quantity });
    setQuantity(quantity + 1);
  };

  const handleRemoveFromCart = () => {
    removeFromCart({ ...item, quantity });
    setQuantity(quantity - 1);
  };

  const handleRemoveQuantity = () => {
    removeQuantity({ ...item, quantity });
    setQuantity(quantity - 1);
  };

  return {
    title,
    subtitle,
    productType,
    currentPrice,
    currency,
    squarishURL,
    quantity,
    handleAddToCart,
    handleRemoveFromCart,
    handleRemoveQuantity,
  };
}
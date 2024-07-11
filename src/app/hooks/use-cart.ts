import { useStore } from '@hooks/use-store';
import { useEffect, useState } from 'react';

export function useCart(item: Item) {
  const { removeFromCart, cart, addQuantity, removeQuantity } = useStore();
  const { lines } = cart;
  const [quantity, setQuantity] = useState(1);
  const { title, price, productType, subtitle, images } = item;
  const { currentPrice, currency } = price;
  const { squarishURL } = images;

  useEffect(() => {
    const product = lines.find((product) => product.id === item.id);
    if (product) {
      setQuantity(product.quantity);
    }
  }, [item.id, lines]);

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

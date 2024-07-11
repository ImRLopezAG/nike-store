import { generateHolder } from '@/services';
import { useStore } from '@hooks/use-store';
import { toast } from '@hooks/use-toast';
import { generateInvoice } from '@services/pdf';
import { useCallback, useState } from 'react';
import { useValidations } from './use-validations';

export function usePayment() {
  const [isOpen, setIsOpen] = useState(false);
  const { payCart, cart, handleCard } = useStore();
  const cardStore = useStore((store) => store.cart.payment.card);
  const [card, setCard] = useState<Card>(cardStore);
  const { cardError, validateCard, isValidCard } = useValidations();

  const handleCardImp = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCard({ ...card, [e.target.name]: e.target.value });
    },
    [card]
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      if (name in card) {
        validateCard(name as KeyOf<Card>, value);
      }
    },
    [card, validateCard]
  );

  const handlePay = useCallback(
    (withInvoice: boolean) => {
      if (isValidCard) {
        handleCard(card);
        payCart();
        setIsOpen(false);
        toast({
          title: 'Payment successful',
          description: 'Thank you for your purchase! 🎉',
        });
        if (withInvoice) {
          generateInvoice(cart);
          toast({
            title: 'Invoice sent',
            description: 'Your invoice has been sent to your email',
          });
        }
      } else {
        const errors = Object.values(cardError).filter((value) => value !== '');
        toast({
          title: 'Payment failed',
          description: `Please check the following errors: \n ${errors.join('\n')}`,
          variant: 'destructive',
        });
      }
    },
    [isValidCard, handleCard, card, payCart, cart, cardError]
  );

  const generateHolders = useCallback(() => {
    const { number, month, year, cvc, holder } = generateHolder();
    setCard({ number, month, year, cvc, holder });
  }, []);

  const handleIsOpen = useCallback(
    (value: boolean) => {
      setIsOpen(value);
      generateHolders();
    },
    [generateHolders]
  );

  const handleMonth = useCallback(
    (value: string) => {
      setCard({ ...card, month: value });
    },
    [card]
  );

  const handleYear = useCallback(
    (value: string) => {
      setCard({ ...card, year: value });
    },
    [card]
  );

  return {
    isOpen,
    card,
    cardError,
    handleCardImp,
    handleCard,
    handleBlur,
    handlePay,
    handleIsOpen,
    generateHolders,
    handleMonth,
    handleYear,
  };
}

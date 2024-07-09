import { generateHolder } from '@/services';
import { CloseIcon } from '@components/icons';
import { useCartStore } from '@hooks/use-cart.store';
import { toast } from '@hooks/use-toast';
import { generateInvoice } from '@services/pdf';
import { ToastAction } from '@ui/toast';
import { useCallback, useState } from 'react';
import { usePaymentValidations } from './use-payment-validations';

export function usePayment() {
  const [isOpen, setIsOpen] = useState(false);
  const { payCart, cart, handleCustomerInvoice, handleCardInvoice } = useCartStore();
  const {card: cardStore, customer: customerStore} = useCartStore(store => store.cart.payment);
  const [customer, setCustomer] = useState<CustomerPayment>(
    customerStore
  );
  const [card, setCard] = useState<Card>(cardStore);
  const { cardError, customerError, validateCard, validateCustomer, isValid } =
    usePaymentValidations();

  const handleCustomer = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCustomer({ ...customer, [e.target.name]: e.target.value });
    },
    [customer]
  );

  const handleCard = useCallback(
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
      if (name in customer) {
        validateCustomer(name as KeyOf<Payment['customer']>, value);
      }
    },
    [card, customer, validateCard, validateCustomer]
  );

  const handlePay = useCallback(
    (withInvoice: boolean) => {
      if (isValid) {
        payCart();
        setCustomer(customerStore);
        setCard(cardStore);
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
        const errors = Object.values(cardError)
          .filter((value) => value !== '')
          .concat(Object.values(customerError).filter((value) => value !== ''));
        console.log({
          customer: customerError,
          card: cardError,
          errors,
        });
        toast({
          title: 'Payment failed',
          description: 'Please check the following errors:',
          variant: 'destructive',
          action: (
            <ToastAction altText='Close'>
              <CloseIcon className='size-4' />
              <span className='ml-2'>Close</span>
            </ToastAction>
          ),
        });
      }
    },[cardError, cardStore, cart, customerError, customerStore, isValid, payCart]  );

  const generateHolders = useCallback(() => {
    const { number, month, year, cvc, holder } = generateHolder();
    const zip = Math.floor(Math.random() * 100000).toString();
    setCard({ number, month, year, cvc, holder });
    setCustomer({
      ...customer,
      zip,
    });
  }, [customer]);

  const handleIsOpen = useCallback(() => {
    setIsOpen(!isOpen);
    generateHolders();
  }, [isOpen, generateHolders]);

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

  const regInvoice = useCallback(() => {
    if (!isValid) {
      toast({
        title: 'Payment failed',
        description: `Please check the following errors: \n ${Object.values(
          cardError
        )
          .filter((value) => value !== '')
          .concat(Object.values(customerError).filter((value) => value !== ''))
          .join('\n')}`,
        variant: 'destructive',
        action: (
          <ToastAction altText='Close'>
            <CloseIcon className='size-4' />
            <span className='ml-2'>Close</span>
          </ToastAction>
        ),
      });
      return;
    }
    handleCustomerInvoice({ ...customer });
    handleCardInvoice({ ...card });
    setIsOpen(false);
  }, [
    isValid,
    cardError,
    customerError,
    customer,
    card,
    handleCustomerInvoice,
  ]);

  return {
    isOpen,
    customer,
    card,
    cardError,
    customerError,
    regInvoice,
    handleCustomer,
    handleCard,
    handleBlur,
    handlePay,
    handleIsOpen,
    generateHolders,
    handleMonth,
    handleYear,
  };
}

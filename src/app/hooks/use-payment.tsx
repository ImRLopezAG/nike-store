import { generateHolder, initCustomer } from '@/service';
import { CloseIcon } from '@components/icons';
import { useCartStore } from '@hooks/use-cart.store';
import { toast } from '@hooks/use-toast';
import { generateInvoice } from '@services/pdf';
import { ToastAction } from '@ui/toast';
import { useState } from 'react';
import { usePaymentValidations } from './use-payment-validations'

export function usePayment() {
  const [isOpen, setIsOpen] = useState(false);
  const { payCart, cart, handleCustomerInvoice } = useCartStore();
  const [customer, setCustomer] = useState<CustomerPayment>(initCustomer.customer);
  const [card, setCard] = useState<Card>(initCustomer.card);
  const { cardError, customerError, validateCard, validateCustomer, isValid } = usePaymentValidations();
  

  const handleCustomer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };
  const handleCard = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCard({ ...card, [e.target.name]: e.target.value });
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
      if (name in card) {
      validateCard(name as KeyOf<Card>, value);
    }
    if (name in customer) {
      validateCustomer(name as KeyOf<Payment['customer']>, value);
    }
  };


  const handlePay = (withInvoice: boolean) => {
    if (isValid) {
      handleCustomerInvoice({ ...customer, ...card });
      payCart();
      setCustomer(initCustomer.customer);
      setCard(initCustomer.card);
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
  };

  const generateHolders = () => {
    const { number, month, year, cvc, holder } = generateHolder();
    const zip = Math.floor(Math.random() * 100000).toString();
    setCard({ number, month, year, cvc, holder });
    setCustomer({
      ...customer,
      zip,
    });
  };

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
    generateHolders();
  };
  const handleMonth = (value: string) => {
    setCard({ ...card, month: value });
  };
  const handleYear = (value: string) => {
    setCard({ ...card, year: value });
  };

  return {
    isOpen,
    customer,
    card,
    cardError,
    customerError,
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

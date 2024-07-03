import { useState } from 'react';
import { useCartStore } from '@hooks/use-cart.store';
import { toast } from '@hooks/use-toast'
import { ToastAction } from '@ui/toast'
import { CloseIcon } from '@components/icons'
import { generateInvoice } from '@services/pdf'
export function usePayment() {
  const [isOpen, setIsOpen] = useState(false);
  const { payCart, cart } = useCartStore();
  const CARD: Record<string, RegExp> = {
    Visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    MasterCard: /^5[1-5][0-9]{14}$/,
  };
  const [fields, setFields] = useState({
    name: '',
    number: '',
    month: '',
    year: '',
    cvc: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    number: '',
    month: '',
    year: '',
    cvc: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setErrors({ ...errors, name: value ? '' : 'Name is required' });
        break;
      case 'number':
        setErrors({
          ...errors,
          number:
            CARD.MasterCard.test(value.replace(' ', '')) ||
            CARD.Visa.test(value.replace(' ', ''))
              ? ''
              : 'Invalid card number',
        });
        break;
      case 'month':
        setErrors({ ...errors, month: value ? '' : 'Month is required' });
        break;
      case 'year':
        setErrors({ ...errors, year: value ? '' : 'Year is required' });
        break;
      case 'cvc':
        setErrors({
          ...errors,
          cvc: value && value.length === 3 ? '' : 'CVC is required',
        });
        break;
    }
  };

  const isValid = Object.values(errors).every((error) => error === '');

  const handlePay = (withInvoice: boolean) => {

    if (isValid) {
      payCart();
      setFields({
        name: '',
        number: '',
        month: '',
        year: '',
        cvc: '',
      });
      setIsOpen(false);
      toast({
        title: 'Payment successful',
        description: 'Thank you for your purchase! 🎉'
      })
      if (withInvoice) {
        generateInvoice(cart);
        toast({
          title: 'Invoice sent',
          description: 'Your invoice has been sent to your email',
        })
      }
    } else {
      toast({
        title: 'Payment failed',
        description: errors.name || errors.number || errors.month || errors.year || errors.cvc,
        variant: 'destructive',
        action: <ToastAction altText='Close'>
          <CloseIcon className='size-4' />
          <span className='ml-2'>Close</span>
        </ToastAction>,
      })
    }
        
  };

  const generateHolders = () => {
    let cardNumber: string;
    let cardHolder: string;

    const next = (a: number, b: number) =>
      Math.floor(Math.random() * (b - a + 1) + a);

    do {
      cardNumber = Array.from({ length: 16 }, () => next(0, 9).toString()).join(
        ''
      );
      cardHolder =
        Object.keys(CARD).find((key) =>
          CARD[key].test(cardNumber.replace(/\s/g, ''))
        ) ?? 'Unknown';
    } while (cardHolder === 'Unknown');
    setFields({
      ...fields,
      number: cardNumber.match(/.{1,4}/g)?.join(' ') ?? '',
      month: next(1, 12).toString(),
      year: (new Date().getFullYear() + next(0, 9)).toString(),
      cvc: Array.from({ length: 3 }, () => next(0, 9).toString()).join(''),
    });
  };

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
    generateHolders();
  }
  const handleMonth = (value: string) => {
    setFields({ ...fields, month: value });
  }
  const handleYear = (value: string) => {
    setFields({ ...fields, year: value });
  }

  return {
    isOpen,
    fields,
    errors,
    handleChange,
    handleBlur,
    handlePay,
    handleIsOpen,
    generateHolders,
    handleMonth,
    handleYear,
  }

}
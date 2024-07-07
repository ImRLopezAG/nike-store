import { CloseIcon } from '@components/icons';
import { useCartStore } from '@hooks/use-cart.store';
import { toast } from '@hooks/use-toast';
import { generateInvoice } from '@services/pdf';
import { ToastAction } from '@ui/toast';
import { useState } from 'react';
import { generateHolder, cards } from '@/service'
const initValues = {
  name: '',
  email: '',
  number: '',
  month: '',
  year: '',
  cvc: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  country: '',
  holder: 'Visa',
};
export function usePayment() {
  const [isOpen, setIsOpen] = useState(false);
  const { payCart, cart } = useCartStore();
  
  const [fields, setFields] = useState(initValues);
  const [errors, setErrors] = useState(initValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const validations = {
      name: () => {
        handleError('name', 'Name is required', value !== '');
      },
      number: () => {
        const joined = value.match(/\d+/g)?.join('') ?? '';
        const validate =
          cards.MasterCard.test(joined) ||
          cards.Visa.test(joined) ||
          cards['American Express'].test(joined) ||
          cards.Discover.test(joined);
          
        handleError(
          'number',
          'Invalid Card Number',
          validate
        );
      },
      month: function () {
        handleError('month', 'Month is required', value !== '');
      },
      year: function () {
        handleError('year', 'Year is required', value !== '');
      },
      cvc: () => {
        setErrors({
          ...errors,
          cvc: value && value.length === 3 ? '' : 'CVC is required',
        });
        handleError('cvc', 'CVC is required', value.length === 3);
      },
      address: () => {
        handleError('address', 'Address is required', value !== '');
      },
      city: () => {
        handleError('city', 'City is required', value !== '');
      },
      state: () => {
        handleError('state', 'State is required', value !== '');
      },
      zip: () => {
        const validZip = /^[0-9]{5}(?:-[0-9]{4})?$/.test(value);
        handleError('zip', 'Zip is required', validZip);
      },
      country: () => {
        handleError('country', 'Country is required', value !== '');
      },
      holder: () => {
        handleError('holder', 'Holder is required', value !== '');
      },
      email: () => {
        const validEmail =
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
        handleError('email', 'Email is required', validEmail);
      },
    };
    validations[name as keyof typeof initValues];
  };

  const handleError = (
    property: keyof typeof initValues,
    value: string,
    validation: boolean
  ) => {
    setErrors({ ...errors, [property]: validation ? '' : value });
  };

  const isValid = Object.values(errors).every((error) => error === '');

  const handlePay = (withInvoice: boolean) => {
    if (isValid) {
      payCart();
      setFields(initValues);
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
      toast({
        title: 'Payment failed',
        description:
          errors.name ||
          errors.number ||
          errors.month ||
          errors.year ||
          errors.cvc,
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
    setFields({ ...fields, number, month, year, cvc, holder, zip });
  }

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
    generateHolders();
  };
  const handleMonth = (value: string) => {
    setFields({ ...fields, month: value });
  };
  const handleYear = (value: string) => {
    setFields({ ...fields, year: value });
  };

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
  };
}

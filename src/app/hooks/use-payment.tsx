import { cards, generateHolder } from '@/service';
import { CloseIcon } from '@components/icons';
import { useCartStore } from '@hooks/use-cart.store';
import { toast } from '@hooks/use-toast';
import { generateInvoice } from '@services/pdf';
import { ToastAction } from '@ui/toast';
import { useState } from 'react';
const initValues: Payment = {
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
const errors = {
  ...initValues.customer,
  card: {
    ...initValues.card,
    holder: '',
  },
};
export function usePayment() {
  const [isOpen, setIsOpen] = useState(false);
  const { payCart, cart, handleCustomerInvoice } = useCartStore();

  const [customer, setCustomer] = useState<CustomerPayment>(
    initValues.customer
  );
  const [card, setCard] = useState<Card>(initValues.card);
  const [cardError, setCardError] = useState(errors.card);
  const [customerError, setCustomerError] = useState<CustomerPayment>(
    initValues.customer
  );

  const handleCustomer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };
  const handleCard = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCard({ ...card, [e.target.name]: e.target.value });
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const validations = {
      name: () => {
        handleCustomerError('name', 'Name is required', value !== '');
      },
      number: () => {
        const joined = value.match(/\d+/g)?.join('') ?? '';
        const validate =
          cards.MasterCard.test(joined) ||
          cards.Visa.test(joined) ||
          cards['American Express'].test(joined) ||
          cards.Discover.test(joined);

        handleCardError('number', 'Invalid Card Number', validate);
      },
      month: function () {
        handleCardError('month', 'Month is required', value !== '');
      },
      year: function () {
        handleCardError('year', 'Year is required', value !== '');
      },
      cvc: () => {
        handleCardError('cvc', 'CVC is required', value.length === 3);
      },
      address: () => {
        handleCustomerError('address', 'Address is required', value !== '');
      },
      city: () => {
        handleCustomerError('city', 'City is required', value !== '');
      },
      state: () => {
        handleCustomerError('state', 'State is required', value !== '');
      },
      zip: () => {
        const validZip = /^[0-9]{5}(?:-[0-9]{4})?$/.test(value);
        handleCustomerError('zip', 'Zip is required', validZip);
      },
      country: () => {
        handleCustomerError('country', 'Country is required', value !== '');
      },
      holder: () => {
        
      },
      email: () => {
        const validEmail =
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
        handleCustomerError('email', 'Email is required', validEmail);
      },
    };
    validations[name as keyof Payment['card']]();
  };

  const handleCustomerError = (
    property: keyof CustomerPayment,
    value: string,
    validation: boolean
  ) => {
    setCustomerError({ ...customerError, [property]: validation ? '' : value });
  };
  const handleCardError = (
    property: keyof Card,
    value: string,
    validation: boolean
  ) => {
    setCardError({ ...cardError, [property]: validation ? '' : value });
  };

  const isValid =
    Object.values(cardError).every((value) => value === '') &&
    Object.values(customerError).every((value) => value === '');

  const handlePay = (withInvoice: boolean) => {
    if (isValid) {
      handleCustomerInvoice({ ...customer, ...card });
      payCart();
      setCustomer(initValues.customer);
      setCard(initValues.card);
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
      const errors = Object.values(cardError).filter((value) => value !== '').concat(Object.values(customerError).filter((value) => value !== ''));
      console.log({
        customer: customerError,
        card: cardError,
        errors,
      })
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

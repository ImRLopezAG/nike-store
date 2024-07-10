import { cards } from '@services/card';
import { errors, initCustomer } from '@services/cart';
import { useCallback, useMemo, useState } from 'react';

export function useValidations() {
  const [cardError, setCardError] = useState(errors.card);
  const [customerError, setCustomerError] = useState<CustomerPayment>(
    initCustomer.customer
  );

  const isValidCustomer = useMemo(() => Object.values(customerError).every((v) => v === ''), [customerError]);
  const isValidCard = useMemo(() => Object.values(cardError).every((v) => v === ''), [cardError]);
  const isValid = isValidCustomer && isValidCard;
  const validateCustomer = useCallback(
    (property: KeyOf<Payment['customer']>, value: string) => {
      const handleCustomerError = (
        property: keyof CustomerPayment,
        value: string,
        validation: boolean
      ) => {
        setCustomerError({
          ...customerError,
          [property]: validation ? '' : value,
        });
      };
      const valid =
        value !== '' &&
        value !== undefined &&
        value !== null &&
        value.length > 3;
      const validations: Record<KeyOf<Payment['customer']>, () => void> = {
        name: () => {
          handleCustomerError('name', 'Name is required', valid);
        },
        address: () => {
          handleCustomerError('address', 'Address is required', valid);
        },
        city: () => {
          handleCustomerError('city', 'City is required', valid);
        },
        state: () => {
          handleCustomerError('state', 'State is required', valid);
        },
        zip: () => {
          const validZip = /^[0-9]{5}(?:-[0-9]{4})?$/.test(value);
          handleCustomerError('zip', 'Invalid zip code', validZip);
        },
        country: () => {
          handleCustomerError('country', 'Country is required', valid);
        },
        email: () => {
          const validEmail =
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
          handleCustomerError('email', 'Email is required', validEmail);
        },
        phone: () => {
          const validPhone = /^\d{10}$/.test(value);
          handleCustomerError(
            'phone',
            'Phone is required',
            valid && validPhone
          );
        },
      };
      validations[property]();
    },
    [customerError]
  );

  const validateCard = useCallback(
    (name: KeyOf<Card>, value: string) => {
      const handleCardError = (
        property: keyof Card,
        value: string,
        validation: boolean
      ) => {
        setCardError({ ...cardError, [property]: validation ? '' : value });
      };
      const validations: Record<KeyOf<Card>, () => void> = {
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
        holder: () => {
          handleCardError('holder', 'Holder is required', value !== '');
        },
      };
      validations[name as KeyOf<Card>]();
    },
    [cardError]
  );

  return {
    isValid,
    isValidCard,
    isValidCustomer,
    validateCustomer,
    validateCard,
    customerError,
    cardError,
  };
}

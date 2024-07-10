import { useCartStore } from '@hooks/use-cart.store';
import { toast } from '@hooks/use-toast';
import { useCallback, useState } from 'react';
import { useValidations } from './use-validations';

export function useRegister() {
  const [isOpen, setIsOpen] = useState(false);
  const { handleCustomer } = useCartStore();
  const customerStore = useCartStore((store) => store.cart.payment.customer);
  const [customer, setCustomer] = useState<CustomerPayment>(customerStore);
  const { customerError, validateCustomer, isValidCustomer } = useValidations();

  const handleCustomerInp = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCustomer({ ...customer, [e.target.name]: e.target.value });
    },
    [customer]
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      if (name in customer) {
        validateCustomer(name as KeyOf<Payment['customer']>, value);
      }
    },
    [customer, validateCustomer]
  );

  const handleIsOpen = useCallback((value: boolean) => {
    setIsOpen(value);
  }, []);

  const register = useCallback(() => {
    if (!isValidCustomer) {
      const errors = Object.values(customerError).filter((v) => v !== '');
      toast({
        title: 'Registration failed',
        description: `Fix the following errors: \n${errors.join('\n')}`,
      });
      return;
    }
    handleCustomer({ ...customer });
    setIsOpen(false);
  }, [customerError, customer, handleCustomer, isValidCustomer]);

  return {
    isOpen,
    customer,
    customerError,
    handleCustomer: handleCustomerInp,
    handleBlur,
    handleIsOpen,
    register,
  };
}

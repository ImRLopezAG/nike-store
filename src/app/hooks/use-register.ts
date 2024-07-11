import { useStore } from '@hooks/use-store';
import { toast } from '@hooks/use-toast';
import { useCallback, useState } from 'react';
import { useValidations } from './use-validations';

export function useRegister() {
  const [isOpen, setIsOpen] = useState(false);
  const { loginUser, registerUser } = useStore();
  const customerStore = useStore((store) => store.cart.payment.customer);
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
      const errors = Object.values(customerError).filter((v) => v !== '')     
      toast({
        title: 'Registration failed',
        description: `Fix the following errors: \n${errors.join('\n')}`,
      });
      return;
    }
    
    registerUser({ ...customer });
    setIsOpen(false);
  }, [customerError, customer, isValidCustomer, registerUser]);

  const login = useCallback((email: string, password: string) => {
    const user  = loginUser({ email, password });
    if (user !== '') {
      toast({
        title: 'Login successful',
        description: `Welcome back ${user}`,
      });
    } else {
      toast({
        title: 'Login failed',
        description: 'Invalid email or password',
      });
    }
    setIsOpen(false);
  }, [loginUser]);

  return {
    isOpen,
    customer,
    customerError,
    handleCustomer: handleCustomerInp,
    handleBlur,
    handleIsOpen,
    register,
    login
  };
}

import { z } from 'zod';

const GeolocationSchema = z.object({
  lat: z.string(),
  long: z.string(),
});

const NameSchema = z.object({
  firstname: z.string(),
  lastname: z.string(),
});

const AddressSchema = z.object({
  geolocation: GeolocationSchema,
  city: z.string(),
  street: z.string(),
  number: z.number(),
  zipcode: z.string(),
});

export const CustomerSchema = z.object({
  address: AddressSchema,
  id: z.number(),
  email: z.string(),
  username: z.string(),
  password: z.string(),
  name: NameSchema,
  phone: z.string()
});

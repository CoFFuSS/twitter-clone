import { z } from 'zod';

export const logInSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(6, 'Password must be 6 or more characters'),
  })
  .required();

export type TypeLogIn = z.infer<typeof logInSchema>;

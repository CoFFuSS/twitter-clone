import { TypeLogIn } from '@/utils/logInFormSchema';

export interface TypeLogInInput {
  placeholder: string;
  type: string;
  name: keyof TypeLogIn;
}

export const LogInInputFields: TypeLogInInput[] = [
  {
    placeholder: 'Phone number, email address',
    name: 'identifier',
    type: 'text',
  },
  {
    placeholder: 'Password',
    name: 'password',
    type: 'password',
  },
] as const;

import { TypeLogIn } from '@/utils/logInFormSchema';

export interface TypeLogInInput {
  placeholder: string;
  type: string;
  name: keyof TypeLogIn;
}

export const LogInInputFields: TypeLogInInput[] = [
  {
    placeholder: 'Email',
    name: 'email',
    type: 'email',
  },
  {
    placeholder: 'Password',
    name: 'password',
    type: 'password',
  },
];

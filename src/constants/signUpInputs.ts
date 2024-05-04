import { TypeSignup } from '@/utils/signUpFormSchema';
import { days, years } from '@/mock/dates';

import { months } from './datesSelect';

interface TypeSignupInput {
  placeholder: string;
  type: string;
  name: keyof Omit<TypeSignup, 'month' | 'day' | 'year'>;
}

interface TypeSignUpDateInputFields {
  placeholder: string;
  options: readonly string[] | number[];
  name: keyof Omit<TypeSignup, 'name' | 'phone' | 'email' | 'password'>;
  width: string;
}

export const SignUpInputFields: TypeSignupInput[] = [
  {
    placeholder: 'Name',
    name: 'name',
    type: 'text',
  },
  {
    placeholder: 'Phone number',
    name: 'phone',
    type: 'tel',
  },
  {
    placeholder: 'Email',
    name: 'email',
    type: 'email',
  },
  {
    placeholder: 'Password',
    type: 'password',
    name: 'password',
  },
];

export const SignUpDateInputFields: TypeSignUpDateInputFields[] = [
  {
    options: months,
    placeholder: 'Month',
    name: 'month',
    width: '320px',
  },
  {
    options: days,
    placeholder: 'Day',
    name: 'day',
    width: '160px',
  },
  {
    options: years,
    placeholder: 'Year',
    name: 'year',
    width: '160px',
  },
];

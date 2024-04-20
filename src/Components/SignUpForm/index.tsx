import { Fragment, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import twitterLogo from '@/assets/images/twitter-logo-4 1.png';

import {
  DateContainer,
  FormName,
  InfoBlockSpan,
  InfoText,
  InputField,
  InputFieldsContainer,
  LogoContainer,
  RouterSpan,
  Wrapper,
} from './styled';

export const signupSchema = z
  .object({
    name: z
      .string()
      .min(2, 'Name length should be at least 2 characters')
      .max(20, 'Name length must not be more than 20 characters'),
    phone: z.string().regex(/^\+375\d{9}$/, 'Phone number must be in the format: +375xxxxxxxxx'),
    email: z.string().email(),
    password: z.string().min(6, 'Password must be 6 or more characters'),
    month: z.string(),
    day: z.string(),
    year: z.string(),
  })
  .required();

export type TypeSignup = z.infer<typeof signupSchema>;

interface TypeSignupInput {
  placeholder: string;
  type: string;
  name: keyof Omit<TypeSignup, 'month' | 'day' | 'year'>;
}

const SignUpInputFields: TypeSignupInput[] = [
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
];

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { isDirty, isValid, errors },
  } = useForm<TypeSignup>({ resolver: zodResolver(signupSchema) });

  const onSubmit: SubmitHandler<TypeSignup> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
    reset();
  };

  useEffect(() => {
    setFocus('name');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <LogoContainer>
        <img
          src={twitterLogo}
          alt='twitter-logo'
        />
      </LogoContainer>

      <FormName>Create an account</FormName>
      <InputFieldsContainer>
        {SignUpInputFields.map(({ placeholder, name, type }) => (
          <Fragment key={name}>
            <InputField
              {...register(name)}
              type={type}
              placeholder={placeholder}
              id={name}
              maxLength={name === 'phone' ? 13 : undefined}
            />

            {errors && errors[name] && <p>{errors[name]?.message}</p>}
          </Fragment>
        ))}
      </InputFieldsContainer>
      <RouterSpan>use Email</RouterSpan>
      <InfoBlockSpan>Date of birth</InfoBlockSpan>
      <InfoText>
        Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante
        phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id
        ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit
        congue.
      </InfoText>
      <DateContainer>{}</DateContainer>
      <button
        type='submit'
        disabled={!isDirty || !isValid}
      >
        Next
      </button>
    </Wrapper>
  );
};

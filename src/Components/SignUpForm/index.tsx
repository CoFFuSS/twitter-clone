import { Fragment, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import twitterLogo from '@/assets/images/twitter-logo-4 1.png';
import { SignUpDateInputFields, SignUpInputFields } from '@/constants/signUpInputs';
import { TypeSignup, signupSchema } from '@/utils/signUpFormSchema';

import {
  DateContainer,
  FormName,
  InfoBlockSpan,
  InfoText,
  InputFieldsContainer,
  LogoContainer,
  RouterSpan,
  SignInButton,
  Wrapper,
} from './styled';

import { Select } from '../Select';
import { InputField } from '../Input/styled';

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
      <DateContainer>
        {SignUpDateInputFields.map(({ placeholder, options, width, name }) => (
          <Fragment key={placeholder}>
            <Select
              {...register(name)}
              placeholder={placeholder}
              options={options}
              name={name}
              width={width}
            />
            {errors && errors[name] && <p>{errors[name]?.message}</p>}
          </Fragment>
        ))}
      </DateContainer>
      <SignInButton
        type='submit'
        disabled={!isDirty || !isValid}
      >
        Next
      </SignInButton>
    </Wrapper>
  );
};

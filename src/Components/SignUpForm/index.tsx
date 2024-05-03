import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { SignUpDateInputFields, SignUpInputFields } from '@/constants/signUpInputs';
import { SignUpFormProps, TypeSignup, signupSchema } from '@/utils/signUpFormSchema';
import { ErrorMassage } from '@/mixins/styledMixins';
import { Select } from '@/Components/Select';
import { InputField } from '@/Components/Input/styled';

import {
  DateContainer,
  FormName,
  InfoBlockSpan,
  InfoText,
  InputFieldsContainer,
  RouterSpan,
  SignInButton,
  Wrapper,
} from './styled';

export const SignUpForm = ({ disabled, onSubmit }: SignUpFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<TypeSignup>({ resolver: zodResolver(signupSchema), mode: 'onChange' });

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
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

            {errors && errors[name] && <ErrorMassage>{errors[name]?.message}</ErrorMassage>}
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
        {SignUpDateInputFields.map(({ options, placeholder, width, name }) => (
          <Fragment key={placeholder}>
            <Select
              {...register(name)}
              placeholder={placeholder}
              options={options}
              name={name}
              width={width}
            />
            {errors && errors[name] && <ErrorMassage>{errors[name]?.message}</ErrorMassage>}
          </Fragment>
        ))}
      </DateContainer>
      <SignInButton
        type='submit'
        disabled={disabled || !isDirty || !isValid}
      >
        Next
      </SignInButton>
    </Wrapper>
  );
};

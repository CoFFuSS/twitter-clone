import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Fragment } from 'react';

import { LogInFormProps, TypeLogIn, logInSchema } from '@/utils/logInFormSchema';
import { LogInInputFields } from '@/constants/logInInputs';
import { RoutesEnum } from '@/constants/routesEnum';
import { ErrorMassage } from '@/mixins/styledMixins';

import {
  FormName,
  InputFieldsContainer,
  LogInButton,
  LogInInput,
  SignInLink,
  Wrapper,
} from './styled';

export const LogInForm = ({ disabled, onSubmit }: LogInFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid, errors },
  } = useForm<TypeLogIn>({ resolver: zodResolver(logInSchema), mode: 'onChange' });

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <FormName>Create an account</FormName>
      <InputFieldsContainer>
        {LogInInputFields.map(({ placeholder, name, type }) => (
          <Fragment key={name}>
            <LogInInput
              {...register(name)}
              type={type}
              placeholder={placeholder}
              id={name}
            />

            {errors && errors[name] && <ErrorMassage>{errors[name]?.message}</ErrorMassage>}
          </Fragment>
        ))}
      </InputFieldsContainer>

      <LogInButton
        type='submit'
        disabled={disabled || !isDirty || !isValid}
      >
        Next
      </LogInButton>
      <SignInLink to={RoutesEnum.SignIn}>Sign up to Twitter</SignInLink>
    </Wrapper>
  );
};

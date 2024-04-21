import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Fragment, useEffect } from 'react';

import { TypeLogIn, logInSchema } from '@/utils/logInFormSchema';
import { LogInInputFields } from '@/constants/logInInputs';

import { FormName, InputFieldsContainer, LogInButton, Wrapper } from './styled';

import { InputField } from '../Input/styled';

export const LogInForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { isDirty, isValid, errors },
  } = useForm<TypeLogIn>({ resolver: zodResolver(logInSchema) });

  const onSubmit: SubmitHandler<TypeLogIn> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
    reset();
  };

  useEffect(() => {
    setFocus('email');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <FormName>Create an account</FormName>
      <InputFieldsContainer>
        {LogInInputFields.map(({ placeholder, name, type }) => (
          <Fragment key={name}>
            <InputField
              {...register(name)}
              type={type}
              placeholder={placeholder}
              id={name}
            />

            {errors && errors[name] && <p>{errors[name]?.message}</p>}
          </Fragment>
        ))}
      </InputFieldsContainer>

      <LogInButton
        type='submit'
        disabled={!isDirty || !isValid}
      >
        Next
      </LogInButton>
    </Wrapper>
  );
};

import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

import { SignUpForm } from '@/Components/SignUpForm';
import twitterLogo from '@/assets/images/twitter-logo-4 1.png';
import { LogoContainer, Wrapper } from '@/mixins/formStyleMixins';
import { TypeSignup, signupSchema } from '@/utils/signUpFormSchema';

export const SignInPage = () => {
  const [disables, setDisabled] = useState<boolean>(false);
  const { reset } = useForm<TypeSignup>({ resolver: zodResolver(signupSchema) });

  const onSubmit: SubmitHandler<TypeSignup> = (data) => {
    try {
      setDisabled(true);
      // eslint-disable-next-line no-console
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setDisabled(false);

      reset();
    }
  };

  return (
    <Wrapper>
      <LogoContainer>
        <img
          src={twitterLogo}
          alt='twitter-logo'
        />
      </LogoContainer>

      <SignUpForm
        disabled={disables}
        onSubmit={onSubmit}
      />
    </Wrapper>
  );
};

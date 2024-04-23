import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { LogInForm } from '@/Components/LogInForm';
import twitterLogo from '@/assets/images/twitter-logo-4 1.png';
import { LogoContainer, Wrapper } from '@/mixins/formStyleMixins';
import { TypeLogIn, logInSchema } from '@/utils/logInFormSchema';
import { isValidEmail, isValidPhone } from '@/utils/validateLogIn';
import { signin } from '@/firebase';
import { RoutesEnum } from '@/constants/routesEnum';

interface LogInputs {
  identifier: string;
  password: string;
}

export const LogInPage = () => {
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState<boolean>(false);
  const { reset } = useForm<TypeLogIn>({ resolver: zodResolver(logInSchema) });

  const onSubmit: SubmitHandler<TypeLogIn> = async ({ identifier, password }: LogInputs) => {
    try {
      setDisabled(true);
      const isPhoneValid = isValidPhone(identifier);
      const isEmailValid = isValidEmail(identifier);

      if (!isPhoneValid || !isEmailValid) {
        const userCredentials = await signin(identifier, password);
        const token = await userCredentials.user.getIdToken();

        if (token) {
          navigate(RoutesEnum.Home);
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      reset();
      setDisabled(false);
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
      <LogInForm
        onSubmit={onSubmit}
        disabled={disabled}
      />
    </Wrapper>
  );
};

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { LogInForm } from '@/Components/LogInForm';
import twitterLogo from '@/assets/images/twitter-logo-4 1.png';
import { LogoContainer, Wrapper } from '@/mixins/styledMixins';
import { TypeLogIn, logInSchema } from '@/utils/logInFormSchema';
import { isValidEmail, isValidPhone } from '@/utils/validateLogIn';
import { RoutesEnum } from '@/constants/routesEnum';
import { getUserData } from '@/utils/getUserData';
import { setUser } from '@/store/slices/userSlice';
import { UserState } from '@/types/common';

interface LogInputs {
  identifier: string;
  password: string;
}

export const LogInPage = () => {
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState<boolean>(false);
  const { reset } = useForm<TypeLogIn>({ resolver: zodResolver(logInSchema) });
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<TypeLogIn> = async ({ identifier, password }: LogInputs) => {
    try {
      setDisabled(true);
      const isPhoneValid = isValidPhone(identifier);
      const isEmailValid = isValidEmail(identifier);

      if (!isPhoneValid || !isEmailValid) {
        const { userData, token } = await getUserData(isPhoneValid, identifier, password);

        if (token) {
          dispatch(setUser({ ...(userData as UserState), token }));
          navigate(RoutesEnum.Home);
        } else {
          // eslint-disable-next-line no-console
          console.log('No user');
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

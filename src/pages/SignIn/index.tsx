import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { SignUpForm } from '@/Components/SignUpForm';
import twitterLogo from '@/assets/images/twitter-logo-4 1.png';
import { LogoContainer, Wrapper } from '@/mixins/formStyleMixins';
import { TypeSignup, signupSchema } from '@/utils/signUpFormSchema';
import { registerNewUser } from '@/utils/registerNewUser';
import { getBirthday } from '@/utils/getBirthday';
import { RoutesEnum } from '@/constants/routesEnum';
import { setUser } from '@/store/slices/userSlice';

interface SignUpFormProps {
  name: string;
  phone: string;
  email: string;
  password: string;
  month: string;
  day: string;
  year: string;
}

export const SignInPage = () => {
  const [disables, setDisabled] = useState<boolean>(false);
  const { reset } = useForm<TypeSignup>({ resolver: zodResolver(signupSchema) });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<TypeSignup> = async ({
    name,
    phone,
    email,
    password,
    month,
    day,
    year,
  }: SignUpFormProps) => {
    const birthday = getBirthday(Number(year), month, Number(day));

    try {
      setDisabled(true);

      const { userData } = await registerNewUser(name, phone, email, password, birthday);
      dispatch(setUser({ ...userData }));
      navigate(RoutesEnum.Home);
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

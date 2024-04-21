import { SignUpForm } from '@/Components/SignUpForm';
import twitterLogo from '@/assets/images/twitter-logo-4 1.png';
import { LogoContainer, Wrapper } from '@/mixins/formStyleMixins';

export const SignInPage = () => (
  <Wrapper>
    <LogoContainer>
      <img
        src={twitterLogo}
        alt='twitter-logo'
      />
    </LogoContainer>

    <SignUpForm />
  </Wrapper>
);

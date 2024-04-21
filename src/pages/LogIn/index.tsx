import { LogInForm } from '@/Components/LogInForm';
import twitterLogo from '@/assets/images/twitter-logo-4 1.png';
import { LogoContainer, Wrapper } from '@/mixins/formStyleMixins';

export const LoginPage = () => (
  <Wrapper>
    <LogoContainer>
      <img
        src={twitterLogo}
        alt='twitter-logo'
      />
    </LogoContainer>
    <LogInForm />
  </Wrapper>
);

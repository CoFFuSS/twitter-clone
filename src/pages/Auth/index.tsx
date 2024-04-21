import twitterScreen from '@/assets/images/back-twitter-1.webp';
import twitterLogo from '@/assets/images/twitter-logo-4 1.png';
import googleLogo from '@/assets/images/google-icon 1.svg';

import {
  Content,
  BackTwitterContainer,
  InfoBlock,
  BackTwitter,
  Wrapper,
  TwitterLogoContainer,
  Text,
  SubText,
  ButtonWrapper,
  PrivacyField,
  PrivacyLink,
  LogInField,
  Footer,
  FooterSpan,
  RightSpan,
  GoogleLogo,
  AuthButton,
} from './styled';

const FooterRoutes = [
  'About',
  'Help Center',
  'Terms of Service',
  'Privacy Policy',
  'Cookie Policy',
  'Ads info',
  'Blog',
  'Status',
  'Carrres',
  'Brand Resources',
  'Advertsing',
  'Marketing',
  'Twitter for Business',
  'Developers',
  'Directory',
  'Settings',
];

export const AuthPage = () => (
  <Wrapper>
    <Content>
      <BackTwitterContainer>
        <BackTwitter
          src={twitterScreen}
          alt='twitter-screen'
        />
      </BackTwitterContainer>

      <InfoBlock>
        <TwitterLogoContainer>
          <BackTwitter
            src={twitterLogo}
            alt='twitter-logo'
          />
        </TwitterLogoContainer>
        <Text>Happening now</Text>
        <SubText>Join Twitter today</SubText>
        <ButtonWrapper>
          <AuthButton>
            <GoogleLogo>
              <img
                src={googleLogo}
                alt='google-logo'
              />
            </GoogleLogo>
            Sign up with Google
          </AuthButton>

          <AuthButton>Sign up with phone or email</AuthButton>
          <PrivacyField>
            By singing up you agree to the <PrivacyLink>Terms of Service</PrivacyLink> and{' '}
            <PrivacyLink>Privacy Policy</PrivacyLink>, including{' '}
            <PrivacyLink>Cookie Use</PrivacyLink>.
          </PrivacyField>
          <LogInField>
            Already have an account? <PrivacyLink>Log in</PrivacyLink>
          </LogInField>
        </ButtonWrapper>
      </InfoBlock>
    </Content>
    <Footer>
      {FooterRoutes.map((path) => (
        <FooterSpan key={path}>{path}</FooterSpan>
      ))}
      <RightSpan>© 2021 Twitter, Inc.</RightSpan>
    </Footer>
  </Wrapper>
);

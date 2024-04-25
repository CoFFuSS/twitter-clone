import { Outlet } from 'react-router-dom';

import { navBarRoutes } from '@/constants/navBarRoutes';
import twitterLogo from '@/assets/images/twitter-logo-4 1.png';
import { LogoContainer } from '@/mixins/styledMixins';

import {
  Content,
  NavLink,
  NavBar,
  Wrapper,
  LinkContent,
  LinkText,
  LeftNavContainer,
} from './styled';

export const BasicLayout = () => (
  <Wrapper>
    <LeftNavContainer>
      <LogoContainer>
        <img
          src={twitterLogo}
          alt='twitter-logo'
        />
      </LogoContainer>
      <NavBar>
        {navBarRoutes.map(({ path, element, icon }) => (
          <NavLink
            key={path}
            to={path}
          >
            <LinkContent>
              <img
                src={icon}
                alt=''
              />
              <LinkText>{element}</LinkText>
            </LinkContent>
          </NavLink>
        ))}
      </NavBar>
    </LeftNavContainer>

    <Content>
      <Outlet />
    </Content>
    <article>
      <h1>Right</h1>
    </article>
  </Wrapper>
);

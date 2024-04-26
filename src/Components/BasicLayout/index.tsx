import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { navBarRoutes } from '@/constants/navBarRoutes';
import twitterLogo from '@/assets/images/twitter-logo-4 1.png';
import ProfileLogoExample from '@/assets/images/ProfileLogoExample.svg';
import { selectUser } from '@/store/selectors';
import { useAppSelector } from '@/hooks/redux';
import { logout } from '@/firebase';
import { clearUser } from '@/store/slices/userSlice';

import {
  Content,
  NavLink,
  NavBar,
  Wrapper,
  LinkContent,
  LinkText,
  Sidebar,
  NavButton,
  TwitterLogo,
  ProfileContainer,
  ProfileInfoContainer,
  ProfileLogoContainer,
  ProfileName,
  ProfileAddress,
  LogOutButton,
} from './styled';

export const BasicLayout = () => {
  const { name, email } = useAppSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    logout();
    dispatch(clearUser());
  };

  return (
    <Wrapper>
      <Sidebar>
        <TwitterLogo>
          <img
            src={twitterLogo}
            alt='twitter-logo'
          />
        </TwitterLogo>
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
        <NavButton>Tweet</NavButton>
        <ProfileContainer>
          <ProfileLogoContainer>
            <img
              src={ProfileLogoExample}
              alt='Profile Logo'
            />
          </ProfileLogoContainer>
          <ProfileInfoContainer>
            <ProfileName>{name}</ProfileName>
            <ProfileAddress>@{email.split('@')[0]}</ProfileAddress>
          </ProfileInfoContainer>
        </ProfileContainer>
        <LogOutButton
          onClick={handleLogOut}
          type='submit'
        >
          Log out
        </LogOutButton>
      </Sidebar>

      <Content>
        <Outlet />
      </Content>
      <article>
        <h1>Right</h1>
      </article>
    </Wrapper>
  );
};

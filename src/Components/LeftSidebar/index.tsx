import { useDispatch } from 'react-redux';
import { Dispatch, SetStateAction } from 'react';

import { useAppSelector } from '@/hooks/redux';
import { selectUser } from '@/store/selectors';
import { navBarRoutes } from '@/constants/navBarRoutes';
import twitterLogo from '@/assets/images/twitter-logo-4 1.png';
import profileLogoExample from '@/assets/images/ProfileLogoExample.svg';
import { logout } from '@/firebase';
import { clearUser } from '@/store/slices/userSlice';
import logoutLogo from '@/assets/images/logoutIcon.svg';
import { getUserAddress } from '@/utils/getUserAddress';
import { useHandleOutsideClick } from '@/hooks/useHandleOutsideClick';
import { useLockScreen } from '@/hooks/useLockScroll';

import {
  LeftSidebarContainer,
  LinkContent,
  LinkText,
  NavBar,
  NavButton,
  NavLink,
  ProfileAddress,
  ProfileContainer,
  ProfileInfoContainer,
  SidebarLogoContainer,
  ProfileName,
  TwitterLogo,
  Wrapper,
} from './styled';

export interface LeftSidebarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export const LeftSidebar = ({ isMenuOpen, setIsMenuOpen }: LeftSidebarProps) => {
  const { name, email } = useAppSelector(selectUser);
  const [menuRef] = useHandleOutsideClick(setIsMenuOpen);
  useLockScreen(isMenuOpen);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    logout();
    dispatch(clearUser());
  };

  const handleNavigate = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Wrapper>
      <TwitterLogo onClick={toggleMenu}>
        <img
          src={twitterLogo}
          alt='twitter-logo'
        />
      </TwitterLogo>
      <LeftSidebarContainer
        isOpen={isMenuOpen}
        ref={menuRef}
      >
        <NavBar>
          {navBarRoutes.map(({ path, element, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              onClick={handleNavigate}
            >
              <LinkContent>
                <Icon />
                <LinkText>{element}</LinkText>
              </LinkContent>
            </NavLink>
          ))}
        </NavBar>
        <NavButton>Tweet</NavButton>
        <ProfileContainer>
          <SidebarLogoContainer>
            <img
              src={profileLogoExample}
              alt='Profile Logo'
            />
          </SidebarLogoContainer>
          <ProfileInfoContainer>
            <ProfileName>{name}</ProfileName>
            <ProfileAddress>{getUserAddress(email)}</ProfileAddress>
          </ProfileInfoContainer>
        </ProfileContainer>

        <SidebarLogoContainer onClick={handleLogOut}>
          <img
            src={logoutLogo}
            alt='Profile Logo'
          />
        </SidebarLogoContainer>
      </LeftSidebarContainer>
    </Wrapper>
  );
};

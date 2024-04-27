import { useDispatch } from 'react-redux';
import { Dispatch, useEffect, useRef } from 'react';

import { useAppSelector } from '@/hooks/redux';
import { selectUser } from '@/store/selectors';
import { navBarRoutes } from '@/constants/navBarRoutes';
import twitterLogo from '@/assets/images/twitter-logo-4 1.png';
import profileLogoExample from '@/assets/images/ProfileLogoExample.svg';
import { logout } from '@/firebase';
import { clearUser } from '@/store/slices/userSlice';
import logoutLogo from '@/assets/images/logoutIcon.svg';

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
} from './styled';

export interface LeftSidebarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<React.SetStateAction<boolean>>;
}

export const LeftSidebar = ({ isMenuOpen, setIsMenuOpen }: LeftSidebarProps) => {
  const { name, email } = useAppSelector(selectUser);
  const menuRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [setIsMenuOpen]);

  const handleLogOut = () => {
    logout();
    dispatch(clearUser());
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
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
            <ProfileAddress>@{email.split('@')[0]}</ProfileAddress>
          </ProfileInfoContainer>
        </ProfileContainer>

        <SidebarLogoContainer onClick={handleLogOut}>
          <img
            src={logoutLogo}
            alt='Profile Logo'
          />
        </SidebarLogoContainer>
      </LeftSidebarContainer>
    </>
  );
};

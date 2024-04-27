import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { LogoContainer } from '@/mixins/styledMixins';

import { DefaultButton } from '../Button/styled';

export const LeftSidebarContainer = styled.section<{ isOpen: boolean }>`
  ${({ theme, isOpen }) => css`
    position: absolute;
    z-index: 6;

    display: ${isOpen ? 'flex' : 'none'};
    flex-direction: column;

    width: ${theme.spacing(280)};
    height: ${theme.spacing(1000)};

    background-color: ${theme.colors.blue};

    ${theme.media.sm`
      display: flex;
      position: static;

      width: ${theme.spacing(80)};

      padding-top: ${theme.spacing(100)};

      background-color: ${theme.colors.primary};

    `}

    ${theme.media.lg`
      width: ${theme.spacing(230)};
      background-color: ${theme.colors.primary};
      margin-right: ${theme.spacing(50)};
      padding-top: ${theme.spacing(60)};
    `}
  `}
`;

export const MenuButton = styled.button`
  ${({ theme }) => css`
    z-index: 8;

    align-items: center;
    justify-content: center;

    width: ${theme.spacing(28)};
    height: ${theme.spacing(28)};

    background-color: ${theme.colors.black};
  `}
`;

export const TwitterLogo = styled(LogoContainer)`
  ${({ theme }) => css`
    cursor: pointer;
    position: absolute;
    z-index: 7;
    align-self: center;
    ${theme.media.sm`
      cursor: default;

      align-self: flex-start;
    `}
  `}
`;

export const NavBar = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(30)};

    ${theme.media.xl`
      width: ${theme.spacing(152)};
      gap: ${theme.spacing(20)};
    `};
  `}
`;

export const NavLink = styled(Link)`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    text-decoration: none;

    ${theme.media.lg`
      justify-content: flex-start;
    `}

    ${theme.media.xl`
      height: ${theme.spacing(28)};

    `}
  `}
`;

export const LinkContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;

    width: inherit;
    height: inherit;

    & > svg > g > path {
      color: ${theme.colors.black};
      fill: ${theme.colors.black};
    }

    ${theme.media.sm`
      & > svg > g > path {
        color: ${theme.colors.secondary};
        fill: ${theme.colors.secondary};
      }
    `}

    img {
      ${theme.media.xl`
        width: ${theme.spacing(28)};
        height: ${theme.spacing(28)};
        margin-right: ${theme.spacing(20)};


      `}
    }
  `}
`;

export const LinkText = styled.p`
  ${({ theme }) => css`
    display: none;
    margin: 0;
    color: ${theme.colors.secondary};

    ${theme.typography.variant.h4};

    ${theme.media.lg`
      display: flex;
    `}
  `}
`;

export const NavBarContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavButton = styled(DefaultButton)`
  ${({ theme }) => css`
    align-self: center;

    width: ${theme.spacing(80)};
    height: ${theme.spacing(35)};
    margin-top: ${theme.spacing(30)};

    color: ${theme.colors.white};

    background-color: ${theme.colors.black};
    border: ${theme.spacing(1)} solid ${theme.colors.black};

    ${theme.typography.variant.h4};

    ${theme.media.sm`
      width: ${theme.spacing(50)};
      height: ${theme.spacing(20)};
      background-color: ${theme.colors.blue};
      border: none;
    `}

    ${theme.media.md`
      width: ${theme.spacing(80)};
      height: ${theme.spacing(30)};
      margin-top: ${theme.spacing(50)};
    `}

    ${theme.media.lg`
      width: ${theme.spacing(120)};
      height: ${theme.spacing(35)};
    `}

    ${theme.media.xl`
      width: ${theme.spacing(230)};
      height: ${theme.spacing(55)};
    `}
  `}
`;

export const ProfileContainer = styled.div`
  ${({ theme }) => css`
    display: flerx;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    height: ${theme.spacing(100)};
    margin-top: ${theme.spacing(70)};
  `}
`;

export const SidebarLogoContainer = styled(LogoContainer)`
  ${({ theme }) => css`
    cursor: pointer;

    align-self: center;

    width: ${theme.spacing(30)};
    height: ${theme.spacing(30)};
    margin: 0;

    ${theme.media.lg`
      align-self: flex-start;
    `}
  `}
`;

export const ProfileInfoContainer = styled.div`
  ${({ theme }) => css`
    display: none;
    flex-direction: column;

    ${theme.media.lg`
      display: flex;
      gap: ${theme.spacing(4)};
      width: ${theme.spacing(130)};
      height: ${theme.spacing(40)};
      margin-left: ${theme.spacing(35)};
    `}
  `}
`;

export const ProfileName = styled.p`
  ${({ theme }) => css`
    margin: 0;
    font-weight: ${theme.fontWeight.semibold};
    color: ${theme.colors.secondary};

    ${theme.typography.variant.h6};
  `}
`;

export const ProfileAddress = styled.p`
  ${({ theme }) => css`
    margin: 0;
    color: ${theme.colors.secondary};

    ${theme.typography.variant.h6};
  `}
`;

export const LogOutButton = styled(NavButton)`
  ${({ theme }) => css`
    width: ${theme.spacing(28)};
    height: ${theme.spacing(28)};

    ${theme.media.lg`
      margin-top: ${theme.spacing(16)};
      background-color: ${theme.colors.mediumGray};
  `}
  `}
`;

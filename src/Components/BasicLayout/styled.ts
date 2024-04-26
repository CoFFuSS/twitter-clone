import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { LogoContainer } from '@/mixins/styledMixins';

import { DefaultButton } from '../Button/styled';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;

    ${theme.media.xl`
      padding: ${theme.spacing(0, 155, 0, 155)};
    `};
  `}
`;

export const Content = styled.section`
  ${({ theme }) => css`
    display: flex;

    ${theme.media.md`
      width: ${theme.spacing(900)};

      border-right: ${theme.spacing(1)} solid ${theme.colors.softGray};
      border-left: ${theme.spacing(1)} solid ${theme.colors.softGray};
    `};
  `}
`;

export const Sidebar = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-right: ${theme.spacing(50)};
    padding-top: ${theme.spacing(30)};
  `}
`;

export const TwitterLogo = styled(LogoContainer)`
  align-self: flex-start;
`;

export const NavBar = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    ${theme.media.xl`
      width: ${theme.spacing(152)};
      gap: ${theme.spacing(20)};
    `};
  `}
`;

export const NavLink = styled(Link)`
  ${({ theme }) => css`
    display: flex;
    text-decoration: none;

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
    margin: 0;
    color: ${theme.colors.secondary};

    ${theme.typography.variant.h4};
  `}
`;

export const NavBarContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    ${theme.media.lg`

    `}
  `}
`;

export const NavButton = styled(DefaultButton)`
  ${({ theme }) => css`
    margin-top: ${theme.spacing(50)};
    color: ${theme.colors.white};
    background-color: ${theme.colors.blue};

    ${theme.typography.variant.h4};

    ${theme.media.lg`
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

    height: ${theme.spacing(100)};
    margin-top: ${theme.spacing(70)};
  `}
`;

export const ProfileLogoContainer = styled(LogoContainer)`
  margin: 0;
`;

export const ProfileInfoContainer = styled.div`
  ${({ theme }) => css`
    gap: ${theme.spacing(4)};
    width: ${theme.spacing(130)};
    height: ${theme.spacing(40)};
    margin-left: ${theme.spacing(35)};
  `}
`;

export const ProfileName = styled.p`
  ${({ theme }) => css`
    margin: 0;
    ${theme.typography.variant.h6};
    font-weight: ${theme.fontWeight.semibold};
  `}
`;

export const ProfileAddress = styled.p`
  ${({ theme }) => css`
    margin: 0;
    ${theme.typography.variant.h6};
  `}
`;

export const LogOutButton = styled(NavButton)`
  ${({ theme }) => css`
    margin-top: ${theme.spacing(16)};
    background-color: ${theme.colors.mediumGray};
  `}
`;

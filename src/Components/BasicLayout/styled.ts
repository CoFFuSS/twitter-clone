import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

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

export const LeftNavContainer = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-right: ${theme.spacing(50)};
  `}
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

    p {
      font-size: 0;
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

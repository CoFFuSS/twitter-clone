import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    ${theme.media.xl`
      flex-direction: row;
      padding: ${theme.spacing(0, 155, 0, 155)};
    `};
  `}
`;

export const Content = styled.section`
  ${({ theme }) => css`
    display: flex;

    ${theme.media.xl`
      width: ${theme.spacing(900)};

      border-right: ${theme.spacing(1)} solid ${theme.colors.softGray};
      border-left: ${theme.spacing(1)} solid ${theme.colors.softGray};
    `};
  `}
`;

export const NavBar = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;

    ${theme.media.xl`
      flex-direction: column;
    `};
  `}
`;

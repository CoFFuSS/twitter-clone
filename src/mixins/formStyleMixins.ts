import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: ${theme.spacing(105)};
  `}
`;

export const LogoContainer = styled.div`
  ${({ theme }) => css`
    position: relative;

    align-self: center;

    width: ${theme.spacing(26)};
    height: ${theme.spacing(21)};
    margin-bottom: ${theme.spacing(14)};

    ${theme.media.lg`
      width: ${theme.spacing(35)};
      height: ${theme.spacing(29)};
      margin-bottom: ${theme.spacing(24)};
      `}

    ${theme.media.xl`
      width: ${theme.spacing(50)};
      height: ${theme.spacing(41)};
      margin-bottom: ${theme.spacing(43)};
      `}
  `}
  img {
    width: 100%;
    height: 100%;
  }
`;

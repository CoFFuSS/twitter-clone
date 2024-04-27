import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    ${theme.media.sm`
      flex-direction: row;
    `}

    ${theme.media.xl`
      margin: ${theme.spacing(0, 155)};
    `};
  `}
`;

export const Content = styled.section`
  ${({ theme }) => css`
    display: flex;

    ${theme.media.sm`

      border-left: ${theme.spacing(1)} solid ${theme.colors.softGray};
    `}

    ${theme.media.md`
      min-width: ${theme.spacing(900)};

      border-right: ${theme.spacing(1)} solid ${theme.colors.softGray};
    `};
  `}
`;

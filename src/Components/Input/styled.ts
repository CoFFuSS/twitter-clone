import styled, { css } from 'styled-components';

export const InputField = styled.input`
  ${({ theme }) => css`
    width: ${theme.spacing(310)};
    height: ${theme.spacing(30)};

    color: ${theme.colors.secondary};

    border: ${theme.spacing(1)} solid ${theme.colors.lightGray};
    border-radius: ${theme.spacing(6)};

    ${theme.media.md`
      width: ${theme.spacing(540)};
      height: ${theme.spacing(45)};
    `}

    ${theme.media.lg`
      width: ${theme.spacing(670)};
      height: ${theme.spacing(70)};
    `}
  `}
`;

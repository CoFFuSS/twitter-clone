import styled, { css } from 'styled-components';

export const DefaultButton = styled.button`
  ${({ theme }) => css`
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    width: ${theme.spacing(200)};
    height: ${theme.spacing(40)};

    color: ${theme.colors.secondary};
    text-align: center;

    background-color: ${theme.colors.primary};
    border: ${theme.spacing(1)} solid ${theme.colors.lightGray};
    border-radius: ${theme.spacing(42)};

    ${theme.typography.variant.h3}

    ${theme.media.lg`
      width: ${theme.spacing(400)};
      height: ${theme.spacing(60)};
    `}
    &:hover {
      border-color: ${theme.colors.gray};
    }
  `}
`;

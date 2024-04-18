import styled, { css } from 'styled-components';

export const TestH1 = styled.h1`
  ${({ theme }) => css`
    ${theme.typography.variant.h1}
  `}
`;

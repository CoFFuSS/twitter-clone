import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
`;

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: ${theme.spacing(6)};
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.black};

    ${theme.typography.variant.h4}
  `}
`;

export const SubText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    text-align: start;

    ${theme.typography.variant.p4}
  `}
`;

export const Content = styled.p`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.black};
    text-align: start;

    ${theme.typography.variant.p4};

    :hover {
      color: ${theme.colors.blue};
    }
  `}
`;

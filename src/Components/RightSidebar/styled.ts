import styled, { css } from 'styled-components';

export const SearchSidebar = styled.section`
  ${({ theme }) => css`
    display: none;
    flex-direction: column;
    width: ${theme.spacing(370)};
    margin: ${theme.spacing(20, 30)};

    ${theme.media.xl`
      display: flex;
    `}
  `}
`;

export const SearchInputContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    background-color: ${theme.colors.lightGray};
    border: ${theme.spacing(1)} solid ${theme.colors.lightGray};
    border-radius: ${theme.spacing(31)};

    & > svg {
      margin: ${theme.spacing(15, 20)};
    }

    ${theme.media.lg`
      width: ${theme.spacing(370)};
      height: ${theme.spacing(55)};
    `}
  `}
`;

export const SearchInput = styled.input`
  ${({ theme }) => css`
    background-color: inherit;
    border: none;

    ${theme.typography.variant.h4};

    :focus {
      outline: none;
    }
  `}
`;

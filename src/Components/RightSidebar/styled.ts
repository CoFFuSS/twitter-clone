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

    width: 100%;
    height: ${theme.spacing(55)};

    background-color: ${theme.colors.lightGray};
    border: ${theme.spacing(1)} solid ${theme.colors.lightGray};
    border-radius: ${theme.spacing(31)};

    & > svg {
      margin: ${theme.spacing(15, 20)};
    }
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

export const SearchResult = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(25)};

    width: ${theme.spacing(320)};
    height: fit-content;
    margin-top: ${theme.spacing(20)};
    padding: ${theme.spacing(20, 25, 30, 25)};

    text-align: center;

    background-color: ${theme.colors.searchBarColor};
    border-radius: ${theme.spacing(10)};
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.black};

    ${theme.typography.variant.h3};
  `}
`;

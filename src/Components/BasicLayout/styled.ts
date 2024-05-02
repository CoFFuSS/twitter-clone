import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;

    ${theme.media.sm`
      flex-direction: row;
    `}
  `}
`;

export const Content = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    max-width: ${theme.spacing(910)};
    margin-top: ${theme.spacing(40)};

    ${theme.media.sm`
      min-width: ${theme.spacing(520)};
      border-left: ${theme.spacing(1)} solid ${theme.colors.softGray};
      border-right: ${theme.spacing(1)} solid ${theme.colors.softGray};
      margin-top: 0;
    `}

    ${theme.media.sm`
      border-right: ${theme.spacing(1)} solid ${theme.colors.softGray};
    `}

    ${theme.media.lg`
      min-width: ${theme.spacing(910)};

      border-right: ${theme.spacing(1)} solid ${theme.colors.softGray};
    `};
  `}
`;

export const HeaderContainer = styled.div`
  ${({ theme }) => css`
    height: ${theme.spacing(30)};

    ${theme.media.lg`
      height: ${theme.spacing(45)};
    `}
  `}
`;

export const PageHeader = styled.header`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: ${theme.spacing(910)};
    height: ${theme.spacing(30)};

    background-color: ${theme.colors.primary};
    border-bottom: ${theme.spacing(1)} solid ${theme.colors.softGray};

    ${theme.media.sm`
      display: flex;
      height: ${theme.spacing(30)};
      position: fixed;
      z-index: 100;
    `}

    ${theme.media.lg`
      height: ${theme.spacing(45)};
    `}
    ${theme.media.xl`
      height: ${theme.spacing(60)};
    `}
  `}
`;

export const OutletWrapper = styled.div`
  position: relative;
  display: flex;
`;

export const SwitcherContainer = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacing(15)};
  `}
`;

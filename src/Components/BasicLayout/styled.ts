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
    flex-direction: column;

    ${theme.media.sm`
      min-width: ${theme.spacing(520)};
      border-left: ${theme.spacing(1)} solid ${theme.colors.softGray};
      border-right: ${theme.spacing(1)} solid ${theme.colors.softGray};
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

export const PageHeader = styled.header`
  ${({ theme }) => css`
    position: fixed;

    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: ${theme.spacing(910)};

    border-bottom: ${theme.spacing(1)} solid ${theme.colors.softGray};

    ${theme.media.sm`
      display: flex;
      height: ${theme.spacing(30)};
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
  ${({ theme }) => css`
    position: relative;
    top: ${theme.spacing(60)};
    display: flex;
  `}
`;

import styled, { css, keyframes } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: fixed;
    z-index: 700;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    border-radius: ${theme.spacing(8)};
    outline: 0;

    ${theme.media.sm`
      width: ${theme.spacing(500)};
    `}

    ${theme.media.lg`
      width: ${theme.spacing(900)};
    `}
  `}
`;

export const Backdrop = styled.div`
  position: fixed;
  z-index: 500;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: rgb(0 0 0 / 30%);
`;

const modalOpenAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.7);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const modalCloseAnimation = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.7);
  }
`;

export const ModalWindow = styled.div<{ isShown: boolean }>`
  ${({ theme, isShown }) => css`
    position: relative;
    z-index: 100;

    margin: auto;

    background: white;
    background-color: ${theme.colors.primary};
    border: ${theme.spacing(1)} solid ${theme.colors.mediumDark};
    border-radius: ${theme.spacing(16)};

    ${isShown
      ? css`
          animation: ${modalOpenAnimation} 0.3s forwards;
        `
      : css`
          animation: ${modalCloseAnimation} 0.3s forwards;
        `}
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-self: center;
    justify-content: center;

    padding: ${theme.spacing(8)};

    border-radius: ${theme.spacing(8, 8, 0, 0)};
  `}
`;

export const CloseButton = styled.button`
  ${({ theme }) => css`
    position: absolute;
    top: ${theme.spacing(10)};
    right: ${theme.spacing(10)};

    margin-left: ${theme.spacing(9)};

    font-size: ${theme.spacing(12)};
    color: ${theme.colors.secondary};

    background: none;
    border: none;
    border-radius: ${theme.spacing(3)};

    :hover {
      cursor: pointer;
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    overflow: hidden auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: ${theme.spacing(10)};
  `}
`;

export const InfoContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row wrap;
    flex-direction: column;
    row-gap: ${theme.spacing(20)};
    justify-content: space-between;

    margin-bottom: ${theme.spacing(32)};
  `}
`;

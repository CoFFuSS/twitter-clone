import styled, { css, keyframes } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: fixed;
    z-index: 700;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: ${theme.spacing(300)};

    border-radius: ${theme.spacing(8)};
    outline: 0;

    ${theme.media.lg`
      width: ${theme.spacing(600)};
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
    background-color: ${theme.colors.softGray};
    border: ${theme.spacing(1)} solid ${theme.colors.primary};
    border-radius: ${theme.spacing(8)};

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

export const HeaderText = styled.p`
  ${({ theme }) => css`
    ${theme.typography.variant.h3}
    justify-content: center;
    color: ${theme.colors.black};
  `}
`;

export const CloseButton = styled.button`
  ${({ theme }) => css`
    position: absolute;
    top: ${theme.spacing(10)};
    right: ${theme.spacing(10)};

    margin-left: ${theme.spacing(9)};

    font-size: ${theme.spacing(12)};

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

    height: ${theme.spacing(150)};
    padding: ${theme.spacing(10)};
    ${theme.media.lg`
      height: ${theme.spacing(200)};
      `}
  `}
`;

export const InfoContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;

    height: ${theme.spacing(30)};
    margin-bottom: ${theme.spacing(10)};

    ${theme.media.lg`
      width: ${theme.spacing(400)};
      align-items: center;
      `}
  `}
`;

export const InputContainer = styled.div`
  ${({ theme }) => css`
    ${theme.typography.variant.h5}
    flex-grow: 1;
    margin-left: ${theme.spacing(2)};
    color: ${theme.colors.secondary};
    border-radius: ${theme.spacing(10)};

    input {
      width: calc(100% - ${theme.spacing(4)});
      height: calc(100% - ${theme.spacing(4)});
      padding: ${theme.spacing(1)};

      font-size: ${theme.typography.variant.h5};
      color: ${theme.colors.black};

      background-color: ${theme.colors.softGray};
      border: 1px solid ${theme.colors.black};
      border-radius: ${theme.spacing(1)};

      &:focus {
        border-color: ${theme.colors.primary};
        outline: none;
      }
    }
  `}
`;

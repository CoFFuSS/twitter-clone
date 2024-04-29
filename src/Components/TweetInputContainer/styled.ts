import styled, { css } from 'styled-components';

import { DefaultButton } from '../Button/styled';

export const TweetFieldContainer = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: ${theme.spacing(30)};

    padding: ${theme.spacing(15)};

    border-bottom: ${theme.spacing(1)} solid ${theme.colors.softGray};
  `}
`;

export const TweetInputBlock = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: ${theme.spacing(170)};
  `}
`;

export const InputContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: ${theme.spacing(60)};

    ${theme.media.md`
      height: ${theme.spacing(100)};
    `}
  `}
`;

export const TweetInput = styled.textarea`
  ${({ theme }) => css`
    resize: none;

    min-width: ${theme.spacing(300)};
    max-width: ${theme.spacing(600)};
    height: ${theme.spacing(60)};

    color: ${theme.colors.secondary};

    background-color: ${theme.colors.primary};
    border: none;

    ${theme.media.md`
      width: ${theme.spacing(750)};
      max-width: ${theme.spacing(750)};
      height: ${theme.spacing(100)};
    `}

    ${theme.media.lg`
      width: ${theme.spacing(800)};
      max-width: ${theme.spacing(800)};
      height: ${theme.spacing(100)};
    `}

    ::placeholder {
      color: ${theme.colors.gray};
    }

    ${theme.typography.variant.h3};
  `}
`;

export const ControlBlock = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: ${theme.spacing(15)};
  `}
`;

export const FilenameLabel = styled.label`
  ${({ theme }) => css`
    width: ${theme.spacing(30)};
    height: ${theme.spacing(30)};
    margin-top: ${theme.spacing(10)};

    &::after {
      content: '';

      position: absolute;
      top: 0;
      right: 5px;

      width: ${theme.spacing(10)};
      height: ${theme.spacing(10)};

      background-color: ${theme.colors.softGray};
      border-radius: 50%;
    }
  `}
`;

export const UploadImage = styled.img`
  cursor: pointer;
`;

export const FileName = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};

    ${theme.typography.variant.h5};
  `}
`;

export const InputForFile = styled.input`
  position: absolute;
  width: 0;
  visibility: hidden;
  opacity: 0;
`;

export const SendTweetButton = styled(DefaultButton)`
  ${({ theme }) => css`
    background-color: ${theme.colors.blue};
  `}
`;

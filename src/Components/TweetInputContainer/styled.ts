import styled, { css } from 'styled-components';

import { DefaultButton } from '@/Components/Button/styled';

export const Wrapper = styled.section`
  display: flex;
  width: 100%;
`;

export const TweetFieldContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: ${theme.spacing(30)};

    width: 100%;
    padding: ${theme.spacing(15)};

    border-bottom: ${theme.spacing(1)} solid ${theme.colors.softGray};
  `}
`;

export const TweetInputBlock = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: ${theme.spacing(170)};
  `}
`;

export const InputContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: ${theme.spacing(60)};

    ${theme.media.md`
      height: ${theme.spacing(100)};
    `}
  `}
`;

export const TweetInput = styled.textarea`
  ${({ theme }) => css`
    resize: none;

    width: 100%;
    height: ${theme.spacing(60)};

    color: ${theme.colors.secondary};

    background-color: ${theme.colors.primary};
    border: none;

    ${theme.typography.variant.h3};

    ::placeholder {
      color: ${theme.colors.gray};
    }
  `}
`;

export const ControlBlock = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 100%;
    margin-top: ${theme.spacing(15)};
  `}
`;

export const FilenameLabel = styled.label`
  ${({ theme }) => css`
    width: ${theme.spacing(30)};
    height: ${theme.spacing(30)};
    margin-top: ${theme.spacing(10)};
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
    border: none;

    p {
      color: ${theme.colors.white};

      ${theme.typography.variant.h4};
    }

    :disabled {
      background-color: ${theme.colors.softGray};
    }
  `}
`;

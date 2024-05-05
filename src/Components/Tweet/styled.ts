import styled, { css } from 'styled-components';

export const Article = styled.article`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: ${theme.spacing(20)};
    align-items: center;
    justify-content: center;

    width: 100%;
    height: auto;
    padding: ${theme.spacing(5, 0)};

    ${theme.media.sm`
      padding: ${theme.spacing(20, 0)};
    `}
  `}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TweetHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TweetName = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};

    ${theme.typography.variant.h3};
  `}
`;

export const TweetInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: ${theme.spacing(5)};
    align-items: center;
    justify-content: flex-start;

    width: 100%;
  `}
`;

export const TweetSubInfo = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.softGray};

    ${theme.typography.variant.h6};
  `}
`;

export const TweetBody = styled.div`
  ${({ theme }) => css`
    width: 100%;

    p {
      color: ${theme.colors.secondary};
      ${theme.typography.variant.h4};
    }
  `}
`;

export const ProfileImage = styled.img`
  ${({ theme }) => css`
    flex-shrink: 0;
    width: ${theme.spacing(50)};
    height: ${theme.spacing(50)};
  `}
`;

export const TweetRow = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacing(20)};
    align-items: center;
    justify-content: space-between;

    color: ${theme.colors.secondary};

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `}
`;

export const LikesContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacing(20)};
    align-items: center;
  `}
`;

export const LikesImage = styled.img`
  cursor: pointer;
`;

export const ProfileImageContainer = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacing(5, 15, 0, 5)};
  `}
`;

export const TweetOptions = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    position: relative;

    img {
      width: ${theme.spacing(17)};
      height: ${theme.spacing(4)};
    }
  `}
`;

export const PopupMenu = styled.div<{ isOpen: boolean }>`
  ${({ theme, isOpen }) => css`
    position: absolute;
    z-index: 10;
    top: ${theme.spacing(0)};
    right: -2px;

    display: ${isOpen ? 'block' : 'none'};

    width: ${theme.spacing(200)};
    padding: ${theme.spacing(2)};
  `}
`;

export const DeleteTweet = styled.button`
  ${({ theme }) => css`
    cursor: pointer;

    width: 100%;
    height: 100%;

    background-color: ${theme.colors.bloodOrange};
    border: none;
    border-radius: ${theme.spacing(20)};

    ${theme.typography.variant.h4};
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.secondary};

    ${theme.typography.variant.p4};

    :hover {
      color: ${theme.colors.blue};
    }
  `}
`;

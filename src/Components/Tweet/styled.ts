import styled, { css } from 'styled-components';

export const Wrapper = styled.article`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: ${theme.spacing(20)};
    align-items: center;
    justify-content: center;

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
`;

export const TweetHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: ${theme.spacing(5)};
    align-items: center;
    justify-content: flex-start;
  `}
`;

export const TweetName = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};

    ${theme.typography.variant.h3};
  `}
`;

export const TweetSubInfo = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.softGray};
    ${theme.typography.variant.p4};
  `}
`;

export const TweetBody = styled.div`
  ${({ theme }) => css`
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

export const LikesContainer = styled.p`
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

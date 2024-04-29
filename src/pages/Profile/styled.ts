import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BackgroundContainer = styled.div`
  position: static;
`;

export const Background = styled.img`
  ${({ theme }) => css`
    position: relative;
    left: 0;

    display: flex;

    width: 100%;
    max-width: ${theme.spacing(910)};

    object-fit: cover;
  `}
`;

export const ProfileInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.spacing(0, 10, 20, 15)};
    border-bottom: ${theme.spacing(1)} solid ${theme.colors.softGray};

    ${theme.media.md`
      padding: ${theme.spacing(0, 25, 50, 25)};
    `}
  `}
`;

export const ProfileLogoContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    bottom: ${theme.spacing(50)};

    display: flex;

    width: ${theme.spacing(90)};
    height: ${theme.spacing(90)};

    img {
      width: 100%;
      height: 100$;
    }

    ${theme.media.lg`
      width: ${theme.spacing(150)};
      height: ${theme.spacing(150)};
    `}
  `}
`;

export const ProfileName = styled.p`
  ${({ theme }) => css`
    margin: ${theme.spacing(0)};
    color: ${theme.colors.secondary};

    ${theme.typography.variant.h3};
  `}
`;

export const AddressInfo = styled.p`
  ${({ theme }) => css`
    margin: ${theme.spacing(4)};
    color: ${theme.colors.mediumDark};

    ${theme.typography.variant.h5};
  `}
`;

export const DefaultText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};

    ${theme.typography.variant.h4};
  `}
`;

export const ProfileLink = styled.a`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.blue};

    ${theme.typography.variant.h4};
  `}
`;

export const FollowersBlock = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: ${theme.spacing(30)};

    ${theme.media.lg`
      margin-top: ${theme.spacing(50)};
    `};
  `}
`;

export const FollowersInfo = styled.p`
  ${({ theme }) => css`
    margin: 0;
    color: ${theme.colors.secondary};

    ${theme.typography.variant.h4};

    & > span {
      font-weight: ${theme.fontWeight.regular};
    }
  `}
`;

export const TweetsSection = styled.section`
  display: flex;
  flex-direction: column;
`;

export const TweetsTitle = styled.p`
  ${({ theme }) => css`
    width: ${theme.spacing(120)};
    margin: ${theme.spacing(20, 0, 50, 0)};
    padding: ${theme.spacing(5)};

    text-align: center;

    border-bottom: ${theme.spacing(1)} solid ${theme.colors.softGray};

    ${theme.typography.variant.h4};
  `}
`;

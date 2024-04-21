import styled, { css } from 'styled-components';

import { DefaultButton } from '@/Components/Button/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BackTwitterContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: none;

    ${theme.media.lg`
      display: block;
      width: ${theme.spacing(960)};
      height: ${theme.spacing(860)};
    `}
    ${theme.media.xl`
      display: block;
      width: ${theme.spacing(1100)};
      height: ${theme.spacing(1000)};
    `}
  `}
`;

export const BackTwitter = styled.img`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;

    display: flex;

    width: 100%;
    max-width: ${theme.spacing(1100)};
    height: auto;

    object-fit: cover;
  `}
`;

export const InfoBlock = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: fit-content;
    ${theme.media.lg`
      margin: ${theme.spacing(80, 30, 60, 30)};
      `}
    ${theme.media.xl`
      margin: ${theme.spacing(140, 50, 60, 50)};
     `};
  `}
`;

export const TwitterLogoContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: ${theme.spacing(14)};
    height: ${theme.spacing(14)};

    ${theme.media.lg`
      width: ${theme.spacing(35)};
      height: ${theme.spacing(35)};
      margin-bottom: ${theme.spacing(35)};
      `}

    ${theme.media.xl`
      width: ${theme.spacing(50)};
      height: ${theme.spacing(50)};
      margin-bottom: ${theme.spacing(57)};
      `}
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    margin: 0;
    color: ${theme.colors.secondary};
    white-space: nowrap;
    ${theme.media.lg`
      margin-bottom: ${theme.spacing(30)};
    `}
    ${theme.media.xl`
      margin-bottom: ${theme.spacing(47)};
    `}

    ${theme.typography.variant.h1};
  `}
`;

export const SubText = styled.p`
  ${({ theme }) => css`
    margin: 0;
    color: ${theme.colors.secondary};
    white-space: nowrap;

    ${theme.typography.variant.h2};
  `}
`;

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    ${theme.media.lg`
      gap: ${theme.spacing(21)};
      margin: ${theme.spacing(31, 0, 31, 0)};
    `}
  `}
`;

export const GoogleLogo = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: ${theme.spacing(14)};
    height: ${theme.spacing(14)};

    ${theme.media.lg`
      width: ${theme.spacing(35)};
      height: ${theme.spacing(35)};
      `}

    ${theme.media.xl`
      margin: ${theme.spacing(14, 0, 16, 0)};
      width: ${theme.spacing(32)};
      height: ${theme.spacing(32)};
      `}
  `}
`;

export const PrivacyField = styled.p`
  ${({ theme }) => css`
    ${theme.typography.variant.h7}
  `}
`;

export const PrivacyLink = styled.a`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.blue};
  `}
`;

export const LogInField = styled.p`
  ${({ theme }) => css`
    ${theme.typography.variant.h6};
  `}
`;

export const Footer = styled.footer`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacing(12)};
    justify-content: center;

    margin-top: 30px;

    text-align: center;

    ${theme.typography.variant.h7};

    ${theme.media.lg`
      height: ${theme.spacing(20)};
    `}
  `}
`;

export const FooterSpan = styled.span`
  ${({ theme }) => css`
    cursor: pointer;
    display: none;

    ${theme.typography.variant.h7}
    ${theme.media.xl`
      display: block
    `}
  `}
`;

export const RightSpan = styled.span`
  ${({ theme }) => css`
    cursor: pointer;

    ${theme.typography.variant.h7}
  `}
`;

export const AuthButton = styled(DefaultButton)`
  ${({ theme }) => css`
    width: ${theme.spacing(180)};
    height: ${theme.spacing(40)};

    ${theme.media.lg`
      width: ${theme.spacing(400)};
      height: ${theme.spacing(60)};
    `}
  `}
`;

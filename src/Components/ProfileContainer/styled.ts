import styled, { css } from 'styled-components';

import { LogoContainer } from '@/mixins/styledMixins';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

export const SidebarLogoContainer = styled(LogoContainer)`
  ${({ theme }) => css`
    cursor: pointer;

    align-self: center;

    width: ${theme.spacing(30)};
    height: ${theme.spacing(30)};
    margin: 0;
  `}
`;

export const ProfileInfoContainer = styled.div`
  ${({ theme }) => css`
    display: none;
    flex-direction: column;
    align-self: center;
    justify-content: center;

    ${theme.media.lg`
      display: flex;
      gap: ${theme.spacing(6)};
      width: ${theme.spacing(130)};
      height: ${theme.spacing(70)};
      margin-left: ${theme.spacing(35)};
    `}
  `}
`;

export const ProfileName = styled.p`
  ${({ theme }) => css`
    margin: 0;
    font-weight: ${theme.fontWeight.semibold};
    color: ${theme.colors.black};

    ${theme.typography.variant.h6};
  `}
`;

export const ProfileAddress = styled.p`
  ${({ theme }) => css`
    margin: 0;
    color: ${theme.colors.black};

    ${theme.typography.variant.h6};
  `}
`;

export const FollowButtonContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: ${theme.spacing(100)};
    height: ${theme.spacing(40)};
  `}
`;

export const FollowButton = styled.button`
  ${({ theme }) => css`
    cursor: pointer;

    width: 100%;
    height: 100%;

    color: ${theme.colors.white};

    background-color: ${theme.colors.black};
    border-radius: ${theme.spacing(50)};

    ${theme.typography.variant.h4}
  `}
`;

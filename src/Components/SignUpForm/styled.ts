import styled, { css } from 'styled-components';

import { DefaultButton } from '@/Components/Button/styled';

export const Wrapper = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    width: ${theme.spacing(340)};
    height: ${theme.spacing(560)};
    padding: ${theme.spacing(0, 15)};

    ${theme.media.md`
      width: ${theme.spacing(540)};
      height: ${theme.spacing(740)};
      padding: ${theme.spacing(0, 20)};
    `}

    ${theme.media.lg`
      width: ${theme.spacing(670)};
      height: ${theme.spacing(870)};
      padding: ${theme.spacing(0, 40)};
    `}
  `}
`;

export const FormName = styled.span`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing(40)};
    color: ${theme.colors.secondary};

    ${theme.typography.variant.h2};
  `}
`;

export const InputFieldsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(25)};
    margin-bottom: ${theme.spacing(25)};
  `}
`;

export const RouterSpan = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.blue};

    ${theme.typography.variant.p4};
  `}
`;

export const InfoBlockSpan = styled.span`
  ${({ theme }) => css`
    margin-top: ${theme.spacing(17)};

    ${theme.typography.variant.h4};
  `}
`;

export const InfoText = styled.p`
  ${({ theme }) => css`
    display: none;
    margin: 0;
    color: ${theme.colors.secondary};

    ${theme.typography.variant.h5};

    ${theme.media.md`
      display: block
    `}
  `}
`;

export const DateContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: ${theme.spacing(21)};
    margin: ${theme.spacing(32, 0)};
  `}
`;

export const SignInButton = styled(DefaultButton)`
  ${({ theme }) => css`
    align-self: center;
    color: ${theme.colors.white};
    background-color: ${theme.colors.blue};

    :disabled {
      background-color: ${theme.colors.softGray};
    }

    ${theme.media.md`
      width: ${theme.spacing(400)};
      height: ${theme.spacing(45)};
    `}

    ${theme.media.lg`
      width: ${theme.spacing(670)};
      height: ${theme.spacing(70)};
    `}
  `}
`;

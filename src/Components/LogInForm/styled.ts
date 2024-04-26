import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { DefaultButton } from '@/Components/Button/styled';

import { InputField } from '../Input/styled';

export const Wrapper = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    width: ${theme.spacing(300)};
    height: ${theme.spacing(300)};
    padding: ${theme.spacing(0, 15)};

    ${theme.media.lg`
      width: ${theme.spacing(450)};
      height: ${theme.spacing(500)};
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

export const LogInButton = styled(DefaultButton)`
  ${({ theme }) => css`
    align-self: center;

    width: ${theme.spacing(300)};
    height: ${theme.spacing(45)};

    color: ${theme.colors.white};

    background-color: ${theme.colors.blue};

    ${theme.media.lg`
      width: ${theme.spacing(450)};
      height: ${theme.spacing(60)};
    `}
  `}
`;

export const LogInInput = styled(InputField)`
  ${({ theme }) => css`
    width: ${theme.spacing(300)};
    height: ${theme.spacing(30)};

    ${theme.media.lg`
      width: ${theme.spacing(450)};
      height: ${theme.spacing(60)};
    `}
  `}
`;

export const SignInLink = styled(Link)`
  ${({ theme }) => css`
    align-self: flex-end;
    margin-top: ${theme.spacing(20)};
    color: ${theme.colors.blue};
    text-decoration: none;

    ${theme.typography.variant.h4};

    ${theme.media.lg`
      margin-top: ${theme.spacing(40)};
    `}
  `}
`;

import styled, { css } from 'styled-components';

export const Wrapper = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: ${theme.spacing(750)};
    height: ${theme.spacing(870)};
  `}
`;

export const LogoContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: ${theme.spacing(26)};
    height: ${theme.spacing(21)};
    margin-bottom: ${theme.spacing(14)};

    ${theme.media.lg`
      width: ${theme.spacing(35)};
      height: ${theme.spacing(29)};
      margin-bottom: ${theme.spacing(24)};
      `}

    ${theme.media.xl`
      width: ${theme.spacing(50)};
      height: ${theme.spacing(41)};
      margin-bottom: ${theme.spacing(43)};
      `}
  `}
  img {
    width: 100%;
    height: 100%;
  }
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

export const InputField = styled.input`
  ${({ theme }) => css`
    width: ${theme.spacing(670)};
    height: ${theme.spacing(70)};
    border: ${theme.spacing(1)} solid ${theme.colors.lightGray};
    border-radius: ${theme.spacing(6)};
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
    color: ${theme.colors.secondary};

    ${theme.typography.variant.h5};
  `}
`;

export const DateContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: ${theme.spacing(21)};
    margin: ${theme.spacing(0, 40)};
  `}
`;

export const DateInput = styled.input`
  ${({ theme }) => css`
    width: ${theme.spacing(160)};
    height: ${theme.spacing(70)};
    border: ${theme.spacing(1)} solid ${theme.colors.lightGray};
    border-radius: ${theme.spacing(6)};
  `}
`;

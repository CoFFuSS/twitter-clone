import styled, { css } from 'styled-components';

import { Theme } from '@/types/theme';

interface Props {
  width?: string;
  height?: string;
  borderColor?: string;
  borderRadius?: string;
  textColor?: string;
  theme: Theme;
}

export const InputField = styled.input<Props>`
  ${({ theme, width, height, borderColor, borderRadius, textColor }) => css`
    width: ${width ?? theme.spacing(670)};
    height: ${height ?? theme.spacing(70)};

    color: ${textColor ?? theme.colors.secondary};

    border: ${theme.spacing(1)} solid ${borderColor ?? theme.colors.lightGray};
    border-radius: ${borderRadius ?? theme.spacing(6)};
  `}
`;

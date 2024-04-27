import styled, { css } from 'styled-components';

import { Theme } from '@/types/theme';
import arrowDown from '@/assets/images/arrow-down.svg';

interface Props {
  width?: string;
  height?: string;
  borderColor?: string;
  borderRadius?: string;
  theme: Theme;
}

export const SelectContainer = styled.select<Props>`
  ${({ theme, width, borderColor, borderRadius }) => css`
    cursor: pointer;

    width: ${width ?? theme.spacing(320)};
    padding: ${theme.spacing(20)};

    color: ${theme.colors.secondary};

    appearance: none;
    background: url(${arrowDown});
    background-color: ${theme.colors.primary};
    background-repeat: no-repeat;
    background-position: right;
    background-position-x: calc(100% - 8px);
    border: ${theme.spacing(1)} solid ${borderColor ?? theme.colors.gray};
    border-radius: ${borderRadius ?? theme.spacing(6)};
    outline: none;

    transition: all 0.2s linear;

    ${theme.typography.variant.h4}

    &:focus {
      border-color: ${theme.colors.secondary};
    }

    &:hover {
      border-color: ${theme.colors.secondary};
    }

    ${theme.media.xl`
      padding: ${theme.spacing(10)};
    `}
  `}
`;

export const StyledOption = styled.option`
  display: flex;
`;

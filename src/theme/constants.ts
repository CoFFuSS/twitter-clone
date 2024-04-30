import { DefaultTheme, FlattenInterpolation, ThemeProps, css } from 'styled-components';

import { pxToRem } from './utils';
import { media } from './breakpoints';

export const THEME_COLORS = {
  primary: '#FFFFFF',
  secondary: '#000000',
  blue: '#1DA1F2',
  mediumDark: '#333333',
  softGray: '#C4C4C4',
  gray: '#828282',
  lightGray: '#EFF3F4',
  mediumGray: '#B3B8BB',
  bloodOrange: '#CC1100',
  white: '#FFFFFF',
  black: '#000000',
}; // There is an Error in App if it has 'as const' because i change this fields when creating themes

export const THEME_FONT_FAMILIES = {
  primary: 'Roboto',
  secondary: 'Roboto Serif',
} as const;

export const THEME_FONT_WEIGHT = {
  light: '100',
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  black: '900',
} as const;

interface TypographyVariants {
  [key: string]: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}

export const THEME_TYPOGRAPHY_VARIANTS: TypographyVariants = {
  h1: css`
    font-family: ${THEME_FONT_FAMILIES.primary};
    font-size: ${pxToRem(39)};
    font-weight: ${THEME_FONT_WEIGHT.black};
    line-height: ${58 / 39};

    ${media.lg`
      font-family: ${THEME_FONT_FAMILIES.primary};
      font-size: ${pxToRem(56)};
      font-weight: ${THEME_FONT_WEIGHT.black};
      line-height: ${84 / 56};
    `}

    ${media.xl`
      font-family: ${THEME_FONT_FAMILIES.primary};
      font-size: ${pxToRem(76)};
      font-weight: ${THEME_FONT_WEIGHT.black};
      line-height: ${114 / 76};
    `}
  `,

  h2: css`
    font-family: ${THEME_FONT_FAMILIES.primary};
    font-size: ${pxToRem(13)};
    font-weight: ${THEME_FONT_WEIGHT.black};
    line-height: ${18 / 13};

    ${media.lg`
      font-family: ${THEME_FONT_FAMILIES.primary};
      font-size: ${pxToRem(32)};
      font-weight: ${THEME_FONT_WEIGHT.black};
      line-height: ${37 / 32};
    `}

    ${media.xl`
      font-family: ${THEME_FONT_FAMILIES.primary};
      font-size: ${pxToRem(42)};
      font-weight: ${THEME_FONT_WEIGHT.black};
      line-height: ${49 / 42};
  `}
  `,
  h3: css`
    font-family: ${THEME_FONT_FAMILIES.primary};
    font-size: ${pxToRem(12)};
    font-weight: ${THEME_FONT_WEIGHT.bold};
    line-height: ${16 / 12};
    ${media.lg`
      font-family: ${THEME_FONT_FAMILIES.primary};
      font-size: ${pxToRem(24)};
      font-weight: ${THEME_FONT_WEIGHT.bold};
      line-height: ${28 / 24};
    `}
  `,
  h4: css`
    font-family: ${THEME_FONT_FAMILIES.primary};
    font-size: ${pxToRem(16)};
    font-weight: ${THEME_FONT_WEIGHT.semibold};
    line-height: ${24 / 16};
    ${media.lg`
      font-family: ${THEME_FONT_FAMILIES.primary};
      font-size: ${pxToRem(18)};
      font-weight: ${THEME_FONT_WEIGHT.semibold};
      line-height: ${21 / 18};
    `}
  `,
  h5: css`
    font-family: ${THEME_FONT_FAMILIES.primary};
    font-size: ${pxToRem(16)};
    font-weight: ${THEME_FONT_WEIGHT.regular};
    line-height: ${24 / 16};

    ${media.lg`
      font-family: ${THEME_FONT_FAMILIES.primary};
      font-size: ${pxToRem(16)};
      font-weight: ${THEME_FONT_WEIGHT.regular};
      line-height: ${24 / 16};
    `}
  `,
  h6: css`
    font-family: ${THEME_FONT_FAMILIES.primary};
    font-size: ${pxToRem(10)};
    font-weight: ${THEME_FONT_WEIGHT.regular};
    line-height: ${12 / 10};

    ${media.lg`
      font-family: ${THEME_FONT_FAMILIES.primary};
      font-size: ${pxToRem(16)};
      font-weight: ${THEME_FONT_WEIGHT.regular};
      line-height: ${18 / 16};
    `}
  `,
  h7: css`
    font-family: ${THEME_FONT_FAMILIES.primary};
    font-size: ${pxToRem(10)};
    font-weight: ${THEME_FONT_WEIGHT.regular};
    line-height: ${12 / 10};

    ${media.lg`
      font-family: ${THEME_FONT_FAMILIES.primary};
      font-size: ${pxToRem(14)};
      font-weight: ${THEME_FONT_WEIGHT.regular};
      line-height: ${20 / 14};
    `}
  `,
  p4: css`
    font-family: ${THEME_FONT_FAMILIES.primary};
    font-size: ${pxToRem(16)};
    font-weight: ${THEME_FONT_WEIGHT.regular};
    line-height: ${24 / 16};
    ${media.lg`
    font-family: ${THEME_FONT_FAMILIES.primary};
    font-size: ${pxToRem(18)};
    font-weight: ${THEME_FONT_WEIGHT.regular};
    line-height: ${21 / 18};
  `}
  `,
} as const;

import styled, { css } from 'styled-components';

export const Switcher = styled.label<{ checked: boolean }>`
  ${({ theme, checked }) => css`
    cursor: pointer;

    position: relative;

    display: block;

    width: ${theme.spacing(30)};
    height: ${theme.spacing(15)};

    text-indent: -9999px;

    background: ${theme.colors.primary};
    border: ${theme.spacing(1)} solid ${theme.colors.secondary};
    border-radius: ${theme.spacing(100)};

    &::after {
      content: '';

      position: absolute;
      left: ${checked ? 'calc(100% - 48%)' : '-0.5px'};

      width: ${theme.spacing(13)};
      height: ${theme.spacing(13)};

      background: ${theme.colors.secondary};
      border: 1px solid ${theme.colors.secondary};
      border-radius: ${theme.spacing(90)};

      transition: 0.3s;
      ${theme.media.lg`
        width: ${theme.spacing(22)};
        height: ${theme.spacing(23)};
        `}
    }
    ${theme.media.lg`
      width: ${theme.spacing(48)};
      height: ${theme.spacing(24)};
      `}
  `}
`;

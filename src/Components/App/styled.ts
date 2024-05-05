import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

body{
  overflow-x: hidden;
  box-sizing:border-box;
  margin: 0;
  padding: 0;
}


:root {
  align-content: center;

  max-width: ${({ theme }) => theme.spacing(1920)};
  margin: 0 auto;

  font-family: Roboto, sans-serif;

  background-color: ${({ theme }) => theme.colors.primary};
}

.blur {
  filter: blur(4px);
  ${({ theme }) => theme.media.sm`
    filter: none;
  `}
}

`;

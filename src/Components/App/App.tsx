import { ThemeProvider } from 'styled-components';

import { basicTheme } from '@/theme';

import { TestH1 } from '../styled';

export const App = () => (
  <ThemeProvider theme={basicTheme}>
    <div>
      <TestH1>Hello</TestH1>
    </div>
  </ThemeProvider>
);

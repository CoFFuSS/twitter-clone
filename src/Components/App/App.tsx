import { createContext, useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from '@/theme';
import { ErrorBoundary } from '@/Components/ErrorBoundary';

type ThemeContextType = {
  handleToggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  handleToggleTheme: () => {},
});

export const App = () => {
  const [isLightTheme, setIsLightTheme] = useState<boolean>(true);

  const handleToggleTheme = () => {
    setIsLightTheme((prev) => !prev);
  };

  const contextValue = useMemo(
    () => ({
      handleToggleTheme,
    }),
    [],
  );

  return (
    <ErrorBoundary>
      <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
        <ThemeContext.Provider value={contextValue}>
          <div>
            <button
              onClick={handleToggleTheme}
              type='submit'
            >
              Change Theme
            </button>
          </div>
        </ThemeContext.Provider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

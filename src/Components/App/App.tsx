import { createContext, useEffect, useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

import { darkTheme, lightTheme } from '@/theme';
import { ErrorBoundary } from '@/Components/ErrorBoundary';
import { authorizedRoutes, unAuthorizedRoutes, Routes as RoutesEnum } from '@/constants/routes';
import { auth } from '@/firebase';

import { GlobalStyle } from './styled';

import { BasicLayout } from '../BasicLayout';

type ThemeContextType = {
  handleToggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  handleToggleTheme: () => {},
});

export const App = () => {
  const [isLightTheme, setIsLightTheme] = useState<boolean>(true);
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        setIsAuthorized(!!user);
        setIsLoading(false);
      }),
    [],
  );

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
    <BrowserRouter>
      <ErrorBoundary>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
            <ThemeContext.Provider value={contextValue}>
              <GlobalStyle />

              <Routes>
                {unAuthorizedRoutes.map(({ path, element: Element }) => (
                  <Route
                    key={path}
                    path={path}
                    element={<Element />}
                  />
                ))}
                <Route element={<BasicLayout />}>
                  {authorizedRoutes.map(({ path, element: Element }) => (
                    <Route
                      key={path}
                      path={path}
                      element={
                        isAuthorized ? (
                          <Element />
                        ) : (
                          <Navigate
                            to={RoutesEnum.Auth}
                            replace
                          />
                        )
                      }
                    />
                  ))}
                </Route>
              </Routes>
            </ThemeContext.Provider>
          </ThemeProvider>
        )}
      </ErrorBoundary>
    </BrowserRouter>
  );
};

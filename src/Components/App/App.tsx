import { createContext, useEffect, useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

import { darkTheme, lightTheme } from '@/theme';
import { ErrorBoundary } from '@/Components/ErrorBoundary';
import { authorizedRoutes, unAuthorizedRoutes, Routes as RoutesEnum } from '@/constants/routes';
import { auth } from '@/firebase';

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

  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        setIsAuthorized(!!user);
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
        <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
          <ThemeContext.Provider value={contextValue}>
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
      </ErrorBoundary>
    </BrowserRouter>
  );
};

import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

import { ErrorBoundary } from '@/Components/ErrorBoundary';
import { authorizedRoutes, unAuthorizedRoutes } from '@/constants/routes';
import { auth } from '@/firebase';
import { RoutesEnum } from '@/constants/routesEnum';
import { BasicLayout } from '@/Components/BasicLayout';
import { useTheme } from '@/hooks/useTheme';

import { GlobalStyle } from './styled';

export const App = () => {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const currentTheme = useTheme();

  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        setIsAuthorized(!!user);
        setIsLoading(false);
      }),
    [isAuthorized],
  );

  return (
    <ThemeProvider theme={currentTheme}>
      <BrowserRouter>
        <ErrorBoundary>
          <GlobalStyle />
          {isLoading ? (
            <h1>Loading...</h1>
          ) : (
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
          )}
        </ErrorBoundary>
      </BrowserRouter>
    </ThemeProvider>
  );
};

import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

import { darkTheme, lightTheme } from '@/theme';
import { ErrorBoundary } from '@/Components/ErrorBoundary';
import { authorizedRoutes, unAuthorizedRoutes } from '@/constants/routes';
import { auth } from '@/firebase';
import { RoutesEnum } from '@/constants/routesEnum';
import { useAppSelector } from '@/hooks/redux';
import { selectTheme } from '@/store/selectors';
import { BasicLayout } from '@/Components/BasicLayout';

import { GlobalStyle } from './styled';

export const App = () => {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const currentTheme = useAppSelector(selectTheme);

  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        setIsAuthorized(!!user);
        setIsLoading(false);
      }),
    [isAuthorized],
  );

  return (
    <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
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

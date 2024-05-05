import { AuthPage } from '@/pages/Auth';
import { FeedPage } from '@/pages/FeedPage';
import { HomePage } from '@/pages/HomePage';
import { LogInPage } from '@/pages/LogIn';
import { NotFoundPage } from '@/pages/NotFound';
import { ProfilePage } from '@/pages/Profile';
import { SignInPage } from '@/pages/SignIn';
import { TweetPage } from '@/pages/Tweet';

import { RoutesEnum } from './routesEnum';

export const unAuthorizedRoutes = [
  {
    path: RoutesEnum.Auth,
    element: AuthPage,
  },
  {
    path: RoutesEnum.LogIn,
    element: LogInPage,
  },
  {
    path: RoutesEnum.SignIn,
    element: SignInPage,
  },
  {
    path: RoutesEnum.NotFound,
    element: NotFoundPage,
  },
] as const;

export const authorizedRoutes = [
  {
    path: RoutesEnum.Home,
    element: HomePage,
  },
  {
    path: RoutesEnum.Profile,
    element: ProfilePage,
  },
  {
    path: RoutesEnum.Feed,
    element: FeedPage,
  },
  {
    path: RoutesEnum.Tweet,
    element: TweetPage,
  },
] as const;

import { AuthPage } from '@/pages/Auth';
import { FeedPage } from '@/pages/FeedPage';
import { HomePage } from '@/pages/HomePage';
import { LoginPage } from '@/pages/LogIn';
import { NotFoundPage } from '@/pages/NotFound';
import { ProfilePage } from '@/pages/Profile';
import { SignInPage } from '@/pages/SignIn';
import { TweetPage } from '@/pages/Tweet';

export const enum Routes {
  Home = '/',
  Profile = '/profile',
  Feed = '/feed',
  Tweet = 'tweet/:id',
  Auth = '/auth',
  LogIn = '/log-in',
  SignIn = '/sign-in',
  NotFound = '*',
}

export const unAuthorizedRoutes = [
  {
    path: Routes.Auth,
    element: AuthPage,
  },
  {
    path: Routes.LogIn,
    element: LoginPage,
  },
  {
    path: Routes.SignIn,
    element: SignInPage,
  },
  {
    path: Routes.NotFound,
    element: NotFoundPage,
  },
];

export const authorizedRoutes = [
  {
    path: Routes.Home,
    element: HomePage,
  },
  {
    path: Routes.Profile,
    element: ProfilePage,
  },
  {
    path: Routes.Feed,
    element: FeedPage,
  },
  {
    path: Routes.Tweet,
    element: TweetPage,
  },
];

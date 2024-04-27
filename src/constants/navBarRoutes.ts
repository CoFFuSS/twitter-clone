import { ProfileIcon } from '@/Components/Icons/ProfileIcon';
import { MessagesIcon } from '@/Components/Icons/MessagesIcon';
import { HomeIcon } from '@/Components/Icons/HomeIcon';
import { BookmarksIcon } from '@/Components/Icons/BookmarksIcon';
import { ExploreIcon } from '@/Components/Icons/ExploreIcon';
import { ListsIcon } from '@/Components/Icons/ListsIcon';
import { MoreIcon } from '@/Components/Icons/MoreIcon';
import { NotificationIcon } from '@/Components/Icons/NotificationIcon';

import { RoutesEnum } from './routesEnum';

export const navBarRoutes = [
  {
    path: RoutesEnum.Home,
    element: 'Home',
    icon: HomeIcon,
  },
  {
    path: RoutesEnum.Explore,
    element: 'Explore',
    icon: ExploreIcon,
  },
  {
    path: RoutesEnum.Notifications,
    element: 'Notifications',
    icon: NotificationIcon,
  },
  {
    path: RoutesEnum.Messages,
    element: 'Messages',
    icon: MessagesIcon,
  },
  {
    path: RoutesEnum.Bookmarks,
    element: 'Bookmarks',
    icon: BookmarksIcon,
  },
  {
    path: RoutesEnum.Lists,
    element: 'Lists',
    icon: ListsIcon,
  },
  {
    path: RoutesEnum.Profile,
    element: 'Profile',
    icon: ProfileIcon,
  },
  {
    path: RoutesEnum.More,
    element: 'More',
    icon: MoreIcon,
  },
];

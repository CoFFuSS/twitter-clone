import homeIcon from '@/assets/images/homeIcon.svg';
import exploreIcon from '@/assets/images/exploreIcon.svg';
import messagesIcon from '@/assets/images/messagesIcon.svg';
import bookmarksIcon from '@/assets/images/bookmarksIcon.svg';
import listsIcon from '@/assets/images/listsIcon.svg';
import profileIcon from '@/assets/images/profileIcon.svg';
import notificationIcon from '@/assets/images/notificationIcon.svg';
import moreIcon from '@/assets/images/moreIcon.svg';

import { RoutesEnum } from './routesEnum';

export const navBarRoutes = [
  {
    path: RoutesEnum.Home,
    element: 'Home',
    icon: homeIcon,
  },
  {
    path: RoutesEnum.Explore,
    element: 'Explore',
    icon: exploreIcon,
  },
  {
    path: RoutesEnum.Notifications,
    element: 'Notifications',
    icon: notificationIcon,
  },
  {
    path: RoutesEnum.Messages,
    element: 'Messages',
    icon: messagesIcon,
  },
  {
    path: RoutesEnum.Bookmarks,
    element: 'Bookmarks',
    icon: bookmarksIcon,
  },
  {
    path: RoutesEnum.Lists,
    element: 'Lists',
    icon: listsIcon,
  },
  {
    path: RoutesEnum.Profile,
    element: 'Profile',
    icon: profileIcon,
  },
  {
    path: RoutesEnum.More,
    element: 'More',
    icon: moreIcon,
  },
];

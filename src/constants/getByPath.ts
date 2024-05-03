import { Timestamp } from 'firebase/firestore';

import { SearchedUserProps } from '@/types/common';
import profile from '@/assets/images/ProfileLogoExample.svg';
import { ProfileContainer } from '@/Components/ProfileContainer';
import { SearchedTweetProps } from '@/types/tweets';
import { SearchedTweet } from '@/Components/SearchedTweet';

export const mockUsers: SearchedUserProps[] = [
  {
    photoURL: profile,
    name: 'ПАША ТЕХНИК',
    email: '121212@gg.ua',
    id: '123',
    birthday: '12.12.2023',
    phone: '+375222222222',
  },
  {
    photoURL: profile,
    name: 'AHMAT',
    email: 'ahmed@yandex.ru',
    birthday: '12.01.2024',
    id: '34',
    phone: '+375111111111',
  },
];

const date = new Date(2023, 8, 12);

export const mockTweets: SearchedTweetProps[] = [
  {
    content: 'ABOBIC',
    name: 'ПАША ТЕХНИК',
    email: '121212@gg.ua',
    createdAt: Timestamp.fromDate(date),
    id: '121212',
  },
  {
    content: 'SALAM',
    name: 'AHMAT',
    email: 'ahmed@yandex.ru',
    createdAt: Timestamp.fromDate(date),
    id: '1111',
  },
];

export interface ComponentByPath {
  '/': ({ item }: { item: SearchedUserProps }) => JSX.Element;
  '/profile': ({ item }: { item: SearchedTweetProps }) => JSX.Element;
}

export const componentsByPath: Record<string, ComponentByPath[keyof ComponentByPath]> = {
  '/': ProfileContainer,
  '/profile': SearchedTweet,
};

export const itemsByPath: Record<string, SearchedTweetProps[] | SearchedUserProps[]> = {
  '/': mockUsers,
  '/profile': mockTweets,
};

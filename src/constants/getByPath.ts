import { Path, SearchedUserProps } from '@/types/common';
import { ProfileContainer } from '@/Components/ProfileContainer';
import { SearchedTweetProps } from '@/types/tweets';
import { SearchedTweet } from '@/Components/SearchedTweet';
import { mockUsers } from '@/mock/users';
import { mockTweets } from '@/mock/tweets';

export interface ComponentByPath {
  '/': ({ item }: { item: SearchedUserProps }) => JSX.Element;
  '/profile': ({ item }: { item: SearchedTweetProps }) => JSX.Element;
}

export const componentsByPath: Record<Path, ComponentByPath[keyof ComponentByPath]> = {
  '/': ProfileContainer,
  '/profile': SearchedTweet,
} as const;

export const itemsByPath: Record<Path, SearchedTweetProps[] | SearchedUserProps[]> = {
  '/': mockUsers,
  '/profile': mockTweets,
} as const;

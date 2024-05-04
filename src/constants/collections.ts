import { Path } from '@/types/common';

export const enum Collections {
  Users = 'users',
  Posts = 'posts',
}

export const collectionsWithPaths: Record<Path, Collections> = {
  '/': Collections.Users,
  '/profile': Collections.Posts,
} as const;

export const searchFieldsInCollection: Record<Path, string> = {
  '/': 'name',
  '/profile': 'content',
} as const;

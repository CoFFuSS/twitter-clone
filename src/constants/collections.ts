export const enum Collections {
  Users = 'users',
  Posts = 'posts',
}

export const collectionsWithPaths: Record<string, Collections> = {
  '/': Collections.Users,
  '/profile': Collections.Posts,
};

export const searchFieldsInCollection: Record<string, string> = {
  '/': 'name',
  '/profile': 'content',
};

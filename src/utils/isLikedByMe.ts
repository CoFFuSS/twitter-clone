export const isLikedByMe = (likingUsers: string[], myEmail: string) =>
  likingUsers.includes(myEmail);

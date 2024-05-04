import { TypeProfile } from '@/utils/profileFormSchema';

export const userFieldsToUpdate: (keyof TypeProfile)[] = [
  'name',
  'email',
  'phone',
  'birthday',
  'password',
] as const;

export const tweetFieldsToUpdate: (keyof TypeProfile)[] = ['email', 'name'] as const;

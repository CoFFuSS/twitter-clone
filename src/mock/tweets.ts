import { Timestamp } from 'firebase/firestore';

import { SearchedTweetProps } from '@/types/tweets';

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
] as const;

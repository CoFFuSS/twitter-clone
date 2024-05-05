import { SearchedUserProps } from '@/types/common';
import profile from '@/assets/images/ProfileLogoExample.svg';

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
] as const;

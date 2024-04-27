import { PersistPartial } from 'redux-persist/es/persistReducer';

import { UserState } from '@/types/common';

import { Theme } from './slices/themeSlice';

interface State extends PersistPartial {
  user: UserState;
  theme: Theme;
}

export const selectUser = (state: State) => state.user;

export const selectTheme = (state: State) => state.theme.theme;

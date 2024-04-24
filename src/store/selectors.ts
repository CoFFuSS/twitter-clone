import { PersistPartial } from 'redux-persist/es/persistReducer';

import { UserState } from '@/types/common';

interface State extends PersistPartial {
  user: UserState;
}

export const selectUser = (state: State) => state.user;

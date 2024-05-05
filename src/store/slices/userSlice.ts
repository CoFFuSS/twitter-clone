import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { UserState } from '@/types/common';

const initialState: UserState = {
  token: '',
  name: '',
  phone: '',
  email: '',
  birthday: '',
  id: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (_, action: { payload: UserState; type: string }) => ({ ...action.payload }),
    updateUser: (state, action: PayloadAction<Partial<UserState>>) => ({
      ...state,
      ...action.payload,
    }),
    clearUser: () => ({ ...initialState }),
  },
});

export const { setUser, updateUser, clearUser } = userSlice.actions;

export const { reducer: userReducer } = userSlice;

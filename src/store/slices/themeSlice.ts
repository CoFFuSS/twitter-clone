import { createSlice } from '@reduxjs/toolkit';

export interface Theme {
  theme: 'dark' | 'light';
}

const initialState: Theme = {
  theme: 'dark',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state) => ({
      theme: state.theme === 'dark' ? 'light' : 'dark',
    }),
  },
});

export const { setTheme } = themeSlice.actions;

export const { reducer: themeReducer } = themeSlice;

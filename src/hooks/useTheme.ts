import { selectTheme } from '@/store/selectors';
import { darkTheme, lightTheme } from '@/theme';

import { useAppSelector } from './redux';

export const useTheme = () => {
  const currentTheme = useAppSelector(selectTheme);

  return currentTheme === 'dark' ? darkTheme : lightTheme;
};

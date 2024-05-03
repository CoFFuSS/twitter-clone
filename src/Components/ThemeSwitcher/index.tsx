import { useDispatch } from 'react-redux';

import { useAppSelector } from '@/hooks/redux';
import { selectTheme } from '@/store/selectors';
import { setTheme } from '@/store/slices/themeSlice';

import { Switcher } from './styled';

export const ThemeSwitcher = () => {
  const currentTheme = useAppSelector(selectTheme);
  const dispatch = useDispatch();

  const handleThemeSwitch = () => {
    dispatch(setTheme());
  };

  return (
    <Switcher checked={currentTheme !== 'light'}>
      <input
        name='themeSwitcher'
        onChange={handleThemeSwitch}
        id='checkbox'
        type='checkbox'
      />
    </Switcher>
  );
};

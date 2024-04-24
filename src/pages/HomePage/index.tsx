import { useDispatch } from 'react-redux';

import { logout } from '@/firebase';
import { clearUser } from '@/store/slices/userSlice';

export const HomePage = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    logout();
    dispatch(clearUser());
  };

  return (
    <div>
      <h1>This is Home page</h1>
      <button
        onClick={handleLogOut}
        type='submit'
      >
        Log out
      </button>
    </div>
  );
};

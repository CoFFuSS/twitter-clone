import { logout } from '@/firebase';

export const HomePage = () => {
  const handleLogOut = () => {
    logout();
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

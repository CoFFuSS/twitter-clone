import { Outlet } from 'react-router-dom';

export const BasicLayout = () => (
  <div>
    <h1>Left</h1>
    <Outlet />
    <h1>Right</h1>
  </div>
);

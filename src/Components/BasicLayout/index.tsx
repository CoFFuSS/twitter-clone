import { Link, Outlet } from 'react-router-dom';

import { navBarRoutes } from '@/constants/navBarRoutes';

import { Content, NavBar, Wrapper } from './styled';

export const BasicLayout = () => (
  <Wrapper>
    <NavBar>
      {navBarRoutes.map(({ path, element, icon }) => (
        <Link
          key={path}
          to={path}
        >
          <img
            src={icon}
            alt=''
          />
          {element}
        </Link>
      ))}
    </NavBar>
    <Content>
      <Outlet />
    </Content>
    <article>
      <h1>Right</h1>
    </article>
  </Wrapper>
);

import { Outlet } from 'react-router-dom';
import { useState } from 'react';

import { LeftSidebar } from '@/Components/LeftSidebar';

import { Content, Wrapper } from './styled';

import { RightSidebar } from '../RightSidebar';
import { ThemeSwitcher } from '../ThemeSwitcher';

export const BasicLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Wrapper>
      <LeftSidebar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <Content className={isMenuOpen ? 'blur' : ''}>
        <ThemeSwitcher />
        <Outlet />
      </Content>

      <RightSidebar />
    </Wrapper>
  );
};

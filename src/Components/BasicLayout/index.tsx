import { Outlet } from 'react-router-dom';
import { useState } from 'react';

import { LeftSidebar } from '@/Components/LeftSidebar';
import { RightSidebar } from '@/Components/RightSidebar';
import { ThemeSwitcher } from '@/Components/ThemeSwitcher';

import { Content, OutletWrapper, PageHeader, Wrapper } from './styled';

export const BasicLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Wrapper>
      <LeftSidebar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <Content className={isMenuOpen ? 'blur' : ''}>
        <PageHeader>
          <ThemeSwitcher />
        </PageHeader>
        <OutletWrapper>
          <Outlet />
        </OutletWrapper>
      </Content>

      <RightSidebar />
    </Wrapper>
  );
};

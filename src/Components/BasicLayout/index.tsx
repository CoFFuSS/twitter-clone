import { Outlet } from 'react-router-dom';
import { useState } from 'react';

import { LeftSidebar } from '@/Components/LeftSidebar';
import { RightSidebar } from '@/Components/RightSidebar';
import { ThemeSwitcher } from '@/Components/ThemeSwitcher';

import {
  Content,
  HeaderContainer,
  OutletWrapper,
  PageHeader,
  SwitcherContainer,
  Wrapper,
} from './styled';

export const BasicLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Wrapper>
      <LeftSidebar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <Content className={isMenuOpen ? 'blur' : ''}>
        <HeaderContainer>
          <PageHeader>
            <SwitcherContainer>
              <ThemeSwitcher />
            </SwitcherContainer>
          </PageHeader>
        </HeaderContainer>

        <OutletWrapper>
          <Outlet />
        </OutletWrapper>
      </Content>

      <RightSidebar />
    </Wrapper>
  );
};

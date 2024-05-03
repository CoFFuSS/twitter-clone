import { Outlet, useLocation } from 'react-router-dom';
import { useState } from 'react';

import { LeftSidebar } from '@/Components/LeftSidebar';
import { RightSidebar } from '@/Components/RightSidebar';
import { ThemeSwitcher } from '@/Components/ThemeSwitcher';
import { collectionsWithPaths, searchFieldsInCollection } from '@/constants/collections';

import {
  Content,
  HeaderContainer,
  OutletWrapper,
  PageHeader,
  SwitcherContainer,
  Wrapper,
} from './styled';

export const BasicLayout = () => {
  const location = useLocation();
  const path = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const searchConfig = {
    collectionName: collectionsWithPaths[path] || collectionsWithPaths['/'],
    searchField: searchFieldsInCollection[path] || searchFieldsInCollection['/'],
  };

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

      <RightSidebar searchConfig={searchConfig} />
    </Wrapper>
  );
};

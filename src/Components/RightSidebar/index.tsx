import { SearchInput, SearchInputContainer, SearchSidebar } from './styled';

import { SearchIcon } from '../Icons/SearchIcon';

export const RightSidebar = () => (
  <SearchSidebar>
    <SearchInputContainer>
      <SearchIcon />
      <SearchInput placeholder='Search Twitter' />
    </SearchInputContainer>
  </SearchSidebar>
);

import { SearchInput, SearchInputContainer, SearchSidebar } from './styled';

export const RightSidebar = () => (
  <SearchSidebar>
    <SearchInputContainer>
      <SearchInput placeholder='Search Twitter' />
    </SearchInputContainer>
    <h1>Right</h1>
  </SearchSidebar>
);

import { ChangeEvent, memo, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { SearchIcon } from '@/Components/Icons/SearchIcon';
import { Collections } from '@/constants/collections';
import { useDebounce } from '@/hooks/useDebounce';
import { SearchedUserProps } from '@/types/common';
import { SearchedTweetProps } from '@/types/tweets';
import { ComponentByPath, componentsByPath } from '@/constants/getByPath';
import { useFetchData } from '@/hooks/useFetchData';

import { SearchInput, SearchInputContainer, SearchResult, SearchSidebar, Text } from './styled';

interface SearchConfig {
  collectionName: Collections;
  searchField: string;
}

interface RightSidebarProps {
  searchConfig: SearchConfig;
}

export const RightSidebar = memo(
  ({ searchConfig: { collectionName, searchField } }: RightSidebarProps) => {
    const location = useLocation();
    const [inputValue, setInputValue] = useState<string>('');
    const [items, setItems] = useState<SearchedTweetProps[] | SearchedUserProps[]>([]);
    const [debouncedInputValue] = useDebounce(inputValue, 500);
    useFetchData(setItems, debouncedInputValue, { collectionName, searchField });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    };

    return (
      <SearchSidebar>
        <SearchInputContainer>
          <SearchIcon />
          <SearchInput
            placeholder='Search Twitter'
            autoComplete='off'
            value={inputValue}
            onChange={handleInputChange}
          />
        </SearchInputContainer>
        <SearchResult>
          <Text>{debouncedInputValue ? 'Search results' : 'You might like'}</Text>
          {items?.map((item) => {
            const path = location.pathname as keyof ComponentByPath;
            const Component = componentsByPath[path] || componentsByPath['/'];

            return (
              <Component
                key={item.email}
                item={item as SearchedUserProps & SearchedTweetProps}
              />
            );
          })}
        </SearchResult>
      </SearchSidebar>
    );
  },
);

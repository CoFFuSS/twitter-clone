import { ChangeEvent, useEffect, useState } from 'react';
import { query, collection, where } from 'firebase/firestore';
import { useLocation } from 'react-router-dom';

import { SearchIcon } from '@/Components/Icons/SearchIcon';
import { Collections } from '@/constants/collections';
import { db } from '@/firebase';
import { fetchItems } from '@/utils/fetchData';
import { useDebounce } from '@/hooks/useDebounce';
import { SearchedUserProps } from '@/types/common';
import { SearchedTweetProps } from '@/types/tweets';
import profile from '@/assets/images/ProfileLogoExample.svg';
import { ComponentByPath, componentsByPath } from '@/constants/getByPath';

import { SearchInput, SearchInputContainer, SearchResult, SearchSidebar, Text } from './styled';

interface SearchConfig {
  collectionName: Collections;
  searchField: string;
}

interface RightSidebarProps {
  searchConfig: SearchConfig;
}

export const RightSidebar = ({
  searchConfig: { collectionName, searchField },
}: RightSidebarProps) => {
  const location = useLocation();
  const [inputValue, setInputValue] = useState<string>('');
  const [items, setItems] = useState<SearchedTweetProps[] | SearchedUserProps[]>([]);
  const [debouncedInputValue] = useDebounce(inputValue, 500);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!debouncedInputValue) {
        const dataQuery = query(collection(db, collectionName));

        try {
          const newItems = await fetchItems(
            dataQuery,
            collectionName === Collections.Users,
            profile,
            2,
          );

          setItems(newItems);
        } catch (error) {
          console.error('Error fetching data: ', error);
        }
      } else {
        const searchValue = debouncedInputValue.startsWith('@')
          ? debouncedInputValue.slice(1)
          : debouncedInputValue;

        const searchedFieldInFirebase = debouncedInputValue.startsWith('@') ? 'email' : searchField;
        const dataQuery = query(
          collection(db, collectionName),
          where(searchedFieldInFirebase, '>=', searchValue),
          where(searchedFieldInFirebase, '<=', `${searchValue}\uf8ff`),
        );

        try {
          const newItems = await fetchItems(
            dataQuery,
            collectionName === Collections.Users,
            profile,
          );

          setItems(newItems);
        } catch (error) {
          console.error('Error fetching data: ', error);
        }
      }
    };

    fetchData();
  }, [debouncedInputValue, location.pathname, collectionName, searchField]);

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
};

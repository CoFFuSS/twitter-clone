import { query, collection, where } from 'firebase/firestore';
import { Dispatch, SetStateAction, useEffect } from 'react';

import { Collections } from '@/constants/collections';
import { db } from '@/firebase';
import { fetchItems } from '@/utils/fetchData';
import { SearchedUserProps } from '@/types/common';
import { SearchedTweetProps } from '@/types/tweets';
import profile from '@/assets/images/ProfileLogoExample.svg';

interface SearchConfig {
  collectionName: Collections;
  searchField: string;
}

export const useFetchData = (
  setItems: Dispatch<SetStateAction<SearchedTweetProps[] | SearchedUserProps[]>>,
  debouncedInputValue: string,
  { collectionName, searchField }: SearchConfig,
) => {
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
  }, [debouncedInputValue, collectionName, searchField, setItems]);
};

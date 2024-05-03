import { DocumentData, getDocs, Query } from 'firebase/firestore';

import { SearchedUserProps } from '@/types/common';
import { SearchedTweetProps } from '@/types/tweets';

export const fetchItems = async (
  dataQuery: Query<DocumentData>,
  isProfile: boolean,
  profile: string,
  limit?: number,
): Promise<SearchedTweetProps[] | SearchedUserProps[]> => {
  try {
    const querySnapshot = await getDocs(dataQuery);
    let newItems: SearchedTweetProps[] | SearchedUserProps[] = [];

    if (isProfile) {
      newItems = querySnapshot.docs.map((doc) => {
        const data = doc.data() as SearchedUserProps;

        return { ...data, photoURL: profile } satisfies SearchedUserProps;
      });
    } else {
      newItems = querySnapshot.docs.map((doc) => {
        const { email, name, createdAt, content } = doc.data();
        const { id } = doc;

        return { email, name, createdAt, content, id } satisfies SearchedTweetProps;
      });
    }

    if (limit) {
      newItems = newItems.slice(0, limit);
    }

    return newItems;
  } catch (error) {
    console.error('Error fetching data: ', error);

    return [];
  }
};

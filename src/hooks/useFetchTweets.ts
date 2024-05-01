import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import { TweetsArrayProps } from '@/types/tweets';
import { Collections } from '@/constants/collections';
import { db } from '@/firebase';

export const useFetchTweets = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [tweets, setTweets] = useState<Omit<TweetsArrayProps, 'myEmail'>[]>([]);

  useEffect(() => {
    setIsLoading(true);
    const tweetsCollection = collection(db, Collections.Posts);
    const tweetQueue = query(tweetsCollection, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(tweetQueue, (snapshot) => {
      const tweetsList = snapshot.docs.map((doc) => ({
        id: doc.id,
        tweet: doc.data(),
      })) as unknown as Omit<TweetsArrayProps, 'myEmail'>[];

      setTweets(tweetsList);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [setIsLoading, setTweets]);

  return [tweets, isLoading] as const;
};

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';

import { TweetProps } from '@/types/tweets';
import { Collections } from '@/constants/collections';
import { db } from '@/firebase';

export const useFetchSpecificTweet = () => {
  const [tweet, setTweet] = useState<TweetProps | null>(null);
  const { id } = useParams();

  useEffect(() => {
    // eslint-disable-next-line consistent-return
    const getTweet = async () => {
      if (!id) return null;
      const tweetDoc = doc(db, Collections.Posts, id);
      const tweetSnapshot = await getDoc(tweetDoc);

      if (tweetSnapshot.exists()) {
        setTweet(tweetSnapshot.data() as TweetProps);
      } else {
        console.error('There is no tweet with that id');
      }
    };

    getTweet();
  }, [id]);

  return tweet;
};

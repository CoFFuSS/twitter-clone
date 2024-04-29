import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';

import { Tweet } from '@/Components/Tweet';
import { db } from '@/firebase';
import { Collections } from '@/constants/collections';
import { TweetProps } from '@/types/tweets';
import { useAppSelector } from '@/hooks/redux';
import { selectUser } from '@/store/selectors';

export const TweetPage = () => {
  const [tweet, setTweet] = useState<TweetProps | null>(null);
  const { email } = useAppSelector(selectUser);
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

  return tweet ? (
    <Tweet
      id={id!}
      tweet={tweet}
      myEmail={email}
    />
  ) : (
    <>Loading...</>
  );
};

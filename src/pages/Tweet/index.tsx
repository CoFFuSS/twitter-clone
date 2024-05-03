import { useParams } from 'react-router-dom';
import { memo } from 'react';

import { Tweet } from '@/Components/Tweet';
import { useAppSelector } from '@/hooks/redux';
import { selectUser } from '@/store/selectors';
import { useFetchSpecificTweet } from '@/hooks/useFetchSpecificTweet';

export const TweetPage = memo(() => {
  const [tweet] = useFetchSpecificTweet();
  const { id } = useParams();
  const { email } = useAppSelector(selectUser);

  return tweet ? (
    <Tweet
      id={id!}
      tweet={tweet}
      myEmail={email}
    />
  ) : (
    <>Loading...</>
  );
});

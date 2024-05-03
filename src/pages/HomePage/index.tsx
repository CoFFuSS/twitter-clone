import { useSelector } from 'react-redux';

import { TweetInputContainer } from '@/Components/TweetInputContainer';
import { useFetchTweets } from '@/hooks/useFetchTweets';
import { Tweet } from '@/Components/Tweet';
import { selectUser } from '@/store/selectors';

import { Wrapper } from './styled';

export const HomePage = () => {
  const { email } = useSelector(selectUser);
  const [tweets, isLoading] = useFetchTweets();

  return (
    <Wrapper>
      <TweetInputContainer />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        tweets.map(({ id, tweet }) => (
          <Tweet
            key={id}
            myEmail={email}
            id={id}
            tweet={tweet}
          />
        ))
      )}
    </Wrapper>
  );
};

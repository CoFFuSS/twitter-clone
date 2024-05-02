import { useNavigate } from 'react-router-dom';

import { SearchedTweetProps } from '@/types/tweets';
import { getUserAddress } from '@/utils/getUserAddress';

import { Container, Content, Header, SubText, Text } from './styled';

export const SearchedTweet = ({ item }: { item: SearchedTweetProps }) => {
  const { name, email, content, id } = item;
  const navigate = useNavigate();

  const navigateToTweetPage = (tweetId: string) => () => {
    navigate(`/tweet/${tweetId}`);
  };

  return (
    <Container>
      <Header>
        <Text>{name}</Text>
        <SubText>{getUserAddress(email)}</SubText>
      </Header>
      <Content onClick={navigateToTweetPage(id)}>{content}</Content>
    </Container>
  );
};

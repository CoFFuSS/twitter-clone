import { doc, updateDoc } from 'firebase/firestore';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import profileLogo from '@/assets/images/ProfileLogoExample.svg';
import { getUserAddress } from '@/utils/getUserAddress';
import { formatDate } from '@/utils/formatDate';
import like from '@/assets/images/like.svg';
import likeFill from '@/assets/images/likeFill.svg';
import { db } from '@/firebase';
import { Collections } from '@/constants/collections';
import { isLikedByMe } from '@/utils/isLikedByMe';
import { useDownloadImage } from '@/hooks/useDownloadImage';
import { TweetsArrayProps } from '@/types/tweets';

import {
  Wrapper,
  Container,
  TweetHeader,
  TweetName,
  Content,
  ProfileImage,
  TweetSubInfo,
  TweetRow,
  LikesContainer,
  LikesImage,
  ProfileImageContainer,
} from './styled';

export const Tweet = ({
  tweet: { name, email, createdAt, content, image, likes, likingUsers },
  id,
  myEmail,
}: TweetsArrayProps) => {
  const [isLiking, setIsLiking] = useState(false);
  const [currentLikes, setCurrentLikes] = useState(likes);
  const [isLiked, setIsLiked] = useState(() => isLikedByMe(likingUsers, myEmail));
  const navigate = useNavigate();
  const [imageURL] = useDownloadImage(image);

  const handleLikeChange = async () => {
    setIsLiking(true);
    const tweetRef = doc(db, Collections.Posts, id);

    if (isLiked) {
      try {
        await updateDoc(tweetRef, {
          likes: currentLikes - 1,
          likingUsers: likingUsers.filter((likingUserEmail) => likingUserEmail !== myEmail),
        });

        setCurrentLikes((prevLikes) => prevLikes - 1);
        setIsLiked(false);
      } catch (e) {
        const error = e as Error;
        console.error(error);
      }
    } else {
      try {
        await updateDoc(tweetRef, {
          likes: currentLikes + 1,
          likingUsers: [...likingUsers, myEmail],
        });

        setCurrentLikes((prevLikes) => prevLikes + 1);
        setIsLiked(true);
      } catch (e) {
        const error = e as Error;
        console.error(error);
      }
    }

    setIsLiking(false);
  };

  const navigateToTweet = (tweetId: string) => () => {
    navigate(`/tweet/${tweetId}`);
  };

  return (
    <Wrapper>
      <Container>
        <ProfileImageContainer>
          <ProfileImage
            src={profileLogo}
            alt='profile logo'
          />
        </ProfileImageContainer>
        <Content>
          <TweetHeader>
            <TweetName>{name}</TweetName>
            <TweetSubInfo>{getUserAddress(email)}</TweetSubInfo>
            <TweetSubInfo>{createdAt && formatDate(createdAt)}</TweetSubInfo>
          </TweetHeader>
          <TweetRow onClick={navigateToTweet(id)}>{content}</TweetRow>
          <TweetRow>
            {image && (
              <img
                src={imageURL}
                alt='tweet'
              />
            )}
          </TweetRow>
          <TweetRow>
            <LikesContainer>
              <LikesImage
                src={isLiked ? likeFill : like}
                alt='like'
                onClick={isLiking ? undefined : handleLikeChange}
              />
              <TweetSubInfo>{likes}</TweetSubInfo>
            </LikesContainer>
          </TweetRow>
        </Content>
      </Container>
    </Wrapper>
  );
};

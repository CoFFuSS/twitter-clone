import { Timestamp, doc, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDownloadURL, ref } from 'firebase/storage';

import profileLogo from '@/assets/images/ProfileLogoExample.svg';
import { getUserAddress } from '@/utils/getUserAddress';
import { formatDate } from '@/utils/formatDate';
import like from '@/assets/images/like.svg';
import likeFill from '@/assets/images/likeFill.svg';
import { db, storage } from '@/firebase';
import { Collections } from '@/constants/collections';
import { isLikedByMe } from '@/utils/isLikedByMe';

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
} from './styled';

export interface TweetProps {
  name: string;
  email: string;
  createdAt: Timestamp;
  content: string;
  image: string;
  likes: number;
  likingUsers: string[];
}

export interface TweetsArrayProps {
  tweet: TweetProps;
  id: string;
  myEmail: string;
}

export const Tweet = ({
  tweet: { name, email, createdAt, content, image, likes, likingUsers },
  id,
  myEmail,
}: TweetsArrayProps) => {
  const [isLiking, setIsLiking] = useState(false);
  const [currentLikes, setCurrentLikes] = useState(likes);
  const [isLiked, setIsLiked] = useState(() => isLikedByMe(likingUsers, myEmail));
  const [imageURL, setImageURL] = useState('');
  const navigate = useNavigate();

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

  useEffect(() => {
    const getImageUrl = async () => {
      if (image) {
        const url = await getDownloadURL(ref(storage, image));
        setImageURL(url);
      }
    };

    getImageUrl();
  }, [image]);

  const navigateToTweet = (tweetId: string) => () => {
    navigate(`/tweet/${tweetId}`);
  };

  return (
    <Wrapper>
      <Container>
        <ProfileImage
          src={profileLogo}
          alt='profile logo'
        />
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

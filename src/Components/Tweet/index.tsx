import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { memo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

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
import threeDots from '@/assets/images/threeDots.svg';
import { useHandleOutsideClick } from '@/hooks/useHandleOutsideClick';

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
  TweetOptions,
  PopupMenu,
  TweetInfo,
  DeleteTweet,
  Text,
} from './styled';

export const Tweet = memo(
  ({
    tweet: { name, email, createdAt, content, image, likes, likingUsers },
    id,
    myEmail,
  }: TweetsArrayProps) => {
    const [isLiking, setIsLiking] = useState(false);
    const [currentLikes, setCurrentLikes] = useState(likes);
    const [isLiked, setIsLiked] = useState(() => isLikedByMe(likingUsers, myEmail));
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [imageURL] = useDownloadImage(image);
    const [menuRef] = useHandleOutsideClick(setIsMenuOpen);
    const navigate = useNavigate();
    const params = useParams();

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

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

    const handleDelete = async () => {
      const tweetRef = doc(db, Collections.Posts, id);

      try {
        await deleteDoc(tweetRef);

        if (params.id) {
          navigate('/');
        }
      } catch (e) {
        const error = e as Error;
        console.error(error);
      }
    };

    const navigateToTweet = (tweetId: string) => () => {
      navigate(`/tweet/${tweetId}`);
    };

    return (
      <Wrapper>
        <Container ref={menuRef}>
          <ProfileImageContainer>
            <ProfileImage
              src={profileLogo}
              alt='profile logo'
            />
          </ProfileImageContainer>
          <Content>
            <TweetHeader>
              <TweetInfo>
                <TweetName>{name}</TweetName>
                <TweetSubInfo>{getUserAddress(email)}</TweetSubInfo>
                <TweetSubInfo>{createdAt && formatDate(createdAt)}</TweetSubInfo>
              </TweetInfo>

              <TweetOptions onClick={toggleMenu}>
                <img
                  src={threeDots}
                  alt='more'
                />
                <PopupMenu isOpen={isMenuOpen}>
                  <DeleteTweet
                    onClick={handleDelete}
                    type='submit'
                  >
                    Delete Tweet
                  </DeleteTweet>
                </PopupMenu>
              </TweetOptions>
            </TweetHeader>
            <TweetRow onClick={navigateToTweet(id)}>
              <Text>{content}</Text>
            </TweetRow>
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
  },
);

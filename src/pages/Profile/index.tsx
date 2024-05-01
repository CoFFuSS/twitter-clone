import { useEffect, useState } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';

import ProfileBg from '@/assets/images/ProfileBg.jpg';
import { useAppSelector } from '@/hooks/redux';
import { selectUser } from '@/store/selectors';
import { getUserAddress } from '@/utils/getUserAddress';
import ProfileLogo from '@/assets/images/ProfileLogoExample.svg';
import { TweetInputContainer } from '@/Components/TweetInputContainer';
import { Tweet } from '@/Components/Tweet';
import { Collections } from '@/constants/collections';
import { db } from '@/firebase';
import { TweetsArrayProps } from '@/types/tweets';
import { ProfileModal } from '@/Components/ProfileModal';
import { useToggleModal } from '@/hooks/useToggleModal';

import {
  Background,
  BackgroundContainer,
  AddressInfo,
  ProfileDescription,
  ProfileInfo,
  ProfileLogoContainer,
  ProfileName,
  DefaultText,
  ProfileLink,
  FollowersBlock,
  FollowersInfo,
  Wrapper,
  TweetsSection,
  TweetsTitle,
  NameContainer,
  ModalButtonContainer,
  ModalButton,
} from './styled';

export const ProfilePage = () => {
  const { name, email } = useAppSelector(selectUser);
  const [tweets, setTweets] = useState<Omit<TweetsArrayProps, 'myEmail'>[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isShown, toggle] = useToggleModal();

  const filteredTweets = tweets.filter(({ tweet }) => tweet.email === email);

  // useFetchProfileTweets
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
  }, []);

  return (
    <>
      <Wrapper>
        <ProfileDescription>
          <BackgroundContainer>
            <Background
              src={ProfileBg}
              alt='profile background'
            />
          </BackgroundContainer>
          <ProfileInfo>
            <ProfileLogoContainer>
              <img
                src={ProfileLogo}
                alt='profile logo'
              />
            </ProfileLogoContainer>
            <NameContainer>
              <ProfileName>{name}</ProfileName>
              <ModalButtonContainer>
                <ModalButton
                  onClick={toggle}
                  type='submit'
                >
                  Edit profile
                </ModalButton>
              </ModalButtonContainer>
            </NameContainer>
            <AddressInfo>{getUserAddress(email)}</AddressInfo>
            <DefaultText>
              UX&UI designer at <ProfileLink>@abutechuz</ProfileLink>
            </DefaultText>
            <FollowersBlock>
              <FollowersInfo>
                67 <span>Following</span>
              </FollowersInfo>
              <FollowersInfo>
                67 <span>Followers</span>
              </FollowersInfo>
            </FollowersBlock>
          </ProfileInfo>
        </ProfileDescription>
        <TweetInputContainer />
        <TweetsSection>
          <TweetsTitle>Tweets</TweetsTitle>
        </TweetsSection>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          filteredTweets.map(({ id, tweet }) => (
            <Tweet
              key={id}
              myEmail={email}
              id={id}
              tweet={tweet}
            />
          ))
        )}
      </Wrapper>
      <ProfileModal
        isShown={isShown}
        hide={toggle}
      />
    </>
  );
};

import { useMemo } from 'react';

import ProfileBg from '@/assets/images/ProfileBg.jpg';
import { useAppSelector } from '@/hooks/redux';
import { selectUser } from '@/store/selectors';
import { getUserAddress } from '@/utils/getUserAddress';
import ProfileLogo from '@/assets/images/ProfileLogoExample.svg';
import { TweetInputContainer } from '@/Components/TweetInputContainer';
import { Tweet } from '@/Components/Tweet';
import { ProfileModal } from '@/Components/ProfileModal';
import { useToggleModal } from '@/hooks/useToggleModal';
import { useFetchTweets } from '@/hooks/useFetchTweets';

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
  const [isShown, toggle] = useToggleModal();
  const [tweets, isLoading] = useFetchTweets();

  const filteredTweets = useMemo(
    () => tweets.filter(({ tweet }) => tweet.email === email),
    [email, tweets],
  );

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

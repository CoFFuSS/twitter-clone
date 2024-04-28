import ProfileBg from '@/assets/images/ProfileBg.jpg';
import { useAppSelector } from '@/hooks/redux';
import { selectUser } from '@/store/selectors';
import { getUserAddress } from '@/utils/getUserAddress';
import ProfileLogo from '@/assets/images/ProfileLogoExample.svg';
import { TweetInputContainer } from '@/Components/TweetInputContainer';

import {
  Background,
  BackgroundContainer,
  AddressInfo,
  ProfileDescription,
  ProfileInfo,
  ProfileLogoContainer,
  ProfileName,
  DescriptionText,
  ProfileLink,
  FollowersBlock,
  FollowersInfo,
  Wrapper,
} from './styled';

export const ProfilePage = () => {
  const { name, email } = useAppSelector(selectUser);

  return (
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
          <ProfileName>{name}</ProfileName>
          <AddressInfo>{getUserAddress(email)}</AddressInfo>
          <DescriptionText>
            UX&UI designer at <ProfileLink>@abutechuz</ProfileLink>
          </DescriptionText>
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
    </Wrapper>
  );
};

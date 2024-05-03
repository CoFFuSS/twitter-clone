import { getUserAddress } from '@/utils/getUserAddress';
import { SearchedUserProps } from '@/types/common';

import {
  SidebarLogoContainer,
  ProfileInfoContainer,
  ProfileName,
  ProfileAddress,
  Wrapper,
  FollowButtonContainer,
  FollowButton,
} from './styled';

export const ProfileContainer = ({ item }: { item: SearchedUserProps }) => {
  const { name, email, photoURL } = item;

  return (
    <Wrapper>
      <SidebarLogoContainer>
        <img
          src={photoURL}
          alt='Profile Logo'
        />
      </SidebarLogoContainer>
      <ProfileInfoContainer>
        <ProfileName>{name}</ProfileName>
        <ProfileAddress>{getUserAddress(email)}</ProfileAddress>
      </ProfileInfoContainer>
      <FollowButtonContainer>
        <FollowButton>Follow</FollowButton>
      </FollowButtonContainer>
    </Wrapper>
  );
};

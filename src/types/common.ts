export type Path = '/' | '/profile';

export interface UserState {
  token: string;
  name: string;
  phone: string;
  email: string;
  birthday: string;
  id: string;
}

export type SearchedUserProps = Omit<UserState, 'token'> & { photoURL: string };

export interface ProfileContainerProps {
  name: string;
  email: string;
  profileLogo: string;
}

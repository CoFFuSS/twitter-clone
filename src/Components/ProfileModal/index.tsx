import { createPortal } from 'react-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { collection, getDocs, query, updateDoc, where } from 'firebase/firestore';
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updateEmail,
  verifyBeforeUpdateEmail,
} from 'firebase/auth';

import { TypeProfile, profileSchema } from '@/utils/profileFormSchema';
import { profileInputs } from '@/constants/profileFormInputs';
import { auth, db, logout } from '@/firebase';
import { Collections } from '@/constants/collections';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectUser } from '@/store/selectors';
import { updateUser } from '@/store/slices/userSlice';
import { InputField } from '@/Components/Input/styled';
import { DefaultButton } from '@/Components/Button/styled';
import { tweetFieldsToUpdate, userFieldsToUpdate } from '@/constants/profileModalFieldsToUpdate';

import {
  Backdrop,
  Wrapper,
  HeaderText,
  CloseButton,
  Content,
  Header,
  InfoContainer,
  ModalWindow,
  InputWrapper,
  SubmitButtonContainer,
} from './styled';

interface ProfileModalProps {
  isShown: boolean;
  hide: () => void;
}

export const ProfileModal = ({ isShown, hide }: ProfileModalProps) => {
  const { id, email } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TypeProfile>({
    resolver: zodResolver(profileSchema),
    mode: 'onChange',
  });

  const handleClose = () => {
    hide();
  };

  const onSubmit = async (data: TypeProfile) => {
    try {
      const userQuery = query(collection(db, Collections.Users), where('id', '==', id));
      const userSnapshot = await getDocs(userQuery);

      if (userSnapshot.empty) {
        console.error('Nu user');

        return;
      }

      const tweetQuery = query(collection(db, Collections.Posts), where('email', '==', email));
      const tweetSnapshot = await getDocs(tweetQuery);

      const userDocRef = userSnapshot.docs[0].ref;

      const updatedDataForUsers: Partial<TypeProfile> = {};
      const updatedDataForTweets: Partial<TypeProfile> = {};

      userFieldsToUpdate.forEach((field) => {
        if (data[field] && field !== 'password') {
          updatedDataForUsers[field] = data[field];
        }
      });

      tweetFieldsToUpdate.forEach((field) => {
        if (data[field]) {
          updatedDataForTweets[field] = data[field];
        }
      });

      await tweetSnapshot.forEach((doc) => {
        updateDoc(doc.ref, { ...doc.data, ...updatedDataForTweets });
      });

      await updateDoc(userDocRef, updatedDataForUsers);

      const user = auth.currentUser;
      auth.currentUser?.reload();
      dispatch(updateUser(updatedDataForUsers));

      if (user !== null && updatedDataForUsers.email) {
        if (user.email === null || data.password === undefined) {
          return;
        }

        await verifyBeforeUpdateEmail(user, updatedDataForUsers.email);
        const credential = EmailAuthProvider.credential(user.email, data.password);
        await reauthenticateWithCredential(user, credential);
        await logout();
        await updateEmail(user, updatedDataForUsers.email);
      }
    } catch (error) {
      console.error(error);
    } finally {
      reset();
      hide();
    }
  };

  return (
    isShown &&
    createPortal(
      <>
        <Backdrop />
        <Wrapper>
          <ModalWindow
            isShown={isShown}
            data-test-id='profile-modal'
          >
            <Header>
              <HeaderText>Change User data</HeaderText>
              <CloseButton
                onClick={handleClose}
                data-test-id='close-button'
              >
                X
              </CloseButton>
            </Header>
            <Content>
              <InfoContainer onSubmit={handleSubmit(onSubmit)}>
                {profileInputs.map(({ placeholder, type, name }) => (
                  <InputWrapper key={name}>
                    <InputField
                      {...register(name)}
                      placeholder={placeholder}
                      type={type}
                      name={name}
                    />
                    {errors[name] && <p>{errors[name]?.message}</p>}
                  </InputWrapper>
                ))}
                <SubmitButtonContainer>
                  <DefaultButton>Change user data</DefaultButton>
                </SubmitButtonContainer>
              </InfoContainer>
            </Content>
          </ModalWindow>
        </Wrapper>
      </>,
      document.body,
    )
  );
};

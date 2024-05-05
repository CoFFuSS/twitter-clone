import { collection, getDocs, query, where } from 'firebase/firestore';

import { Collections } from '@/constants/collections';
import { db, signin } from '@/firebase';

export const getUserData = async (isPhoneValid: boolean, identifier: string, password: string) => {
  const usersCollections = collection(db, Collections.Users);
  const user = query(
    usersCollections,
    isPhoneValid ? where('phone', '==', identifier) : where('email', '==', identifier),
  );

  const querySnapshot = await getDocs(user);

  if (!querySnapshot.empty) {
    const userData = querySnapshot.docs[0].data();
    const userCredentials = await signin(identifier, password);
    const token = await userCredentials.user.getIdToken();

    return { userData, token };
  }

  return null;
};

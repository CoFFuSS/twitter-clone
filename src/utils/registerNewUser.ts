import { addDoc, collection } from 'firebase/firestore';

import { db, register } from '@/firebase';
import { Collections } from '@/constants/collections';

export const registerNewUser = async (
  name: string,
  phone: string,
  email: string,
  password: string,
  birthDay: string,
) => {
  const userCredentials = await register(email, password);
  const token = await userCredentials.user.getIdToken();
  const newUserData = {
    name,
    phone,
    email,
    birthDay,
    id: userCredentials.user.uid,
  };

  await addDoc(collection(db, Collections.Users), newUserData);

  return { userData: { ...newUserData, token } };
};

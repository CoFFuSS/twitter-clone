import { addDoc, collection } from 'firebase/firestore';

import { db, register } from '@/firebase';
import { Collections } from '@/constants/collections';

interface NewUserProps {
  name: string;
  phone: string;
  email: string;
  password: string;
  birthDay: string;
}

export const registerNewUser = async ({ name, phone, email, password, birthDay }: NewUserProps) => {
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

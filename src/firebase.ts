import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { getDocs, getFirestore, query, where, collection, addDoc } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { NavigateFunction } from 'react-router-dom';

import { UserState } from '@/types/common';

import { RoutesEnum } from './constants/routesEnum';
import { Collections } from './constants/collections';
import { AppDispatch } from './store';
import { setUser } from './store/slices/userSlice';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);

export const register = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

export const signin = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async (navigate: NavigateFunction, dispatch: AppDispatch) => {
  try {
    const response = await signInWithPopup(auth, provider);
    const { user } = response;
    const name = user.displayName;
    const { uid, email, phoneNumber } = user;
    const userData = { name, id: uid, email, phone: phoneNumber, birthday: '' };
    const userQuery = query(collection(db, Collections.Users), where('id', '==', uid));
    const queryResponse = await getDocs(userQuery);

    if (!queryResponse.empty) {
      const token = await user.getIdToken();
      navigate(RoutesEnum.Home);
      dispatch(setUser({ ...(userData as UserState), token }));
    } else {
      await addDoc(collection(db, Collections.Users), userData);
      const token = await user.getIdToken();
      navigate(RoutesEnum.Home);
      dispatch(setUser({ ...(userData as UserState), token }));
    }
  } catch (error) {
    console.error(error);
  }
};

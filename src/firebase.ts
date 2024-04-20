import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBtlZeOtqik5T8ISwtz57HlkLds15XPnSI',
  authDomain: 'twitter-clone-beab9.firebaseapp.com',
  projectId: 'twitter-clone-beab9',
  storageBucket: 'twitter-clone-beab9.appspot.com',
  messagingSenderId: '1066814977764',
  appId: '1:1066814977764:web:1d2baad944d1a0bd555ef1',
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

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider);
};

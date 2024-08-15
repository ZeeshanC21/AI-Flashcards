// /lib/firebase.js
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { GoogleAuthProvider } from 'firebase/auth';

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDTpMTcybZvoyPt2p9IB4iZ9riS_c1g7Q4",
  authDomain: "ai-flashcards-3d517.firebaseapp.com",
  projectId: "ai-flashcards-3d517",
  storageBucket: "ai-flashcards-3d517.appspot.com",
  messagingSenderId: "947104580648",
  appId: "1:947104580648:web:55dfd6045e82b719b0e11d",
  measurementId: "G-7E1FLG7JBR"
};

// Initialize Firebase app only if it has not been initialized
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();

export { app, firestore, auth, storage, googleProvider };

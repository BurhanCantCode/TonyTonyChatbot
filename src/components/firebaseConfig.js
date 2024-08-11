import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyClXafSt9ea7QjXLOaHl2-9Yk3B9lDY1p0",
  authDomain: "wingman-ai-3fe74.firebaseapp.com",
  projectId: "wingman-ai-3fe74",
  storageBucket: "wingman-ai-3fe74.appspot.com",
  messagingSenderId: "957485999597",
  appId: "1:957485999597:web:97a4b9924ca0e9abd933e4",
  measurementId: "G-4N4LFN2PSK"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

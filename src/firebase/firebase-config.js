import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDzmuEOMDP1YZC5XJqXq6RI3oqAI7UkEO0",
  authDomain: "tagify-f19c3.firebaseapp.com",
  projectId: "tagify-f19c3",
  storageBucket: "tagify-f19c3.firebasestorage.app",
  messagingSenderId: "464924761674",
  appId: "1:464924761674:web:93242ea98019fdcff910b3"
};

export const app = initializeApp(firebaseConfig);
export const FirebaeAuth = getAuth(app);

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBxLWbvBqm6U16nksSI3xf0o2t_a6x7gJM",
  authDomain: "mayoeterno-e99d9.firebaseapp.com",
  projectId: "mayoeterno-e99d9",
  storageBucket: "mayoeterno-e99d9.appspot.com",
  messagingSenderId: "560011183761",
  appId: "1:560011183761:web:a70648aeecdad9c7c22130",
  measurementId: "G-7ZF1PPC16K"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

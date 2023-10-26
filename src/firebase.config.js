import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2OC_GEGY06sekuYFyOXNAUhPaBHLtOHk",
  authDomain: "house-marketplace-4e186.firebaseapp.com",
  projectId: "house-marketplace-4e186",
  storageBucket: "house-marketplace-4e186.appspot.com",
  messagingSenderId: "995602511240",
  appId: "1:995602511240:web:37ba19a2c6985ae8da363d",
};

// eslint-disable-next-line
const app = initializeApp(firebaseConfig);

export const db = getFirestore();

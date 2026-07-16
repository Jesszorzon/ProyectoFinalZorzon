import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvk3h6AH-dvzKqhw-j-mL_CBMeqA6Au3Y",
  authDomain: "minimarket-react.firebaseapp.com",
  projectId: "minimarket-react",
  storageBucket: "minimarket-react.firebasestorage.app",
  messagingSenderId: "640239508571",
  appId: "1:640239508571:web:c5e585705a0a2d4c0c337e",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
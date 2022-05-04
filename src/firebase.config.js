import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  projectId: "react-blog-7f96b",
  storageBucket: "react-blog-7f96b.appspot.com",
  messagingSenderId: "1011772798862",
  appId: "1:1011772798862:web:8b53b008758da1391556df",
};

const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

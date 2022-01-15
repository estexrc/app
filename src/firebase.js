import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBidn7k6hvDFpfzH9cEx01u_b4pGB1AGh0",
  authDomain: "reactcoderhouse-f064c.firebaseapp.com",
  projectId: "reactcoderhouse-f064c",
  storageBucket: "reactcoderhouse-f064c.appspot.com",
  messagingSenderId: "540769717339",
  appId: "1:540769717339:web:6ed0d8d0c450b443d9037e",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

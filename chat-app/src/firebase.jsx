import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJB1GfnLI2DWrvyNf8t8A2i8wwEufm1hQ",
  authDomain: "chat-app-c56a7.firebaseapp.com",
  projectId: "chat-app-c56a7",
  storageBucket: "chat-app-c56a7.appspot.com",
  messagingSenderId: "145220611318",
  appId: "1:145220611318:web:ecde04d1a3c027db9810d7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
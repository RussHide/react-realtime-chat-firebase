// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg6G4p6wGygI3ClmOZbzdBCt_-zEcZuW8",
  authDomain: "react-chat-4321b.firebaseapp.com",
  projectId: "react-chat-4321b",
  storageBucket: "react-chat-4321b.appspot.com",
  messagingSenderId: "793015804943",
  appId: "1:793015804943:web:7c2140c2ebb7336f492f7a"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "next-blog-572a4.firebaseapp.com",
  projectId: "next-blog-572a4",
  storageBucket: "next-blog-572a4.firebasestorage.app",
  messagingSenderId: "219142397991",
  appId: "1:219142397991:web:83ef8cdff33be7cd0eae02",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

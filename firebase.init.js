// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGoad0pMIyGhWI9U9-WHptBq7i-p64KEc",
  authDomain: "gardeners-user-auth.firebaseapp.com",
  projectId: "gardeners-user-auth",
  storageBucket: "gardeners-user-auth.firebasestorage.app",
  messagingSenderId: "52963990061",
  appId: "1:52963990061:web:0d5fa7637b14be836e36a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
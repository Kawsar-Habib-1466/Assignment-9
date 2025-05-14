// src/firebase/firebase.config.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from 'firebase/auth'; // ✅ THIS is missing!

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf1DBFwMu3o3Wf32OzLXO0OwaXcyALNek",
  authDomain: "appstore-a50e9.firebaseapp.com",
  projectId: "appstore-a50e9",
  storageBucket: "appstore-a50e9.firebasestorage.app",
  messagingSenderId: "1057569021359",
  appId: "1:1057569021359:web:002ade39c64b627417235a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

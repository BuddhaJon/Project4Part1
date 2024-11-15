import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxdLjcnRZN65rHD8BmK3gkfbRrIH97juo",
    authDomain: "quasartodolist-3ab3d.firebaseapp.com",
    projectId: "quasartodolist-3ab3d",
    storageBucket: "quasartodolist-3ab3d.firebasestorage.app",
    messagingSenderId: "703881458523",
    appId: "1:703881458523:web:b063d28eb9a4b0e128a07e",
    measurementId: "G-0C9BGLE56Z"
  };

// Initialize Firebase
const db = firebase.initializeApp(firebaseConfig);
export default db.firestore();

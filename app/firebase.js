// src/firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBncvWuEhQC_jfnFP0gdk0rP9X2cwCEhH0",
    authDomain: "cloudclient-75894.firebaseapp.com",
    projectId: "cloudclient-75894",
    storageBucket: "cloudclient-75894.appspot.com",
    messagingSenderId: "658769715312",
    appId: "1:658769715312:web:daec6fe54e3be8e263d4b5"
  };

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

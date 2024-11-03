import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore, collection, addDoc, doc, setDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAZQ92YqE_G1uBCDNN-jm8zuj2Cob5luss",
  authDomain: "react-auth-9ac91.firebaseapp.com",
  projectId: "react-auth-9ac91",
  storageBucket: "react-auth-9ac91.appspot.com",
  messagingSenderId: "661586686220",
  appId: "1:661586686220:web:afadc7b1abb396ed35d929",
  measurementId: "G-K4LYYEEKRQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app); // Pass the app instance to getAuth
export const db = getFirestore(app);

// Export necessary functions and constants
export { createUserWithEmailAndPassword, signInWithEmailAndPassword, collection, addDoc, doc, setDoc, onSnapshot };

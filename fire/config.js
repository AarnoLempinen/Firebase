// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection,addDoc,serverTimestamp } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxQR5nNmvFpTZEBH72j0l33Vo0isUQGqM",
  authDomain: "fir-d3175.firebaseapp.com",
  projectId: "fir-d3175",
  storageBucket: "fir-d3175.appspot.com",
  messagingSenderId: "688768350104",
  appId: "1:688768350104:web:6424c07f1bda9dbdaf9ded"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore();

const MESSAGES = 'messages';

export {
    firestore,
    collection,
    addDoc,
    serverTimestamp,
    MESSAGES
};
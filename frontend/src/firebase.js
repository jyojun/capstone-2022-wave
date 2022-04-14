import { initializeApp } from "firebase/compat/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtjohvldgPh-qMgsNHigTpSqIUUH5A4iA",
  authDomain: "pecus-10cfa.firebaseapp.com",
  projectId: "pecus-10cfa",
  storageBucket: "pecus-10cfa.appspot.com",
  messagingSenderId: "171612033934",
  appId: "1:171612033934:web:2ca62483b3813241c84adf",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

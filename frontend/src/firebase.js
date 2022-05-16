import { initializeApp } from "firebase/compat/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
const config = require("./config/key.js");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: config.REACT_APP_FIREBASE_APIKEY,
  authDomain: config.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: config.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: config.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: config.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: config.REACT_APP_FIREBASE_APPID,
};

console.log(process.env.REACT_APP_FIREBASE_APIKEY);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

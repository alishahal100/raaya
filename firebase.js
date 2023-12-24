// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-NfmgqCVHJFXj_w73pidm_mlHtjxbf5g",
  authDomain: "roya-9998c.firebaseapp.com",
  projectId: "roya-9998c",
  storageBucket: "roya-9998c.appspot.com",
  messagingSenderId: "650352419425",
  appId: "1:650352419425:web:cff458c0270f6e60590020",
  measurementId: "G-KHT1WWNHKS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgIplBNrW1yIss_I78EzMjXQwgdD747vw",
  authDomain: "anjos-f09f0.firebaseapp.com",
  projectId: "anjos-f09f0",
  storageBucket: "anjos-f09f0.appspot.com",
  messagingSenderId: "497800403642",
  appId: "1:497800403642:web:f7be16433cfbcaf5814083",
  measurementId: "G-QKBG2TNBCS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
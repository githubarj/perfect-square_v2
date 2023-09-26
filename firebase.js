// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDvqAFjnqMLanUQN0xjeiwT_1Dq7yzXSQI",
  authDomain: "perfect-square-f25b4.firebaseapp.com",
  projectId: "perfect-square-f25b4",
  storageBucket: "perfect-square-f25b4.appspot.com",
  messagingSenderId: "773897576491",
  appId: "1:773897576491:web:6377f65038063a79dc0a6e",
  measurementId: "G-H3J4WJFTW6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

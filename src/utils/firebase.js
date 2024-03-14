// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAds-quEOxwt0N8hn3Hfg4u1jJAHlo4GmU",
  authDomain: "netflix-clone-fc208.firebaseapp.com",
  projectId: "netflix-clone-fc208",
  storageBucket: "netflix-clone-fc208.appspot.com",
  messagingSenderId: "191797488937",
  appId: "1:191797488937:web:a554a9563f3e9ae2279b38",
  measurementId: "G-5J5YTMBQMG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

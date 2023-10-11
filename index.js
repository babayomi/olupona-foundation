// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBY9S65ihwdxtIG03Psi7WOHbxOfmdrZo",
  authDomain: "olupona-foundation.firebaseapp.com",
  projectId: "olupona-foundation",
  storageBucket: "olupona-foundation.appspot.com",
  messagingSenderId: "82116946557",
  appId: "1:82116946557:web:0576cc0cf9ff0175aa5f14",
  measurementId: "G-GDF2SDM0VR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXChrRMDzeDskMrHgKPUpSdY42dKuCcqE",
  authDomain: "gryork.firebaseapp.com",
  projectId: "gryork",
  storageBucket: "gryork.firebasestorage.app",
  messagingSenderId: "994622418174",
  appId: "1:994622418174:web:a18e4bbf4eef1869e649af",
  measurementId: "G-0HGSH6X529"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
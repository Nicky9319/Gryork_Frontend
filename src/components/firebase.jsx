/* ----- firebase.js ----- */
import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent, setUserProperties, setCurrentScreen } from 'firebase/analytics';

// 1️⃣ Configure your Firebase project
const firebaseConfig = {
    apiKey: "AIzaSyCXChrRMDzeDskMrHgKPUpSdY42dKuCcqE",
    authDomain: "gryork.firebaseapp.com",
    projectId: "gryork",
    storageBucket: "gryork.firebasestorage.app",
    messagingSenderId: "994622418174",
    appId: "1:994622418174:web:a18e4bbf4eef1869e649af",
    measurementId: "G-0HGSH6X529"
  };

// 2️⃣ Initialize the App and Analytics
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 3️⃣ Helper to log any custom event
export function trackEvent(name, params) {
  logEvent(analytics, name, params);
}

// 4️⃣ Helper to set user properties globally
export function identifyUser(props) {
  setUserProperties(analytics, props);
}

// 5️⃣ Helper to set current screen (for SPA navigation)
export function setScreen(screenName) {
  setCurrentScreen(analytics, screenName);
}

export { analytics };
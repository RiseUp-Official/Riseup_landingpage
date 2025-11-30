// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";
import { getFirestore, Firestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7jkZeBgDiUO9EMfSyVk-zfRaS15BvZoo",
  authDomain: "landingpage-460ab.firebaseapp.com",
  projectId: "landingpage-460ab",
  storageBucket: "landingpage-460ab.firebasestorage.app",
  messagingSenderId: "845097998182",
  appId: "1:845097998182:web:023fb42112b17725bd5aa7",
  measurementId: "G-WG615K2JBX",
  databaseURL: `https://landingpage-460ab.firebaseio.com`
};

// Initialize Firebase (only once)
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

// Initialize Analytics (only in browser)
let analytics: Analytics | undefined;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

// Initialize Firestore with settings
let db: Firestore;
if (!getApps().length) {
  db = getFirestore(app);
} else {
  db = getFirestore(app);
}

// Optional: Connect to Firestore emulator in development
// Uncomment the following lines if you want to use the Firestore emulator locally
// if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
//   connectFirestoreEmulator(db, 'localhost', 8080);
// }

export { app, analytics, db };

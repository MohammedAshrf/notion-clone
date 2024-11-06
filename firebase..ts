import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAy3fzzegzFeJmivvBuVCQ9D12C7fd31as",
  authDomain: "notion-clone-583a9.firebaseapp.com",
  projectId: "notion-clone-583a9",
  storageBucket: "notion-clone-583a9.firebasestorage.app",
  messagingSenderId: "169089414219",
  appId: "1:169089414219:web:f08bb529db38ab7f9849ce",
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };

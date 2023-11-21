import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API,
  authDomain: "portfolio-8f6e8.firebaseapp.com",
  projectId: "portfolio-8f6e8",
  storageBucket: "portfolio-8f6e8.appspot.com",
  messagingSenderId: "331853667013",
  appId: "1:331853667013:web:ba9dd90b5437dc336faeac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

export default app;

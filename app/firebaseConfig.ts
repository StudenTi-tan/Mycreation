import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase コンソールから取得
const firebaseConfig = {
  apiKey: "AIzaSyDyWY8qeGKWaAnjIDx9MlbPSUe-391wV3c",
  authDomain: "deepshare-c4fd9.firebaseapp.com",
  projectId: "deepshare-c4fd9",
  storageBucket: "deepshare-c4fd9.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "1:931052478606:web:0486008a5d5a0f901129df",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

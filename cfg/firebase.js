import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAsEdvG_8uXIWakuVxFiRfb9eE1Vh5cmc",
  authDomain: "schh-413d6.firebaseapp.com",
  databaseURL: "https://schh-413d6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "schh-413d6",
  storageBucket: "schh-413d6.appspot.com",
  messagingSenderId: "680386044609",
  appId: "1:680386044609:web:3d2dbb0797543b4f37ea40",
  measurementId: "G-85WQ5F5GF1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

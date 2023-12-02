// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXq8zpRFOmtwe70luIPdpJA3QCyw7vUOg",
  authDomain: "expense-tracker-1cb35.firebaseapp.com",
  projectId: "expense-tracker-1cb35",
  storageBucket: "expense-tracker-1cb35.appspot.com",
  messagingSenderId: "1036718702568",
  appId: "1:1036718702568:web:2f56814286c5d212b3ae5d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;

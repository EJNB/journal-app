// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVRBiIEj_QJlnjkZFIvDFM3UR4sM09Gn0",
  authDomain: "reactjs-journal-app-9dd00.firebaseapp.com",
  projectId: "reactjs-journal-app-9dd00",
  storageBucket: "reactjs-journal-app-9dd00.appspot.com",
  messagingSenderId: "699721841566",
  appId: "1:699721841566:web:7932f22a38ce32b032f48f",
  measurementId: "G-SYN0HYTPDZ",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);

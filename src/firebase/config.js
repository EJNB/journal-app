// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getEnvironment } from "../helpers";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Dev/Prod
// const firebaseConfig = {
//   apiKey: "AIzaSyBVRBiIEj_QJlnjkZFIvDFM3UR4sM09Gn0",
//   authDomain: "reactjs-journal-app-9dd00.firebaseapp.com",
//   projectId: "reactjs-journal-app-9dd00",
//   storageBucket: "reactjs-journal-app-9dd00.appspot.com",
//   messagingSenderId: "699721841566",
//   appId: "1:699721841566:web:7932f22a38ce32b032f48f",
//   measurementId: "G-SYN0HYTPDZ",
// };

// console.log(import.meta.env);
// console.log(process.env)

// Testing
// const firebaseConfig = {
//   apiKey: "AIzaSyAB9dn3wChDk1tNCRp6L1vL1mMsF2Uu834",
//   authDomain: "reactjs-journal-app-testing.firebaseapp.com",
//   projectId: "reactjs-journal-app-testing",
//   storageBucket: "reactjs-journal-app-testing.appspot.com",
//   messagingSenderId: "1055670569299",
//   appId: "1:1055670569299:web:c43d10d0738d4cb804f9a6",
// };

const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
} = getEnvironment();

const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID,
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);

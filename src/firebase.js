// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "apiKey",
  authDomain: "fir-project-b32b4.firebaseapp.com",
  projectId: "fir-project-b32b4",
  storageBucket: "fir-project-b32b4.appspot.com",
  messagingSenderId: "508297913205",
  appId: "1:508297913205:web:96cc956d5f2b5c968fe93c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

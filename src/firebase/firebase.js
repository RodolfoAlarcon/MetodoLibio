// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo9KUog5tnC9Vu5H7dZ-HxnQ1FP6yfD7E",
  authDomain: "metodolibio-c917c.firebaseapp.com",
  projectId: "metodolibio-c917c",
  storageBucket: "metodolibio-c917c.appspot.com",
  messagingSenderId: "367407841354",
  appId: "1:367407841354:web:178d7838ffe42ddf71e6b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
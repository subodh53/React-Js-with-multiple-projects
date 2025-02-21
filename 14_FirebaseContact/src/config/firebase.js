// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT6LhGodMpcunVBO2eexXhvdOilSJ8AF8",
  authDomain: "vite-contact-879ed.firebaseapp.com",
  projectId: "vite-contact-879ed",
  storageBucket: "vite-contact-879ed.firebasestorage.app",
  messagingSenderId: "798208718466",
  appId: "1:798208718466:web:75cc8d8864f50c3ebca69b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuko4_RySNGbJOmeW46vHZDdtPaGcLHz8",
  authDomain: "kodecamp-task6.firebaseapp.com",
  projectId: "kodecamp-task6",
  storageBucket: "kodecamp-task6.appspot.com",
  messagingSenderId: "539466085474",
  appId: "1:539466085474:web:05d21ed32337694801cd3b",
  measurementId: "G-EBKPYRTV83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()

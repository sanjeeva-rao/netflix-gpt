// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4CGbgDG7bF09JPoFDyOSEg0rjzBj5w7c",
  authDomain: "netflixgpt-dc9b3.firebaseapp.com",
  projectId: "netflixgpt-dc9b3",
  storageBucket: "netflixgpt-dc9b3.appspot.com",
  messagingSenderId: "366246800646",
  appId: "1:366246800646:web:c129df4b4bef3cdff28287",
  measurementId: "G-YMLYLY19VN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
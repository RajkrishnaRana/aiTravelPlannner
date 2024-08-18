// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGhWeA3AyReRxclfutuUstPr5ksxr_2AA",
  authDomain: "aitraveler.firebaseapp.com",
  projectId: "aitraveler",
  storageBucket: "aitraveler.appspot.com",
  messagingSenderId: "643578977647",
  appId: "1:643578977647:web:897c910a8e1aa356fb1c9a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

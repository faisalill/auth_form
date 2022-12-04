import dotenv from 'dotenv'
import { initializeApp } from "firebase/app";
dotenv.config()


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.api_key,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messi,
  appId: process.env.appId,
  measurementId: process.env.mID 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

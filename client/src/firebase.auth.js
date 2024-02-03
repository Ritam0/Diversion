// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getDatabase} from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcDeGUp-tQR8VFKlLiOF034S3BYTlpNLI",
  authDomain: "fusioni.firebaseapp.com",
  projectId: "fusioni",
  storageBucket: "fusioni.appspot.com",
  messagingSenderId: "585146645083",
  appId: "1:585146645083:web:7a448949dc54de7dc5dd7e",
  databaseURL: "https://fusioni-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
const database = getDatabase(app);
export {auth,provider,database}
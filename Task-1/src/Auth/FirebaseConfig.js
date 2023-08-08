import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1a_RrONkHe66vVur-328oSgYBjF7pDrk",
  authDomain: "movie-app-a6146.firebaseapp.com",
  projectId: "movie-app-a6146",
  storageBucket: "movie-app-a6146.appspot.com",
  messagingSenderId: "184870534739",
  appId: "1:184870534739:web:ba608ad9c0c6a760b8d0a6",
  measurementId: "G-4B7BBTH6L5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};
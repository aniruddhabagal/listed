// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL46VC7RcawrwvzjQ3Dgd4rmQAe073ONc",
  authDomain: "listed-09.firebaseapp.com",
  projectId: "listed-09",
  storageBucket: "listed-09.appspot.com",
  messagingSenderId: "462460702830",
  appId: "1:462460702830:web:5cb3cebb798bbae6e5967f",
  measurementId: "G-M8ERVRW77M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;

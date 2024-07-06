// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHhr0KSLbJiP7Wr3DR-Ik22i7gON-_-F8",
  authDomain: "ecommerce-13f0a.firebaseapp.com",
  projectId: "ecommerce-13f0a",
  storageBucket: "ecommerce-13f0a.appspot.com",
  messagingSenderId: "344454959836",
  appId: "1:344454959836:web:1e00184519ac29629f5a19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const registro = getAuth(app);
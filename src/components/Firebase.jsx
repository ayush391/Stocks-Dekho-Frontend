// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNvt2AcKj_AdEK0yn0DyTcdNPq0dSLi1U",
  authDomain: "stock-dekho-b417c.firebaseapp.com",
  projectId: "stock-dekho-b417c",
  storageBucket: "stock-dekho-b417c.appspot.com",
  messagingSenderId: "381179867033",
  appId: "1:381179867033:web:0ce66819ca655b0d1e2d08",
  measurementId: "G-7NY1YG3QR4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCc39EZ8xMv1uts8RD6kdKpczbT7-uUhk8",
  authDomain: "naicts-web.firebaseapp.com",
  projectId: "naicts-web",
  storageBucket: "naicts-web.appspot.com",
  messagingSenderId: "190134948476",
  appId: "1:190134948476:web:c5650d3d9439760bc32ff9",
  measurementId: "G-CXW38T147C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore()

export { db } 
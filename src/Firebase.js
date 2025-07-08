// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCovhitoqGfNrsz-m41zDcJdfFno2EouQo",
  authDomain: "confeiteiro-758f4.firebaseapp.com",
  databaseURL: "https://confeiteiro-758f4-default-rtdb.firebaseio.com",
  projectId: "confeiteiro-758f4",
  storageBucket: "confeiteiro-758f4.firebasestorage.app",
  // storageBucket: "confeiteiro-758f4.appspot.com",
  messagingSenderId: "933264416383",
  appId: "1:933264416383:web:f2f2c5993596e9900fa94a",
  measurementId: "G-2E4C6YZW2F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getDatabase(app);

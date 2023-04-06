import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "tutorial-8002e.firebaseapp.com",
  projectId: "tutorial-8002e",
  storageBucket: "tutorial-8002e.appspot.com",
  messagingSenderId: "339399782954",
  appId: "1:339399782954:web:28e628e4572b57db268953",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

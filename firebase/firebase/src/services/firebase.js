// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAcVgftF2qiMkYGlvFHYbyQRKOa2IdZPvg",
    authDomain: "practice-dhruv-bhai.firebaseapp.com",
    projectId: "practice-dhruv-bhai",
    storageBucket: "practice-dhruv-bhai.appspot.com",
    messagingSenderId: "697510938199",
    appId: "1:697510938199:web:cecf6dd17a445bd15d8512",
    measurementId: "G-SKFFW42RRG"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);

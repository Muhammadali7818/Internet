// Import the functions you need from the SDKs you need
import { getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBubPiA_U7mPsxLRtzY5Vu6AvaUaOgZ3EQ",
  authDomain: "my-project-4c3c0.firebaseapp.com",
  projectId: "my-project-4c3c0",
  storageBucket: "my-project-4c3c0.firebasestorage.app",
  messagingSenderId: "536970160624",
  appId: "1:536970160624:web:30926b9532291382381535",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

export {auth, db}

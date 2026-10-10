// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCj8WYGCcqAzh-1YGhD_zC43A_Q6Rt20_0",
  authDomain: "authentication-8d5ba.firebaseapp.com",
  projectId: "authentication-8d5ba",
  storageBucket: "authentication-8d5ba.firebasestorage.app",
  messagingSenderId: "430973654616",
  appId: "1:430973654616:web:c8110eef31129908b11c2d",
  measurementId: "G-PYB8M68ZWS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
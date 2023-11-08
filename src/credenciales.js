// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDf20jqsoJfqa4lZ7WpIQDQ37_eGEBTQck",
  authDomain: "inventario-e0e47.firebaseapp.com",
  projectId: "inventario-e0e47",
  storageBucket: "inventario-e0e47.appspot.com",
  messagingSenderId: "658935691648",
  appId: "1:658935691648:web:63d47108f15ec311196965",
  measurementId: "G-HNFF9T7DEC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default app
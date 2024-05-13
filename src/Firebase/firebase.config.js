
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqpHVz3ApvGtc8-PamzLy1QaYn9f0Dn5o",
  authDomain: "muhammads-cuisine.firebaseapp.com",
  projectId: "muhammads-cuisine",
  storageBucket: "muhammads-cuisine.appspot.com",
  messagingSenderId: "498719850381",
  appId: "1:498719850381:web:233d2e49f4e199878b47c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
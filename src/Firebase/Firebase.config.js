// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBseAQMM18BeijSZQM3lOcJqPbAcCEYk2k",
  authDomain: "stylepluse-a11cb.firebaseapp.com",
  projectId: "stylepluse-a11cb",
  storageBucket: "stylepluse-a11cb.appspot.com",
  messagingSenderId: "297888613817",
  appId: "1:297888613817:web:7e2977a950efd8e4922268"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
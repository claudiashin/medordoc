// Import the functions you need from the SDKs you need
import {initializeApp}  from "firebase/app";
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeOMoQTGw_ofJzos_bQOqX_XQpty1YtXk",
  authDomain: "medordoc-516a4.firebaseapp.com",
  databaseURL: "https://medordoc-516a4-default-rtdb.firebaseio.com",
  projectId: "medordoc-516a4",
  storageBucket: "medordoc-516a4.appspot.com",
  messagingSenderId: "170688855918",
  appId: "1:170688855918:web:5efaddb77d4f3aeef5cb7f"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig)

export default app; 



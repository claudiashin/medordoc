import firebase from "firebase/app";
import {initializeApp} from 'firebase/app'
import {getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDeOMoQTGw_ofJzos_bQOqX_XQpty1YtXk",
    authDomain: "medordoc-516a4.firebaseapp.com",
    databaseURL: "https://medordoc-516a4-default-rtdb.firebaseio.com",
    projectId: "medordoc-516a4",
    storageBucket: "medordoc-516a4.appspot.com",
    messagingSenderId: "170688855918",
    appId: "1:170688855918:web:5efaddb77d4f3aeef5cb7f"
  };


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// export const db = getFirestore(firebaseApp, {})

// 
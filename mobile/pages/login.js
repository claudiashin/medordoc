
import styled from 'styled-components/native'
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Button } from 'react-native';
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,getAuth,signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeOMoQTGw_ofJzos_bQOqX_XQpty1YtXk",
  authDomain: "medordoc-516a4.firebaseapp.com",
  projectId: "medordoc-516a4",
  storageBucket: "medordoc-516a4.appspot.com",
  messagingSenderId: "170688855918",
  appId: "1:170688855918:web:5efaddb77d4f3aeef5cb7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const login = ()=>{

     const SignInGoogle = async()=>{
         const auth = getAuth();
         const provider = new GoogleAuthProvider();
         const result  = await signInWithPopup(auth,provider);
         console.log(result);
     }
 return(
     <Button onClick ={SignInGoogle} title = "Sign in Google ac"></Button>
 )
 }
 export default login;


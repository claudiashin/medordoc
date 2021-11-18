import React from "react";
import styled from 'styled-components/native';
import {StyleSheet,Text,View,Button} from 'react-native';
import * as Google from 'expo-google-app-auth';
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,getAuth,signInWithCredential } from "firebase/auth";

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

export default function test(){
 
    const SignInGoogle = async() =>{
        
        try {
             const result = await Google.logInAsync({
              androidClientId: '170688855918-7tp9hjjf1kfmg109oo7i5o0s0q0i6vk1.apps.googleusercontent.com',
              iosClientId: '170688855918-0qlh7429t5uno01pln1ebg6t802nndep.apps.googleusercontent.com',
              expoClientId:'170688855918-1s6dnn4dm1eo614ca1cr0mjb09or7m2d.apps.googleusercontent.com',
              scopes: ['profile', 'email'],
            });
        
            if (result.type === 'success') {
              
               const auth =getAuth();
               const provider = GoogleAuthProvider.credential(
                result.idToken, 
                result.accessToken,
               )

               const fbresult = await signInWithCredential(auth,provider);
               return result.accessToken;
               console.log("added to firebase",fbresult)
            

            } else {
              return { cancelled: true };
            }
          } catch (e) {
            return { error: true };
          }

    }

return(

    <View>
    <Button onPress = {SignInGoogle} title = 'sign in with google'/>
    </View>
)


};


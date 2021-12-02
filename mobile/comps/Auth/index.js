import React from "react";
import styled from "styled-components/native";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Button } from 'react-native-elements';
import Icon from "react-native-vector-icons/FontAwesome";
import * as Google from "expo-google-app-auth";
import app from "../../utils/inits";
// import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithCredential,
} from "firebase/auth";

const GoogleButton = styled.View`
  width: 300px;
  height: 50px;
  margin-left: 5px;
  margin-bottom: 20px;
  margin-top: 50px;
  border: none;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;
// const Btn = styled.Button`
  
// `


export default function Auth() {
  const SignInGoogle = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "170688855918-7tp9hjjf1kfmg109oo7i5o0s0q0i6vk1.apps.googleusercontent.com",
        iosClientId:
          "170688855918-0qlh7429t5uno01pln1ebg6t802nndep.apps.googleusercontent.com",
        expoClientId:
          "170688855918-1s6dnn4dm1eo614ca1cr0mjb09or7m2d.apps.googleusercontent.com",
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        const auth = getAuth();
        const provider = GoogleAuthProvider.credential(
          result.idToken,
          result.accessToken
        );

        const fbresult = await signInWithCredential(auth, provider);
        return result.accessToken;
        console.log("added to firebase", fbresult);
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  };
  return (
    <GoogleButton>
      <Button
      style={{
        backgroundColor:"#789BE4", 
        height: 50,
        padding: 5
      }}
        icon={<Icon name="google" size={25} color="white"/>}
        onPress={SignInGoogle}
        title="Sign in with Google"
        type="clear"
        titleStyle={{ color: 'white', padding: 50, fontWeight: '600' }}
      />
    </GoogleButton>
  );
}

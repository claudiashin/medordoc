import React from "react";
import styled from 'styled-components/native';
import {StyleSheet,Text,View,Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Google from 'expo-google-app-auth';
import app from '../../utils/inits';
// import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,getAuth,signInWithCredential } from "firebase/auth";



const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 50,
    marginLeft: 5,
    marginBottom: 20,
    borderColor: 'rgb(0,0,0)',
    borderRadius: 10,
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems: "center",
  }
})

export default function Auth(
){
    const SignInGoogle = async() =>{
        
        try {
             const result = await Google.logInAsync({
              androidClientId: '170688855918-7tp9hjjf1kfmg109oo7i5o0s0q0i6vk1.apps.googleusercontent.com',
              iosClientId: '170688855918-0qlh7429t5uno01pln1ebg6t802nndep.apps.googleusercontent.com',
              expoClientId:'170688855918-1s6dnn4dm1eo614ca1cr0mjb09or7m2d.apps.googleusercontent.com',
              scopes: ['profile', 'email'],
            });
        
            if (result.type === 'success') {
               const auth = getAuth();
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

    <View
    style={styles.container}
    >
    <Button 
      style={{
        fontSize: 1,
        color: "#00000",
      }}
      icon={
        <Icon
          name="arrow-right"
          size={15}
          color="white"
        />
      }
      onPress = {SignInGoogle} title = 'Sign in with Google'/>
    </View>
)

};

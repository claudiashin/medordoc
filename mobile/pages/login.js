import styled from 'styled-components/native'
import React from "react";
// import  app from '../utils/inits';
import { StyleSheet, Text, View, TouchableOpacity,Button,ScrollView,Image,Input } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../comps/Header';
import HeroLottie from '../comps/HeroLottie';
import NavBar from '../comps/NavBar';

// import {StyleSheet,Text,View,Button} from 'react-native';
import * as Google from 'expo-google-app-auth';
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,getAuth,signInWithCredential } from "firebase/auth";
import LoginForm from '../comps/LoginForm';
import Btn from '../comps/Btn';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDeOMoQTGw_ofJzos_bQOqX_XQpty1YtXk",
    authDomain: "medordoc-516a4.firebaseapp.com",
    projectId: "medordoc-516a4",
    storageBucket: "medordoc-516a4.appspot.com",
    messagingSenderId: "170688855918",
    appId: "1:170688855918:web:5efaddb77d4f3aeef5cb7f"
  };

const app = initializeApp(firebaseConfig);

const Wave = styled.Image`
    width: 100%;
    height: 10%;

`;

const LottieCont = styled.View`
    justify-content: center;
    align-items: center;
`;


const MainCont = styled.View`
    background-color: #F7F2EE;
    flex:1;
    flex-direction: column;
    align-items:center;
    justify-content: space-between;
`
const Login = styled.View`
    
`
const ButCont = styled.View`
    margin-top: 20px;
    margin-bottom: 30px;
    align-items: center;
    justify-content: center;
`;

const login = ()=>{

    const navigation = useNavigation(); 
    
    const SignInGoogle = async()=>{  
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
     
 return (
 <MainCont>
    <Wave source={require('../assets/background_wave.jpg')} />
     <ScrollView>

                <LottieCont>
                    <HeroLottie
                        source={require('../assets/lottie_user.json')}
                        style={{ width: 250 }}
                    />
                </LottieCont>
   

     {/* <Button onPress ={SignInGoogle} title = "Sign in Google Account"></Button> */}
    

     <ButCont>
        <Btn 
            title = "SignInWithGoogle"
            fsize = '18'
            width = '160'
            height = '45'
            borderRad = '50'
            onPress={SignInGoogle}
        />
        </ButCont>

     <Login>
        <Input type = 'text' placeholder = 'email'/>
        <Input type = 'password'placeholder = 'password'/>    
        <Button>Sign in</Button>
        <Button>Create Account</Button>
        <Input type = 'file'/>
        {/* <LoginForm></LoginForm> */}
     </Login>

     <ButCont>
        <Btn 
            title = "Log In"
            fsize = '18'
            width = '160'
            height = '45'
            borderRad = '50'
            onPress={()=>navigation.navigate('booking')}
        />
        </ButCont>

       </ScrollView>
     
     
        <NavBar></NavBar>
     </MainCont> 
   )
 }

 const styles = StyleSheet.create({
    scrollView: {
      flex: 0.85,
    },
  });
 
  export default login;


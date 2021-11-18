import styled from 'styled-components/native'
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Button,ScrollView,Image } from 'react-native';
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,getAuth,signInWithPopup } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import Header from '../comps/Header';
import HeroLottie from '../comps/HeroLottie';
import NavBar from '../comps/NavBar';



import LoginForm from '../comps/LoginForm';
import Btn from '../comps/Btn';


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


// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDeOMoQTGw_ofJzos_bQOqX_XQpty1YtXk",
//   authDomain: "medordoc-516a4.firebaseapp.com",
//   projectId: "medordoc-516a4",
//   storageBucket: "medordoc-516a4.appspot.com",
//   messagingSenderId: "170688855918",
//   appId: "1:170688855918:web:5efaddb77d4f3aeef5cb7f"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const login = ()=>{

    const navigation = useNavigation(); 

     const SignInGoogle = async()=>{
         const auth = getAuth();
         const provider = new GoogleAuthProvider();
         const result  = await signInWithPopup(auth,provider);
         console.log(result);
     }
     
 return <MainCont>
                     
    <Wave source={require('../assets/background_wave.jpg')} />
     <ScrollView>

                <LottieCont>
                    <HeroLottie
                        source={require('../assets/lottie_user.json')}
                        style={{ width: 250 }}
                    />
                </LottieCont>
   

     {/* <Button onPress ={SignInGoogle} title = "Sign in Google Account"></Button> */}
    
     <Login>
        <LoginForm></LoginForm>
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
        {/* <Button title="signin" /> */}
        </ButCont>

       </ScrollView>
     
     
        <NavBar></NavBar>
     </MainCont> 

 }

 const styles = StyleSheet.create({
    scrollView: {
      flex: 0.85,
    },
  });
 export default login;
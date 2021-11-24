import React from "react";
import styled from 'styled-components/native';
import store from '../../utils/inits'
import Btn from '../Btn';
import {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { Provider as PaperProvider, TextInput } from 'react-native-paper';
import { StyleSheet, Text, View, TouchableOpacity,ScrollView,Image} from 'react-native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


const MainCont = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items:center;
    
`
const LastDiv = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    margin-top: -10px;
    margin-right: 5px;
    margin-bottom: 50px;

`

const ITinput =styled.TextInput``;
const Button = styled.Button``;
const Cont =styled.View``;


export default function EmailSignin({
    onSignin=()=>{},
    onCreate=()=>{}
}){
  const [em, setEm] = useState('')  
  const [ps, setPs] = useState('')  
  
  const navigation = useNavigation(); 

 
  return(
        <MainCont>
         <PaperProvider>
            <TextInput
            style={{width:300, height: 50, margin:5, borderRadius: 0, backgroundColor:'#fff'}}
            label="Email"
            returnKeyType="next"
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType='email-address'
            mode='outlined'
            onChangeText = {(val)=>setEm(val)}
            />
            <TextInput
            style={{width:300, height: 50, margin:5, backgroundColor:'#fff'}}
            label="Password"
            returnKeyType="done"
            keyboardType='visible-password'
            secureTextEntry
            mode='outlined'
            onChangeText={(val)=>setPs(val)}
            /> 
            {/* <Button onPress ={()=>onSignin(em,ps)}title="Sign in"></Button> */}
            <LastDiv>
            <Text style={{color:'#575757', paddingTop:20, paddingLeft:5}}>Don't have an account?</Text>
                <TouchableOpacity
                    onPress={()=>navigation.navigate('signup')}
                ><Text style={{color:'#226BAF', paddingTop:20, paddingLeft:5}}>Sign Up</Text></TouchableOpacity> 
            </LastDiv>
           <Btn 
            title = "Log In"
            fsize = '18'
            width = '310'
            height = '45'
            borderRad = '50'
            margin = '20'
            onPress={()=>{onSignin(em,ps);if(em && ps !==" "){{navigation.navigate('booking')}}}}
            /> 
            {/* <Button onPress ={()=>onCreate(em,ps)}title="Create Account"></Button> */}
           
            
            </PaperProvider>
        </MainCont>    
    )
} 


import { getStorage, ref, uploadBytes } from "firebase/storage";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import React,{useState} from 'react';
import { StyleSheet, Button, View, Text } from "react-native";
import app from '../utils/inits'
import styled from 'styled-components/native'
// import Sign from '..comps/test'

export default function sign(){

const Upload = async()=>{

    console.log(e.target.files[0]);
    if(e.target.files.length <= 0){
        alert("no file selected");
        return false;
    }

    const file = e.target.files[0];
    const storage = getStorage();
    const storageRef = ref(storage, 'test.jpg');  
    const snapshot = await uploadBytes(storageRef,file)
    console.log ('uploaded');

}

    const CreateUser = async(em,ps)=>{
    const auth =getAuth();
    const result = await createUserWithEmailAndPassword(auth,em,ps);
    alret("Created!")
        }
        
    const Signin = async(em,ps)=>{
        const auth =getAuth();
        const result = await signInWithEmailAndPassword(auth,em.ps);
        alret("Sign in!")
        }

        return (

            <View>
                {/* <Sign onSignin = {Signin}/>
                <Sign onCreate = {CreateUser}/> */}
            </View>    
        )

    }  
    

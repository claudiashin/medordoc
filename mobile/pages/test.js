// import { getStorage, ref, uploadBytes } from "firebase/storage";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import React,{useState} from 'react';
// import { StyleSheet, Button, View, Text } from "react-native";
// import app from "../utils/inits"
// import styled from 'styled-components/native';
// import EmailSignin from '../comps/EmailSignin';

// const Sign =()=>{
// const Upload = async(e)=>{
//     console.log(e.target.files[0]);
//     if(e.target.files.length <= 0){
//         alert("no file selected");
//         return false;
//     }

//     const file = e.target.files[0];
//     const storage = getStorage();
//     const storageRef = ref(storage, 'test.jpg');  
//     const snapshot = await uploadBytes(storageRef,file)
//     console.log ('uploaded');
// }

//     const CreateUser = async(em,ps)=>{
//     const auth =getAuth();
//     const result = await createUserWithEmailAndPassword(auth,em,ps);
//     alert("Created!")
//         }
        
//     const Signin = async(em,ps)=>{
//     const auth =getAuth();
//     const result = await signInWithEmailAndPassword(auth,em,ps);
//     alert("Sign in!")
//         }

//         return (
//             <View style = {styles.container}>
//                 <EmailSignin onSignin = {Signin}
//                  onCreate = {CreateUser}/>
//             </View>    
//         )
//     }  
//   export default  Sign;

//     const styles = StyleSheet.create({
//         container: {
//           flex: 1,
//           backgroundColor: '#fff',
//           alignItems: 'center',
//           justifyContent: 'center',
//           // margin:50
//         }})







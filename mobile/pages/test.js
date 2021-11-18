// import { getStorage, ref, uploadBytes } from "firebase/storage";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import React,{useState} from 'react';
// import app from '../utils/inits'
// import styled from 'styled-components/native'
// import Sign from '../comps/Test/'

// export default function sign(){

// const Upload = async()=>{
    
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

//     const CreateUser = async()=>{
//     const auth =getAuth();
//     const result = await createUserWithEmailAndPassword(auth,em,ps);
//     alret("Created!")
//         }
        
//     const signin = async()=>{
//         const auth =getAuth();
//         const result = await signInWithEmailAndPassword(auth,em.ps);
//         alret("Sign in!")
//         }

//         return (

//             <View>
//                 <Sign onSignin = {signin}/>
//                 <Sign onCreate = {CreateUser}/>
//             </View>    
//         )

//     }        
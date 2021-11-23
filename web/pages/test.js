import React from "react";
import styled from 'styled-components';
import Head from 'next/head'
import Image from 'next/image'
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {useState} from 'react';



export default function Test(){
  
  const [em, setEm] = useState('')  
  const [ps, setPs] = useState('')  


  const Upload = async(e)=>{
    
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

    const CreateUser = async()=>{
        const auth =getAuth();
        const result = await createUserWithEmailAndPassword(auth,em,ps);
        alert('created');
        }
        
    const signin = async()=>{
        const auth =getAuth();
        const result = await signInWithEmailAndPassword(auth,em,ps);
        alert('sign in');
        }
     
    return(
        <div>
            <input type = 'text' placeholder = 'email' onChange = {(e)=>setEm(e.target.value)}/>
            <input type = 'password' placeholder = 'password'onChange = {(e)=>setPs(e.target.value)}/>
            <button onClick ={signin}>Sign in</button>
            <button onClick ={CreateUser}>Create Account</button>
            <input type = 'file' onChange={Upload}/>
        </div>    
    )

} 
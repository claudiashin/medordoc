import React from "react";
import styled from 'styled-components/native';
import Head from 'next/head'
import Image from 'next/image'
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {useState} from 'react';


const ITinput =styeld.TextInput``
const Button = styled.Button``
const Cont =styled.View``

export default function Signin(){
 
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
        <Cont>
            <ITinput type = 'text' placeholder = 'email' onChange = {(e)=>setEm(e.target.value)}/>
            <ITinput type = 'password' placeholder = 'password'onChange = {(e)=>setPs(e.target.value)}/>
            <Button onClick ={signin}>Sign in</Button>
            <Button onClick ={CreateUser}>Create Account</Button>
            {/* <Input type = 'file' onChange={Upload}/> */}
        </Cont>    
    )

} 
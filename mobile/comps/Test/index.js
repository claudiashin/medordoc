import React,{useState} from 'react'
import styled from 'styled-components/native'
const TInput =styled.TextInput``;
const Button = styled.Button``;
const Cont = styled.View``

const test =({
    onSignIn= ()=>{},
    onCreate=()=>{}

})=>{
    const [em,setEm] =useState("");
    const [ps,setPs] =useState("");

    return(
        <Cont>
            <TInput type = 'text' placeholder = 'email' onChangeText = {(val)=>setEm(val)}/>
            <TInput type = 'password' placeholder = 'password'onChangeText = {(val)=>setPs(val)}/>
            <Button onClick ={()=>onSignIn(em,ps)} title = 'sign in'/>
            <Button onClick ={()=>onCreate(em,ps)} title = 'create account'/>
        </Cont>
    )

}
export default test;
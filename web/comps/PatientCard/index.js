import React from "react";
import styled from "styled-components";
import {AiOutlineMail} from '@react-icons/all-files/ai/AiOutlineMail';
import {IoIosClose} from '@react-icons/all-files/io/IoIosClose';

import {useState} from 'react';

import PopupCard from '../PopupCard';

//card
const Maincont = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 370px;
    height: 420px;
    border-radius: 10px;
    border: 1px solid black;
    background:white;
`
//avatar image
const Avatarcont = styled.div`
    display:flex;
    
    height: 105px;
    width: 105px;
    right:50px;
    margin: 5px;
    border-radius: 50px;
    background-color: #c4c4c4;
`

const Avatarimg = styled.img`
    width: 100%;
    height:100%;
    resize-mode:cover;
    border-radius: 50px;
`

//Patient info text
const Textcont = styled.div`
    display:flex;
    flex-direction:column;
    margin-right: 85px;
`
const Text = styled.text`
    font-size: 18px;
    margin-top: 5px;
    margin-bottom: 5px;
    text-align:left;
`
const Nameheader = styled.text`
    font-size: 20px;
    margin-top: 5px;
    margin-bottom: 5px;
    text-align: center;
    font-weight: bold;
`
//email button
const Emailbut = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:center;
    align-items:center;
    margin-top:5px;
    width:150px;
    height:40px;
    background-color: #FAF0BF;
    border-radius: 5px;
    &:hover {
        background-color: #EADCA2;
    }
`
const Emailtext = styled.text`
    font-size: 20px;
    padding-left:20px;
`
//close button
const Closebutton = styled.div`
    display: flex;
    border-radius: 50%;
    margin-left: 300px;
    &:hover {
        background-color: #EADCA2;
        opacity: 0.8;
    }
`
//edit button for doctor side
const Editbut = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:center;
    align-items:center;
    margin-top:5px;
    width:175px;
    height:55px;
    background-color: #FAF0BF;
    border-radius: 5px;
`
const PopupCont = styled.div`
    display: flex;
    position: absolute;
    
    align-self: center;
    justify-content: center;
`

const EmailbutCont = styled.div`
    display:${props=>props.button1};
`
const EditbutCont = styled.div`
display:${props=>props.button2};
`
const PatientCard=({
    //info
    nameText = "Default Text",
    genderText = "Default Text",
    ageText = "Default Text",
    medicalText = "Default Text",
    phoneText = "Default Text",
    emailText = "Email",
    imagesource="https://placekitten.com/100/100",
    //subject
    name = "default text",
    gender = "default text",
    age = "default text",
    experience = "default text",
    location = "default text",
    language = "default text",
    medicalconcerns = "default text",
    phone = "default text",
    button1="flex",
    button2="flex",
    editDoc=()=>{}
    //button
})=>{

    const [open, setOpen] = useState(0);


    if(open == 0){
    return <Maincont>
        
        <Closebutton>
        <IoIosClose onClick={()=>{setOpen(1)}} size={60}/>
        </Closebutton>
        
        <Avatarcont>
            <Avatarimg src={imagesource}/>
        </Avatarcont>
        <Nameheader>
            <Text>{nameText}</Text>
        </Nameheader>
        <Textcont>
            
            <Text>{gender}{genderText}</Text>
            <Text>{age}{ageText}</Text>
            <Text>{medicalconcerns}{medicalText}</Text>
            <Text>{phone}{phoneText}</Text>
        </Textcont>
        <EmailbutCont button1={button1}>
        <a href='mailto:?subject=Dear Patient!&body=You have an appointment with our doctor at ...'> <Emailbut>
        
            <AiOutlineMail size={30}/>
            <Emailtext>{emailText}</Emailtext>
        </Emailbut></a>
        </EmailbutCont>
        <EditbutCont button2={button2} >
            <Editbut onClick={()=>{editDoc()}}>{emailText}</Editbut>
        </EditbutCont>
    </Maincont>
    
}else if(open == 1){
    return <Maincont>
        <PopupCont>
            <PopupCard CloseCard={()=>{
                setOpen(2)
            }} ClosePop={()=>{
                setOpen(0)
            }}/>
        </PopupCont>
        
        <Closebutton>
        <IoIosClose  size={60}/>
        </Closebutton>
        
        <Avatarcont>
            <Avatarimg src={imagesource}/>
        </Avatarcont>
        <Textcont>
            <Text>{name}{nameText}</Text>
            <Text>{gender}{genderText}</Text>
            <Text>{age}{ageText}</Text>
            <Text>{medicalconcerns}{medicalText}</Text>
            <Text>{phone}{phoneText}</Text>
        </Textcont>
        <a href='mailto:?subject=Dear Patient!&body=You have an appointment with our doctor at ...'> <Emailbut>
    
            <AiOutlineMail size={30}/>
            <Emailtext>{emailText}</Emailtext>
        </Emailbut></a>
    </Maincont>
}else if(open == 2){
    return <></>
}
}

export default PatientCard;
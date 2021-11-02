import React from "react";
import styled from "styled-components";
import {AiOutlineMail} from '@react-icons/all-files/ai/AiOutlineMail'

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
    margin: 20px;
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
    margin-right: 20px;
`
const Text = styled.text`
    font-size: 18px;
    margin-top: 5px;
    margin-bottom: 5px;
    text-align:left;
`
//email button
const Emailbut = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:center;
    align-items:center;
    margin-top:15px;
    width:175px;
    height:55px;
    background-color: #FAF0BF;
    border-radius: 5px;
`
const Emailtext = styled.text`
    font-size: 20px;
    padding-left:20px;
`


const PatientCard=({
    bodyText = "Default Text",
    emailText = "Email",
    imagesource="https://placekitten.com/100/100"
})=>{
    return <Maincont>
        <Avatarcont>
            <Avatarimg src={imagesource}/>
        </Avatarcont>
        <Textcont>
            <Text>Name:{bodyText=" Katie Lee"}</Text>
            <Text>Gender:{bodyText=" Female"}</Text>
            <Text>Age:{bodyText=" 24"}</Text>
            <Text>Medical Concerns:{bodyText=" Seasonal allergies"}</Text>
            <Text>Phone:{bodyText=" 604-123-1234"}</Text>
        </Textcont>
        <Emailbut>
            <AiOutlineMail size={30}/>
            <Emailtext>{emailText}</Emailtext>
        </Emailbut>
    </Maincont>
    
}


export default PatientCard;
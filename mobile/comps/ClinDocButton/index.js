import React from "react";
import {View,Text} from "react-native" ;
import styled from "styled-components/native";

const Maincont = styled.View`
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 284px;
    height: 80px;
    border: 1px solid black;
    border-radius: 25px;
`
const Avatarcont = styled.View`
    display:flex;
    height: 55px;
    width: 55px;
    border-radius: 50px;
    background-color: #c4c4c4;
`


const ClinDocButton=({

})=>{
    return <Maincont>
        <Avatarcont></Avatarcont>
    </Maincont>
    
}

export default ClinDocButton;
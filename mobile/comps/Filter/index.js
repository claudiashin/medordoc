import React from "react";
import {View,Text, SafeAreaView, StyleSheet, TextInput} from "react-native" ;
import styled from "styled-components/native";
import { Ionicons } from '@expo/vector-icons';

//main container
const Maincont = styled.View`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 294px;
    height: 376px;
    background-color: #ffffff;
    border: 1px solid #E9D7CB;
    border-radius: 5px;
`

//filter icon container
const Iconcont = styled.View`
    position: absolute;
    bottom: 375px;
    left: 250px;
`

//headers
const Headercont = styled.View`
    display: flex;
    
`
const Filterheader = styled.Text`
    font-size: 24px;
`

//filter option 
const Filtercont = styled.View`
    display:flex;
    flex-wrap: wrap;
    flex-direction:row;
`
const Filteropt = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    width:80px;
    height: 40px;
    background-color: #E9D7CB;
    border-radius: 5px;
    margin: 5px;
    padding: 5px;
`
const Filttext = styled.Text`
    font-size: 16px;
`


const Filter=({
    headerText = "Header",
    optionText = "Deafult"
})=>{
    return <Maincont>
        <Iconcont>
            <Ionicons name="filter" size={40} color="black" />
        </Iconcont>
        <Headercont>
            <Filterheader>{headerText="Language Prefrences"}</Filterheader>
        </Headercont>
        <Filtercont>
            <Filteropt>
                <Filttext>{optionText="English"}</Filttext>
            </Filteropt>
            <Filteropt>
                <Filttext>{optionText="Chinese"}</Filttext>
            </Filteropt>
            <Filteropt>
                <Filttext>{optionText="Korean"}</Filttext>
            </Filteropt>
            <Filteropt>
                <Filttext>{optionText="Japanese"}</Filttext>
            </Filteropt>
            <Filteropt>
                <Filttext>{optionText="Vietnamese"}</Filttext>
            </Filteropt>
            <Filteropt>
                <Filttext>{optionText="Punjabi"}</Filttext>
            </Filteropt>

        </Filtercont>
        <Headercont>
            <Filterheader>{headerText="Gender of Doctors"}</Filterheader>
        </Headercont>

        <Filtercont>
        <Filteropt>
            <Filttext>{optionText="Male"}</Filttext>
        </Filteropt>
        <Filteropt>
            <Filttext>{optionText="Female"}</Filttext>
        </Filteropt>
        </Filtercont>

    </Maincont>
    
}

export default Filter;
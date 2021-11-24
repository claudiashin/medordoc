import React from "react";
import {View,Text, SafeAreaView, StyleSheet, TextInput, Pressable} from "react-native" ;
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";


import Btn from '../Btn';
// height: ${props=>props.display==="none"?"0px":"370px"};

import {useState} from 'react';
import { TouchableOpacity } from "react-native";

//main container
const Extra = styled.View`
    width: 300px;
    justify-content: center;
    align-items: center;

`
const Maincont = styled.View`
    display:flex;
    flex:1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 430px;
    background-color: #ffffff;
    border: 1px solid #E9D7CB;
    border-radius: 5px;
    left: 20%;
`

//filter icon container
const Iconcont = styled.View`
    position: absolute;
    bottom: 375px;
    left: 350px;
`
const FilterIcon = styled.Image`
    height: 25px;
    width: 25px;
`

//headers
const Headercont = styled.View`
    display: flex;
    margin: 15px;
    
`
const Filterheader = styled.Text`
    font-size: 24px;
`

//filter option 
const Filtercont = styled.View`
    display:flex;
    flex-wrap: wrap;
    flex-direction:row;
    justify-content: center;
    align-items: center;
`
const Filteropt = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    width:100px;
    height: 50px;
    background-color: #E9D7CB;
    border-radius: 5px; 
    margin: 4px;
    
`
const FilteroptTwo = styled.TouchableOpacity`
    display: ${props=>props.display};
    justify-content: center;
    align-items: center;
    width:100px;
    height: 50px;
    background-color: #E9D7CB;
    border-radius: 5px; 
    margin: 4px;
    
`
const Filttext = styled.Text`
    font-size: 16px;
`

const Btncont = styled.View`
    display: flex;
    position: relative;
    margin-bottom: 10px;
    top: 40px;
    left: 80px;
`

const Filter=({
    headerText1 = "Header",
    headerText2 = "Header",
    optionText1 = "Deafult",
    optionText2 = "Deafult",
    optionText3 = "Deafult",
    optionText4 = "Deafult",
    optionText5 = "Deafult",
    optionText6 = "Deafult",
    optionText7 = "Deafult",
    optionText8 = "Deafult",
    optionText9 = "Deafult",
    optionText10 = "Deafult",
    optionText11 = "Deafult",
    optionText12 = "Deafult",

    display = "flex"

    
})=>{
    // const [open, setOpen] = useState(true);

    // var display = "none";
  

    // if(open){
    //     display = "flex"
    // }

    // const [touch, touchOpen] = useState(false);
    // var color = "#E9D7CB";
    // if(touch){
    //     color = "white"
    // }
    return <Extra>
            {/* <Iconcont >
                <Ionicons onPress={()=>setOpen(!open)} 
                name="filter" size={40} color="black" />
            </Iconcont> */}
        <Maincont >

            <Headercont>
                <Filterheader>{headerText1=headerText1}</Filterheader>
            </Headercont>
            <Filtercont>
                
                <Filteropt 
                // onPress={()=>touchOpen(!touch)}
                >
                    <Filttext>{optionText1=optionText1}</Filttext>
                </Filteropt>
                <Filteropt>
                    <Filttext>{optionText2=optionText2}</Filttext>
                </Filteropt>
                <Filteropt>
                    <Filttext>{optionText3=optionText3}</Filttext>
                </Filteropt>
                <Filteropt>
                    <Filttext>{optionText4=optionText4}</Filttext>
                </Filteropt>
                <Filteropt>
                    <Filttext>{optionText5=optionText5}</Filttext>
                </Filteropt>
                <Filteropt>
                    <Filttext>{optionText6=optionText6}</Filttext>
                </Filteropt>
            </Filtercont>
            <Headercont>
                <Filterheader>{headerText2=headerText2}</Filterheader>
            </Headercont>

            <Filtercont>
            <Filteropt>
                <Filttext>{optionText7=optionText7}</Filttext>
            </Filteropt>
            <Filteropt>
                <Filttext>{optionText8=optionText8}</Filttext>
            </Filteropt>
            <FilteroptTwo display={display}>
                <Filttext>{optionText8=optionText9}</Filttext>
            </FilteroptTwo>
            <FilteroptTwo display={display}>
                <Filttext>{optionText8=optionText10}</Filttext>
            </FilteroptTwo>
            <FilteroptTwo display={display}>
                <Filttext>{optionText8=optionText11}</Filttext>
            </FilteroptTwo>
            <FilteroptTwo display={display}>
                <Filttext>
                    {optionText8=optionText12}</Filttext>
            </FilteroptTwo>
            </Filtercont>

            <Btncont>
                <Btn title={"Apply"} height={50} width={120} fsize={20}/>
            </Btncont>
        </Maincont>
        </Extra>
    
}

export default Filter;
import React from "react";
import { Touchable } from "react-native";
import {View,Text, StyleSheet} from "react-native" ;
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";

const Maincont = styled.View`
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color:#FFFFFF;
    box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.5)
    width: 284px;
    height: 80px;
    margin:20px;

    border-radius: 15px;
`
const Avatarcont = styled.View`
    display:flex;
    height: 55px;
    width: 55px;
    right:50px;
    margin-right: 10px;
    border-radius: 50px;
    background-color: #c4c4c4;
`

const Avatarimg = styled.Image`
    width: 100%;
    height:100%;
    resize-mode:cover;
    border-radius: 50px;
`

const ClinDocButton=({
    bodyText = "Default Text",
    imageSource = "https://placekitten.com/100/100",
    cardpress  =()=>{},
    
})=>{
    return <TouchableOpacity onPress ={cardpress}>
    <Maincont onpress>
        <Avatarcont>
        <Avatarimg source={{uri:imageSource}}/>
        </Avatarcont>
        <Text style={styles.titleText}>{bodyText}</Text>
    </Maincont>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    titleText: {
      fontSize: 20,
    },
    
  });

export default ClinDocButton;
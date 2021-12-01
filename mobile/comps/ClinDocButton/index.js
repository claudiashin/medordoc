import React from "react";
import { Touchable } from "react-native";
import {View,Text, StyleSheet} from "react-native" ;
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";

const Maincont = styled.View`
    display:flex;
    flex-direction: row;
    padding-left:70px;
    align-items: center;
    background-color:#FFFFFF;
    box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.5)
    width: 350px;
    height: 100px;
    margin:10px;
    border-radius: 15px;
   
`
const Avatarcont = styled.View`
    display:flex;
    height: 80px;
    width: 80px;
    right:50px;

    border-radius: 50px;
    background-color: #c4c4c4;
`

const Avatarimg = styled.Image`
    width: 100%;
    height:100%;
    resize-mode:cover;
    border-radius: 50px;
`
const TextCont = styled.View`

`
const ClinDocButton=({
    bodyText = "Default Text",
    imageSource = "https://placekitten.com/100/200",
    cardpress  =()=>{},
})=>{
    return <TouchableOpacity onPress ={cardpress}>
    <Maincont onpress>
        <Avatarcont>
        <Avatarimg source={{uri:imageSource}}/>
        </Avatarcont>
        <TextCont>
        <Text style={styles.titleText}>{bodyText}</Text>
        </TextCont>
    </Maincont>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    titleText: {
      fontSize: 20,
    },
    
  });

export default ClinDocButton;
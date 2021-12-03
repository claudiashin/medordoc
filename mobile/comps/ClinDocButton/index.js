import React from "react";
import { Touchable } from "react-native";
import {View,Text, StyleSheet} from "react-native" ;
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";

import AppLoading from 'expo-app-loading';
import { useFonts, Nunito_400Regular, Nunito_600SemiBold,  Nunito_700Bold, } from '@expo-google-fonts/nunito';


const Maincont = styled.View`
    display:flex;
    flex-direction: row;
    padding-left:70px;
    align-items: center;
    background-color:#FFFFFF;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4)
    width: 305px;
    height: 100px;
    margin:10px;
    margin-bottom: 20px;
    border-radius: 15px;
    padding-left: 60px;
   
`
const Avatarcont = styled.View`
    display:flex;
    height: 65px;
    width: 65px;
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
    let [fontsLoaded] = useFonts({
        Nunito_400Regular,
        Nunito_600SemiBold,
        Nunito_700Bold,
      });
    
      if(!fontsLoaded) {
          return <AppLoading />
      } else {
    return <TouchableOpacity onPress ={cardpress}>
    <Maincont onpress>
        <Avatarcont>
        <Avatarimg source={{uri:imageSource}}/>
        </Avatarcont>
        <TextCont>
        <Text style={styles.titleText} style={{fontFamily: 'Nunito_400Regular', fontSize: 20}}>{bodyText}</Text>
        </TextCont>
    </Maincont>
    </TouchableOpacity>
      }
}

const styles = StyleSheet.create({
    titleText: {
      fontSize: 30,
    },
    
  });

export default ClinDocButton;
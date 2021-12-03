import {View,Text, SafeAreaView, StyleSheet, TextInput, Pressable,Image} from "react-native" ;
import styled from 'styled-components/native';
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Asset } from "react-native-unimodules";

const Backimg = styled.Image`
  width: 27px;
  height: 27px;
  position: absolute;

  `;

const Backcont = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items:center;
    width: 39px;
    height: 40px;
    top: 100px;
    left: 25px;
`; 


const BackBtn = ({
    onPress = ()=>{}

}) => {

    return <Backcont 
    // source={require('../../assets/icons/back-button.png')}
    onPress={onPress}>
        <Backimg source={require('../../assets/icons/left-arrow.png')}/>
        {/* <Ionicons name="chevron-back" size={50} color="black"
            
            // onPress={() => navigation.goBack()}         
        /> */}
    </Backcont>
}


export default BackBtn
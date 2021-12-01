import {View,Text, SafeAreaView, StyleSheet, TextInput, Pressable,Image} from "react-native" ;
import styled from 'styled-components/native';
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Asset } from "react-native-unimodules";


const Backcont = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items:center;
    width: 100px;
    height: 100px;
    top: 50px;
`; 


const BackBtn = ({
    onPress = ()=>{}

}) => {


    return <Backcont onPress={onPress}>
        
        <Ionicons name="chevron-back" size={50} color="black"
            
            // onPress={() => navigation.goBack()}         
        />
        {/* <Image source ={require('../../assets/plus.png')}/> */}
    </Backcont>
}


export default BackBtn
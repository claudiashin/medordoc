import styled from 'styled-components/native';
import React, { Component } from 'react';
import { StyleSheet, View, Button, Linking, Text } from 'react-native';
import QRCode from '../QrCode';

import AppLoading from 'expo-app-loading';
import { useFonts, Nunito_400Regular, Nunito_600SemiBold,  Nunito_700Bold, } from '@expo-google-fonts/nunito';

const InfoCardCont = styled.View`  
    width: 300px;
    border: #E9D7CB;
    padding: 20px;
    margin: 10px;
    background-color: #fff;

`;

const HeadingCont = styled.View`
    justify-content: center;
    align-items: center;
`;

const Heading = styled.Text`
    font-size: ${props => props.heading_fs}px;
    font-weight: ${props => props.heading_fw};
    color: #505050;
    margin: 10px;
    text-align: center;
`;

const SubheadingCont = styled.View`
`;

const Subheadingtwo = styled.Text`
    font-size: 16px;
    color: #505050;
    margin: 10px;
`;

const Title = styled.Text``;

const Information = styled.Text`
    font-size: 16px;
    color: #505050;
    margin: 10px;
`;

const QRCodeCont = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    display: ${props => props.display};
`;

// const Subheadingthree = styled.Text`
//     font-size: 16px;
//     color: ${props => props.fontcolor};
//     margin: 10px;
//     font-weight: ${props => props.subheadingthree_fw};
// `;

const InfoCard = ({
    text = "Welcome Jenny Lee",
    text2 = "Thank you for choosing MedOrDoc.",
    text3 = "For faster check-in, scan the QR at the ...",
    text4 = "To view your ...",
    text5 = "",
    text6 = "",
    text7 = "",
    address = "",
    phone = "",
    language = "",
    open = "",
    close = "",
    waittime="",
    fontsize = 20,
    weight = 700,
    display = "none"
}) => {

    let [fontsLoaded] = useFonts({
        Nunito_400Regular,
        Nunito_600SemiBold,
        Nunito_700Bold,
      });
    
      if(!fontsLoaded) {
          return <AppLoading />
      } else {

    return <InfoCardCont>
        <HeadingCont>
            <Heading 
            style={{fontFamily: 'Nunito_700Bold'}}
            heading_fs={fontsize} heading_fw={weight}>{text}</Heading>
        </HeadingCont>

        <QRCodeCont display={display}>
            <QRCode />
        </QRCodeCont>

        <SubheadingCont>
            <Information style={{fontFamily: 'Nunito_400Regular'}}>{address}{text2}</Information>
        </SubheadingCont>

        <SubheadingCont>
            <Information style={{fontFamily: 'Nunito_400Regular'}}>{phone}{text3}</Information>
        </SubheadingCont>


        <SubheadingCont>
            <Information style={{fontFamily: 'Nunito_400Regular'}}>{language}{text4}</Information>
        </SubheadingCont>

         
        <SubheadingCont>
            <Information style={{fontFamily: 'Nunito_400Regular'}}>{open}{text5}</Information>
        </SubheadingCont>

        <SubheadingCont>
            <Information style={{fontFamily: 'Nunito_400Regular'}}>{close}{text6}</Information>
        </SubheadingCont>

        <SubheadingCont>
            <Information style={{fontFamily: 'Nunito_400Regular'}}>{waittime}{text7} Minutes</Information>
        </SubheadingCont>

    </InfoCardCont >
}
}
const styles = StyleSheet.create({
});


export default InfoCard;
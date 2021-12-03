import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View } from 'react-native';

import AppLoading from 'expo-app-loading';
import { useFonts, Nunito_400Regular, Nunito_600SemiBold,  Nunito_700Bold, } from '@expo-google-fonts/nunito';

const HeaderCont = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 5px 0 15px 0;
`;

const Title = styled.Text`
    color: #5C5C5C;
    font-weight: ${props=>props.fWeight};
    font-size: ${props=>props.fSize}px;
    line-height: ${props=>props.lHeight}px;
`;

const Header = ({
    title = "Create an Account",
    subtitle = "Personal Information",
    fontFamily ='Nunito_700Bold',
    fontWeight = "bold",
    fontSize = 24,
    lineHeight = 30,

}) => {
    let [fontsLoaded] = useFonts({
        Nunito_400Regular,
        Nunito_600SemiBold,
        Nunito_700Bold,
      });
    
      if(!fontsLoaded) {
          return <AppLoading />
      } else {

    return <HeaderCont>
       <Title 
       style={{fontFamily: 'Nunito_700Bold'}}
       fontFamily ={fontFamily}
       fWeight={fontWeight} 
       fSize={fontSize} 
       lHeight={lineHeight}
       >{title}</Title>
    </HeaderCont>
}
}

export default Header;
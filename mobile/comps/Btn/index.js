import styled from 'styled-components/native'
import React from 'react'

import AppLoading from 'expo-app-loading';
import { useFonts, Nunito_400Regular, Nunito_600SemiBold,  Nunito_700Bold, } from '@expo-google-fonts/nunito';


const ButCont = styled.TouchableOpacity`
    background-color: ${props=>props.bgcolor};
    width: ${props=>props.width}px;
    height: ${props=>props.height}px;
    border-radius: ${props=>props.borderRad}px;
    justify-content: center;
    align-items: center;

`
const TextCont = styled.Text`
  justify-content: center;
  align-items: center;
  font-size: ${props=>props.fsize}px;
  font-weight: bold;
  color:  ${props=>props.fcolor};
`;

const Btn = ({
    title = "Next", 
    fsize = '22',
    bgcolor = "#97BDD6",
    width = '145',
    height = '50',
    borderRad = '50',
    margin = '30',
    fcolor = '#fff',
    onPress={}
}) => {

    let [fontsLoaded] = useFonts({
        Nunito_400Regular,
        Nunito_600SemiBold,
        Nunito_700Bold,
      });
    
      if(!fontsLoaded) {
          return <AppLoading />
      } else {

    return (
        <ButCont
            onPress={onPress}
            bgcolor={bgcolor}
            width={width}
            height={height}
            borderRad={borderRad}
            margin ={margin}
        >
            <TextCont 
                style={{fontFamily: 'Nunito_700Bold', fontSize:20}}
                fsize={fsize}
                fcolor={fcolor}
            >{title}</TextCont>
        </ButCont>
    )
    }}

export default Btn

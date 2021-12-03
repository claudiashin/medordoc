import styled from 'styled-components/native';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import AppLoading from 'expo-app-loading';
import { useFonts, Nunito_400Regular, Nunito_600SemiBold,  Nunito_700Bold, } from '@expo-google-fonts/nunito';

const InfoCardTwoCont = styled.View`
    width: 300px;
    height: ${props=>props.height}px;
    border: #E9D7CB;
    padding: 10px;
    margin: 10px;
    background-color: #fff;
    border: 2px solid #E9D7CB;
`;

const HeaderCont = styled.View`
    align-items: flex-start;
`;

const Header = styled.Text`
    font-size: ${props=>props.fontSize}px;
    font-weight: ${props=>props.fontWeight};
    color: #505050;
    margin: 10px;
`;

const SubheaderCont = styled.View`
`;

const Subheader = styled.Text`
    font-size: 16px;
    color: #505050;
    margin: 5px 10px 5px 10px;
    line-height: 18px;
`;

const QRImageCont = styled.View`
    justify-content: center;
    align-items: center;
`;

const QRImage = styled.Image`
    display: ${props=>props.display};
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    margin: 5px;
`;

const InfoCardTwo = ({
    text1 = "",
    text2 = "",
    text3 = "",
    text4 = "",
    text5 = "",
    text6 = "",
    text7 = "",
    text8 = "",
    fsize = "18",
    fweight = "700",
    display = "flex",
    height = "240"
}) => {

    let [fontsLoaded] = useFonts({
        Nunito_400Regular,
        Nunito_600SemiBold,
        Nunito_700Bold,
      });
    
      if(!fontsLoaded) {
          return <AppLoading />
      } else {
    return <InfoCardTwoCont height={height} >
        <HeaderCont>
            <Header
            style={{fontFamily: 'Nunito_700Bold'}}
                fontSize={fsize}
                fontWeight={fweight}
            >{text1}
            </Header>
        </HeaderCont>

        <SubheaderCont>
            <Subheader style={{fontFamily: 'Nunito_400Regular'}}>{text2}</Subheader>

            <QRImageCont>
                <QRImage source={require('../../assets/icons/QR.png')} display={display}/>
            </QRImageCont>

            <Subheader style={{fontFamily: 'Nunito_400Regular'}}>{text3}</Subheader>
            <Subheader style={{fontFamily: 'Nunito_400Regular'}}>{text4}</Subheader>
            <Subheader style={{fontFamily: 'Nunito_400Regular'}}>{text5}</Subheader>
            <Subheader style={{fontFamily: 'Nunito_400Regular'}}>{text6}</Subheader>

            <HeaderCont>
            <Header
                fontSize={fsize}
                fontWeight={fweight}
            >{text7}
            </Header>
        </HeaderCont>
            <Subheader style={{fontFamily: 'Nunito_400Regular'}}>{text8}</Subheader>
        </SubheaderCont>
    </InfoCardTwoCont>
}
}

export default InfoCardTwo;
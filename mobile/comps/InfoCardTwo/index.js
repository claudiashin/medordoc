import styled from 'styled-components/native';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const InfoCardTwoCont = styled.View`
    width: 300px;
    height: 230px;
    border: #E9D7CB;
    padding: 10px;
    margin: 10px;
    background-color: #fff;
    border: 1px solid;
`;

const HeaderCont = styled.View`
    align-items: flex-start;
`;

const Header = styled.Text`
    font-size: ${props=>props.fontSize};
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
    fsize = "18",
    fweight = "700",
    display = "flex",
}) => {

    return <InfoCardTwoCont>
        <HeaderCont>
            <Header
                fontSize={fsize}
                fontWeight={fweight}
            >{text1}
            </Header>
        </HeaderCont>

        <SubheaderCont>
            <Subheader>{text2}</Subheader>

            <QRImageCont>
                <QRImage source={require('../../assets/icons/QR.png')} display={display}/>
            </QRImageCont>

            <Subheader>{text3}</Subheader>
            <Subheader>{text4}</Subheader>
            <Subheader>{text5}</Subheader>
            <Subheader>{text6}</Subheader>
        </SubheaderCont>
    </InfoCardTwoCont>
}


export default InfoCardTwo;
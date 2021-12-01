import styled from 'styled-components/native';
import React, { Component } from 'react';
import { StyleSheet, View, Button, Linking, Text } from 'react-native';
import QRCode from '../QrCode';

const InfoCardCont = styled.View`  
    height:400px;
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

const Subheading = styled.Text`
    font-size: ${props => props.subheading_fs}px;
    color: #505050;
    margin: 10px 10px 0px 10px;
    font-weight: 700;
`;
const Subheadingtwo = styled.Text`
    font-size: 16px;
    color: #505050;
    margin: 10px;
`;

const WebsiteContainer = styled.View`
    flex-direction: row;
    display: flex;
    flex-direction: column;
`;

const Subheadingthree = styled.Text`
    font-size: 16px;
    color: ${props => props.fontcolor};
    margin: 10px;
    font-weight: ${props => props.subheadingthree_fw};
`;

const Subheadingfour = styled.Text`
    font-size: 16px;
    color: ${props => props.fontcolor};
    margin: 10px;
    font-weight: ${props => props.subheadingfour_fw};
`;

const Website = styled.Text`
    font-size: 16px;
    color: #226BAF;
    margin: 10px;
`;

const QRCodeCont = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    display: ${props => props.display};
`;

const InfoCard = ({
    text = "Welcome Jenny Lee",
    text2 = "Thank you for choosing MedOrDoc.",
    text3 = "Website:",
    text4 = "To view your ...",
    text5 = "Website:",
    text6 = "Website:",
    website_url = "https://www.bcit.ca/",
    fontsize = 20,
    weight = 700,
    weight2 = 700,
    fontcolor = '#226BAF',
    display= "none"
}) => {

    return <InfoCardCont>
        <HeadingCont>
            <Heading heading_fs={fontsize} heading_fw={weight}>{text}</Heading>
        </HeadingCont>

        <QRCodeCont display={display}>
            <QRCode/>
        </QRCodeCont>

        <SubheadingCont>
            <Subheadingtwo>Address: {text2}</Subheadingtwo>
        </SubheadingCont>

        <SubheadingCont>
            <Subheadingtwo>Open: {text5}</Subheadingtwo>
        </SubheadingCont>


        <SubheadingCont>
            <Subheadingtwo>Close: {text6}</Subheadingtwo>
        </SubheadingCont>

         
        <SubheadingCont>
            <Subheadingtwo>Phone:  {text4}</Subheadingtwo>
        </SubheadingCont>



        <SubheadingCont>
            <Subheadingtwo>Language: {text3}</Subheadingtwo>
        </SubheadingCont>

        {/* <WebsiteContainer /*style={styles.website_container}>
            <Subheadingthree subheadingthree_fw={weight2} fontcolor={fontcolor}>{text3}</Subheadingthree>
            <Subheadingfour subheadingfour_fw={weight2} fontcolor={fontcolor}>{text4}</Subheadingfour>
            <Website onPress={() => Linking.openURL(website_url)}>{website_url}</Website>
            <Website onPress={() => Linking.openURL(website_url)}>{website_url}</Website> 

        </WebsiteContainer> */}
   
    </InfoCardCont >
}

const styles = StyleSheet.create({
});


export default InfoCard;
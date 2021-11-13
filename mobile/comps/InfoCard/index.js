import styled from 'styled-components/native';
import React from 'react';
import { StyleSheet, View, Button, Linking, Text } from 'react-native';

const InfoCardCont = styled.View`
    width: 300px;
    border: #E9D7CB;
    padding: 10px;
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
`;

const Subheadingthree = styled.Text`
    font-size: 16px;
    color: ${props => props.fontcolor};
    margin: 10px;
    font-weight: ${props => props.subheadingthree_fw};
`;

const Website = styled.Text`
    font-size: 16px;
    color: #226BAF;
    margin: 10px;
`;

const InfoCard = ({
    text = "Heading",
    text2 = "Subheading",
    text3 = "Website:",
    website_url = "https://www.bcit.ca/",
    fontsize = 20,
    weight = 700,
    weight2 = 700,
    fontcolor = '#226BAF',
}) => {

    return <InfoCardCont>
        <HeadingCont>
            <Heading heading_fs={fontsize} heading_fw={weight}>{text}</Heading>
        </HeadingCont>

        <SubheadingCont>
            <Subheadingtwo>{text2}</Subheadingtwo>
        </SubheadingCont>

        <WebsiteContainer /*style={styles.website_container}*/>
            <Subheadingthree subheadingthree_fw={weight2} fontcolor={fontcolor}>{text3}</Subheadingthree>
            <Website onPress={() => Linking.openURL(website_url)}>{website_url}</Website>
        </WebsiteContainer>
    </InfoCardCont >
}

const styles = StyleSheet.create({
});


export default InfoCard;
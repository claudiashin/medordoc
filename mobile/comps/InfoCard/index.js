import styled from 'styled-components/native';
import React from 'react';
import { StyleSheet, View, Button, Linking, Text } from 'react-native';

const InfoCardCont = styled.View`
    width: 300px;
    border: #E9D7CB;
    padding: 10px;
    margin: 10px;
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
    font-size: 18px;
    color: #505050;
    margin: 10px;
`;

const WebsiteContainer = styled.View`
    flex-direction: row;
`;

const Subheading_two = styled.Text`
    font-size: 16px;
    color: #505050;
    margin: 10px;
    font-weight: bold;
`;

const Website = styled.Text`
    font-size: 16px;
    color: #226BAF;
    margin: 10px;
`;

const InfoCard = ({
    clinic_name = "Clinic Name",
    clinic_address = "Clinic Address",
    website_url = "https://www.bcit.ca/",
    fontsize = 22,
    weight = 700,
}) => {

    return <InfoCardCont>
        <HeadingCont>
            <Heading heading_fs={fontsize} heading_fw={weight}>{clinic_name}</Heading>
        </HeadingCont>

        <SubheadingCont>
            <Subheading>{clinic_address}</Subheading>
        </SubheadingCont>

        <WebsiteContainer /*style={styles.website_container}*/>
            <Subheading_two>Website:</Subheading_two>
            <Website onPress={() => Linking.openURL(website_url)}>{website_url}</Website>
        </WebsiteContainer>
    </InfoCardCont >
}

const styles = StyleSheet.create({
});


export default InfoCard;
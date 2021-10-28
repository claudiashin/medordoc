import styled from 'styled-components/native';
import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

const InfoCardCont = styled.View`
    width: 300px;
    border: #E9D7CB;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 10px;
    margin: 10px;
`;

const Heading = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: #505050;
    margin: 10px;
`;

const Address = styled.Text`
    font-size: 18px;
    color: #505050;
    margin: 10px;
`;

const Website = styled.Text`
    font-size: 16px;
    color: #226BAF;
    margin: 10px;
`;

const InfoCard = ({
    clinic_name="Clinic Name",
    clinic_address="Clinic Address",
    website_url="https://www.bcit.ca/",
    
}) => {
    return <InfoCardCont /*styles={styles.infocardcont}*/>
        <Heading>{clinic_name}</Heading>
        <Address>{clinic_address}</Address>
        <Website>Website: {website_url}</Website>
    </InfoCardCont>
}

const styles = StyleSheet.create({
    infocardcont: {
    },
});

export default InfoCard;
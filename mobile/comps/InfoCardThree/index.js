import styled from 'styled-components/native';
import React from 'react';
import { StyleSheet, View, Button, Linking, Text } from 'react-native';

const InfoCardCont = styled.View`
    width: 300px;
    border: #E9D7CB;
    padding: 20px;
    margin: 10px;
    background-color: #fff;
`;

const HeadingCont = styled.View`
    justify-content: flex-start;
    align-items: flex-start;
`;

const Heading = styled.Text`
    font-size: ${props => props.heading_fs}px;
    font-weight: ${props => props.heading_fw};
    color: #505050;
    margin: 10px;
    text-align: center;
`;

const BodyCont = styled.View`
`;

const Date = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #505050;
    margin: 10px 10px 0px 10px;

`;

const Clinic = styled.Text`
    font-size: 16px;
    margin: 10px;
    color: #505050;

`;

const InfoCardThree = ({
    text = "Details",
    text2 = "January 16, 2021",
    text3 = "North Van Clinic",
    text4 = "March 12, 2021",
    text5 = "Burnaby Medical Clinic",
    text6 = "June 8, 2021",
    text7 = "Vancouver Medical Clinic",
    text8 = "September 22, 2021",
    text9 = "Burnaby Medical Clinic",
    fontsize = 18,
    weight = 700,
}) => {

    return <InfoCardCont>
        <HeadingCont>
            <Heading heading_fs={fontsize} heading_fw={weight}>{text}</Heading>
        </HeadingCont>

        <BodyCont>
            <Date>{text2}</Date>
            <Clinic>{text3}</Clinic>
            <Date>{text4}</Date>
            <Clinic>{text5}</Clinic>
            <Date>{text6}</Date>
            <Clinic>{text7}</Clinic>
            <Date>{text8}</Date>
            <Clinic>{text9}</Clinic>
        </BodyCont>

    </InfoCardCont >
}

const styles = StyleSheet.create({
});


export default InfoCardThree;
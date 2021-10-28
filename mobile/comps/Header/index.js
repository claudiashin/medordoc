import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View } from 'react-native';

const HeaderCont = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    margin: 5px;
`;

const Title = styled.Text`
    font-family: Nunito;
    color: #5C5C5C;
    font-weight: ${props=>props.fweight};
    font-size: ${props=>props.fsize}px;
    line-height: 33px;
`;

const Header = ({
    title = "Create an Account",
    subtitle = "Personal Information",
    fontWeight = "bold",
    fontSize = "24",
}) => {

    return <HeaderCont>
        <Title 
        fweight ={fontWeight} 
        fsize = {fontSize}>
            {title}</Title> 
        <Header>{subtitle}</Header>
    </HeaderCont>
}

export default Header;
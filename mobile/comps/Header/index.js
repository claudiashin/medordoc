import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View } from 'react-native';

const HeaderCont = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    margin: 5px;
    width: 300px;
    height: 80px;
`;

const Title = styled.Text`
    color: #5C5C5C;
    font-weight: ${props=>props.fWeight};
    font-size: ${props=>props.fSize}px;
    line-height: 33px;
`;

const Header = ({
    title = "Create an Account",
    subtitle = "Personal Information",
    fontWeight = "bold",
    fontSize = 24,
}) => {

    return <HeaderCont>
       <Title fWeight={fontWeight} fSize={fontSize}>
           {title}</Title>
    </HeaderCont>
}

export default Header;
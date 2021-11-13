import styled from 'styled-components/native';
import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

const FooterCont = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 15px;
`;

const Footer = styled.View`
    margin: 0px 20px 0px 20px;
    justify-content: center;
    align-items: center;
`;

const Image = styled.Image`
    width: 30px;
    height: 30px;
    margin: 5px;
`;

const Text = styled.Text`
`;

const NavBar = ({

}) => {
    return <FooterCont>
        <Footer onPress={()=>{}}>
            <Image source={require('../../assets/icons/home.png')} />
            <Text>Home</Text>
        </Footer>
        <Footer onPress={()=>{}}>
            <Image source={require('../../assets/icons/QR.png')} />
            <Text>QR Code</Text>
        </Footer>
        <Footer onPress={()=>{}}>
            <Image source={require('../../assets/icons/history.png')} />
            <Text>History</Text>
        </Footer>
        <Footer onPress={()=>{}}>
            <Image source={require('../../assets/icons/profile.png')} />
            <Text>Profile</Text>
        </Footer>
    </FooterCont>
}

const styles = StyleSheet.create({
});

export default NavBar;
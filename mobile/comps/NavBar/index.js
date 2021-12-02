import styled from 'styled-components/native';
import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {db} from '../../utils/store'
import { useFonts } from 'expo-font';

const FooterCont = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 15px;
`;

const Footer = styled.TouchableOpacity`
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
    const navigation = useNavigation(); 

    const [qrPath, setQrPath] = useState('QR')
    const [historyPath, setHistoryPath] = useState('history')
    const [profilePath, setProfilePath] = useState('patientprofile')
    const auth = getAuth();
    const [myUid, setMyUid] = useState()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // const uid = user.uid;
        // console.log(uid)
        // setMyUid(uid)
        setQrPath("QR")
        setHistoryPath("history")
        setProfilePath("patientprofile")
        
      } else {
        console.log("no")
        setQrPath("login")
        setHistoryPath("login")
        setProfilePath("login")
      }
    });

    return <FooterCont>
        <Footer onPress={() => navigation.navigate('home')}>
            <Image source={require('../../assets/icons/home.png')} />
            <Text>Home</Text>
        </Footer>
        <Footer onPress={() => navigation.navigate(qrPath)}>
            <Image source={require('../../assets/icons/QR.png')} />
            <Text>QR Code</Text>
        </Footer>
        <Footer onPress={() => navigation.navigate(historyPath)}>
            <Image source={require('../../assets/icons/history.png')} />
            <Text>History</Text>
        </Footer>
        <Footer onPress={() => navigation.navigate(profilePath)}>
            <Image source={require('../../assets/icons/profile.png')} />
            <Text>Profile</Text>
        </Footer>
    </FooterCont>
}

const styles = StyleSheet.create({
});

export default NavBar;
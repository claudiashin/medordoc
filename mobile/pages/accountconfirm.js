import React, { useState, useEffect, Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import Header from '../comps/Header';
import InfoCard from '../comps/InfoCard';
import Btn from '../comps/Btn';
import NavBar from '../comps/NavBar';
const AccountCont = styled.View`
    flex: 1;
`;

const Wave = styled.Image`
    width: 100%;
    height: 20%;
    position: absolute;
`;

const HeaderCont = styled.View`
    justify-content: center;
    align-items: center;
    margin-top: 150px;
`;

const InfoCardCont = styled.View`
    justify-content: center;
    align-items: center;
    margin-top: 40px;
`;

const BtnCont = styled.View`
    justify-content:flex-end;
    align-items: flex-end;
    margin: 50px;
`;

const NavBarCont = styled.View`
    flex: 0.15;
`;

const accountconfirm = ({


}) => {
    const navigation = useNavigation();

    return (
        <AccountCont>
            <ScrollView style={styles.scrollView} >
                <Wave source={require('../assets/backgroundmobile.png')} />

                <HeaderCont>
                    <Header title={"Here's Your Account Info"} fontSize={22} />
                </HeaderCont>

                <InfoCardCont>
                    <InfoCard
                        text={'Welcome Will!'}
                        text2={'Thank you for choosing MedOrDoc.'}
                        text3={'For faster check-in, scan the QR code at the front desk when you arrive.'}
                        text4={'To view, click on the QR Code icon in the navigation bar below.'}
                        fontcolor={'#505050'}
                        display={'flex'}
                    />
                </InfoCardCont>

                <BtnCont>
                    <Btn
                        title="Sign In"
                        fsize="18"
                        width="120"
                        height="50"
                        onPress={() => navigation.navigate("login")}
                    />
                </BtnCont>

            </ScrollView>
            <NavBarCont>
                <NavBar />
            </NavBarCont>
        </AccountCont>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 0.85,
    },
});

export default accountconfirm;

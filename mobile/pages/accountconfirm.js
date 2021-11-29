import React, { useState, useEffect, } from 'react';
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
    height: 30%;
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
                        text={'Welcome Jenny Lee!'}
                        text2={'Thank you for choosing MedOrDoc.'}
                        text3={'Start booking your first appointment by signing in.'}
                        website_url={''}
                        weight2={'400'}
                        fontcolor={'#505050'}
                    />
                </InfoCardCont>



                <BtnCont>
                    <Btn
                        title="Sign In"
                        fsize="20"
                        width="130"
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

import React, { useState, useEffect, } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import styled from 'styled-components/native';

import Header from '../comps/Header';
import InfoCard from '../comps/InfoCard';
import Btn from '../comps/Btn';
import NavBar from '../comps/NavBar';

const AccountCont = styled.View`
    flex: 1;
`;

const Wave = styled.Image`
    width: 100%;
    /* height: 10vh; */
    position: absolute;
    top: 0;
`;

const HeaderCont = styled.View`
    justify-content: center;
    align-items: center;
    top: 150px;
`;

const InfoCardCont = styled.View`
    justify-content: center;
    align-items: center;
    top: 150px;
`;

const BtnCont = styled.View`
    justify-content:flex-end;
    align-items: flex-end;
    top: 200px;
`;

const NavBarCont = styled.View`
    flex: 0.15;
`;

const accountconfirm = () => {
    return (
        <AccountCont>
            <ScrollView style={styles.scrollView} >
                <Wave source={require('../assets/background_wave.jpg')} />


                <HeaderCont>
                    <Header title={"Here's Your Account Info"} fontSize={22} /><Text>Let's start</Text>
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
                    <Btn/>
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

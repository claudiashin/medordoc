import React, { useState, useEffect, } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import styled from 'styled-components/native';

import Header from '../comps/Header';
import HeroLottie from '../comps/HeroLottie';
import SigninForm from '../comps/SigninForm';
import NavBar from '../comps/NavBar';

const BookingCont = styled.View`
    flex: 1;
`;

const Wave = styled.Image`
    width: 100%;
    /* height: 10vh; */
    position: absolute;
    top: 0;
`;

const LottieCont = styled.View`
    justify-content: center;
    align-items: center;
    top: 180px;
`;

const HeaderCont = styled.View`
    margin: 27px;
    top: 200px;
`;

const SignUpFormCont = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    top: 180px;
    margin-bottom: 200px;
`;

const NavBarCont = styled.View`
    flex: 0.15;
`;

const signup = () => {
    return (
        <BookingCont>
            <ScrollView style={styles.scrollView} >
                <Wave source={require('../assets/background_wave.jpg')} />

                <LottieCont>
                    <HeroLottie
                        source={require('../assets/lottie_user.json')}
                        style={{ width: 250 }}
                    />
                </LottieCont>

                <HeaderCont>
                    <Header title={'Create Account'} fontSize={22} />
                </HeaderCont>

                <SignUpFormCont>
                    <SigninForm />
                </SignUpFormCont>

            </ScrollView>
            <NavBarCont>
                <NavBar />
            </NavBarCont>
        </BookingCont>
    )
}

const styles = StyleSheet.create({
    scrollView: {
      flex: 0.85,
    },
  });

export default signup;

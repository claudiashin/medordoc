import React, { useState, useEffect, } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import styled from 'styled-components/native';

// import CalendarAPI from '../comps/CalendarAPI';
import Header from '../comps/Header';
import HeroLottie from '../comps/HeroLottie';
import SignUpLottie from '../assets/lottie_welcome.json';
import SigninForm from '../comps/SigninForm';
// import DropDownFilter from '../comps/DropDownFilter';
import Btn from '../comps/Btn';
import NavBar from '../comps/NavBar';

const BookingCont = styled.View`
    background-color: #F7F2EE;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`;

const Wave = styled.Image`
    width: 100%;
    height: 10%;
    position: absolute;
    top: 0;
`;

const LottieCont = styled.View`
    justify-content: center;
    align-items: center;
    top: 100;
`;

const HeaderCont = styled.View`
    justify-content: center;
    align-items: center;
    top: 200;
`;

const SignUpFormCont = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    top: 200px;
`;

const ButtonCont = styled.View`
    top: -150px;
    /* align-items: flex-end;
    width: 275px;
    margin-top: 25px; */
`;

const NavBarCont = styled.View`
    top: -200px;
`;

const signup = () => {
    return (
        <BookingCont>
            <Wave source={require('../assets/background_wave.jpg')} />

            <HeaderCont>
                <Header title={'Create Account'} />
            </HeaderCont>

            {/* <SignUpFormCont>
                <SigninForm />
            </SignUpFormCont> */}


            <LottieCont>
                <HeroLottie
                    source={SignUpLottie}
                    width="200"
                />
            </LottieCont>

            <ButtonCont>
                <Btn
                    title={'Next'}
                    fSize={18}
                    width={110}
                    height={40}
                />
            </ButtonCont>

            <NavBarCont>
                <NavBar />
            </NavBarCont>
        </BookingCont>
    )
}

const styles = StyleSheet.create({
    cont: {
    },
});

export default signup
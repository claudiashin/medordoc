import React, { useState, useEffect, } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import styled from 'styled-components/native';

// import CalendarAPI from '../comps/CalendarAPI';
import Header from '../comps/Header';
import HeroLottie from '../comps/HeroLottie';
import SigninForm from '../comps/SigninForm';
// import DropDownFilter from '../comps/DropDownFilter';
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
    top: 80px;
`;

const HeaderCont = styled.View`
    justify-content: center;
    align-items: center;
    top: 200px;
`;

const SignUpFormCont = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
 
`;

const ButtonCont = styled.View`
    top: -260px;
    /* align-items: flex-end;
    width: 275px;
    margin-top: 25px; */
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
                    style={{width:250}}
                />
            </LottieCont>
            <HeaderCont>
                <Header title={'Create Account'} fontSize={22}/>
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
    // backgroundColor: '#F7F2EE',
    // justifyContent: 'center',
    // alignitems: 'center',
   
    },
  });

export default signup;

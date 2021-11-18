import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

// Import Comps
import Header from '../comps/Header';
// import InfoCard from '../comps/InfoCard';
import NavBar from '../comps/NavBar';
import InfoCardTwo from '../comps/InfoCardTwo';


const ConfirmCont = styled.View`
    flex: 1;
    background-color: #F7F2EE;
    justify-content: center;
    align-items: center;
`;

const Wave = styled.Image`
    width:100%;
    height: 10%;
    position: absolute;
    top: 0;
`;

const NavBarCont = styled.View`
   
`;

const MyScrollView = styled.ScrollView`

`
const Cont = styled.View`

`

const qrconfirm = () => {
    return (
        <ConfirmCont>
            <MyScrollView>
            <Wave source={require('../assets/background_wave.jpg')} />
            <Cont>
            <Header title="Booking Confirmed" fontSize={22} />
            </Cont>
            <Cont>
            <InfoCardTwo
                text1="Appointment Details"
                text2="Submitted on: Oct 7, 2021"
                text3="Appt Date: Oct 14, 2021"
                text4="Appt Time: 10:00 AM"
                text5="Location: Care Point Clinic"
                text6="1234 Canada Way, Burnaby V4J2B7"
                fweight="500"
                display="none"
            />
           
            <InfoCardTwo
                text1="QR Code Generated"
                text2="Your QR code has your booking details. For faster check-in, scan it at the front desk when you arrive."
                text3="To view, click on the QR Code icon in the nav below."
                fweight="300"
            />
            </Cont>
            </MyScrollView>
            <NavBarCont>
                <NavBar />
            </NavBarCont>
        </ConfirmCont>
    )
}

export default qrconfirm

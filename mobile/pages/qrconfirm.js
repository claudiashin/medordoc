import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

import Header from '../comps/Header';
import InfoCard from '../comps/InfoCard';
import NavBar from '../comps/NavBar';


const ConfirmCont = styled.View`
    flex: 1;
    background-color: #F7F2EE;
    justify-content: center;
    align-items: center;
`;

const Wave = styled.Image`
    width: 100%;
    height: 10%;
    position: absolute;
    top: 0;
`;

const QRImage = styled.Image`
    width: 25px;
    height: 25px;

`;

const NavBarCont = styled.View`
    position: absolute;
    bottom: 45;
`;

const qrconfirm = () => {
    return (
        <ConfirmCont>
            <Header/>
            <InfoCard
                clinic_name = {"Appointment Details"}
                clinic_address = {"Clinic Address"}
                website_url = {"https://www.bcit.ca/"}
                fontsize = {22}
                weight = {700}
            />
            <InfoCard/>
            <NavBarCont>
                <NavBar />
            </NavBarCont>
        </ConfirmCont>
    )
}

export default qrconfirm

import React,{useState,useEffect,} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import styled from 'styled-components/native';

// import CalendarAPI from '../comps/CalendarAPI';
import Header from '../comps/Header';
// import DropDownFilter from '../comps/DropDownFilter';
import Btn from '../comps/Btn';
import NavBar from '../comps/NavBar';
import InfoCard from '../comps/InfoCard';

const BookingCont = styled.View`
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

const CalendarAPICont = styled.View`

`;

const DropDownCont = styled.View`

`;

const ButtonCont = styled.View`
    /* justify-content: flex-end; */
    align-items: flex-end;
    width: 275px;
    /* height: 150px; */
    margin-top: 25px;
`;

const NavBarCont = styled.View`
    position: absolute;
    bottom: 45;
`;

const booking = () => {
    return (
        <BookingCont>
            <Wave source={require('../assets/background_wave.jpg')}/>
            
            <CalendarAPICont>
                <Text>Calendar</Text>
            </CalendarAPICont>
            <InfoCard/>

            <Header title={'Thursday, November 4th'}/>

            <DropDownCont>
                <Text>Drop Down Filter</Text>
            </DropDownCont>

            <ButtonCont>
                <Btn 
                    title={'Confirm'}
                    fSize={20}
                />
            </ButtonCont>

            <NavBarCont>
                <NavBar />
            </NavBarCont>
        </BookingCont>
    )
}

export default booking

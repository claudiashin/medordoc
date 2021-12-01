import React, { useState, useEffect, } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import styled from 'styled-components/native';
import { addDoc, collection,setDoc,getDoc,doc,query,where,} from 'firebase/firestore';
// import {db} from '../utils/store';
import {Auth} from '../utils/auth'
// // import {onAuthStateChanged} from 'firebase/auth'
import {getAuth} from 'firebase/auth'

import Calendar from '../comps/Calendar';
import Header from '../comps/Header';
// import DropDownFilter from '../comps/DropDownFilter';
import Btn from '../comps/Btn';
import BackBtn from '../comps/BackBtn';
import NavBar from '../comps/NavBar';
import Datepick from '../comps/DataPicker';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigationState } from '@react-navigation/native';

const BookingCont = styled.View`
    flex: 1;
    background-color: #F7F2EE;
    justify-content: center;

`;

const Wave = styled.Image`
    width: 100%;
    height: 30%;
    position: absolute;
    top: 0;
    z-index: 2;
`;

// const CalendarAPICont = styled.View`
// margin-top: 130px;
// `;

const DropDownCont = styled.View`
margin-top: 200px;
align-items:center;

`;

const ButtonCont = styled.View`
    /* justify-content: flex-end; */
    align-items: flex-end;
    width: 275px;
    /* height: 150px; */
    margin-top: 25px;
    
`;

const NavBarCont = styled.View`

`;
const MyScrollView = styled.ScrollView`

`
const BackCont = styled.View`
  display: flex;
  position: absolute;
  right: 300px;
  z-index: 999;
`
const HeaderCont = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    top: 100px;
    z-index: 999;

`
const booking = ({ route,navigation }) => {
    
    const [uid,setUID] = useState('');
    useEffect (()=>{
        const clinicUID = route.params;
        const num = clinicUID.clinicUID
        setUID(num);
       },[])
       console.log(uid);

    return (
        <BookingCont>
            <MyScrollView >

                {/* <BackCont>
                    <BackBtn/>
                </BackCont> */}
                <Wave source={require('../assets/backgroundmobile.png')} />
                <HeaderCont>
                <Header
                    title= "Schedule your appointment"
                />
                </HeaderCont>

                {/* <CalendarAPICont>
                    <Text>Calendar</Text>
                    <Calendar />
                </CalendarAPICont> */}

                {/* <Header title={'Thursday, November 4th'}/> */}

                <DropDownCont>
                    <Text>Pick the Time</Text>
                    <Datepick clinicId ={uid}/>
                </DropDownCont>
 
                <ButtonCont>
                    <Btn
                        title={'Confirm'}
                        fSize={18}
                        onPress={() => navigation.navigate('qrconfirm')}
                    />
                </ButtonCont> 

            </MyScrollView>

            <NavBarCont>
                <NavBar />
            </NavBarCont>
        </BookingCont>
    )
}

export default booking

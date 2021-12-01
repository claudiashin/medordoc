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
import { Button } from 'react-native-paper';

const BookingCont = styled.View`
flex:1;
background-color: #F7F2EE;
display:flex;
align-content:center;
justify-content: space-between;
z-index:1;
`;
const Wave = styled.Image`
    width: 100%;
    height: 30%;
    position: absolute;
    top: 0;
`;

const DropDownCont = styled.View`
align-items:center;
margin-top: 200px;

`;

const ButtonCont = styled.View`
    align-items: flex-end;
    width: 275px;
 
`;

const NavBarCont = styled.View`

`;
const MyScrollView = styled.ScrollView`
`

const BackCont = styled.View`
  display: flex;
  position: absolute;
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
            <ScrollView>
              <Wave source={require('../assets/backgroundmobile.png')} />
              <BackCont>
                    <BackBtn onPress={() => navigation.goBack()}/>
              </BackCont>
                    
                <DropDownCont>
                <View>
                    <Header title = {"Schedule an appointment"} />
                </View>  
    

                    <Datepick clinicId ={uid}/>
                    <Btn title={'Confirm'} onPress ={() => navigation.navigate('qrconfirm')} /> 
                    </DropDownCont>
{/* 
                <ButtonCont>
                    <Btn
                        title={'Confirm'}
                        fSize={18}
                        onPress={() => navigation.navigate('qrconfirm')}
                        />
                   </ButtonCont>   */}
              </ScrollView>        

            <NavBarCont>
                <NavBar />
            </NavBarCont>
         
        </BookingCont>
    )
}

export default booking

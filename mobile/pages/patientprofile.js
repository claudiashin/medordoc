import React,{useState,useEffect} from 'react';
import styled from 'styled-components/native';
import { Text, View,Image } from 'react-native';

import SigninForm from '../comps/SigninForm';
import BookingForm from '../comps/BookingForm';
import HeroAvatar from '../comps/HeroAvatar';



const MainCont = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`

const HeroCont = styled.View`
    margin-bottom: 50px;
`


export default function patientprofile() {
    return (
        <MainCont>
            <HeroCont>
                <HeroAvatar 
                    heroheight="150px"
                    herowidth="150px"
                    pluswidth="25px"
                    plusheight="25px"
                    right="0"
                    bottom="17px"
                />
            </HeroCont>
            <BookingForm />
        </MainCont>
    )
}
import React,{useState,useEffect} from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View,Image, ScrollView, Button } from 'react-native';

//importing comps
import DrDetail from '../comps/DrDetail';
import HeroAvatar from '../comps/HeroAvatar';
import Btn from '../comps/Btn';

const MainCont = styled.View`
    flex:1;
    justify-content: flex-start;
    align-items: center;
`;

const ImageCont = styled.View`
    margin-top: 30px;
    margin-bottom: 20px;
`;

const ButCont = styled.View`
    flex-direction: row;
    margin-top: 20px;
`;

export default function docprofile() {
    return <MainCont>
        <ImageCont>
            <HeroAvatar 
                heroheight="200"
                herowidth="200"
                visibility="hidden"
            
            />
        </ImageCont>
        <DrDetail></DrDetail>
        <ButCont>
            <Btn />
            <Btn />
        </ButCont>
    </MainCont>
}
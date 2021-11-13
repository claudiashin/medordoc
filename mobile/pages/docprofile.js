import React,{useState,useEffect} from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View,Image, ScrollView, Button } from 'react-native';

//importing comps
import DrDetail from '../comps/DrDetail';
import HeroAvatar from '../comps/HeroAvatar';
import Btn from '../comps/Btn';
import Header from '../comps/Header';

const MainCont = styled.View`
    flex:1;
    justify-content: flex-start;
    align-items: center;
`;

const ImageCont = styled.View`
    margin-top: 30px;
    margin-bottom: 20px;
`;

const HdCont = styled.View`
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`;

const ButCont = styled.View`
    flex-direction: row;
    margin-top: 20px;
    align-items: center;
    justify-content: space-around;
  

`;

export default function docprofile({navigation}) {
    return <MainCont>
        <ScrollView>
            <ImageCont>
                <HeroAvatar 
                    heroheight="200"
                    herowidth="200"
                    visibility="hidden"
                
                />
            </ImageCont>
            <DrDetail></DrDetail>
            <HdCont>
                <Header 
                    title="Would you like to request this doctor?"
                    fontSize="16"
                />
            </HdCont>
            <ButCont>
                <Btn 
                    title = "Back"
                    fsize = '20'
                    bgcolor = "#EA9898"
                    width = '100'
                    height = '45'
                    borderRad = '50'
                    onPress={() => navigation.goBack()}
                />
                <Btn 
                    title = "Yes"
                    fsize = '22'
                    width = '100'
                    height = '45'
                    borderRad = '50'
                    onPress={() => navigation.navigate('confirmreq')}
                />
            </ButCont>
        </ScrollView>
    </MainCont>
}

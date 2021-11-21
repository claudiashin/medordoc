import React,{useState,useEffect} from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View,Image, ScrollView, Button } from 'react-native';

//importing comps
import DrDetail from '../comps/DrDetail';
import HeroAvatar from '../comps/HeroAvatar';
import Btn from '../comps/Btn';
import Header from '../comps/Header';
import NavBar from '../comps/NavBar';

const MainCont = styled.View`
    flex:1;
    justify-content: flex-start;
    align-items: center;
`;

const Wave = styled.Image`
    width: 100%;
    height: 30%;
    position: absolute;
`;

const ImageCont = styled.View`
    margin-top: 100px;
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
    margin-bottom: 20px;
    align-items: center;
    justify-content: space-around;
  

`;
const NavBarCont = styled.View`
    flex: 0.15;
`;

export default function docprofile({navigation}) {
    return <MainCont>
        <Wave source={require('../assets/backgroundmobile.png')} />
        <ScrollView style={styles.scrollView}>
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

        <NavBarCont>
            <NavBar />
        </NavBarCont>

    </MainCont>
}

const styles = StyleSheet.create({
    scrollView: {
      flex: 0.85,
    },
  });

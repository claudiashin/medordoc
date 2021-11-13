import React,{useState,useEffect,} from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import styled from 'styled-components/native';

import HeroAvatar from '../comps/HeroAvatar';
import InfoCard from '../comps/InfoCard';
import Btn from '../comps/Btn';
import NavBar from '../comps/NavBar';



const Cont = styled.View`
  flex:1;
  background-color: #F7F2EE;
  display:flex;
  align-content:center;
  justify-content: space-between;
  z-index:1;
`
const Cont2 = styled.View`
    display: flex;
    padding-top: 20px;
    align-content:center;
    justify-content:center;
`
const Banner = styled.View`
    display: flex;
    z-index:2;
`
const NavBarCont = styled.View`

`;

const CardCont = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const BtnCont = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-right: 20px;

`
const MyScrollView = styled.ScrollView`

`
const ClinicProfile = ({navigation})=>{
    return(
       <Cont>   
           <MyScrollView>
            <Cont2>
                    <HeroAvatar herowidth={200} heroheight={200}/>
                    
            </Cont2>
            <CardCont>
                    <InfoCard/>
                    <InfoCard/>

            </CardCont>
            <BtnCont>
                <Btn onPress = {()=>navigation.navigate("login")}/>
            </BtnCont>
           </MyScrollView>

            <NavBarCont>
                <NavBar/>
            </NavBarCont>
        </Cont> 
    )
    }
    
    export default ClinicProfile;
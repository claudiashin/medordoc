import React,{useState,useEffect,} from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import styled from 'styled-components/native';

import HeroAvatar from '../comps/HeroAvatar';
import InfoCard from '../comps/InfoCard';
import Btn from '../comps/Btn';



const Cont = styled.View`
  width:100%;
  height:100%;
  background-color: #E9D7CB;
  display:flex;
  align-content:center;
  justify-content:center;
  z-index:1;
`
const Banner = styled.View`
    display: flex;
    z-index:2;
`

const ClinicProfile = ()=>{
    return(
       <Cont>

           
           <HeroAvatar/>
           <InfoCard/>
           <InfoCard/>
            <Btn/>
        </Cont> 
    )
    }
    
    export default ClinicProfile;
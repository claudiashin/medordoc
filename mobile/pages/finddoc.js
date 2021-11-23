import React,{useState,useEffect,} from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import styled from 'styled-components/native';
import Map from '../comps/Map'
import SearchBar from '../comps/SearchBar'
import Filiter from '../comps/Filter'
import ClinDocButton from '../comps/ClinDocButton'
import Header from '../comps/Header'

import BookingForm from '../comps/BookingForm';
import NavBar from '../comps/NavBar';


  const Cont = styled.View`
  flex:1;
  background-color: #F7F2EE;
  flex-direction: column;
  align-content:center;
  justify-content: space-between;
  `
  const Wave = styled.Image`
  width: 100%;
  height: 10%;
  position: absolute;
  top: 0;
  `;

  const FilterCont = styled.View`
  
  `
  const CardCont = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `
  const NavBarCont = styled.View`

`;
const MyScrollView = styled.ScrollView`

`

const finddoc = ({navigation})=>{
return(
   <Cont>
     <MyScrollView>
    
      <FilterCont>

        <Filiter/>
      </FilterCont>

      <CardCont>
        <ClinDocButton cardpress = {()=>navigation.navigate("docprofile")}/>
        <ClinDocButton cardpress = {()=>navigation.navigate("docprofile")}/>
        <ClinDocButton cardpress = {()=>navigation.navigate("docprofile")}/>
      </CardCont> 
    </MyScrollView>
    <NavBarCont>
      <NavBar/>
    </NavBarCont>
   
    </Cont> 
)
}

export default finddoc;
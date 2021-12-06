import React, { useState, useEffect, } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';


// Import Comps
import Map from '../comps/Map'
import SearchBar from '../comps/SearchBar'
import Filter from '../comps/Filter'
import ClinDocButton from '../comps/ClinDocButton'
import Header from '../comps/Header'
import BookingForm from '../comps/BookingForm';
import NavBar from '../comps/NavBar';
import BackBtn from '../comps/BackBtn';

const Cont = styled.View`
  background-color: #F7F2EE;
  flex:1;
  flex-direction: column;
  align-items:center;
  justify-content: space-between;
`
const Wave = styled.Image`
    width: 100%;
    height: 30%;
    position: absolute;
`;

// const Cont = styled.View`
//   width:100vw;
//   height:100vh;
//   background-color: #E9D7CB;
//   display:flex;
//   margin-top:320px;
//   align-items:center;
//   `


const SearchCont = styled.View`
    display: flex;
    flex-direction: row;
    margin-top: 30px;
  `
const MapCont = styled.View`
    display: flex;

  `
const FilterCont = styled.View`
    display: flex;
    margin-top: 20px;
   
  `
const CardCont = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `
    const NavBarCont = styled.View`
`;
const BackCont = styled.View`
  display: flex;
  position: absolute;
  z-index: 999;
  left: -25px;
  top: -15px;
`

export default function findclinic({navigation}){

 
  return (
    <Cont>
        <BackCont>
          
          <BackBtn onPress={() => navigation.goBack()}/>
        </BackCont>
        <Wave source={require('../assets/backgroundmobile.png')} />
        <Map />
        {/* <FilterCont>
          <Filter 
          headerText1={"Language Prefrences"}
          headerText2={"Location"}
          optionText1={"French"}
          optionText2={"Chinese"}
          optionText3={"Korean"}
          optionText4={"Japanese"}
          optionText5={"Punjabi"}
          optionText6={"Vietnamese"}

          optionText7={"Vancouver"}
          optionText8={"N.Vancouver"}
          optionText9={"Surrey"}
          optionText10={"Burnaby"}
          optionText11={"Richmond"}
          optionText12={"Coquitlam"}
          /> 
        </FilterCont> */}
        
        {/* <CardCont> */}
          {/* <ClinDocButton cardpress={() => navigation.navigate("clinicprofile")} />
          <ClinDocButton cardpress={() => navigation.navigate("clinicprofile")} />
          <ClinDocButton cardpress={() => navigation.navigate("clinicprofile")} /> */}
        {/* </CardCont>  */}

      <NavBarCont>
        <NavBar />
      </NavBarCont>
    </Cont>

  )

}





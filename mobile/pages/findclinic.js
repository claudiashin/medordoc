import React, {useState,useEffect,} from 'react';
import { StyleSheet, Text, View,Image, ScrollView } from 'react-native';
import styled from 'styled-components/native';

// Import Comps
import Map from '../comps/Map'
import SearchBar from '../comps/SearchBar'
import Filiter from '../comps/Filter'
import ClinDocButton from '../comps/ClinDocButton'
import Header from '../comps/Header'
import BookingForm from '../comps/BookingForm';
import NavBar from '../comps/NavBar';

  const Cont = styled.View`
  background-color: #F7F2EE;
  flex:1;
  flex-direction: column;
  align-items:center;
  justify-content: space-between;
`

const SubCont = styled.ScrollView`

`
// const Cont = styled.View`
//   width:100vw;
//   height:100vh;
//   background-color: #E9D7CB;
//   display:flex;
//   margin-top:320px;
//   align-items:center;
//   `

  const Wave = styled.Image`
  width: 100%;
  height: 10%;
  position: absolute;
  top: 0;
  `;
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
    margin-top: 30px;
  `
  const CardCont = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    bottom: 350px;
    z-index: -1;
  `
  const NavBarCont = styled.View`

`;

const findclinic = ({navigation})=>{
return ( 
<Cont>
  <SubCont>
    <Wave source={require('../assets/background_wave.jpg')}/>
    <SearchCont>
      <SearchBar/>
    </SearchCont>
    
    <Map/>
    <FilterCont>
      <Filiter/>
    </FilterCont>
    
    <CardCont> 
      <ClinDocButton cardpress = {()=>navigation.navigate("clinicprofile")}/>
      <ClinDocButton cardpress = {()=>navigation.navigate("clinicprofile")}/>
      <ClinDocButton cardpress = {()=>navigation.navigate("clinicprofile")}/>
    </CardCont>
  </SubCont>  

    <NavBarCont>
      <NavBar/>
    </NavBarCont>
   
    </Cont> 
    
)

}
export default findclinic;




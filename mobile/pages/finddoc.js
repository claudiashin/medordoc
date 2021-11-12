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
  width:100%;
  height:100%;
  background-color: #F7F2EE;
  display:flex;
  flex-direction: column;
  align-content:center;
  justify-content: space-between;
  `
  const SearchCont = styled.View`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
  `
  const MapCont = styled.View`
    display: flex;

  `
  const FilterCont = styled.View`
    display: flex;
  `
  const CardCont = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `
  const NavBarCont = styled.View`

`;


const finddoc = ()=>{
return(
   <Cont>
     <SearchCont>
     <SearchBar/>
     </SearchCont>
      <MapCont>
      <Map/>
      </MapCont>
    <FilterCont>

    <Filiter/>
    </FilterCont>

    <CardCont>
      
      <ClinDocButton/>
      <ClinDocButton/>
      <ClinDocButton/>
    </CardCont>

    <NavBarCont>
      <NavBar/>
    </NavBarCont>
   
    </Cont> 
)
}

export default finddoc;
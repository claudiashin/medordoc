import React,{useState,useEffect,} from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import styled from 'styled-components/native';
import Map from '../comps/Map'
import SearchBar from '../comps/SearchBar'
import Filiter from '../comps/Filter'
import ClinDocButton from '../comps/ClinDocButton'

import BookingForm from '../comps/BookingForm';


  const Cont = styled.View`
  width:100%;
  height:100%;
  background-color: #E9D7CB;
  display:flex;
  align-content:center;
  justify-content:center;
  `


<<<<<<< HEAD
const findclinic = ()=>{
return(
   <Cont>
    <SearchBar/>   
    <Map/>
    <Filiter/>
   
    </Cont> 
)
=======
const findclinic = () => {
  return(
    <Cont>
      <SearchBar/>   
      <Map/>
      {/* <Filiter/> */}
    
      </Cont> 
  )
>>>>>>> a73572e8c6cdf7573f21413943d1af4949a2e355
}

export default findclinic;


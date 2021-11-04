import React,{useState,useEffect,} from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import styled from 'styled-components/native';
import Map from '../comps/Map'
import SearchBar from '../comps/SearchBar'
import Filiter from '../comps/Filter'
import ClinDocButton from '../comps/ClinDocButton'


  const Cont = styled.View`
  width:"400px";
  height:400px;
  display:flex;
  ceneter
  `


const findclinic = ()=>{
return(
   <Cont>
    <SearchBar/>   
    <Map/>
    {/* <Filiter/> */}
   
    </Cont> 
)
}

export default findclinic;


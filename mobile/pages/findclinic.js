import React,{useState,useEffect,} from 'react';
import { StyleSheet, Text, View,Image, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import Map from '../comps/Map'
import SearchBar from '../comps/SearchBar'
import Filiter from '../comps/Filter'
import ClinDocButton from '../comps/ClinDocButton'

  const Cont = styled.View`
  width:100%;
  height:50%;
  display:flex;
  align-items:center;
  `

  const MiniCont = styled.View`
  width:100%;
  height:800px;
  display:flex;
  margin-top:320px;
  align-items:center;
  `


const findclinic = ()=>{
return(
   <Cont>
    <SearchBar/>
    <Map/>
    {/* <Filiter/> */}

      <MiniCont>
        <ClinDocButton/>
        <ClinDocButton/>
        <ClinDocButton/>
      </MiniCont>
  

 
    </Cont> 
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView:{
    flex: 1,
    marginTop:100,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default findclinic;


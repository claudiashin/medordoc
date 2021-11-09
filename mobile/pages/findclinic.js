<<<<<<< HEAD
import React,{useState,useEffect,} from 'react';
import { StyleSheet, Text, View,Image, ScrollView } from 'react-native';
=======
import React, { useState, useEffect, } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
>>>>>>> 7d04e40d9055d823c59c3cfe8ea641823abe40d4
import styled from 'styled-components/native';
import Map from '../comps/Map'
import SearchBar from '../comps/SearchBar'
import Filiter from '../comps/Filter'
import ClinDocButton from '../comps/ClinDocButton'

import BookingForm from '../comps/BookingForm';


const Cont = styled.View`
  width:100vw;
  height:100vh;
  background-color: #E9D7CB;
  display:flex;
<<<<<<< HEAD
  margin-top:320px;
  align-items:center;
  `



const findclinic = ()=>{
return(
   <Cont>
    <SearchBar/>
    <Map/>
    <Filiter/>
   
    </Cont> 
)

=======
  align-content:center;
  justify-content:center;
`;


>>>>>>> 7d04e40d9055d823c59c3cfe8ea641823abe40d4
const findclinic = () => {
  return (
    <Cont>
      <SearchBar />
      <Map />
      <Filiter />

    </Cont>
  )
<<<<<<< HEAD

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
}
export default findclinic;
=======
}
export default findclinic;
>>>>>>> 7d04e40d9055d823c59c3cfe8ea641823abe40d4

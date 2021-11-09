import React,{useState,useEffect,} from 'react';
import { StyleSheet, Text, View,Image, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import Map from '../comps/Map'
import SearchBar from '../comps/SearchBar'
import Filiter from '../comps/Filter'
import ClinDocButton from '../comps/ClinDocButton'

<<<<<<< HEAD
  const Cont = styled.View`
  width:100%;
  height:50%;
  display:flex;
  align-items:center;
  `

  const MiniCont = styled.View`
  width:100%;
  height:800px;
=======
import BookingForm from '../comps/BookingForm';


  const Cont = styled.View`
  width:100%;
  height:100%;
  background-color: #E9D7CB;
>>>>>>> 944c0c7210a4a98071fa5d093c4224fc37a33d61
  display:flex;
  margin-top:320px;
  align-items:center;
  `


<<<<<<< HEAD
const findclinic = ()=>{
return(
   <Cont>
    <SearchBar/>
    <Map/>
<<<<<<< HEAD
    {/* <Filiter/> */}

      <MiniCont>
        <ClinDocButton/>
        <ClinDocButton/>
        <ClinDocButton/>
      </MiniCont>
  

 
=======
    <Filiter/>
   
>>>>>>> 944c0c7210a4a98071fa5d093c4224fc37a33d61
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


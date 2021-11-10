import React, { useState, useEffect, } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
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
  align-content:center;
  justify-content:center;
`;


const findclinic = () => {
  return (
    <Cont>
      <SearchBar />
      <Map />
      <Filiter />

    </Cont>
  )
}
export default findclinic;

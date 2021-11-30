import React, { useState, useEffect, } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import styled from 'styled-components/native';
import Map from '../comps/Map'
import SearchBar from '../comps/SearchBar'
import Filiter from '../comps/Filter'
import ClinDocButton from '../comps/ClinDocButton'
import Header from '../comps/Header'
import BackBtn from '../comps/BackBtn';

import BookingForm from '../comps/BookingForm';
import NavBar from '../comps/NavBar';
import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from '../utils/store'



const Cont = styled.View`
  flex:1;
  background-color: #F7F2EE;
  flex-direction: column;
  align-content:center;
  justify-content: space-between;
  `
const Wave = styled.Image`
  width: 100%;
  height: 30%;
  position: absolute;
  top: 0;
  `;
  const WaveCont = styled.View`
  width:100%;
  height:500px
  `

  const FilterCont = styled.View`
    margin-top: 180px;
    align-items: center;
  `
  const HeaderCont = styled.View`
    display:flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    top: 120px;
  `
  const HeaderCont2 = styled.View`
  display:flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 50px;
  margin-top: 25px;
`
const CardCont = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `
const NavBarCont = styled.View`

`;
const ScrollView = styled.ScrollView`



`
const BackCont = styled.View`
  display: flex;
  position: absolute;
  z-index: 999;
`

const finddoc = ({navigation})=>{

const [doctors,setDoctors] = useState([])

  useEffect(()=>{
  const GetData = async()=>{
      const querySnapshot = await getDocs(collection(db, "doctors"));
      querySnapshot.forEach((doc) => {
        const doctorInfo = doc.data()
        console.log(doctorInfo.clinicId)
        const hehe =  getDocs(collection(db, "clinics", doctorInfo.clinicId))
        doctors.push(<ClinDocButton bodyText={doc.data().name} cardpress={() => navigation.navigate("docprofile",{
          doctorInfo
        })} />
        )
      });
     setDoctors([
       ...doctors
     ])

      }

      GetData()

      
  },[])

  // const reload = async () => {
  //   const q = query(collection(db, "doctors"), where("gender", "==", "male"));
  //   const querySnapshot = await getDocs(q);
  //   console.log(querySnapshot);
  //   const doctors = [];
    // querySnapshot.forEach((doc) => {
    //   var temp = doc.data();
    //   temp.id = doc.id;
    //   doctors.push(temp);
    // });
return( <Cont>
  <ScrollView keyboardShouldPersistTaps={'handled'}>
  <BackCont>
    <BackBtn onPress={() => navigation.goBack()} />
    </BackCont>

    <WaveCont>
  <Wave source={require('../assets/backgroundmobile.png')} />
  </WaveCont>
  <HeaderCont >
    <Header
      title="Find a Family Doctor"
      fSize="26px"
      />
  </HeaderCont>

  
    <FilterCont>
    <Filiter 
              headerText1={"Language Prefrences"}
              headerText2={"Gender"}
              optionText1={"French"}
              optionText2={"Chinese"}
              optionText3={"Korean"}
              optionText4={"Japanese"}
              optionText5={"Punjabi"}
              optionText6={"Vietnamese"}
    
              optionText7={"Male"}
              optionText8={"Female"}
              display={"none"}

    /> 
    </FilterCont>

    <HeaderCont2>
    <Header
      title="Available Doctors"
      fSize="26px"
      />
  </HeaderCont2>
   

  <CardCont>
    {doctors}
  </CardCont> 

</ScrollView> 

<NavBarCont>
  <NavBar />
</NavBarCont>
</Cont>
  )

}

export default finddoc;
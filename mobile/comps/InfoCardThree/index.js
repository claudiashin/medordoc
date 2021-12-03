import styled from "styled-components/native";
import React, {useEffect, useState} from "react";
import { StyleSheet, View, Button, Linking, Text } from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDocs, collection, query, where, deleteDoc, doc, getDoc } from "firebase/firestore";
import {db} from '../../utils/store'
import app from "../../utils/inits";

import AppLoading from 'expo-app-loading';
import { useFonts, Nunito_400Regular, Nunito_600SemiBold,  Nunito_700Bold, } from '@expo-google-fonts/nunito';


const InfoCardCont = styled.View`
  width: 300px;
  border: #e9d7cb;
  padding: 20px;
  margin: 10px;
  background-color: #fff;
`;

const HeadingCont = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
`;

const Heading = styled.Text`
  font-size: ${(props) => props.heading_fs}px;
  font-weight: ${(props) => props.heading_fw};
  color: #505050;
  margin: 10px;
  text-align: center;
`;

const BodyCont = styled.View``;

const Date = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #505050;
  margin: 10px 10px 0px 10px;
`;

const Clinic = styled.Text`
  font-size: 16px;
  margin: 10px;
  color: #505050;
`;

const Test = styled.View`
`

const InfoCardThree = ({
  text = "Details",
  text2 = "January 16, 2021",
  text3 = "North Van Clinic",
  text4 = "March 12, 2021",
  text5 = "Burnaby Medical Clinic",
  text6 = "June 8, 2021",
  text7 = "Vancouver Medical Clinic",
  text8 = "September 22, 2021",
  text9 = "Burnaby Medical Clinic",
  fontsize = 18,
  weight = 700,
}) => {
  const [apptData, setApptData] = useState("")
  const [data, setData] = useState([])
  const [clinData, setClinData] = useState("")
  const [dataTwo, setDataTwo] = useState([])

  const [test, setTest] = useState("")
  useEffect(()=>{
    
    const auth = getAuth();
    const userid = auth.currentUser.uid;
    
    const reload = async() => {
      
      const q = query(collection(db, "appointment"), where("userid", "==", userid));
      const querySnapshot =  await getDocs(q);
 
      const b = query(collection(db, "clinics"), where("clinicId", "==", test));
      const querySnapshotb =  await getDocs(b);

      querySnapshotb.forEach((doc) => {
        const clin = doc.data()
        dataTwo.push(<Clinic>{doc.data().name}</Clinic>)
        setDataTwo([...dataTwo])
      })

      querySnapshot.forEach((doc) => {
        const appt = doc.data()
        console.log(clinData.name)

          data.push(
            <Test key={doc.id}>
          <Date >Clinic: {appt.cliname}</Date>
          <Clinic >Date: {appt.bookingdate}, Time: {appt.bookingtime}</Clinic>
          </Test>
 
            )
            setData([...data])
          // console.log(appt)
          setApptData(appt)
          setTest(appt.clinicId)
          
      });
      
      
    };
    reload()
  },[])

  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  if(!fontsLoaded) {
      return <AppLoading />
  } else {
  
  return (
    <InfoCardCont>
      <HeadingCont>
        <Heading heading_fs={fontsize} heading_fw={weight}>
          {text}
        </Heading>
      </HeadingCont>

      <BodyCont style={{fontFamily: 'Nunito_400Regular'}}>

       {data}
       {dataTwo}
      </BodyCont>
    </InfoCardCont>
  );
  };}

const styles = StyleSheet.create({});

export default InfoCardThree;

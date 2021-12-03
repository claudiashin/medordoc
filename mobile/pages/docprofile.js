import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
} from "react-native";

//importing comps
import DrDetail from "../comps/DrDetail";
import HeroAvatar from "../comps/HeroAvatar";
import Btn from "../comps/Btn";
import Header from "../comps/Header";
import NavBar from "../comps/NavBar";
import BackBtn from "../comps/BackBtn";

import AppLoading from 'expo-app-loading';
import { useFonts, Nunito_400Regular, Nunito_600SemiBold,  Nunito_700Bold, } from '@expo-google-fonts/nunito';
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { getDoc, doc, updateDoc, addDoc, collection } from 'firebase/firestore';
import { db } from '../utils/store';


const MainCont = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;

const Wave = styled.Image`
  width: 100%;
  height: 30%;
  position: absolute;
`;
const Avatar = styled.Image`
  width: 200px;
  height: 200px;
  border-radius:500px;
`;

const ImageCont = styled.View`
  margin-top: 100px;
  margin-bottom: 20px;
  width:100%;
  justify-content:center;
  align-items:center;
`;

const HdCont = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const ButCont = styled.View`
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 220px;
`;
const NavBarCont = styled.View`
  flex: 0.15;
`;
const BackCont = styled.View`
  display: flex;
  position: absolute;
  right: 330px;
  z-index: 999;
`

export default function docprofile({ navigation, route }) {
  // const {doctorInfo} = route.params;
  const {doctorInfo} = route.params;
  
  const [uid, setUid] = useState();

  useEffect(async () => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if(user) {
        setUid(user.uid);
        // console.log(user.uid);
        const userPatRef = doc(db, 'patientuser', user.uid);
        // console.log(userPatRef);
        const data = await getDoc(userPatRef);
        const result = data.data();
        console.log(result.fname + " " +result.lname);
        console.log(result.email);
        console.log(result.gender);
        console.log(result.concern);
      }
    })

  },[]);
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  if(!fontsLoaded) {
    return <AppLoading />
} else {
  

  
  return (

    <MainCont>
      <Wave source={require("../assets/backgroundmobile.png")} />
      <ScrollView style={styles.scrollView}>
        <BackCont>
          <BackBtn onPress={() => navigation.goBack()}/>
        </BackCont>
        <ImageCont>
          {/* <HeroAvatar heroheight="200" herowidth="200" visible="none" /> */}
        <Avatar source={{uri:doctorInfo.img}}/>
        </ImageCont>
        <DrDetail 
        doctorInfo={doctorInfo}
        ></DrDetail>
        <HdCont>
          <Header
            // syle={{fontSize:10}}
            title="Would you like to request this doctor?"
          fontSize={20}
          />
        </HdCont>
        <ButCont>

          <Btn
            title="Yes"
            fsize="22"
            width="100"
            height="45"
            borderRad="50"
            // onPress={() => navigation.navigate("confirmreq",{
            //   doctorInfo
            // }
            // console.log(doctorInfo.clinicId);)}
            onPress={async() => {
              const reqDoc = await addDoc(collection(db, "requests"), {
                // name: result.fname + result.lname,
                // email: result.email,
              })
              navigation.navigate("confirmreq", {doctorInfo})
            }
          }
          />
        </ButCont>
      </ScrollView>

      <NavBarCont>
        <NavBar />
      </NavBarCont>
    </MainCont>
  );
}}

const styles = StyleSheet.create({
  scrollView: {
    flex: 0.85,
  },
});
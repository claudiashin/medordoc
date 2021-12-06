import styled from "styled-components/native";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

//import comps
import NavBar from "../comps/NavBar";
import HeroAvatar from "../comps/HeroAvatar";
import Header from "../comps/Header";
import InfoCardThree from "../comps/InfoCardThree";
import Qrcode from "../comps/QrCode";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import {db} from '../utils/store'
import { getDocs, collection, query, where, deleteDoc, doc, getDoc } from "firebase/firestore";


const Cont = styled.View`
  flex: 1;
  justify-content:space-between;

`;

const Wave = styled.Image`
  width: 100%;
  height: 30%;
  position: absolute;
`;

const NavBarCont = styled.View`

`;
const QRCont = styled.View`
  justify-content: center;
  align-items: center;
`;
const HeaderCont = styled.View`
  margin: 100px 0 50px 0;
  justify-content: center;
  align-items: center;
`;

const MainCont=styled.View`

`
const QR = ({ navigation }) => {
  const [userName, setUserName] = useState()
  useEffect(()=>{
    const auth = getAuth();
    const userid = auth.currentUser.uid;
    const getUser = async () => {
      const docRef = doc(db, "patientuser", userid);
      const docSnap = await getDoc(docRef);
      const userName2 = docSnap.data().fname + ' ' + docSnap.data().lname
      if (docSnap.exists()) {
       setUserName(userName2)
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }

  
    getUser()
  },[])
  return (
    <Cont>
      <ScrollView style={styles.scrollView}>
        <Wave source={require("../assets/backgroundmobile.png")} />
        <MainCont>
        <HeaderCont>
          {/* <HeroAvatar visible={"none"} heroheight="180" herowidth="180" /> */}
          <View
            style={{backgroundColor: '#faf7f3',
            borderRadius: '100%',

          }}
          >
          <Image 
            source={require('../assets/man.png')}
            style={{width: 120, height: 120, margin: 10}}
          />
          </View>
          <Header title={userName} fontSize="22" style={{ paddingTop: 20 }} />
          <Header title="Scan Your QR Code" />
        </HeaderCont>

        <QRCont>
          <Qrcode 
          />
          <InfoCardThree
            text="Next Appointment Details"
            text2="Date"
            text3="December 5th, 2021"
            text4="Time"
            text5="10:00 AM"
            text6="Location"
            text7="Vancouver Medical Clinic, 1234 Canada Way, V4J 2B7"
            text8=""
            text9=""
          />
        </QRCont>

        </MainCont>
      </ScrollView>

      <NavBarCont>
        <NavBar />
      </NavBarCont>
    </Cont>
  );
};

const styles = StyleSheet.create({
  scrollView: {
  flex:1
  },
});

export default QR;

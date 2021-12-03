import React, {useEffect, useState} from "react";
import styled from 'styled-components/native';
import HeroAvatar from '../comps/HeroAvatar';
import InfoCard from '../comps/InfoCard'
import NavBar from "../comps/NavBar";
import Header from "../comps/Header";
import InfoCardThree from '../comps/InfoCardThree';
import { EdgeInsetsPropType } from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {db} from '../utils/store'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
} from "react-native";
import { getDocs, collection, query, where, deleteDoc, doc, getDoc } from "firebase/firestore";


const AvatarCont = styled.View`
  align-items:center;
  margin-top: 100px;
`
const BodyCont = styled.View`
  align-items:center;
`

const Cont = styled.View`
  justify-content:space-between;
  flex:1;
`
const Wave = styled.Image`
    width: 100%;
    height: 40%;
    position: absolute;
`;

const NavBarCont = styled.View`
`;

const HeaderCont = styled.View`
  margin: 20px 0px 0px 50px;
`;

const MainCont = styled.View`
`;
const BodyContCont = styled.ScrollView`

`
const History = () => {
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
  
  return <Cont>

    <BodyContCont>
      <Wave source={require('../assets/backgroundmobile.png')} />
      <MainCont>
        
        <AvatarCont>

        <View style={{ backgroundColor: "white", borderRadius: "100%" }}>
              <Image
                source={require("../assets/man.png")}
                style={{ width: 120, height: 120, margin: 10 }}
              />
       </View>
    
          <Header fontSize={18} fontWeight={"normal"} title={userName} />
        </AvatarCont>

        <HeaderCont>
          <Header title="Booking History" />
        </HeaderCont>

        <BodyCont>
          <InfoCardThree />
        </BodyCont>
      </MainCont>

    </BodyContCont>
    <NavBarCont>
      <NavBar />
    </NavBarCont>
  </Cont>
}

export default History
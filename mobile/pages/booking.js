import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import styled from "styled-components/native";
import {
  addDoc,
  collection,
  setDoc,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
// import {db} from '../utils/store';
import { Auth } from "../utils/auth";
// // import {onAuthStateChanged} from 'firebase/auth'
import { getAuth } from "firebase/auth";

import Calendar from "../comps/Calendar";
import Header from "../comps/Header";
// import DropDownFilter from '../comps/DropDownFilter';
import Btn from "../comps/Btn";
import BackBtn from "../comps/BackBtn";
import NavBar from "../comps/NavBar";
import Datepick from "../comps/DataPicker";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigationState } from "@react-navigation/native";

const BookingCont = styled.View`
  flex: 1;
  background-color: #f7f2ee;
  justify-content: center;
`;
const MyScrollView = styled.ScrollView`

`;

const Wave = styled.Image`
  width: 100%;
  height: 30%;
  position: absolute;
  top: 0;
`;

const Body = styled.View`
justify-content: center;
align-items: center;
`;

const DropDownCont = styled.View`
  justify-content: center;
  align-items: center;
`;

const ButtonCont = styled.View`

  width: 275px;
  margin-top: 25px;
`;

const NavBarCont = styled.View``;

const BackCont = styled.View`
  display: flex;
  position: absolute;
  right: 300px;
  z-index: 999;
`;


const booking = ({ route, navigation }) => {
  const [uid, setUID] = useState("");
  useEffect(() => {
    const clinicUID = route.params;
    const num = clinicUID.clinicUID;
    setUID(num);
  }, []);
  console.log(uid);

  return (
    <BookingCont>
      <MyScrollView contentContainerStyle={{flex: 1 }}>
        {/* <BackCont>
                    <BackBtn/>
                </BackCont> */}
        <Wave source={require("../assets/backgroundmobile.png")} />

        {/* <CalendarAPICont>
                    <Text>Calendar</Text>
                    <Calendar />
                </CalendarAPICont> */}

        {/* <Header title={'Thursday, November 4th'}/> */}
        <Body>
          <DropDownCont>
            <Text>Pick the Time</Text>
            <Datepick clinicId={uid} />
          </DropDownCont>

          <ButtonCont>
            <Btn
              title={"Confirm"}
              fSize={18}
              onPress={() => navigation.navigate("qrconfirm")}
            />
          </ButtonCont>
        </Body>
      </MyScrollView>

      <NavBarCont>
        <NavBar />
      </NavBarCont>
    </BookingCont>
  );
};

export default booking;

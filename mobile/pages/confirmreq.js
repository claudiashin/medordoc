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

//import comps
import Header from "../comps/Header";
import InfoCardTwo from "../comps/InfoCardTwo";
import Btn from "../comps/Btn";
import BackBtn from "../comps/BackBtn";
import NavBar from "../comps/NavBar";


import AppLoading from 'expo-app-loading';
import { useFonts, Nunito_400Regular, Nunito_600SemiBold,  Nunito_700Bold, } from '@expo-google-fonts/nunito';

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

const HdCont = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 135px;
margin-bottom:20px;
`;
const HdCont2 = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;
const ButCont = styled.View`

  margin-top: 20px;
  margin-bottom: 30px;
  align-items: flex-end;
  justify-content: flex-end;
  width:78%;
`;
const BackCont = styled.View`
  display: flex;
  position: absolute;
  z-index: 999;
  right: 370px;
  top: -20px;
`;
const NavBarCont = styled.View``;

export default function confirmreq({ navigation, route }) {
  const [changeForm, setChangeForm] = useState(true);
  const { doctorInfo } = route.params;

  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    if (changeForm === true) {
      return (
        <MainCont>
          <BackCont>
            <BackBtn onPress={() => navigation.goBack()} />
          </BackCont>
          <Wave source={require("../assets/backgroundmobile.png")} />

          <ScrollView>
            <View
              style={{ display: "flex", alignItems: "center", marginTop: 30 }}
            >
              <HdCont>
                <Header 
                style={{fontFamily: 'Nunito_700Bold'}}
                title="Request Process" fontSize="28" />
              </HdCont>

              <InfoCardTwo
                text1="Doctor and Clinic Details"
                text3={"Doctor: " + doctorInfo.name}
                text4={"Languages: " + doctorInfo.lang[0]}
                text5={"Location: " + doctorInfo.location}
                text6="Contact: 604-123-4567"
                fsize="18"
                fweight="700"
                display="none"
              />
              <InfoCardTwo
                text2="Your submission will be sent to the clinic where it will be reviewed and processed. "
                text4="Be advised it will take 5-7 business days."
                text5="The clinic will contact you directly to arrange an appointment. "
                display="none"
                height="280"
              />
              <HdCont2>
                <Header
                  title="Would you like to proceed with this request?"
                  fontSize="17"
                  fontWeight="500"
                />
              </HdCont2>
              <ButCont>
                <Btn
                style={{fontFamily: 'Nunito_400Regular'}}
                  title="Send Request"
                  fsize="18"
                  width="160"
                  height="50"
                  borderRad="50"
                  onPress={() => {
                    setChangeForm(false);
                  }}
                />
              </ButCont>
            </View>
          </ScrollView>
          <NavBarCont>
            <NavBar />
          </NavBarCont>
        </MainCont>
      );
    }
    return (
      <MainCont>
        <Wave source={require("../assets/backgroundmobile.png")} />
        <ScrollView>
          <HdCont>
            <Header title="Submission Confirmed" fontSize="28" />
          </HdCont>

          <InfoCardTwo
            text1="Request Details"
            text3="Submitted on: Oct 7, 2021"
            text4={"Requested for: " + doctorInfo.name}
            text5={"Location: " + doctorInfo.location}
            text6="Contact: 604-123-4567"
            fsize="18"
            fweight="700"
            display="none"
          />
          <InfoCardTwo
            text2="Your request for a family doctor has been sent to your designated clinic.  "
            text4="You will be contacted directly by the clinic. "
            text5="Please contact the clinic for further details. "
            display="none"
            height="280"
          />
        </ScrollView>
        <NavBarCont>
          <NavBar />
        </NavBarCont>
      </MainCont>
    );
  }
}
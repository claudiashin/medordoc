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

const Cont = styled.View`
  flex: 1;
`;

const Wave = styled.Image`
  width: 100%;
  height: 10%;
  position: absolute;
`;

const NavBarCont = styled.View`
  flex: 0.15;
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
const QR = ({ navigation }) => {
  return (
    <Cont>
      <ScrollView style={styles.scrollView}>
        <Wave source={require("../assets/backgroundmobile.png")} />

        <HeaderCont>
          <HeroAvatar visible={"none"} heroheight="180" herowidth="180" />
          <Header title="User Name" fontSize="22" style={{ paddingTop: 20 }} />
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
      </ScrollView>

      <NavBarCont>
        <NavBar />
      </NavBarCont>
    </Cont>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 0.85,
  },
});

export default QR;

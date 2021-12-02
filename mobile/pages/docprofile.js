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

const ImageCont = styled.View`
  margin-top: 100px;
  margin-bottom: 20px;
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
  const { doctorInfo} = route.params;
  return (
    <MainCont>
      <Wave source={require("../assets/backgroundmobile.png")} />
      <ScrollView style={styles.scrollView}>
        <BackCont>
          <BackBtn onPress={() => navigation.goBack()}/>
        </BackCont>
        <ImageCont>
          <HeroAvatar heroheight="200" herowidth="200" visible="none" />
        </ImageCont>
        <DrDetail doctorInfo={doctorInfo}></DrDetail>
        <HdCont>
          <Header
            title="Would you like to request this doctor?"
            fontSize="16"
          />
        </HdCont>
        <ButCont>

          <Btn
            title="Yes"
            fsize="22"
            width="100"
            height="45"
            borderRad="50"
            onPress={() => navigation.navigate("confirmreq",{
              doctorInfo
            })}
          />
        </ButCont>
      </ScrollView>

      <NavBarCont>
        <NavBar />
      </NavBarCont>
    </MainCont>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 0.85,
  },
});

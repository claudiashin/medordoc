import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { GoogleAuthProvider, getAuth, signInWithPopup,createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import styled from "styled-components/native";
import app from '../utils/inits';

import Header from "../comps/Header";
import HeroLottie from "../comps/HeroLottie";
import SigninForm from "../comps/SigninForm";
import NavBar from "../comps/NavBar";

const BookingCont = styled.View`
  flex: 2;
`;

const Wave = styled.Image`
  width: 100%;
  height: 30%;
  position: absolute;
`;

const LottieCont = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 70px;
`;

const HeaderCont = styled.View`
  margin: 27px;
`;

const SignUpFormCont = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const NavBarCont = styled.View`
  flex: 0.15;
`;

const signup = (
 userid = userid
) => {
    
    const CreateUser = async(em,ps)=>{
    const auth =getAuth();
    const result = await createUserWithEmailAndPassword(auth,em,ps);
    userid = result.user.uid
    console.log(userid)
    alert("Created!")
        }


  return (
    <BookingCont>
      <ScrollView style={styles.scrollView}>
        <Wave source={require("../assets/backgroundmobile.png")} />

        <LottieCont>
          <HeroLottie
            source={require("../assets/lottie_user.json")}
            style={{ width: 250 }}
          />
        </LottieCont>

        <HeaderCont>
          <Header title={"Create Account"} fontSize={22} />
        </HeaderCont>

        <SignUpFormCont>
          <SigninForm  onCreate = {CreateUser} userid = {userid}/>
        </SignUpFormCont>
        
      </ScrollView>
      <NavBarCont>
        <NavBar />
      </NavBarCont>
    </BookingCont>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 0.85,
  },
});

export default signup;

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import Lottie from "react-lottie";
import React from "react";
import { useRouter } from "next/router";

//import comps
import HeaderTitle from "../comps/HeaderTitle";
import LoginForm from "../comps/LoginForm";
import HeroLottie from "../comps/HeroLottie";
import NavBar from "../comps/NavBar";
import myLottie from "../public/lottie_receptionist.json";
import Btn from "../comps/Btn";
import Footer from "../comps/Footer";

const Cont = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #f7f2ee;
  width: 100vw;
  height: 100wh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const WaveCont = styled.div`
  width: 100%;
  object-fit: cover;
`;

const Wave = styled.img`
  width: 100%;
  @media only screen and (min-width: 500px) {
    object-fit: cover;
    height: 320px;
    width: 100%;
  }
`;

const NavBarCont = styled.div`
  width: 100%;
  // height:300px;
  position: absolute;
  top: 0;
`;

const BodyCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`;
const TitleCont = styled.div`
  position: absolute;
  top: 300px;
  right: 500px;
`;
const Subcont = styled.div`
  display: flex;
  flex-direction: column;
`;
const HeaderwithNav = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  background-color: #b9d1e1;
  margin-bottom: 100px;
`;

export default function Home() {
  const router = useRouter();

  return (
    <Cont>
      <WaveCont>
        <Wave src={"/background-web5.svg"}></Wave>
      </WaveCont>

      <NavBarCont>
        <NavBar />
      </NavBarCont>

      <BodyCont>
        <TitleCont>
          <HeaderTitle title="Welcome Back" fontSize="36" />
        </TitleCont>
        <HeroLottie source={myLottie} width="400px" />
        <Subcont style={{ marginTop: 100 }}>
          <LoginForm width="250" style={{ marginTop: 100 }} />
        </Subcont>
      </BodyCont>

      <Footer />
    </Cont>
  );
}

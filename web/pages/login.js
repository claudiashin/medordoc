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
import myLottie from "../public/lottie_woman_computer.json";
import Btn from "../comps/Btn";
import Footer from "../comps/Footer";

const MainCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #f7f2ee;
  width: 100vw;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 15%;
`;

const TitleCont = styled.div`
  margin-top: -10%;
`;

const LottieCont = styled.div`
  margin: 30px;
`;

const Subcont = styled.div`
  margin: 30px;
`;

const LottieSignInCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function Home() {
  const router = useRouter();

  return (
    <MainCont>
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

        <LottieSignInCont>
          <LottieCont>
            <HeroLottie source={myLottie} width="400px" />
          </LottieCont>
          <Subcont /*style={{ marginTop: 100 }}*/>
            <LoginForm width="250" style={{ marginTop: 100 }} />
          </Subcont>
        </LottieSignInCont>
      </BodyCont>

      <Footer />
    </MainCont>
  );
}

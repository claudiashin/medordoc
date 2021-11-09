import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import styled from 'styled-components';
import Lottie from "react-lottie";
import React from "react";
import HeaderTitle from '../comps/HeaderTitle';
import LoginForm from '../comps/LoginForm';
import HeroLottie from '../comps/HeroLottie';
import NavBar from '../comps/NavBar'
import myLottie from '../public/lottie_receptionist.json'
import Footer from '../comps/Footer';



const Cont = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #F7F2EE;
  width: 100vw;
  height: 100wh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const WaveCont = styled.div`
  width: 100%;
`;

const Wave = styled.img`
  width: 100%;
`;

const NavBarCont = styled.div`
  width:100%;
  // height:300px;
  position:absolute;
  top:0;
`;

const BodyCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  position: relative;
`
const TitleCont = styled.div`
  position: absolute;
  top: 80px;
  right: 320px;

`
const Subcont = styled.div`
  display: flex;
  flex-direction: column;

`
const HeaderwithNav = styled.div`
    display: flex;
    height: 100px;
    width: 100%;
    background-color: #B9D1E1;
    margin-bottom: 100px;
`


export default function Home() {
  return (
    <Cont>
      <WaveCont>
        <Wave src={'/background-web5.svg'}></Wave>
      </WaveCont>

      <NavBarCont>
        <NavBar />
      </NavBarCont>


      <BodyCont>
        <TitleCont>
          <HeaderTitle
            title="Log in"
            fontSize='36'
          />
        </TitleCont>
        <HeroLottie
          source={myLottie}
          width="400px"
        />
        <Subcont>
          <LoginForm
            width="250"
            style={{ marginTop: 100 }}
          />
        </Subcont>
      </BodyCont>

      <Footer />

    </Cont>
  )
}
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import styled from 'styled-components';
import Lottie from "react-lottie";
import React from "react";

import HeaderTitle from '../comps/HeaderTitleTitle';
import LoginForm from '../comps/LoginForm';
import HeroLottie from '../comps/HeroLottie';
import NavBar from '../comps/NavBar'
import myLottie from '../public/lottie_receptionist.json'



const Cont = styled.div`
  display: flex;
  flex-wrap: wrap;
  // background-color: #F7F2EE;
  width: 100vw;
  height: 100wh;
  justify-content: center;
  align-items: center;
`
const BodyCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
      <HeaderwithNav></HeaderwithNav>
      <BodyCont>
        <HeroLottie 
          source={myLottie}
          width="400px"
          
        />
        <LoginForm width="250"/>
      </BodyCont>

    </Cont>
  )
}
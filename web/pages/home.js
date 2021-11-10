import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

import NavBar from '../comps/NavBar';
import MenuCard from '../comps/MenuCard';
import Checkin from '../comps/Checkin';
import Footer from '../comps/Footer';

import MyLottie from '../public/lottie_clipboard.json';
import MyLottie2 from '../public/lottie_booking.json';
import MyLottie3 from '../public/lottie_doctor.json';

const HomeCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #F7F2EE;
`;

const WaveCont = styled.div`
  width: 100%;
  height: auto;
  position: relative;
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

const MenuCardCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;

  @media only screen and (min-width: 475px) {
    margin: 100px;
  }
`;

export default function home() {
  return (
    <HomeCont>
      <WaveCont>
        <Wave src={'/background-web5.svg'}></Wave>
      </WaveCont>

      <NavBarCont>
        <NavBar />
      </NavBarCont>

      {/* <Checkin/> */}
      <MenuCard width={300} height={350} source={MyLottie} routeTo="/request" />
      <MenuCard title={"Appointment Bookings"} width={300} height={350} source={MyLottie2} routeTo="/booking" />
      <MenuCard title={"Doctors' Profiles"} width={300} height={350} source={MyLottie3} routeTo="/profile" />
      <Footer />
    </HomeCont>
  )
}



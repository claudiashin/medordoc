import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import NavBar from "../comps/NavBar";
import MenuCard from "../comps/MenuCard";
import QRscan from "../comps/QRscan";
import Footer from "../comps/Footer";

import MyLottie from "../public/lottie_clipboard.json";
import MyLottie2 from "../public/lottie_booking.json";
import MyLottie3 from "../public/lottie_doctor.json";

const HomeCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #f7f2ee;
  height: 100%;
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

const FooterCont = styled.div`
  display: flex;
  margin-top: 10%;
  width: 100%;
`;

export default function home() {
  return (
    <HomeCont>
      <WaveCont>
        <Wave src={"/background-web5.svg"}></Wave>
      </WaveCont>

      <NavBarCont>
        <NavBar />
      </NavBarCont>

      <QRscan />

      <MenuCard
        title={"Appointment Bookings"}
        width={300}
        height={350}
        source={MyLottie2}
        routeTo="/booking"
      />
      <MenuCard width={300} height={350} source={MyLottie} routeTo="/request" />
      <MenuCard
        title={"Clinic & Doctor Profiles"}
        width={300}
        height={350}
        source={MyLottie3}
        routeTo="/profile"
      />

      <FooterCont>
        <Footer />
      </FooterCont>
    </HomeCont>
  );
}

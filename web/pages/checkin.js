import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

//import comps
import Btn from "../comps/Btn";
import HeaderTitle from "../comps/HeaderTitle";
import NavBar from "../comps/NavBar";
import BookingForm from "../comps/BookingForm";
import Footer from "../comps/Footer";
import QRscan from "../comps/QRscan";

const MainCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: #f7f2ee;
  width: 100vw;
  height: 100%;
  justify-content: center;
  align-items: center;
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
`;

const Low = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const Qrcode = styled.div`
  width: 400px;
  height: 400px;
  background-color: #868686;
`;

const BtnCont = styled.div`
  margin-top: 20px;
  margin-left: 150px;
`;

const FooterCont = styled.div`
  margin-top: 15%;
  width: 100%;

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

      <HeaderTitle title="Booking Confirmation" fontSize="36" />
      <BodyCont>
        <Low>
          {/* <Qrcode>
            <img src="/qrcode.png" width="100%" />
          </Qrcode> */}
        </Low>
        <Low>
          <BookingForm></BookingForm>
          <BtnCont>
            <Btn
              title="Check In"
              fSize="16px"
              color="#fff"
              bgColor="#90AABB"
              width="125px"
              height="50px"
              borderRad="25px"
              bgHover="#7592A5"
              onClick={() => router.push("/booking")}
            />
          </BtnCont>
        </Low>
      </BodyCont>
      <QRscan />
      <FooterCont>
        <Footer />
      </FooterCont>
    </MainCont>
  );
}

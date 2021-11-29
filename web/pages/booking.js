import React from "react";
import styled from "styled-components";
import 'react-calendar/dist/Calendar.css';

//import comps
import NavBar from "../comps/NavBar";
import PatientList from "../comps/PatientList";
import LiveWaitTime from "../comps/LiveWaitTime";
import Calendar from "../comps/CalendarAPI";
import Footer from "../comps/Footer";
import QRscan from "../comps/QRscan";

const MainCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #f7f2ee;
  width: 100%;
  height: 100%;
  justify-content: center;
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
  margin-bottom: 10%;
`;

const Low = styled.div`
  display: flex;
  /* flex-direction: column; */
  margin: 10px;
  @media only screen and (min-width: 500px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const CalendarCont = styled.div``;

const Column = styled.div`
  display: flex;
  margin: 5px;
`;


export default function Home() {
  return (
    <MainCont>
      <WaveCont>
        <Wave src={"/background-web5.svg"}></Wave>
      </WaveCont>

      <NavBarCont>
        <NavBar />
      </NavBarCont>

      <QRscan />

      <BodyCont>

        <CalendarCont>
          <Calendar/>
        </CalendarCont>
        
        <Low>
          <Column>
            <LiveWaitTime></LiveWaitTime>
          </Column>
          <Column>
            <PatientList></PatientList>
          </Column>
        </Low>

      </BodyCont>

      <Footer />
    </MainCont>
  );
}

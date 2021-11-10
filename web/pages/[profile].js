import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import HorizonTab from '../comps/HorizonTab'
import NavBar from "../comps/NavBar";
import Footer from "../comps/Footer";

const Cont = styled.div`
  width:100vw;
  height:100vh;
  background-color: #F7F2EE;
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

export default function Profile() {
  const [showPopup, setShowPopup] = useState(true)

  return (
    <Cont>

      <WaveCont>
        <Wave src={'/background-web5.svg'}></Wave>
      </WaveCont>

      <NavBarCont>
        <NavBar />
      </NavBarCont>
    
    <HorizonTab onPopUp={() => {
        setShowPopup(false);
      }} popup={showPopup} />

      <Footer/>
    </Cont>
  )
}
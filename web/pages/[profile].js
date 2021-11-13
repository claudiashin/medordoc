import React from "react";
import styled from 'styled-components';
import HorizonTab from '../comps/HorizonTab'
import NavBar from "../comps/NavBar";
import Footer from "../comps/Footer";
import HeaderTitle from '../comps/HeaderTitle'

const Cont = styled.div`
  display:flex;
  background-color: #F7F2EE;
  flex-direction:column;
  min-height:80em;
`

const WaveCont = styled.div`
  // width: 100%;
  flex-grow:1;
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

const FooterCont = styled.div`

`
const TabCont = styled.div`
  flex-basis:1000px;
  z-index:1;
`
const HeaderCont = styled.div`
display:flex;
align-items:center;
flex-direction:column;
`
export default function Profile() {
  return (
    <Cont>
     
      <WaveCont>
        <Wave src={'/background-web5.svg'}></Wave>
      </WaveCont>

      <NavBarCont>
        <NavBar />
        <HeaderCont>
          <HeaderTitle title="Profile"/>
          <HeaderTitle fontSize="10  " title="St. Joseph’s Clinic" />
        </HeaderCont>
      </NavBarCont>
     
      <TabCont>
        <HorizonTab/>
      </TabCont>

      <FooterCont>
        <Footer/>
      </FooterCont>
    </Cont>
  )
}
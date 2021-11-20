import React from "react";
import styled from "styled-components";

import HeroAvatar from '../comps/HeroAvatar';
import InfoCard from '../comps/InfoCard'
import NavBar from "../comps/NavBar";
import Header from "../comps/Header";

const AvatarCont = styled.View`
  align-items:center;
  margin-top: 100px;
`
const BodyCont = styled.View`
  align-items:center;
`

const Cont = styled.View`
  flex:1;
`;

const Wave = styled.Image`
    width: 100%;
    height: 30%;
    position: absolute;
`;

const NavBarCont = styled.View`
 
`
const BodyContCont = styled.View`

`
const QRSrc = styled.Image`
 
`

const MyScroll = styled.ScrollView`
  
`
const scan = ({
  QRimg="https://placekitten.com/1300/2000",
})=>{
  return <Cont>
    <MyScroll>
    <Wave source={require('../assets/backgroundmobile.png')} />
    <BodyContCont>
      <AvatarCont>
        <HeroAvatar imagesrc="https://placekitten.com/3000/2000" herowidth={150} heroheight={150}></HeroAvatar>
        <Header fontSize={18} fontWeight={"normal"} title="Jenny Lee"/>
      </AvatarCont>

        <BodyCont>
        <Header title="Scan Your QR Code"/>
        </BodyCont>

        <BodyCont>
          <QRSrc source={{uri:{QRimg}}}/>
        </BodyCont>

      <BodyCont>
        <InfoCard/>
      </BodyCont>
    </BodyContCont>

    </MyScroll>

      <NavBarCont>
        <NavBar/> 
      </NavBarCont>
  </Cont>
}

export default scan

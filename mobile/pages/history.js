import React from "react";
import styled from 'styled-components/native';
import HeroAvatar from '../comps/HeroAvatar';
import InfoCard from '../comps/InfoCard'
import NavBar from "../comps/NavBar";
import Header from "../comps/Header";

const AvatarCont = styled.View`
  align-items:center;
`
const BodyCont = styled.View`
  align-items:center;
`

const Cont = styled.View`
  width:100%;
  height:100%;
  justify-content:space-between;
  padding-top:20px;
`

const NavBarCont = styled.View`
 
`
const BodyContCont = styled.View`

`
const History = ()=>{
  return <Cont>
    <BodyContCont>
      <AvatarCont>
        <HeroAvatar imagesrc="https://placekitten.com/3000/2000" herowidth={150} heroheight={150}></HeroAvatar>
        <Header fontSize={18} fontWeight={"normal"} title="Jenny Lee"/>
      </AvatarCont>

        <BodyContCont>
        <Header title="Booking History"/>
        </BodyContCont>

      <BodyCont>
        <InfoCard/>
      </BodyCont>
      
    </BodyContCont>

      <NavBarCont>
        <NavBar/> 
      </NavBarCont>
  </Cont>
}

export default History
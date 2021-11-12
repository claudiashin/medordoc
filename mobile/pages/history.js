import React from "react";
import styled from 'styled-components/native';
import HeroAvatar from '../comps/HeroAvatar';
import InfoCard from '../comps/InfoCard'
import NavBar from "../comps/NavBar";
import Header from "../comps/Header";
import InfoCardThree from '../comps/InfoCardThree'
const AvatarCont = styled.View`
  align-items:center;
`
const BodyCont = styled.View`
  align-items:center;
`

const Cont = styled.View`
  justify-content:space-between;
  padding-top:20px;
  flex:1
`

const NavBarCont = styled.View`
 
`
const BodyContCont = styled.ScrollView`

`
const History = ()=>{
  return <Cont>
    <BodyContCont>
    <BodyContCont>
      <AvatarCont>
        <HeroAvatar imagesrc="https://placekitten.com/3000/2000" herowidth={150} heroheight={150}></HeroAvatar>
        <Header fontSize={18} fontWeight={"normal"} title="Jenny Lee"/>
      </AvatarCont>

        <BodyContCont>
        <Header title="Booking History"/>
        </BodyContCont>

      <BodyCont>
        <InfoCardThree/>
      </BodyCont>
    </BodyContCont>

    </BodyContCont>
      <NavBarCont>
        <NavBar/> 
      </NavBarCont>
  </Cont>
}

export default History
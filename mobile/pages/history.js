import React from "react";
import styled from 'styled-components/native';
import HeroAvatar from '../comps/HeroAvatar';
import InfoCard from '../comps/InfoCard'

const AvatarCont = styled.View`

`
const BodyCont = styled.View`
  align-items:center;
`

const Cont = styled.View`
  width:100%;
  height:100%;
`
const History = ()=>{
  return <Cont>
    <AvatarCont>
    <HeroAvatar imagesrc="https://placekitten.com/3000/2000" herowidth={150} heroheight={150}/>
    </AvatarCont>
    <BodyCont>
      <InfoCard/>
      </BodyCont>
  </Cont>
}

export default History
import styled from 'styled-components/native'
import React from 'react'

const HeroAvatarCont = styled.View`
  width:100%;
  max-height:300px;
  align-items:center;
`
const HeroImage = styled.Image`
  width:${props=>props.herowidth}px;
  height:${props=>props.heroheight}px;
  border-radius:200px;
`
const PlusImage = styled.Image`
  width:${props=>props.pluswidth};
  height:${props=>props.plusheight};
  position:absolute;
  right:${props=>props.right};
  bottom:${props=>props.bottom}px;

`
const HeroAvatar =({
  heroheight="300",
  herowidth="300",
  pluswidth="30",
  plusheight="30",
  right="120",
  bottom="10",
  imagesrc="https://placekitten.com/1000/1000",
})=>{
  return <HeroAvatarCont >
  <HeroImage heroheight={heroheight} herowidth={herowidth} source={{uri:imagesrc}}/>
  <PlusImage pluswidth={pluswidth} plusheight={plusheight} right={right} bottom={bottom} source={require('../../assets/plus.png')}/>
</HeroAvatarCont>
}

export default HeroAvatar
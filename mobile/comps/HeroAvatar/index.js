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
  height:30px;
  position:absolute;
  right:120px;
  bottom:10px;

`
const HeroAvatar =({
  heroheight="300px",
  herowidth="300px",
  pluswidth="30px",
  imagesrc="https://placekitten.com/1000/1000",
})=>{
  return <HeroAvatarCont >
  <HeroImage heroheight={heroheight} herowidth={herowidth} source={{uri:imagesrc}}/>
  <PlusImage pluswidth={pluswidth} source={require('../../assets/plus.png')}/>
  
</HeroAvatarCont>
}

export default HeroAvatar
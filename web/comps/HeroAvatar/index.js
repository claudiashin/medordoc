import styled from 'styled-components'
import React from 'react'


const HeroAvatarCont = styled.div`
  width:${props=>props.herowidth};
  height:${props=>props.heroheight};
  margin:${props=>props.heromargin};
  position:relative;
`
const HeroImage = styled.img`
  width:100%;
  height:100%;
  object-fit:cover;
  border-radius:50%;
`
const PlusImage = styled.img`
  width:${props=>props.pluswidth};
  position:absolute;
  right:20px;
  bottom:10px;

`
const HeroAvatar = ({
  herowidth="200px",
  heroheight="200px",
  heromargin="0px",
  pluswidth="30px",
  imagesrc="https://placekitten.com/1000/1000"
})=>{
  return<HeroAvatarCont herowidth={herowidth} heroheight={heroheight} heromargin={heromargin}>
    <HeroImage src={imagesrc}/>
    <PlusImage pluswidth={pluswidth} src={require('../../public/plus.png')}/>
  </HeroAvatarCont>
}

export default HeroAvatar;
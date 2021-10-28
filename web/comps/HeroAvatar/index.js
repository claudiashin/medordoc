import styled from 'styled-components'


const HeroAvatarCont = styled.div`
  width:${props=>props.herowidth};
  position:relative;
`
const HeroImage = styled.img`
  width:100%;
  heigh:100%;
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
  pluswidth="30px",
  imagesrc="https://placekitten.com/1000/1000"
})=>{
  return<HeroAvatarCont herowidth={herowidth}>
    <HeroImage src={imagesrc}/>
    <PlusImage pluswidth={pluswidth} src={require('../../stories/assets/plus.png')}/>
  </HeroAvatarCont>
}

export default HeroAvatar;
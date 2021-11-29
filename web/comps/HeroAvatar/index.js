import styled from 'styled-components'
import React , {useState} from 'react'
import ImageUpload from 'image-upload-react'
//important for getting nice style.
import 'image-upload-react/dist/index.css'
import {getStorage, ref, uploadBytes} from "firebase/storage"



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
const MyFile = styled.input`
// opacity: 0;
// position: absolute;
// z-index: -1;
`
const MyLabel = styled.label`
cursor: pointer;
`
const HeroAvatar = ({
  herowidth="200px",
  heroheight="200px",
  heromargin="0px",
  pluswidth="30px",
  imagesrc="https://placekitten.com/1000/1000",
})=>{


  
  const Upload = async(e)=>{
    
    console.log(e.target.files[0]);ç
    
    if(e.target.files.length <= 0){
        alert("no file selected");
        return false;
    }

    const file = e.target.files[0];
    const storage = getStorage();
    const storageRef = ref(storage, 'test.jpg');  
    const snapshot = await uploadBytes(storageRef,file)
    console.log ('uploaded');

}
    
  return<HeroAvatarCont herowidth={herowidth} heroheight={heroheight} heromargin={heromargin}>
    <HeroImage onClick={Upload}  src={imagesrc}/>
    <PlusImage onChange={Upload} pluswidth={pluswidth} src={"/plus.png"} />
    <MyFile id="file" type="file"/>

  </HeroAvatarCont>
}

export default HeroAvatar;
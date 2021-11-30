
import styled from 'styled-components'
import React , {useState} from 'react'
import ImageUpload from 'image-upload-react'
//important for getting nice style.
import 'image-upload-react/dist/index.css'
import {getStorage,  uploadBytes, getDownloadURL} from "firebase/storage"
import { storage, ref } from '../../firebase';
import { FirebaseError } from '@firebase/util'



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
  display:${props=>props.display}
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
  upload,
  display="block"
})=>{


  
  // const Upload = async(e)=>{
    
  //   console.log(e.target.files[0]);ç
    
  //   if(e.target.files.length <= 0){
  //       alert("no file selected");
  //       return false;
  //   }

  //   const file = e.target.files[0];
  //   const storage = getStorage();
  //   const storageRef = ref(storage, 'test.jpg');  
  //   const snapshot = await uploadBytes(storageRef,file)
  //   console.log ('uploaded');

  // }

  const [clinicImage, setClinicImage] = useState(null);

  function uploadImage() {
    // const getAuth
  }
    
  return<HeroAvatarCont herowidth={herowidth} heroheight={heroheight} heromargin={heromargin}>
    <HeroImage src={imagesrc}/>
    <PlusImage 
    onClick={async() => {
      const getStorage = getStorage();
      const result = storage.ref('clinic/' + auth.user.uid + '/').putFile(photoURL)
    }} 
    pluswidth={pluswidth} src='/plus.png'
      display={display}
    />

    {/* <MyFile id="file" type="file"/> */}

  </HeroAvatarCont>
}

export default HeroAvatar;
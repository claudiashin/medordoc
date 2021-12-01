import React, {useEffect, useState} from "react";
import styled from 'styled-components/native';
import HeroAvatar from '../comps/HeroAvatar';
import InfoCard from '../comps/InfoCard'
import NavBar from "../comps/NavBar";
import Header from "../comps/Header";
import InfoCardThree from '../comps/InfoCardThree';
import { EdgeInsetsPropType } from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {db} from '../utils/store'


const AvatarCont = styled.View`
  align-items:center;
  margin-top: 100px;
`
const BodyCont = styled.View`
  align-items:center;
`

const Cont = styled.View`
  justify-content:space-between;
  flex:1;
`
const Wave = styled.Image`
    width: 100%;
    height: 30%;
    position: absolute;
`;

const NavBarCont = styled.View`
`;

const HeaderCont = styled.View`
  margin-left: 50px;
`;

const MainCont = styled.View`
`;
const BodyContCont = styled.ScrollView`

`
const History = () => {
  // const [myUid, setMyUid] = useState()
  // useEffect(()=>{
  //   const getUser = async () => {
  //     const auth = getAuth();
  //     const user = auth.currentUser;
  //     setMyUid(user.uid)
  //     console.log(user.uid)
  //   }

  //   // onAuthStateChanged(auth, (user) => {
  //   //   if (user) {
  //   //     const uid = user.uid;
  //   //     console.log(myUid)
  //   //     setMyUid(uid)
  //   //   } else {
  //   //     console.log("no")
  //   //   }
  //   // });
  //   getUser()
  // },[])
  
  return <Cont>

    <BodyContCont>
      <Wave source={require('../assets/backgroundmobile.png')} />
      <MainCont>
        
        <AvatarCont>
          <HeroAvatar visible={"none"} imagesrc="https://placekitten.com/3000/2000" herowidth={150} heroheight={150}></HeroAvatar>
          <Header fontSize={18} fontWeight={"normal"} title="Jenny Lee" />
        </AvatarCont>

        <HeaderCont>
          <Header title="Booking History" />
        </HeaderCont>

        <BodyCont>
          <InfoCardThree/>
        </BodyCont>
      </MainCont>

    </BodyContCont>
    <NavBarCont>
      <NavBar />
    </NavBarCont>
  </Cont>
}

export default History
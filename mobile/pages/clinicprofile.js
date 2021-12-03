import React, { useState, useEffect, } from 'react';
import { StyleSheet, Text, View, Image,Button } from 'react-native';
import styled from 'styled-components/native';
import {db} from '../utils/store'
import { collection, doc, setDoc,getDoc,} from "firebase/firestore"; 
import HeroAvatar from '../comps/HeroAvatar';   
import InfoCard from '../comps/InfoCard';
import Btn from '../comps/Btn';
import NavBar from '../comps/NavBar';
import BackBtn from '../comps/BackBtn';
import { useNavigation } from '@react-navigation/native';
import { getAuth, onAuthStateChanged } from "firebase/auth";

import AppLoading from 'expo-app-loading';
import { useFonts, Nunito_400Regular } from '@expo-google-fonts/nunito';


const Cont = styled.View`
  flex:1;
  background-color: #F7F2EE;
  display:flex;
  align-content:center;
  justify-content: space-between;
  z-index:1;
`;

const Wave = styled.Image`
    width: 100%;
    height: 30%;
    position: absolute;
`;

const Cont2 = styled.View`
    display: flex;
    margin-top: 100px;
    /* padding-top: 20px; */
    align-items:center;
    justify-content:center;
`;

const Banner = styled.View`
    display: flex;
    z-index:2;
`;

const NavBarCont = styled.View`
`;

const CardCont = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

const BtnCont = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    margin: 30px 40px 0px 0px;
`;

const BackCont = styled.View`
  display: flex;
  position: absolute;
  z-index: 999;
  top: -10px;
`;

const MyScrollView = styled.ScrollView`

`;

const Avatar=styled.Image`
width:180px;
height:180px;   
border-radius:500px;
`

const ClinicProfile = ({route,navigation}) => {
  
const [info,setInfo] =useState('')
const [choice,setChoice] = useState('')
const [cluid,setUid] = useState('')

let [fontsLoaded] = useFonts({
    Nunito_400Regular,
  });

    
useEffect(()=>{

    const {UID} = route.params;
    setUid(UID);
   
    
    const get =async()=>{
    // const MapdocRef = doc(db, "mapchoice", UID);
    // const MapdocSnap = await getDoc(MapdocRef);
    // setChoice(MapdocSnap.data())
    const docRef = doc(db,"clinics",UID );
    const docSnap = await getDoc(docRef)  
    setInfo(docSnap.data())
    console.log(docSnap.data())
    }
    get()

    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
        if (user) {
        //  console.log("yes")
         setPath("booking")
        } else {
            // console.log("no")
            setPath("login")
          }
        });
        

},[])


 console.log(cluid);

const [path, setPath] = useState()
    if(!AppLoading) {
        return <AppLoading />
    }
    else {
    return (
        <Cont>
            <MyScrollView>
                <BackCont>
                    <BackBtn onPress={() => navigation.goBack()}/>
                </BackCont>
                <Wave source={require('../assets/backgroundmobile.png')} />
                <Cont2>
                    <Avatar source={require("../assets/carepoint.png")}/>

                </Cont2>
                <CardCont>
                    <InfoCard 
                        text = {info.name}
                        text2 = {info.add}
                        text3 = {info.num}
                        text4 ={info.lang}
                        text5 = {info.open}
                        text6 ={info.close}
                        text7 ={info.waittime}
                        // text3 = "Website:"
                        // website_url = {info.website}
                        fontsize = "20"
                        weight = "700"
                        weight2 = "700"
                        fontcolor = '#226BAF'
                        address="Address: "
                        phone="Phone: "
                        language="Language(s): "
                        open="Open: "
                        close="Close: "
                        waittime = "Wait Time: "
                    />
                </CardCont>
                
                <BtnCont>
                    <Btn onPress={() => navigation.navigate(path,{clinicUID:cluid})} 
                       width={120}
                       fsize={20}/>
                </BtnCont>
            </MyScrollView>


            <NavBarCont>
                <NavBar />
            </NavBarCont>
        </Cont>
    );
    }
}

export default ClinicProfile;
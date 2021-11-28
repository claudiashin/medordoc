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


const Cont = styled.View`
  flex:1;
  background-color: #F7F2EE;
  display:flex;
  align-content:center;
  justify-content: space-between;
  z-index:1;
`

const Wave = styled.Image`
    width: 100%;
    height: 30%;
    position: absolute;
`;

const Cont2 = styled.View`
    display: flex;
    margin-top: 100px;
    /* padding-top: 20px; */
    align-content:center;
    justify-content:center;
`
const Banner = styled.View`
    display: flex;
    z-index:2;
`
const NavBarCont = styled.View`
`;

const CardCont = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const BtnCont = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-right: 20px;

`
const BackCont = styled.View`
  display: flex;
  position: absolute;
  z-index: 999;
`
const MyScrollView = styled.ScrollView`

`
const ClinicProfile = ({ route,navigation }) => {

const [info,setInfo] =useState('')
const [choice,setChoice] = useState('')
const [cluid,setUid] = useState('')


    
useEffect(()=>{
    
    // const gettinginfo =(()=>{
    // const docRef = doc(db, "clinics", "HxjkpD1lNC5H8xdLn0jT");
    // const docSnap = getDoc(docRef)   
    // setInfo(docSnap.date)
    // console.log('fuck')
    // gettinginfo();
    // }
    const {UID} = route.params;
    setUid(UID);
    console.log(UID);
    
    const get =async()=>{
    const MapdocRef = doc(db, "mapchoice", UID);
    const MapdocSnap = await getDoc(MapdocRef);
    setChoice(MapdocSnap.data())
    
    const docRef = doc(db, "clinics",UID );
    const docSnap = await getDoc(docRef)  
    setInfo(docSnap.data())
    // console.log(docSnap.data())
    }
    get()

},[])


    return (
        <Cont>
            <MyScrollView>
                <BackCont>
                    <BackBtn onPress={() => navigation.goBack()}/>
                </BackCont>
                <Wave source={require('../assets/backgroundmobile.png')} />
                <Cont2>
                    <HeroAvatar herowidth={200} heroheight={200} />

                </Cont2>
                <CardCont>
                    <InfoCard 
                        text = {info.name}
                        text2 = {info.add}
                        text3 = {info.lang}
                        text4 ={info.num}
                        text5 = {info.open}
                        text6 ={info.close}
                        // text3 = "Website:"
                        // website_url = {info.website}
                        fontsize = "20"
                        weight = "700"
                        weight2 = "700"
                        fontcolor = '#226BAF'
                    />
    
                </CardCont>
                <BtnCont>
                    <Btn onPress={() => navigation.navigate("login",{UID:cluid})} />
                </BtnCont>
            </MyScrollView>


            <NavBarCont>
                <NavBar />
            </NavBarCont>
        </Cont>
    )
}

export default ClinicProfile;
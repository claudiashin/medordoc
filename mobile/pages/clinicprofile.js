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
const ClinicProfile = ({ navigation }) => {

const [info,setInfo] =useState('')
const [choice,setChoice] = useState('')

    
useEffect(()=>{
    
    // const gettinginfo =(()=>{
    // const docRef = doc(db, "clinics", "HxjkpD1lNC5H8xdLn0jT");
    // const docSnap = getDoc(docRef)   
    // setInfo(docSnap.date)
    // console.log('fuck')
    // gettinginfo();
    // }

    const get =async()=>{
    const MapdocRef = doc(db, "mapchoice", "uxDtPAIbYVOEFLdIOjXILD3KUf33");
    const MapdocSnap = await getDoc(MapdocRef);
    setChoice(MapdocSnap.data())
    
    const docRef = doc(db, "clinics","0lTILXDCYOfuCVljAtYhispFL6f1" );
    const docSnap = await getDoc(docRef)  
    setInfo(docSnap.data())
    console.log(docSnap.data())
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
                        text2 = {info.address}
                        text3 = "Website:"
                        website_url = {info.website}
                        fontsize = "20"
                        weight = "700"
                        weight2 = "700"
                        fontcolor = '#226BAF'
                    />
                    <InfoCard />

                </CardCont>
                <BtnCont>
                    <Btn onPress={() => navigation.navigate("login")} />
                </BtnCont>
            </MyScrollView>


            <NavBarCont>
                <NavBar />
            </NavBarCont>
        </Cont>
    )
}

export default ClinicProfile;
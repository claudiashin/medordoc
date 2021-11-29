import React,{useState,useEffect} from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View,Image, ScrollView, Button } from 'react-native';
import SigninForm from '../comps/SigninForm';
import BookingForm from '../comps/BookingForm';
import HeroAvatar from '../comps/HeroAvatar';
import LoginForm from '../comps/LoginForm';
import Btn from '../comps/Btn';
import NavBar from '../comps/NavBar';

import { addDoc,collection,setDoc,getDoc,doc,query,where} from 'firebase/firestore';
import {onAuthStateChanged,getAuth} from 'firebase/auth'
import {db} from '../utils/store'
import {Auth} from '../utils/auth'
import { useScrollToTop } from '@react-navigation/native';

const HeroCont = styled.View`
    margin-top: 100px;
    margin-bottom: 50px;
`
const ButCont = styled.View`
    margin-left: 180px;
    margin-top: 50px;
`
const Cont = styled.View`
    flex:1;
`
const NavBarCont = styled.View`
`;

const Wave = styled.Image`
    width: 100%;
    height: 30%;
    position: absolute;
`;

export default function patientprofile() {

    
    const [fname,setFname] = useState();
    const [lname,setLname] =useState();
    const [add,setAdd] =useState();
    const [con,setCon] =useState();
    const [bd,setBd] =useState();


    useEffect (()=>{
        const auth = getAuth()
        const userid = auth.currentUser.uid;
        if (userid){
                const getting =async()=>{
                const docRef = doc(db, "patientuser",userid);
                const docSnap = await getDoc(docRef);

                // const timestamp = Timestamp(Date())
               
                setFname(docSnap.data().fname)
                setLname(docSnap.data().lname)
                setBd(docSnap.data().dob.seconds)
                const date = (new Date(bd*1000))
                setBd(date)
                setAdd(docSnap.data().address)
                setCon(docSnap.data().medconcern)
                // console.log(docSnap.data().dob.seconds)
              }
              getting()
        }
        else{
            setFname(name)
            setLname(name)
            setBd(date)
            setAdd(address)
            setCon(medconcern)
            console.log(docSnap.data())
        }


    
       },[])

    const [changeForm, setChangeForm] = useState(true);

    if (changeForm === true ){
        return (
            <Cont>
            <Wave source={require('../assets/backgroundmobile.png')} />
            <ScrollView style={styles.scrollView} >
                <HeroCont>
                    <HeroAvatar 
                        heroheight="150"
                        herowidth="150"
                        pluswidth="25"
                        plusheight="25"
                        visible="none"
                    />
                </HeroCont>
                <BookingForm  dbname = {fname + '' + lname} dbaddress ={add} dbconcerns ={con} />

                <ButCont>
                        <Btn
                        title = "Edit"
                        fsize = '20'
                        bgcolor = "#B9D1E1"
                        width = '150'
                        height = '50'
                        borderRad = '60'
                        onPress={()=>{setChangeForm(false)}}
                    ></Btn>
                </ButCont>
            </ScrollView>
             <NavBarCont>
             <NavBar/>
           </NavBarCont>
           </Cont>
        )
    }

    return <Cont>
    <ScrollView style={styles.scrollView} >
        <HeroCont>
            <HeroAvatar 
                heroheight="150"
                herowidth="150"
                pluswidth="25"
                plusheight="25"
            />
        </HeroCont>
        <BookingForm 
            editable={true}
        />
        <ButCont>
         <Btn
            title = "Save"
            fsize = '20'
            bgcolor = "#97BDD6"
            width = '150'
            height = '50'
            borderRad = '60'
            onPress={()=>{setChangeForm(true)}}
            ></Btn>
        </ButCont>
    </ScrollView>
    <NavBarCont>
    <NavBar/>
    </NavBarCont>
    </Cont>
}

const styles = StyleSheet.create({
    scrollView: {
      flex:1,
      marginHorizontal: 30,
      marginTop: 30,
    },
  });
  


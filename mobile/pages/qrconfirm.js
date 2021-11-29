import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { addDoc, collection,setDoc,getDoc,doc,query,where,} from 'firebase/firestore';
import {onAuthStateChanged,getAuth} from 'firebase/auth'
import {Auth} from '../utils/auth'
import {db} from '../utils/store'

// Import Comps
import Header from '../comps/Header';
// import InfoCard from '../comps/InfoCard';
import NavBar from '../comps/NavBar';
import InfoCardTwo from '../comps/InfoCardTwo';


const ConfirmCont = styled.View`
    flex: 1;
    background-color: #F7F2EE;
    /* justify-content: center; */
    align-items: center;
`;

const Wave = styled.Image`
    width: 100%;
    height: 30%;
    position: absolute;
`;

const NavBarCont = styled.View`
`;

const MyScrollView = styled.ScrollView`
`

const HeaderCont = styled.View`
    margin-top: 100px;
    justify-content: center;
    align-items: center;
`;

const Cont = styled.View`
    margin-top: 20px;
`;

const qrconfirm = () => {

        

    const [user,setUser] = useState('');
    const [clinicID,setClnicID] =useState('')
    const [name,setName] = useState('')
    const [date,setDate] =useState('')
    const [time,setTime] =useState('')
    
    useEffect(()=>{

        const auth = getAuth()
        const userid = auth.currentUser.uid;
        setUser(userid)
        
        const getting =async()=>{
            const docRef = doc(db, "appointment",user);
            const docSnap = await getDoc(docRef);
            setName(docSnap.data().patientname);
            setDate(docSnap.data().bookingdate);
            setTime(docSnap.data().bookingtime);
            console.log(name)
            console.log(date)
            console.log(time)
        }
        getting()
 },[])

    

    return (
        <ConfirmCont>
                <Wave source={require('../assets/backgroundmobile.png')} />
            <MyScrollView>
                <HeaderCont>
                    <Header title="Booking Confirmed" fontSize={24} />
                </HeaderCont>
                
                <Cont>
                    <InfoCardTwo
                        text1="Appointment Details"
                        text2={date}
                        text3= {time}
                        text4= "Location: Care Point Clinic"
                        text5="Location: Care Point Clinic"
                        text6="1234 Canada Way, Burnaby V4J2B7"
                        fweight="500"
                        display="none"
                    />

                    <InfoCardTwo
                        text1="QR Code Generated"
                        text2="Your QR code has your booking details. For faster check-in, scan it at the front desk when you arrive."
                        text3="To view, click on the QR Code icon in the nav below."
                        fweight="300"
                    />
                </Cont>
            </MyScrollView>
            <NavBarCont>
                <NavBar />
            </NavBarCont>
        </ConfirmCont>
    )
}

export default qrconfirm

import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View,  } from 'react-native';
import styled from 'styled-components/native';
import { addDoc,collection,setDoc,getDoc,doc,query,where, getDocs,limit,orderBy} from 'firebase/firestore';
import {onAuthStateChanged,getAuth} from 'firebase/auth'
import { useNavigation } from '@react-navigation/native';
import {Auth} from '../utils/auth'
import {db} from '../utils/store'

// Import Comps
import Header from '../comps/Header';
// import InfoCard from '../comps/InfoCard';
import NavBar from '../comps/NavBar';
import InfoCardTwo from '../comps/InfoCardTwo';
import BackBtn from '../comps/BackBtn';


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
    margin-top: 50%;
    justify-content: center;
    align-items: center;
`;

const Cont = styled.View`
    margin-top: 25%;
`;

const BackCont = styled.View`
  display: flex;
  position: absolute;
  z-index: 999;
`

const qrconfirm = () => {

    const [uid,setUID] = useState('');

    const navigation = useNavigation();  
    const [user,setUser] = useState('');
    const [clinicID,setClnicID] =useState('')
    const [name,setName] = useState('')
    const [date,setDate] =useState('')
    const [day,setAday] =useState('')
    const [month,setAmonth] =useState('')
    const [year,setAyear] =useState('')


    const [time,setTime] =useState('')
    const [clname,setClname] =useState('')
    const [cladd,setAdd] =useState('')
    
    
    useEffect(()=>{

        const auth = getAuth()
        const userid = auth.currentUser.uid;
        setUser(userid)

        const gettingBK =async()=>{

            const q = query(collection(db, "appointment"), where("userid", "==", userid),orderBy('year',"desc"),orderBy('month',"desc"),orderBy('day',"desc"),limit(1));
            const querySnapshot = await getDocs(q);
           
            querySnapshot.forEach((doc) => {
                const bookingyear = doc.data().year;
                const bookingmonth = doc.data().month;
                const bookingday = doc.data().day;
                const clID = doc.data().clinicId
                const clnicname = doc.data().clinicname
                const clnicadd = doc.data().clinicAdd

                const bookingtime = doc.data().bookingtime;
                const patientname = doc.data().patientname;

                const userid = doc.data().userid;
                console.log (bookingyear);
                console.log (bookingmonth);
                console.log (bookingday);
                console.log (userid);
                console.log (clID);
                setClname(clnicname)
                setAdd(clnicadd)
                setAyear(bookingyear);
                setAmonth(bookingmonth);
                setAday(bookingday)
                setTime(bookingtime)
                setName(patientname);
                setClnicID(clID);
                console.log(clinicID)
                console.log(setTime);
            });
        }
        gettingBK()
 },[user])

    // const getclinicinfo = async()=>{
    // const docRef = doc(db, "clinics",clinicID);
    // const docSnap = await getDoc(docRef);
    // setClname(docSnap.data().name);
    // setAdd(docSnap.data().add);
    // }
    // getclinicinfo()


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
                        text2= {"Date: " + year +" " + month +"  "+ day}   
                        text3= {"Time: "+time}
                        text5= {"Clinic: "+ clname}
                        text6={"Address: " + cladd}
                        text7="Check-in process"
                        text8="Upon arrival, check-in with your QR code to save time!"
                        fweight="500"
                        display="none"
                        height="400"
                    />

                    {/* <InfoCardTwo
                        text1="QR Code Generated"
                        text2="Your QR code has your booking details. For faster check-in, scan it at the front desk when you arrive."
                        text3="To view, click on the QR Code icon in the nav below."
                        fweight="300"
                    /> */}
                </Cont>
            </MyScrollView>
            <NavBarCont>
                <NavBar />
            </NavBarCont>
        </ConfirmCont>
    )
}

export default qrconfirm

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { addDoc,collection,setDoc,getDoc,doc,query,where} from 'firebase/firestore';
import {onAuthStateChanged,getAuth} from 'firebase/auth'
import Btn from '../../comps/Btn';
import styled from "styled-components/native";
import { useNavigation } from '@react-navigation/native';

import {Auth} from '../../utils/auth'
import {db} from '../../utils/store'

const ButtonCont = styled.View`
    align-items: center;
    height:200px;
    width:275px;
    margin:50px;
`;

export default function Datepick(
  //  bookingdate = {text},
  //  useruid= '',
  clinicId = '',
  ClinicName = '',
  ClinicAdd = ''

) {
    const navigation = useNavigation();  
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('time');
    const [show, setShow] = useState(true);
    const [text, setText] = useState('Select Date and Time');
    const [dbtime, setTime] = useState('18:30') 
    const [dbday, setDay] = useState('') 
    const [day,setAday] = useState('') 
    const [month,setAmonth] = useState('');
    const [year,setAyear] = useState('') 


    const [user,setUser] = useState('');
    const [fname,setFname] =useState('')
    const [lname,setLname] =useState('')
    const [clinicID,setClnicID] =useState('')
    const [ready,setReady] =useState('')
    
    useEffect (()=>{
        const auth = getAuth()
        const userid = auth.currentUser.uid;
        setUser(userid)
        setClnicID(clinicId)
        console.log(userid)
        console.log(clinicId)
        // const clinicUID = route.params;
        // const num = clinicUID.clinicUID
        // setUID(num);
       
      //   const getting =async()=>{
      //   const docRef = doc(db, "patientuser",user);
      //   const docSnap = await getDoc(docRef);
      //   setInfo(docSnap.data())
      //   console.log(docSnap.data())
      // }
      // getting()
       },[]) 

    console.log(clinicID)

    const booking = async(
    )=>{
      // setClnicID(clinicId.clinicId)
      getting()
      console.log(clinicID)
      await addDoc(collection(db,"appointment"),{
          userid:user,
          clinicId:clinicID,
          bookingtime:dbtime,
          bookingdate:dbday,
          patientname:fname+' '+lname,
          year:year,
          month:month,
          day:day,
           });
    }
         const getting =async()=>{
         const docRef = doc(db, "patientuser",user);
         const docSnap = await getDoc(docRef);
         setClnicID(clinicId.clinicId)
         setReady("ready to go")
         setFname(docSnap.data().fname);
         setLname(docSnap.data().lname);
         console.log(fname)
         console.log(lname)  
     }

      const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
       let tempDate = new Date(currentDate);
       let fdate =tempDate.getDate() + "/" +(tempDate.getMonth()+1) + "/" +tempDate.getFullYear();
       let ftime = tempDate.getHours() + ":" +tempDate.getMinutes();
       let day = tempDate.getDate();
       let month = (tempDate.getMonth()+1);
       let year = tempDate.getFullYear();


       setAday(day)
       setAmonth(month)
       setAyear(year)
       setText(fdate + "      " + ftime);
       setTime(ftime);
       setDay(fdate);
      // setTime(ftime)
    };
  
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };

     const showDatepicker = () => {
       showMode('date');
     };

    const showTimepicker = () => {
      showMode('time');
    };

    return (
      <View style = {styles.container} >
        <View style = {styles.butcontainer}>
          <Btn onPress={showDatepicker} title="Select A Date" />
        </View>

         <View style = {styles.butcontainer}>
          <Btn  onPress={showTimepicker} title="Select A Time"  />
        </View>    
     
     {show && (
      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode={mode}
        is24Hour={true}
        display="default"
        onChange={onChange}
        style = {{alignItems:"center"}}
      />
    )}

       <View style = {styles.bookinfo}>
          <Text>Your Appoinment is</Text>
          <Text>{text}</Text>
        </View> 
  
              <ButtonCont>
                    {/* <Btn title='Check-in'onPress ={getting} />   */}
                        <View>
                          <Text>Your Name is {fname+ ' '+ lname}</Text>
                          <Text>Your booking is {ready}</Text>
                       </View>    
                     <View style = {{margin:10}}>  
                     <Btn title='Booking' onPress = {booking} /> 
                     </View>  

                     <View style = {{margin:10}}>  
                     <Btn title={'Confirm'} onPress ={() => {booking;navigation.navigate('qrconfirm')}} /> 
                     </View>
              </ButtonCont>    


      </View>
    );
  };

  const styles = StyleSheet.create({
        container: {
        flex:1,
        backgroundColor: '#f7f2ee',
          //  flexDirection:'column',
          //   alignItems: 'center',
          // justifyContent: 'center',
          },
        butcontainer: {
          flex:1,
          backgroundColor: '#97BDD6',
          margin:10,
          //  flexDirection:'column',
          alignItems: 'center',
          justifyContent: 'center',
          },
         bookinfo: {
          flex:1,
          backgroundColor: '#fff',
           borderRadius:10,
           alignItems: 'center',
           justifyContent: 'center',
           },
          date:{
            flex:1,
            backgroundColor: '#fff',
            // margin:30,
          },
          time:{
            flex:1,
            backgroundColor: '#97BDD6',
            // margin:30,
          },
          btn:{
            margin:5,
            // width:100,
            // height:100,
            // backgroundColor: '#97BDD6',
          }
  
    })

// export default Datepick;
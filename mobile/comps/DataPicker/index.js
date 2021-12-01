import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { addDoc,collection,setDoc,getDoc,doc,query,where} from 'firebase/firestore';
import {onAuthStateChanged,getAuth} from 'firebase/auth'
import styled from "styled-components/native";
import {Auth} from '../../utils/auth'
import {db} from '../../utils/store'

const ButtonCont = styled.View`
  
    align-items: center;
    width: 275px;
    height:300px;
    margin-top: 25px;
`;

export default function Datepick(
  //  bookingdate = {text},
  //  useruid= '',
  clinicId = ''
) {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('time');
    const [show, setShow] = useState(true);
    const [text, setText] = useState('Select Date and Time');
    const [dbtime, setTime] = useState('18:30') 
    const [dbday, setDay] = useState('') 
    const [user,setUser] = useState('');
    const [fname,setFname] =useState('')
    const [lname,setLname] =useState('')
    const [clinicID,setClnicID] =useState('')
    const [ready,setReady] =useState('')
    
    useEffect (()=>{
        const auth = getAuth()
        const userid = auth.currentUser.uid;
        setUser(userid)
        console.log(clinicID)
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
    
      
      await setDoc(doc(db,"appointment",user), {
          userid:user,
          clinicId:clinicID,
          bookingtime:dbtime,
          bookingdate:dbday,
          patientname:fname+' '+lname
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

      // useEffect (()=>{
      //  const auth = getAuth
      //  auth.currentUser
      //  onAuthStateChanged((u)=>{
      //    if(u){
      //      setUser(u);
      //      console.log(u)
      //    }
      //  }) 
      // },[])

      const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
       let tempDate = new Date(currentDate);
       let fdate =tempDate.getDate() + "/" +tempDate.getMonth() + "/" +tempDate.getFullYear();
       let ftime = tempDate.getHours() + ":" +tempDate.getMinutes();
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
      <View >
        <View style = {styles.butcontainer}>
          <Button onPress={showDatepicker} title="Pick the Date" style ={styles.button}/>
        </View>

         <View style = {styles.butcontainer}>
          <Button onPress={showTimepicker} title="Pick the Time" style ={styles.button} />
        </View>    
     
     {show && (
      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode={mode}
        is24Hour={true}
        display="default"
        onChange={onChange}
      />
    )}

       <View style = {styles.bookinfo}>
          <Text>Your Appoinment is</Text>
          <Text>{text}</Text>
        </View> 
       
              
              <ButtonCont>
                    {/* <Button
                        title={'Confirm'}
                        fSize={18}
                        onPress={() => navigation.navigate('qrconfirm')}
                    /> */}
                    <Button  title='Check-in' onPress = {getting} style = {styles.btn}></Button> 

                          <Text>Your Name is {fname+ ' '+ lname}</Text>
                          <Text>Your booking is {ready}</Text>

                    <Button  title='Booking' onPress = {booking} style = {styles.btn}></Button>

              </ButtonCont>    


      </View>
    );
  };

  const styles = StyleSheet.create({
        container: {
        flex:1,
        backgroundColor: '#97BDD6',
          //  flexDirection:'column',
            alignItems: 'center',
          justifyContent: 'center',
          },
        butcontainer: {
          flex:1,
          backgroundColor: '#97BDD6',
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
          button:{
            margin:5,
            backgroundColor: '#97BDD6',
          }
  
    })

// export default Datepick;
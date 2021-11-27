import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { addDoc,collection,setDoc,getDoc,doc,query,where} from 'firebase/firestore';
import {onAuthStateChanged,getAuth} from 'firebase/auth'
import styled from "styled-components/native";
import {Auth} from '../../utils/auth'
import {db} from '../../utils/store'


const ButtonCont = styled.View`
    /* justify-content: flex-end; */
    align-items: flex-end;
    width: 275px;
    /* height: 150px; */
    margin-top: 25px;
`;

export default function Datepick(
  //  bookingdate = {text},
  //  useruid= '',
) {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('time');
    const [show, setShow] = useState(true);
    const [text, setText] = useState('Select Date and Time');
    const [dbtime, setTime] = useState('18:30') 
    const [dbday, setDay] = useState('') 
    const [user,setUser] = useState('');
    
    useEffect (()=>{
        const auth = getAuth()
        const userid = auth.currentUser.uid;
        setUser(userid)
        console.log(user)
       },[])

    const booking = async(

    )=>{

      await setDoc(doc(db,"appointment",user), {
          userid:user,
          Time:dbtime,
          Day:dbday});

      //   const pushing = setDoc(doc(db,"appointment",useruid),{
      //   fname: "hello",
      //   lname: "again",
      //   clinicid: "nah",
      //   clincid: "bcit",
      //   date: "hennry",
      //   time: "medcon",
      // })
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
      <View>
        <View>
          <Button onPress={showDatepicker} title="Show Date picker!"/>
          <Button onPress={showTimepicker} title="Show time picker!"/>
         <Text>{text}</Text>
        
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
              <ButtonCont>
                    <Button
                        title={'Confirm'}
                        fSize={18}
                        onPress={() => navigation.navigate('qrconfirm')}
                     />
                    <Button  title='getting' onPress = {booking}></Button>
              </ButtonCont>
             
      </View>
    );
  };


  // const styles = StyleSheet.create({
  //   container: {
  //     backgroundColor: '#fff',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //   },})

// export default Datepick;
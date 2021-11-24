import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { addDoc,collection,setDoc,getDoc,doc,query,where} from 'firebase/firestore';
import styled from "styled-components/native";
import {db} from '../../utils/store'


const ButtonCont = styled.View`
    /* justify-content: flex-end; */
    align-items: flex-end;
    width: 275px;
    /* height: 150px; */
    margin-top: 25px;
`;

export default function Datepick(
   bookingdate = {text}

) {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('time');
    const [show, setShow] = useState(true);
    const [text, setText] = useState('Select Date and Time');
    const [dbtime, setTime] = useState('18:30') 

    const booking = async() =>{
      
      const bookingdata = collection(db,"bookings")
      // await setDoc(bookingdata,{
      //     date:1233,
      //     month:1221,
      //     year:2023
      // }
      await setDoc(doc(bookingdata, "not"), {
          date:23,
          month:12,
          year:2021});
  }
      // await setDoc(document(bookingdata,"test"), {
      //     date:30,
      //     month:12,
      //     year:2019});
      

     const getting = async()=>{
     const docRef = doc(db, "bookings", "booking100");
     const docSnap = await getDoc(docRef);
     if (docSnap.exists()) {
         console.log("Document data:", docSnap.data());
        
       } else {
         // doc.data() will be undefined in this case
         console.log("No such document!");
       }
     }

      const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
       let tempDate = new Date(currentDate);
       let fdate =tempDate.getDate() + "/" +tempDate.getMonth() + "/" +tempDate.getFullYear();
       let ftime = tempDate.getHours() + ":" +tempDate.getMinutes();
      setText(fdate + "       " + ftime);
      setTime(ftime)
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
         <Text>{dbtime}</Text> 
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
                    <Button onPress = {getting} title={'getting'}></Button>
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
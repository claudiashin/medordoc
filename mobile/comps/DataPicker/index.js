import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styled from "styled-components/native";

const Datepick = () => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('time');
    const [show, setShow] = useState(true);
    const [text, setText] = useState(['Empty'])
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);


     let tempDate = new Date(currentDate);
     let fdate =tempDate.getDate() + "/" +(tempDate.getMonth())+tempDate.getFullYea();

     setText(fdate);

    };
  
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
     const showDatepicker = () => {
       showMode('date');
       console.log(date);
     };
  
    const showTimepicker = () => {
      showMode('time');
    };

    return (
      <View>
        <View>
          
          <Button onPress={showDatepicker} title="Show time picker!"/>
          <Button onPress={showTimepicker} title="Show time picker!"/>
         <Text>{Text}</Text>
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
      </View>
    );
  };

  // const styles = StyleSheet.create({
  //   container: {
  //     backgroundColor: '#fff',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //   },})

export default Datepick;
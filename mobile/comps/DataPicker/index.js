import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styled from "styled-components/native";

const Datepick = () => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('time');
    const [show, setShow] = useState(true);
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    };
  
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    // const showDatepicker = () => {
    //   showMode('date');
    // };
  
    const showTimepicker = () => {
      showMode('time');
    };
   

  
    return (
      <View>
        {/* <View>
          <Button onPress={showTimepicker} title="Show time picker!"/>
        </View> */}
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
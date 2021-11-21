import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components/native'
import { StyleSheet, Text, View } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import Day from 'react-native-calendars/src/calendar/day';
// import moment from ''


const Appointment =({})=>{


return(
  <Calendar
  onDayPress={(day) => {console.log('selected day', day)}}
  markedDates={{
    '2021-11-16': {selected: true,selectedColor: 'blue'},
    '2021-11-17': {marked: true},
    '2021-11-18': {marked: true, dotColor: 'red', activeOpacity: 0},
    '2021-11-19': {disabled: true, disableTouchEvent: true}
  }}
  style={{width:400}}/> 

  


// {/* <Agenda
// pastScrollRange={20}
// style={{width:350,
// }}
// items={{
//     '2021-11-22': [{name: 'item 1 - any js object'}],
//     '2021-11-23': [{name: 'item 2 - any js object', height: 60}],
//     '2021-11-24': [],
//     '2021-11-25': [{name: 'item 3 - any js object'}, {name: 'any js object'}]
//   }}/> */}
 )
}
export default Appointment;
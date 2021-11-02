import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components/native'
import { StyleSheet, Text, View } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';


const Appointment =({})=>{
return(
 <Calendar
 onDayPress={(day) => {console.log('selected day', day)}}/> 
 )
}
export default Appointment;
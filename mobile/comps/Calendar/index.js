import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components/native'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';
import Day from 'react-native-calendars/src/calendar/day';
// import moment from ''

const Appointment =({})=>{
  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{marginRight: 10, marginTop: 30}}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>{item.name}</Text>
              <Avatar.Text label="Tom" />
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };


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
  
  

//  <Agenda
//  pastScrollRange={20}
//  style={{width:400,height:400
//  }}
 
//  items={{
//      '2021-11-22': [{name: 'Tom Booking'}],
//      '2021-11-23': [{name: 'item 2 - any js object', height: 80}],
//      '2021-11-23': [{name: 'item 3 - any js object', height: 100}],
//      '2021-11-25': [{name: 'item 3 - any js object'}, {name: 'any js object'}]
//    }}
//   renderItem ={renderItem}
//    /> 

 )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Appointment;
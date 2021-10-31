import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import BookingForm from './comps/BookingForm';
import DropDownFilter from './comps/DropDownFilter';

export default function App() {

      return (
        <View style={styles.container}>
          <BookingForm />
          <DropDownFilter />
        </View>
      );
  
}

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    fontFamily: 'Nunito-Regular',
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',

  },
});

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Appointment from './comps/Calendar'
import QR from './comps/QrCode'
import Map from './comps/Map'
import MenuCard from './comps/MenuCard'
//import SearchBar from './comps/SearchBar'
//import Filter from './comps/Filter'


// import BookingForm from './comps/BookingForm';
// import DropDownFilter from './comps/DropDownFilter';
// import LoginForm from './comps/LoginForm';

export default function App() {

      return (
        <View style={styles.container}>
          
          {/* <BookingForm />
          <DropDownFilter /> */}
          {/* <LoginForm></LoginForm> */}
        </View>
      );
  
}

const styles = StyleSheet.create({
  container: {
    
    fontFamily: 'Nunito-Regular',
    marginTop: 200,
     //flex: 1,
     //backgroundColor: '#fff',
     //alignItems: 'center',
     //justifyContent: 'center',

  },
});

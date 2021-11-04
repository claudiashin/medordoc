import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View } from 'react-native';
import Appointment from './comps/Calendar'
import QR from './comps/QrCode'
import Map from './comps/Map'

//import SearchBar from './comps/SearchBar'
//import Filter from './comps/Filter'
import { Provider as PaperProvider } from 'react-native-paper';


// import BookingForm from './comps/BookingForm';
// import DropDownFilter from './comps/DropDownFilter';
// import LoginForm from './comps/LoginForm';

import LoginForm from './comps/LoginForm';
import SigninForm from './comps/SigninForm';
import BookingForm from './comps/BookingForm';



export default function App() {
      return <>
      <PaperProvider>
          <View style={styles.container}>
            {/* <LoginForm /> */}
            {/* <SigninForm /> */}
            <BookingForm />
          </View>
      </PaperProvider>
    </>;
  
}

const styles = StyleSheet.create({
  container: {
    
    fontFamily: 'Nunito-Regular',
    marginTop: 50,
     //flex: 1,
     //backgroundColor: '#fff',
     //alignItems: 'center',
     //justifyContent: 'center',

  },
});

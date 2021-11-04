import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View } from 'react-native';
// import Appointment from './comps/Calendar'
// import QR from './comps/QrCode'
// import Map from './comps/Map'
// import MenuCard from './comps/MenuCard'


import LoginForm from './comps/LoginForm';

export default function App() {
      return (
        <View style={styles.container}>
          <LoginForm />
 
        </View>
      );
  
}

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});

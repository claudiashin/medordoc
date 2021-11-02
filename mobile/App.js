import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Appointment from './comps/Calendar'
import QR from './comps/QrCode'
import Map from './comps/Map'
import MenuCard from './comps/MenuCard'

<<<<<<< HEAD
// export {default} from './storybook'; 
export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Hello.js to start working on your app!!!</Text> */}
      <Appointment/>
      <QR/> 
      {/* <Map/>  */}
    </View>
  );
=======

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
  
>>>>>>> 3f4cd3d02e812de123b3a9bddfc3b4b16b6b62fa
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

import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import comps
import SigninForm from './comps/SigninForm';
import LoginForm from './comps/LoginForm';
import BookingForm from './comps/BookingForm';

//import pages
import home from './pages/home';
import findclinic from './pages/findclinic';
import clinicprofile from './pages/clinicprofile';
import login from './pages/login';
import signup from './pages/signup';
import accountconfirm from './pages/accountconfirm';
import booking from './pages/booking';
import qrconfirm from './pages/qrconfirm';
import scan from './pages/scan';
import finddoc from './pages/finddoc';
import history from './pages/history';
import docprofile from './pages/docprofile';
import patientprofile from './pages/patientprofile';
import confirmreq from './pages/confirmreq';
import QR from './pages/QR';
import firebase from './pages/firebase';
// import test from './pages/test'



const Stack = createNativeStackNavigator();


export default function App() {
  return (
      <NavigationContainer>
       <Stack.Navigator initialRouteName="home">
         <Stack.Screen name="home" component={home} />
         <Stack.Screen name="firebase" component={firebase} />
         <Stack.Screen name="QR" component={QR} /> 
         <Stack.Screen name="findclinic" options={{headerShown: false}}   component={findclinic} /> 
         <Stack.Screen name="finddoc" component={finddoc} />
         <Stack.Screen name="clinicprofile" component={clinicprofile} />
         <Stack.Screen name="docprofile" component={docprofile} />
         <Stack.Screen name="patientprofile" component={patientprofile} />
         <Stack.Screen name="signup" component={signup} />
         <Stack.Screen name="booking" component={booking} />
         <Stack.Screen name="qrconfirm" component={qrconfirm} />
         <Stack.Screen name="scan" component={scan} />
         <Stack.Screen name="accountconfirm" component={accountconfirm}/> 
         <Stack.Screen name="login" component={login}/> 
         <Stack.Screen name="history" component={history} /> 
         <Stack.Screen name="confirmreq" component={confirmreq} />
  

       </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
});
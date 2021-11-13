import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import styled from 'styled-components/native';
//import comps
import SigninForm from './comps/SigninForm';
import LoginForm from './comps/LoginForm';
import BookingForm from './comps/BookingForm';

//import pages
import findclinic from './pages/findclinic';
import home from './pages/home';
import booking from './pages/booking';
import qrconfirm from './pages/qrconfirm';
import scan from './pages/scan';
import login from './pages/login';
import accountconfirm from './pages/accountconfirm';
import signup from './pages/signup';
import patientprofile from './pages/patientprofile';
import QR from './pages/QR';


// import history from './pages/history';
import finddoc from './pages/finddoc';
// import docprofile from './pages/docprofile';
// import accountconfirm from './pages/accountconfirm';
import clinicprofile from './pages/clinicprofile';
import confirmreq from './pages/confirmreq';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
  
      <NavigationContainer >
       <Stack.Navigator initialRouteName="login" >
         <Stack.Screen name="Home" options={{headerShown: false}} component={home} />
         <Stack.Screen name="QR" component={QR} />
         <Stack.Screen name="findclinic" component={findclinic} />
         <Stack.Screen name="finddoc" component={finddoc} />
         <Stack.Screen name="clinicprofile" component={clinicprofile} />
         <Stack.Screen name="signup" component={signup} />
         <Stack.Screen name="booking" component={booking} />
         <Stack.Screen name="qrconfirm" component={qrconfirm} />
         <Stack.Screen name="scan" component={scan} /> 
         <Stack.Screen name="login" component={login} /> 
         {/* <Stack.Screen name="history" component={history} /> */}

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
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




import { Ionicons } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}

const Stack = createNativeStackNavigator();


export default function App() {

  const [ready, setReady] = useState(false);
  const init = async()=>{
    const fontAssets = cacheFonts([Ionicons.font]);
    await Promise.all([...fontAssets]);
  }
  if (!ready) {
    return (
      <AppLoading
        startAsync={init}
        onFinish={() => setReady(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen options={{ headerShown: false }} name="home" component={home} />
        <Stack.Screen options={{ headerShown: false }} name="findclinic" options={{ headerShown: false }} component={findclinic} />
        <Stack.Screen options={{ headerShown: false }} name="finddoc" component={finddoc} />
        <Stack.Screen options={{ headerShown: false }} name="clinicprofile" component={clinicprofile} />
        <Stack.Screen options={{ headerShown: false }} name="docprofile" component={docprofile} />
        <Stack.Screen options={{ headerShown: false }} name="patientprofile" component={patientprofile} />
        <Stack.Screen options={{ headerShown: false }} name="signup" component={signup} />
        <Stack.Screen options={{ headerShown: false }} name="booking" component={booking} />
        <Stack.Screen options={{ headerShown: false }} name="qrconfirm" component={qrconfirm} />
        <Stack.Screen options={{ headerShown: false }} name="scan" component={scan} />
        <Stack.Screen options={{ headerShown: false }} name="accountconfirm" component={accountconfirm} />
        <Stack.Screen options={{ headerShown: false }} name="login" component={login} />
        <Stack.Screen options={{ headerShown: false }} name="history" component={history} />
        <Stack.Screen options={{ headerShown: false }} options={{ headerShown: false }}name="confirmreq" component={confirmreq} />
        <Stack.Screen options={{ headerShown: false }} name="QR" component={QR} />
        {/* <Stack.Screen options={{ headerShown: false }} name="test" component={test} /> */}
        {/* <Stack.Screen options={{ headerShown: false }} name="dbtest" component={dbtest} /> */}
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
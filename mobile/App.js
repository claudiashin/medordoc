import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import styled from 'styled-components/native';
import Home from './pages/Home'
import findclinic from './pages/findclinic'
import QR from './pages/QR'
import History from './pages/history';
import scan from './pages/scan';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();



export default function App() {
      return <>
   

      <NavigationContainer>
       <Stack.Navigator initialRouteName="scan">
         <Stack.Screen name="Home" component={Home} />
         <Stack.Screen name="QR" component={QR} />
         <Stack.Screen name="findclinic" component={findclinic} />
         <Stack.Screen name="History" component={History} />
         <Stack.Screen name="scan" component={scan} />
       </Stack.Navigator>
     </NavigationContainer> 
    </>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

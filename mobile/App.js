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
import Home from './pages/Home'
import findclinic from './pages/findclinic'
import QR from './pages/QR'



// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();



export default function App() {
      return <PaperProvider>
          <View style={styles.container}>
            {/* <LoginForm /> */}
            {/* <SigninForm /> */}
            <BookingForm />
          </View>
      </PaperProvider>
      {/* <NavigationContainer>
       <Stack.Navigator initialRouteName="Home">
         <Stack.Screen name="Home" component={Home} />
         <Stack.Screen name="QR" component={QR} />
         <Stack.Screen name="findclinic" component={findclinic} />
       </Stack.Navigator>
     </NavigationContainer> */}

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

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useFonts } from 'expo-font';



import BookingForm from './comps/BookingForm';

export default function App() {

  let [fontsLoaded] = useFonts({
    'Nunito-Regular': require('./assets/Nunito-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Hello</Text>;
  } else {
      return (
        <View style={styles.container}>
          <BookingForm />
      
        </View>
      );
  }
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

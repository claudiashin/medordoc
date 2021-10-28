import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Appointment from './comps/Calendar'


// export {default} from './storybook'; 
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello.js to start working on your app!!!</Text>
      <Appointment/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

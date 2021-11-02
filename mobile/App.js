import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './comps/Header';
import Btn from './comps/Btn';
import MenuCard from './comps/MenuCard'

export default function App() {
  return (
    <View style={styles.container}>
      <Header
        title="Sign-In" 
        // title="Here’s Your Account Info"
        fontSize="26"     
      />
      <Btn
        title = "Start"
      />
      <MenuCard />
      <MenuCard 
      title = "Find a Doctor"/>
      
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

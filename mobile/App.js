import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SearchBar from './comps/SearchBar';
import ClinDocButton from './comps/ClinDocButton';

export default function App() {
  return (
    <View style={styles.container}>
      <ClinDocButton/>
      <Text>Hello.js to start working on your app!!!</Text>
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

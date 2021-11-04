import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';



import LoginForm from './comps/LoginForm';
import SigninForm from './comps/SigninForm';
import BookingForm from './comps/BookingForm';

export default function App() {
      return <>
      <PaperProvider>
          <View style={styles.container}>
            {/* <LoginForm /> */}
            {/* <SigninForm /> */}
            <BookingForm />
          </View>
      </PaperProvider>
    </>;
  
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});

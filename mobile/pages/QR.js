import styled from 'styled-components/native'
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';


const QR = ({navigation})=>{
return(
  <View styles = {styles.container}>

    <QRCode
    value="https://www.google.com/"
  />

  </View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
});

export default QR;

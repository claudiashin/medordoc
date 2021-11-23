import styled from 'styled-components/native'
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import NavBar from '../comps/NavBar';

const Cont = styled.View`
  flex:1;
  justify-content:center;
align-items:center;
padding-top:100px;

`
const NavBarCont = styled.View`

`;
const MyScrollView = styled.ScrollView`

`
const QR = ({navigation})=>{
return(
    <Cont>
      <MyScrollView>

    <QRCode 
    value="https://www.google.com/"
  />
  </MyScrollView>

  <NavBarCont>
  <NavBar />
  </NavBarCont>
</Cont>

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

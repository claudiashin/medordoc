import styled from 'styled-components/native'
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const scan = ({navigation})=>{
return( 
    <QRCode
    value="https://www.google.com/"
  />
)
}
export default scan;

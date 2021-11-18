import styled from 'styled-components/native'
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const QR = ({})=>{
return(
    <QRCode
    value="https://www.google.com/"
  />
)
}
export default QR;


// export default function QR() {

//   const [size, setSize] = useState(400);
//   const [word, setWord] = useState("");
//   const [qrCode, setQrCode] = useState("");

//   useEffect(() => {
//     setQrCode
//   (`http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`);
//   }, [word, size]);
// }



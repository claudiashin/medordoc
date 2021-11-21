import styled from 'styled-components/native'
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import NavBar from '../comps/NavBar';

const Cont = styled.View`
  flex:1;

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

// const QR = () => {
//   const [imageUri, setImageUri] = useState(null);
//   const [detectImageUri, setDetectImageUri] = useState(null);
//   const [detectedValues, setDetectedValues] = useState([]);
//   const [text, setText] = useState('');
//   const [error, setError] = useState('');

//   const generate = () => {
//     if (!text.trim()) {
//       setError('value cannot be empty');
//       setText('');
//       return;
//     }
//     RNQRGenerator.generate({
//       // value: 'otpauth://totp/Example:alice@google.com?secret=JBSWY3DPEHPK3PXP&issuer=Example', // required
//       value: text,
//       height: 300,
//       width: 300,
//       base64: true,
//       backgroundColor: 'white',
//       color: 'black',
//       correctionLevel: 'M',
//       // padding: {
//       //   top: 0,
//       //   left: 0,
//       //   bottom: 0,
//       //   right: 0,
//       // }
//     })
//       .then((response) => {
//         console.log('Response:', response);
//         setImageUri({uri: response.uri});
//       })
//       .catch((err) => console.log('Cannot create QR code', err));
//   };

//   return <Cont>
      
//   <Image style={styles.image} source={imageUri} />

//    <NavBarCont>
//      <NavBar />
//    </NavBarCont>
  
//   </Cont>
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  // image: {
  //   backgroundColor: '#F3F3F3',
  //   width: height / 3,
  //   height: height / 3,
  //   borderWidth: StyleSheet.hairlineWidth,
  //   marginBottom: 16,
  // },
});

export default QR;

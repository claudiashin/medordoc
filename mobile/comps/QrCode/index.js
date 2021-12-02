import styled from "styled-components/native";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Cont = styled.View`
  margin-bottom: 50px;
  width: 200px;
  height: 200px;
  background: #FFFFFF;
  /* border: 1px solid #E9D7CB; */
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

const Qrcode = ({
  
}) => {
const [uid, setUserUid] = useState()
  // useEffect(async () => {
  //   const auth = getAuth();
  //   onAuthStateChanged(auth, async (user) => {
     
  //     if (user) {
       
  //       setUserUid(user.uid);
      
  //     }else{
  //       console.log("no")
  //       setUserUid("default");

  //     }
  //   });
  // }, []);
  return (
    <Cont>
      <QRCode 
        value={uid} 
        size={185}
      />
    </Cont>
  );
};
export default Qrcode;



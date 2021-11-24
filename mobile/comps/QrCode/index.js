import styled from "styled-components/native";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import QRCode from "react-native-qrcode-svg";

const Cont = styled.View`
  margin-bottom: 50px;
  width: 200px;
  height: 200px;
  background: #FFFFFF;
  border: 1px solid #E9D7CB;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

const Qrcode = ({}) => {
  return (
    <Cont>
      <QRCode value="https://www.google.com/" />
    </Cont>
  );
};
export default Qrcode;



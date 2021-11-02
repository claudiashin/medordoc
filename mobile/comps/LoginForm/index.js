import styled from "styled-components/native";
import React from "react";

const LoginFormCont = styled.View`
  width:400px;
  height:400px;
  justify-content:center;
  align-items:center;
`

const LoginFormInput = styled.TextInput`

`
const LoginForm = () => {
  return <LoginFormCont>
    <LoginFormInput multiline style={{borderBottomColor: '#000000', borderBottomWidth: 1,}} numberOfLines={4} value={"asdas"}></LoginFormInput>
  </LoginFormCont>
}

export default LoginForm
import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import Btn from "../Btn";

import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";

const MainCont = styled.div`
  display: flex;
  flex-direction: column;
`;
const Form = styled.fieldset`
  margin: 15px;
  border: 1px solid black;
  width: 400px;
  height: 55px;
`;
const FormTitle = styled.legend`
  margin: 5px;
  font-size: 14px;
`;
const FormInput = styled.input`
  border: none;
  outline: none;
  width: 385px;
  padding-bottom: 5px;
  background-color: #f7f2ee;
`;
const Title = styled.p`
  margin-left: 15px;
  font-size: 18px;
  font-weight: 600;
`;

const ButtonCont = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const AlertBanner = styled.div`
  padding: 1rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  color: #842029;
  background-color: #f8d7da;
  border-color: #f5c2c7;
  display: ${(props) => (props.show ? "block" : "none")};
`;

const SigninForm = ({ setChangePage, setInfo, info }) => {
  const [showAlert, setShowAlert] = React.useState(false);
  const [error, setError] = React.useState("");
  
  return (
  <MainCont>
    <AlertBanner show={showAlert}>{error}</AlertBanner>
    <Title>Log in Information</Title>
    <Form>
      <FormTitle>Username</FormTitle>
      <FormInput
        type="email"
        placeholder="Username"
        value={info.user}
        onChange={(e) => {
          setInfo({user: e.target.value});
        }}
      />
    </Form>
    <Form>
      <FormTitle>Password</FormTitle>
      <FormInput
        type="password"
        placeholder="Password"
        value={info.pass}
        onChange={(e) => {
          setInfo({pass: e.target.value});
        }}
      />
    </Form>
    <Form>
      <FormTitle>Email Address</FormTitle>
      <FormInput
        type="email"
        placeholder="Email Address"
        value={info.email}
        onChange={(e) => {
          setInfo({email: e.target.value});
        }}
      />
    </Form>
    <ButtonCont
      onClick={async () => {
        setShowAlert(false);
        if(
          info.user == "" ||
          info.pass == "" ||
          info.email == ""
        ){
          setError("Please fill out the form correctly");
          setShowAlert(true);
        }else {
          setChangePage(1);
        }
      }}
    >
      <Btn
        title="Next"
        width="120px"
        height="40px"
        fSize="16px"
        bgColor="#90AABB"
        borderRad="20px"
        margin="40px 15px 0px 0px"
        bgHover="#BCDFF6"
      />
    </ButtonCont>
  </MainCont>
  )
};

export default SigninForm;

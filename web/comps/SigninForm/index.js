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


const SigninForm = ({ setChangePage }) => {
  const [changeForm, setChangeForm] = useState(true);
  const router = useRouter();

  const [clinicUser, setUser] = React.useState([]);
  const [clinicPass, setPass] = React.useState([]);
  const [clinicEmail, setEmail] = React.useState([]);

  if (changeForm === true) {
    return (
      <MainCont>
        <Title>Log in Information</Title>
        <Form>
          <FormTitle>Username</FormTitle>
          <FormInput
            type="email"
            placeholder="Username"
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />
        </Form>
        <Form>
          <FormTitle>Password</FormTitle>
          <FormInput
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
        </Form>
        <Form>
          <FormTitle>Email Address</FormTitle>
          <FormInput
            type="email"
            placeholder="Email Address"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form>
        <ButtonCont
          onClick={async () => {
            const result = await addDoc(collection(db, "clinics"), {
              username: clinicUser,
              password: clinicPass,
              email: clinicEmail,
            });
            setChangePage(1);
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
    );
  }
};

export default SigninForm;

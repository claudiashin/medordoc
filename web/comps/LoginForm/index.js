import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import Btn from "../Btn";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  width: $ ${(props) => props.width}px;
`;

const Title = styled.p`
  margin-left: 15px;
  font-size: 16px;
  font-weight: 600;
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
  type: text;
  width: 380px;
  padding-bottom: 5px;
  background-color: #f7f2ee;
`;
const LastDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 15px;
  margin-top: -10px;
`;
const Text = styled.p`
  font-size: 16px;
  color: #979595;
`;
const TextLink = styled.a`
  font-size: 16px;
  color: #226baf;
  margin-left: 10px;
`;
const BtnCont = styled.div`
  margin-top: 70px;
  margin-left: 130px;
`;

const AlertBanner = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
  width: 400px;
  font-size: 14px;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  color: #842029;
  background-color: #f8d7da;
  border-color: #f5c2c7;
  display: ${(props) => (props.show ? "block" : "none")};
`;

const LoginForm = ({ width = "300" }) => {
  const router = useRouter();

  const [clinicEmail, setEmail] = React.useState("");
  const [clinicPass, setPass] = React.useState("");

  const [showAlert, setShowAlert] = React.useState(false);
  const [error, setError] = React.useState("");

  return (
    <MainCont width={width}>
      <AlertBanner show={showAlert}>{error}</AlertBanner>
      <Title>Sign In</Title>
      <Form>
        <FormTitle>Email</FormTitle>
        <FormInput
          type="text"
          placeholder="Email Address"
          value={clinicEmail}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form>
      <Form>
        <FormTitle>Password</FormTitle>
        <FormInput
          type="password"
          placeholder="Password"
          value={clinicPass}
          onChange={(e) => setPass(e.target.value)}
        />
      </Form>
      <LastDiv>
        <Text>
          Don't have an account?
          <TextLink onClick={() => router.push("/signup")}>Sign up</TextLink>
        </Text>
      </LastDiv>
      <BtnCont>
        <Btn
          title="Sign In"
          fSize="22px"
          color="#fff"
          bgColor="#90AABB"
          width="200px"
          height="53px"
          margin="5px"
          borderRad="25px"
          bgHover="#7C9AAD"
          onClick={async () => {
            setShowAlert(false);
            if (clinicEmail == "" || clinicPass == "") {
              setError("You entered wrong email or password. Please try again");
              setShowAlert(true);
            } else {
              const auth = getAuth();
              const result = await signInWithEmailAndPassword(
                auth,
                clinicEmail,
                clinicPass
              );
            }
            router.push("/home");
          }}
        />
      </BtnCont>
    </MainCont>
  );
};

export default LoginForm;



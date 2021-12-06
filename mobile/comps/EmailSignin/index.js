import React from "react";
import styled from "styled-components/native";
import store from "../../utils/inits";
import Btn from "../Btn";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Provider as PaperProvider, TextInput } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const MainCont = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LastDiv = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-top: -10px;
  margin-right: 5px;
  margin-bottom: 50px;
`;
const AlertBanner = styled.Text`
  padding: 1px 1px;
  margin-bottom: 1px;
  border: 1px solid transparent;
  color: #842029;
  background-color: #f7f2ee;
  border-color: #f5c2c7;
  display: ${(props) => (props.show ? "flex" : "none")};
`;

const ITinput = styled.TextInput``;
const Button = styled.Button``;
const Cont = styled.View``;
const MyText = styled.Text``;

export default function EmailSignin({
  onSignin = () => {},
  onCreate = () => {},
  uid = {},
}) {
  const [em, setEm] = useState("");
  const [ps, setPs] = useState("");
  const [showError, setShowError] = useState("");
  const [error, setError] = useState(false);
  const [errorTwo, setErrorTwo] = useState(false);
  const navigation = useNavigation();
  console.log(uid);

  return (
    <MainCont>
      {/* <AlertBanner show={setError,setErrorTwo}>{showError}</AlertBanner> */}
      <PaperProvider>
        <TextInput
          style={{
            width: 300,
            height: 50,
            margin: 5,
            borderRadius: 0,
            backgroundColor: "#fff",
          }}
          label="Email"
          returnKeyType="next"
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          mode="outlined"
          value={em}
          onChangeText={(val) => setEm(val)}
          error={error}
        />
        <TextInput
          style={{ width: 300, height: 50, margin: 5, backgroundColor: "#fff" }}
          label="Password"
          returnKeyType="done"
          keyboardType="visible-password"
          secureTextEntry
          mode="outlined"
          value={ps}
          onChangeText={(val) => setPs(val)}
          error={errorTwo}
        />
        <LastDiv>
          <Text style={{ color: "#575757", paddingTop: 20, paddingLeft: 5 }}>
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("signup")}>
            <Text style={{ color: "#226BAF", paddingTop: 20, paddingLeft: 5 }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </LastDiv>
        <Btn
          title="Log In"
          fsize="18"
          width="310"
          height="45"
          borderRad="10"
          margin="20"
          onPress={async () => {
            setShowError(false);
            if (em == "" || em.length < 5) {
              setError(true);

              setShowError("Please fill out the form correctly");
            }
            if (ps == "" || ps.length < 5) {
              setErrorTwo(true);
            } else {
              {
                onSignin(em, ps);
                if (em && ps !== " ") {
                  {
                    navigation.navigate("home", { clinicUID: uid });
                  }
                }
              }
            }
          }}
        />
        {/* <Button onPress ={()=>onCreate(em,ps)}title="Create Account"></Button> */}
      </PaperProvider>
    </MainCont>
  );
}

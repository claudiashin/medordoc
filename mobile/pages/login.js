import styled from "styled-components/native";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  ScrollView,
  Image,
} from "react-native";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
// import { useNavigation } from '@react-navigation/native';
import Header from "../comps/Header";
import app from "../utils/inits";
import HeroLottie from "../comps/HeroLottie";
import NavBar from "../comps/NavBar";
import Auth from "../comps/Auth";
import EmailSignin from "../comps/EmailSignin";
import LoginForm from "../comps/LoginForm";
import Btn from "../comps/Btn";

const Wave = styled.Image`
  width: 100%;
  height: 30%;
  position: absolute;
  top: 0;
`;

const LottieCont = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const MainCont = styled.View`
  background-color: #f7f2ee;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Login = styled.View``;
const ButCont = styled.View`
  margin-top: 20px;
  margin-bottom: 30px;
  align-items: center;
  justify-content: center;
`;
const BackCont = styled.View`
  display: flex;
  position: absolute;
  right: 250px;
  z-index: 999;
`;

const login = ({ route, navigation }) => {
  const [uid, setUID] = useState("");

  // const navigation = useNavigation();

  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const UID = route.params;
        // const num = UID.clinicUID
        setUID(UID.clinicUID);
        console.log(UID);

      }
      else {
        const UID = route.params;
        // const num = UID.clinicUID
        setUID(UID.clinicUID);
        console.log(UID);
      }
    });
  }, []);

  console.log(uid);

  const SignInGoogle = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    console.log(result);
  };

  const Upload = async (e) => {
    console.log(e.target.files[0]);
    if (e.target.files.length <= 0) {
      alert("no file selected");
      return false;
    }

    const file = e.target.files[0];
    const storage = getStorage();
    const storageRef = ref(storage, "test.jpg");
    const snapshot = await uploadBytes(storageRef, file);
    console.log("uploaded");
  };

  const CreateUser = async (em, ps) => {
    const auth = getAuth();
    const result = await createUserWithEmailAndPassword(auth, em, ps);
  };

  const Signin = async (em, ps) => {
    const auth = getAuth();
    const result = await signInWithEmailAndPassword(auth, em, ps);
    console.log(result);
  };

  return (
    <MainCont>
      <Wave source={require("../assets/backgroundmobile.png")} />
      <ScrollView>
        <LottieCont>
          <HeroLottie
            source={require("../assets/lottie_user.json")}
            style={{ width: 250 }}
          />
        </LottieCont>

        <Auth />
        <Login>
          <View style={styles.container}>
            <EmailSignin onSignin={Signin} onCreate={CreateUser} uid={uid} />
          </View>
        </Login>
      </ScrollView>

      <NavBar></NavBar>
    </MainCont>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.85,
  },
});

export default login;

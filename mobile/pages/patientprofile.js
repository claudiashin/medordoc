import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
} from "react-native";
import SigninForm from "../comps/SigninForm";
import BookingForm from "../comps/BookingForm";
import HeroAvatar from "../comps/HeroAvatar";
import LoginForm from "../comps/LoginForm";
import Btn from "../comps/Btn";
import NavBar from "../comps/NavBar";
import { useNavigation } from "@react-navigation/native";

import {
  addDoc,
  collection,
  setDoc,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { db } from "../utils/store";
import { Auth } from "../utils/auth";
import { useScrollToTop } from "@react-navigation/native";

const HeroCont = styled.View`
  margin-top: 100px;
  margin-bottom: 50px;
  flex:1;
  justify-content: center;
  align-items: center;
`;
const ButCont = styled.View`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 50px 0px 50px 0px;
`;
const Cont = styled.View`
  flex: 1;
`;
const NavBarCont = styled.View``;

const Wave = styled.Image`
  width: 100%;
  height: 25%;
  position: absolute;
`;

const SignOutImg = styled.Image`
  width: 30px;
  height: 30px;
  resize-mode: cover;
`;
const ImgCont = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  right: 15px;
  top: 50px;
  position: absolute;
  z-index: 1;
`;
const MyScrollView = styled.ScrollView``;
export default function patientprofile() {
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [add, setAdd] = useState();
  const [con, setCon] = useState();
  const [bd, setBd] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    const auth = getAuth();
    const userid = auth.currentUser.uid;
    if (userid) {
      const getting = async () => {
        const docRef = doc(db, "patientuser", userid);
        const docSnap = await getDoc(docRef);
        // const timestamp = Timestamp(Date())
        setFname(docSnap.data().fname);
        setLname(docSnap.data().lname);
        // setBd(docSnap.data().dob.seconds)
        // console.log(new Date(bd*1000))
        //setBd(docSnap.data().dob.seconds)
        // console.log(docSnap.data().dob.seconds)
        setAdd(docSnap.data().address);
        setCon(docSnap.data().medconcern);
        console.log(docSnap.data().medconcern);
        // console.log(docSnap.data().dob.seconds)
      };
      getting();
    } else {
      setFname(name);
      setLname(name);
      setBd(date);
      setAdd(address);
      setCon(medconcern);
      console.log(docSnap.data());
    }
  }, []);

  //    const info = {
  //     fname:fname,
  //     lname:lname,
  //     add:add,
  //     concern:con,
  //     dob:bd,
  //   };
  //   const setInfo = ({
  //     fname:fname,
  //     lname:lname,
  //     add: add,
  //     concern:con,
  //     dob:bd,
  //   }) => {
  //     setFname(fname);
  //     setLname(lname);
  //     setAdd(add);
  //     setCon(con);
  //     setBd(bd);
  //   };

  const [changeForm, setChangeForm] = useState(true);

  const SignOut = async () => {
    const auth = getAuth();
    await signOut(auth);
    console.log("signout");
    navigation.navigate("login");
  };
  if (changeForm === true) {
    return (
      <Cont>
        <Wave source={require("../assets/backgroundmobile.png")} />
        <ImgCont onPress={SignOut}>
          <SignOutImg source={require("../assets/icons/sign-out.png")} />
        </ImgCont>
        <MyScrollView style={styles.scrollView}>
          <HeroCont>
            {/* <HeroAvatar 
                        heroheight="160"
                        herowidth="160"
                        pluswidth="25"
                        plusheight="25"
                        visible="none"
                    /> */}
            <View style={{ backgroundColor: "white", borderRadius: "100%" }}>
              <Image
                source={require("../assets/man.png")}
                style={{ width: 120, height: 120, margin: 10 }}
              />
            </View>
          </HeroCont>
          <BookingForm
            dbaddress={add}
            dbconcerns={con}
            dbname={fname + lname}
          />

          <ButCont>
            <Btn
              title="Edit"
              fsize="20"
              bgcolor="#B9D1E1"
              width="120"
              height="50"
              borderRad="60"
              onPress={() => {
                setChangeForm(false);
              }}
            ></Btn>
          </ButCont>
        </MyScrollView>
        <NavBarCont>
          <NavBar />
        </NavBarCont>
      </Cont>
    );
  }

  return (
    <Cont>
      <Wave source={require("../assets/backgroundmobile.png")} />
      <ImgCont>
        <SignOutImg source={require("../assets/icons/sign-out.png")} />
      </ImgCont>
      <MyScrollView style={styles.scrollView}>
        <HeroCont
            
        >
          <View style={{ backgroundColor: "#faf7f3", borderRadius: "100%" }}>
            <Image
              source={require("../assets/man.png")}
              style={{ width: 120, height: 120, margin: 10 }}
            />
          </View>
        </HeroCont>
        <BookingForm editable={true} />
        <ButCont>
          <Btn
            title="Save"
            fsize="20"
            bgcolor="#97BDD6"
            width="120"
            height="50"
            borderRad="60"
            onPress={() => {
              setChangeForm(true);
            }}
          ></Btn>
        </ButCont>
      </MyScrollView>
      <NavBarCont>
        <NavBar />
      </NavBarCont>
    </Cont>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 30,
  },
});

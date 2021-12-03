import React, { Component, useState, useEffect } from "react";
import { TextInput, Button } from "react-native-paper";
import { StyleSheet, Text } from "react-native";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../../utils/store";

import AppLoading from "expo-app-loading";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";

const styles = StyleSheet.create({
  inputbox: {
    width: 335,
    height: 50,
    margin: 5,
    backgroundColor: "rgba(0,0,0,0)",
    fontFamily: "Nunito_400Regular",
  },
});

const DrDetail = ({ doctorInfo }) => {
  const [text, setText] = React.useState("");
  const [name, setName] = React.useState("");
  const [lang, setLang] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [experience, setExperience] = React.useState("");
  const [others, setOthers] = React.useState("");

  const [info, setInfo] = useState("");

  useEffect(() => {
    const GetData = async () => {
      const docRef = doc(db, "doctors", "R1AeIPqpQxFy1nthjalY");
      const docSnap = await getDoc(docRef);
      setInfo(docSnap.data());
      console.log(docSnap.data());
    };

    GetData();
  }, []);
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <TextInput
          style={styles.inputbox}
          underlineColor="#505050"
          type="flat"
          label="Name"
          textContentType="name"
          value={doctorInfo.name}
          editable={false}
          onChangeText={(name) => setName(name)}
        ></TextInput>
        <TextInput
          style={styles.inputbox}
          underlineColor="#505050"
          type="flat"
          label="Gender"
          value={doctorInfo.gender}
          editable={false}
          onChangeText={(text) => setText(text)}
        ></TextInput>

        <TextInput
          style={styles.inputbox}
          underlineColor="#505050"
          textContentType="fullStreetAddress"
          type="flat"
          label="Language"
          value={doctorInfo.lang.join(", ")}
          editable={false}
          onChangeText={(lang) => setLang(lang)}
        ></TextInput>
        <TextInput
          style={styles.inputbox}
          underlineColor="#505050"
          autoCapitalize="sentences"
          type="flat"
          label="Experience"
          value={doctorInfo.ex + " years"}
          editable={false}
          onChangeText={(experience) => setExperience(experience)}
        ></TextInput>
        <TextInput
          style={styles.inputbox}
          underlineColor="#505050"
          autoCapitalize="sentences"
          type="flat"
          label="Clinic"
          value={doctorInfo.location}
          editable={false}
          onChangeText={(address) => setAddress(address)}
        ></TextInput>
      </>
    );
  }
};

export default DrDetail;

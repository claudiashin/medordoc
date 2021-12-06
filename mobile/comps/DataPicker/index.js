import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  addDoc,
  collection,
  setDoc,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import Btn from "../../comps/Btn";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import { Auth } from "../../utils/auth";
import { db } from "../../utils/store";

import AppLoading from "expo-app-loading";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";

const ButtonCont = styled.View`
  align-items: center;
  height: 200px;
  width: 275px;
  margin: 50px;
`;

export default function Datepick(
  //  bookingdate = {text},
  //  useruid= '',
  clinicId = "",
  ClinicName = "",
  ClinicAdd = ""
) {
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("time");
  const [show, setShow] = useState(true);
  const [text, setText] = useState("");
  const [dbtime, setTime] = useState("18:30");
  const [dbday, setDay] = useState("");
  const [day, setAday] = useState("");
  const [month, setAmonth] = useState("");
  const [year, setAyear] = useState("");

  const [user, setUser] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [clinicID, setClnicID] = useState("");
  const [ready, setReady] = useState("");


  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const auth = getAuth();
        const userid = auth.currentUser.uid;
        setUser(userid);
        setClnicID(clinicId.clinicId);

        console.log(userid)
      }
    });
  }, [user]);


  const getting = async () => {
    const docRef = doc(db, "patientuser", user);
    const docSnap = await getDoc(docRef);

    console.log(docSnap.data().clinicId);
    setClnicID(clinicId.clinicId);
    setReady("ready to go");
    console.log(setReady);
    setFname(docSnap.data().fname);
    setLname(docSnap.data().lname);
    console.log(fname);
    console.log(lname);
  };

  const booking = async () => {
    getting();
  
    
    await addDoc(collection(db, "appointment"), {
      userid: user,
      clinicId: clinicID,
      bookingtime: dbtime,
      bookingdate: dbday,
      patientname: fname + " " + lname,
      year: year,
      month: month,
      day: day,
      clinicname: clinicId.ClinicName,
      clinicAdd: clinicId.ClinicAdd,
      
    });
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    let tempDate = new Date(currentDate);
    let fdate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    let ftime = tempDate.getHours() + ":" + tempDate.getMinutes();
    // let ftime = tempDate.toTimeString();
    let day = tempDate.getDate();
    let month = tempDate.getMonth() + 1;
    let year = tempDate.getFullYear();
    setAday(day);
    setAmonth(month);
    setAyear(year);
    setText(fdate + "      " + ftime);
    setTime(ftime);
    setDay(fdate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.butcontainer}>
          <Btn onPress={showDatepicker} title="Select a Date" />
        </View>

        <View style={styles.butcontainer}>
          <Btn onPress={showTimepicker} title="Select a Time" />
        </View>

        <View
          // style = {{alignItems:"center", justifyContent: "center"}}
          style={{ position: "relative", right: 150, top: 15 }}
        >
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              onChange={onChange}

            />
          )}
        </View>

        <View style={styles.bookinfo}>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: 'center',
            left: 35,
            top: -20,
            backgroundColor: 'white',
            borderColor: '#e9d7cb',
            borderWidth: 1,
            width: 300,
            height: 80,
            padding: 5,
          }}
        >
          <Text style={{ fontFamily: 'Nunito_400Regular', marginTop: 10 }}> 
        Press to confirm your booking date and time
          </Text>
        <Btn 
        bgcolor="white"
        fcolor="black"
        width='200'
        fsize="20"
        title={text} onPress ={getting} />  
        </View>
        <ButtonCont>
          <View style={{ margin: 10 }}>
          </View>

          <View
            style={{top: -20, right: -75}}
          >
            <Btn
              title={"Confirm"}
              onPress={() => {
                getting();
                booking();
                navigation.navigate("qrconfirm");
              }}
            />
          </View>
        </ButtonCont>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f2ee",
    marginTop: -50,
  },
  butcontainer: {
    flex: 1,
    height: 30,
    width: 300,
    left: 25,
    backgroundColor: "#97BDD6",
    margin: 10,
    //  flexDirection:'column',
    alignItems: "center",
    justifyContent: "center",
  },
  bookinfo: {
    flex: 1,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
  },
  date: {
    flex: 1,
    backgroundColor: "#fff",
    // margin:30,
  },
  time: {
    flex: 1,
    backgroundColor: "#97BDD6",
    // margin:30,
  },
  btn: {
    margin: 0,
    // width:100,
    // height:100,
    // backgroundColor: '#97BDD6',
  },
});

// export default Datepick;

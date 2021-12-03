import React, { useState } from "react";
import styled from "styled-components/native";
import { Provider as PaperProvider, TextInput } from "react-native-paper";
import { StyleSheet, Button, View, Text } from "react-native";
import { en, registerTranslation } from "react-native-paper-dates";
registerTranslation("en", en);
import { DatePickerInput } from "react-native-paper-dates";
import { GoogleAuthProvider, getAuth, signInWithPopup,createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import store from '../../utils/inits'

//import comps
import Btn from "../Btn";
import BackBtn from '../BackBtn';

import { addDoc, collection, setDoc,doc } from "firebase/firestore";
import { db } from "../../utils/store";

const MainCont = styled.View`
  flex-direction: column;
`;
const Title = styled.Text`
  font-weight: 500;
  font-size: 16px;
  margin-left: 5px;
  margin-bottom: 10px;
`;
const Radio = styled.View`
  background-color: #fff;
  border-radius: 5px;
  width: 300px;
  margin-left: 5px;
  margin-top: 5px;
  position: relative;
  z-index: 1;
`;
const DateCont = styled.View``;
const RadioTitle = styled.Text`
  font-weight: 600;
  margin-left: 15px;
`;
const ButCont = styled.View`
  justify-content: flex-end;
  align-items: flex-end;
  margin: 50px 10px 80px 0px;
`;

const BackCont = styled.View`
  display: flex;
  position: absolute;
  z-index: 1;
  right: 340px;
  top: -390px;
`

const SigninForm = ({
 userid = ''
}) => {
  const navigation = useNavigation();
  //for first form
  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");

  const [text, setText] = React.useState("");
  const [pass, setPass] = React.useState("");
  //for button
  const [changeForm, setChangeForm] = useState(true);
  
  const change=()=>{
    setChangeForm(false)
  }

  //for second form
  const [medcon, setMedcon] = React.useState("");
  const [inputDate, setInputDate] = React.useState("");

  const [open, setOpen] = useState(false);
  const [gender, setGender] = useState("");
  const [items, setItems] = useState([
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "Prefer not to answer", value: "Prefer not to answer" },
  ]);
  const [add, setAdd] = useState("");
  const [patientId, setPatientId] = useState("");

  const LogIn = {
    email: text,
    password: pass,
  };

  const info = {
    Fname: fname,
    Lname: lname,
    concern: medcon,
    dob: inputDate,
    gender: gender,
    address: add,
    patientid: patientId
  };

  const setLogin = ({ email = text,password = pass }) => {
    setText(email);
    setPass(password);
  };

  const setInfo = ({
    Fname = fname,
    Lname = lname,
    concern = medcon,
    dob = inputDate,
    gen = gender,
    address = add,
    patientid = patientId

  }) => {
    setFname(Fname);
    setLname(Lname);
    setMedcon(concern);
    setInputDate(dob);
    setGender(gen);
    setAdd(address);
    setPatientId(patientid);
  };

  const [em, setEm] = useState('')  
  const [ps, setPs] = useState('')  
  const [id,setId] =useState('')

  const CreateUser = async(em,ps)=>{
       
        const auth =getAuth();
        const result = await createUserWithEmailAndPassword(auth,em,ps);
        userid = result.user.uid;
        // console.log(userid)
        alert("Created!")

          const pushing = setDoc(doc(db,"patientuser",userid),{
          fname: fname,
          lname: lname,
          dob: inputDate,
          gender: gender,
          address: add,
          medconcern: medcon,
        })
    }
    
  if (changeForm === true) {
    return (
      <MainCont>
        <PaperProvider>
          <Title>Personal Information</Title>
          <TextInput
            style={styles.inputbox}
            label="First Name"
            returnKeyType="next"
            value={fname}
            mode="outlined"
            onChangeText={(fname) => setFname(fname)}
          />
          <TextInput
            style={styles.inputbox}
            label="Last Name"
            returnKeyType="next"
            value={lname}
            mode="outlined"
            onChangeText={(lname) => setLname(lname)}
          />
          <TextInput
            style={styles.inputbox}
            label="Email"
            returnKeyType="next"
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType='email-address'
            mode='outlined'
            onChangeText={(val) => setEm(val)}
          />
          <TextInput
            style={styles.inputbox}
            label="Password"
            returnKeyType="done"
            keyboardType='visible-password'
            secureTextEntry
            mode='outlined'
            onChangeText={(val)=>setPs(val)}
          />
          <ButCont>
            <Btn
              title="Next"
              fsize="18"
              bgcolor="#97BDD6"
              width="120"
              height="50"
              borderRad="50"
              //    onPress={async () => {
              //      const auth = getAuth();
              //      const result = await createUserWithEmailAndPassword(
              //        auth,
              //        text,
              //        pass
              //      );
              //     info.patientid = result.user.uid;

              //       console.log(result.user.uid);
              //       console.log(info.patientid)

              //     setChangeForm(false);
              // }}
              onPress={()=>{setChangeForm(false);}}
              

              //   ;if(userid !== ""){setTimeout(() => {
              //   setChangeForm(false);console.log(userid);
              // },3000)}}}
             
              // onPress={()=>{setChangeForm(false)}} 
              // onPress={()=>setTimeout(() => {
              //   setChangeForm(false)
              // },2000)}
            />
            {/* <Btn title="test" onPress={()=>{onCreate(em,ps)}}/>  */}
          </ButCont>
        </PaperProvider>
      </MainCont>
    );
  }

  return (
    <MainCont>
      <BackCont>
          <BackBtn onPress={() => navigation.goBack()}/>
        </BackCont>
      <PaperProvider>
        <Title>Additional Information</Title>
        <DateCont>
          <DatePickerInput
            locale="en"
            label="Date of Birth"
            value={inputDate}
            onChange={(inputDate) => setInputDate(inputDate)}
            inputMode="start"
            mode="outlined"
            style={styles.inputbox}
          ></DatePickerInput>
        </DateCont>
        <Radio>
          <DropDownPicker
            open={open}
            value={gender}
            items={items}
            placeholder="Gender"
            setOpen={setOpen}
            setValue={setGender}
            setItems={setItems}
            onChangeText={(gender) => setGender(gender)}
            style={{
              width: 335,
              height: 50,
              borderRadius: 4,
              borderColor: "#6d6d6d",
            }}
          />
        </Radio>
        <TextInput
          style={styles.inputbox}
          label="Address"
          returnKeyType="next"
          autoCapitalize="sentences"
          autoComplete="postal-address-extended-postal-code"
          textContentType="fullStreetAddress"
          dataDetectorTypes="address"
          value={add}
          mode="outlined"
          onChangeText={(add) => setAdd(add)}
        />
        <TextInput
          style={styles.inputbox}
          label="Medical Concerns"
          returnKeyType="done"
          autoCapitalize="sentences"
          value={medcon}
          mode="outlined"
          onChangeText={(medcon) => setMedcon(medcon)}
        />
        <ButCont>
          <Btn
            title="Confirm"
            fsize="18"
            bgcolor="#97BDD6"
            width="120"
            height="50"
            borderRad="50"
            onPress={ 
                ()=>{CreateUser(em,ps);
              //   async () => {
              //   const result = await setDoc(doc(db,"patientuser",userid),{
              //   fname: fname,
              //   lname: lname,
              //   dob: inputDate,
              //   gender: gender,
              //   address: add,
              //   medconcern: medcon,
              // })};
              navigation.navigate("accountconfirm");
            }}
          ></Btn>
        </ButCont>
      </PaperProvider>
    </MainCont>
  );
};

const styles = StyleSheet.create({
  inputbox: {
    width: 335,
    height: 50,
    margin: 5,
    backgroundColor: "#fff",
  },
});

export default SigninForm;

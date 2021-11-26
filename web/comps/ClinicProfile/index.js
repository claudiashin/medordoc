import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// import { getDatabase, ref, child, get } from "firebase/database";

// import {AuthenticatedUserContext} from '../../function/getFile';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDoc, doc, updateDoc } from "firebase/firestore";
// import { collection, getDoc, addDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

// export const AuthenticatedUserContext = createContext({});
import { getDatabase, ref, onValue } from "firebase/database";

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
  padding-bottom: 5px;
  background-color: #f7f2ee;
`;
const FormTimeForm = styled.fieldset`
  margin: 15px;
  border: 1px solid black;
  width: 185px;
  height: 60px;
`;
const TimeFormCont = styled.div`
  display: flex;
  margin-bottom: 30px;
`;
const Title = styled.p`
  margin-left: 15px;
  font-size: 16px;
  font-weight: 600;
`;

const ButtonCont = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  margin: 15px;
  width: 80px;
  height: 30px;
  padding: 5px;
  background-color: #90aabb;
  color: white;
  border: none;
  border-radius: 10px;
`;

const LangMain = styled.form``;
const LangCont = styled.select`
  width: 400px;
  height: 18px;
  margin-top: -15px;

  border: none;
`;
const LangOpt = styled.option``;

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "English",
  "French",
  "Chinese",
  "Japanese",
  "Korean",
  "punjabi",
  "Hindi",
  "Spanish",
  "Russian",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const ClinicProfile = (props) => {
  const [readOnly, setReadOnly] = useState(true);

  const [clinicName, setClinicName] = React.useState("");
  const [clinicAdd, setClinicAdd] = React.useState("");
  const [clinicNum, setClinicNum] = React.useState("");
  const [clinicOpen, setClinicOpen] = React.useState("");
  const [clinicClose, setClinicClose] = React.useState("");

  const theme = useTheme();
  const [clinicLang, setLanguage] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setLanguage(
      // On autofill we get a the stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  // function writeUserData(clinicId, name, add, num, open, close, lang) {
  //   const db = getDatabase();
  //   set(ref(db, 'clinics/' + clinics.clinicId), {
  //     // username: name,
  //     // email: email,
  //     id: clinicId,
  //     clinicname: name,
  //     clinicadd: add,
  //     clinicnum: num,
  //     clinicopen: open,
  //     clinicclose: close,
  //     cliniclang: lang
  //   });

  //   console.log(db);
  // }

  // const dbRef = ref(getDatabase());
  // get(child(dbRef, `clinics/YWNtg1MQC4SUgOIC4LSfWcmLQUA2`)).then((snapshot) => {
  //   if(snapshot.exists()) {
  //     console.log(snapshot.val());
  //   } else {
  //     console.log("no data available");
  //   }
  // }).catch((error)=>{
  //   console.log(error);
  // })

  useEffect(async () => {
    if (props.uid) {
      const usersDocRef = doc(db, "clinics", props.uid);
      const data = await getDoc(usersDocRef);
      const result = data.data();
      setClinicName(result.name);
      setClinicAdd(result.add);
      setClinicNum(result.num);
      setClinicOpen(result.open);
      setClinicClose(result.close);
      setLanguage(result.lang);
    }
  }, [props.uid]);

  // const {user, users} = useContext(AuthenticatedUserContext);
  // console.log(users.name)

  return <MainCont>
    <Title>Clinic Information</Title>
    <Form>
      <FormTitle>Clinic Name</FormTitle>
      <FormInput
        readOnly={readOnly}
        type="text"
        placeholder="Clinic Name"
        value={clinicName}
        onChange={(e) => setClinicName(e.target.value)}
      />
    </Form>
    <Form>
      <FormTitle>Clinic Address</FormTitle>
      <FormInput
        readOnly={readOnly}
        type="text"
        placeholder="Clinic Address"
        value={clinicAdd}
        onChange={(e) => setClinicAdd(e.target.value)}
      />
    </Form>
    <Form style={{ marginBottom: 50 }}>
      <FormTitle>Contact Number</FormTitle>
      <FormInput
        readOnly={readOnly}
        type="tel"
        placeholder="Contact Number"
        value={clinicNum}
        onChange={(e) => setClinicNum(e.target.value)}
      />
    </Form>
    <Title>Operation Hour</Title>
    <TimeFormCont>
      <FormTimeForm>
        <FormTitle>Open</FormTitle>
        <FormInput
          readOnly={readOnly}
          type="time"
          placeholder="Open Hour"
          value={clinicOpen}
          onChange={(e) => setClinicOpen(e.target.value)}
        />
      </FormTimeForm>
      <FormTimeForm>
        <FormTitle>Close</FormTitle>
        <FormInput
          readOnly={readOnly}
          type="time"
          placeholder="Close Hour"
          value={clinicClose}
          onChange={(e) => setClinicClose(e.target.value)}
        />
      </FormTimeForm>
    </TimeFormCont>
    <Title>Additional Information</Title>

    <div>
      <FormControl
        sx={{
          m: 1,
          width: 400,
          height: 50,
          marginBottom: 5,
          marginLeft: 1.7,
          color: "black",
        }}
      >
        <InputLabel id="demo-multiple-name-label">Languages</InputLabel>
        <Select
          readOnly={readOnly}
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={clinicLang}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
          style={{ height: 50, borderBlockStyle: "black" }}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, clinicLang, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
    <ButtonCont>
      <Button
        onClick={async () => {
          if(readOnly) {
            setReadOnly(false);
          } else {
            const usersDocRef = doc(db, "clinics", props.uid);
              await updateDoc(usersDocRef, {
                add: clinicAdd,
                close: clinicClose,
                lang: clinicLang,
                name: clinicName,
                num: clinicNum,
                open: clinicOpen,
              });
              setReadOnly(true);
          }
        }}
      >
        {readOnly ? "Edit" : "Confirm"}
      </Button>
    </ButtonCont>
  </MainCont>;
};

export default ClinicProfile;
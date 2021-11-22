import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import Btn from "../Btn";

const MainCont = styled.div`
  display: flex;
  flex-direction: column;
`;
const FormField = styled.fieldset`
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
  width: 400px;
`;
const FormTimeForm = styled.fieldset`
  margin: 15px;
  border: 1px solid black;
  width: 185px;
  height: 55px;
`;
const TimeFormCont = styled.div`
  display: flex;
  margin-bottom: 30px;
`;
const FormTimeInput = styled.input`
  border: none;
  outline: none;
  padding-bottom: 5px;
  background-color: #f7f2ee;
  width: 174px;
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

const TwoButtonCont = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const BtnCont = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 80px;
`;

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

const SigninFormTwo = ({ setChangePage }) => {
  const theme = useTheme();

  const [clinicLang, setLanguage] = React.useState([]);
  const [clinicName, setClinicName] = React.useState([]);
  const [clinicAdd, setClinicAdd] = React.useState([]);
  const [clinicNum, setClinicNum] = React.useState([]);
  const [clinicOpen, setClinicOpen] = React.useState([]);
  const [clinicClose, setClinicClose] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setLanguage(
      // On autofill we get a the stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  function getAlert() {
    if (
      clinicName == "" ||
      clinicAdd == "" ||
      clinicNum == "" ||
      clinicOpen == "" ||
      clinicClose == "" ||
      clinicLang == ""
    ) {
      alert("Please fill out all form");
    } else setChangePage(1);
  }

  return (
    <MainCont>
      <Title>Clinic Information</Title>
      <FormField>
        <FormTitle>Clinic Name</FormTitle>
        <FormInput
          type="text"
          placeholder="Clinic Name"
          value={clinicName}
          onChange={(e) => {
            setClinicName(e.target.value);
          }}
          required={require}
        />
      </FormField>
      <FormField>
        <FormTitle>Clinic Address</FormTitle>
        <FormInput
          type="text"
          placeholder="Clinic Address"
          value={clinicAdd}
          onChange={(e) => {
            setClinicAdd(e.target.value);
          }}
        />
      </FormField>
      <FormField style={{ marginBottom: 50 }}>
        <FormTitle>Contact Number</FormTitle>
        <FormInput
          type="tel"
          placeholder="Contact Number"
          value={clinicNum}
          onChange={(e) => {
            setClinicNum(e.target.value);
          }}
        />
      </FormField>
      <Title>Operation Hour</Title>
      <TimeFormCont>
        <FormTimeForm>
          <FormTitle>Open</FormTitle>
          <FormTimeInput
            type="time"
            placeholder="Open Hour"
            value={clinicOpen}
            onChange={(e) => {
              setClinicOpen(e.target.value);
            }}
          />
        </FormTimeForm>
        <FormTimeForm>
          <FormTitle>Close</FormTitle>
          <FormTimeInput
            type="time"
            placeholder="Open Hour"
            value={clinicClose}
            onChange={(e) => {
              setClinicClose(e.target.value);
            }}
          />
        </FormTimeForm>
      </TimeFormCont>
      <Title>Additional Information</Title>

      <div>
        <FormControl
          sx={{
            m: 1,
            width: 440,
            height: 50,
            border: "1px solid black",
            marginBottom: 5,
            color: "black",
          }}
        >
          <InputLabel id="demo-multiple-name-label">Languages</InputLabel>
          <Select
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
      <TwoButtonCont>
        <BtnCont onClick={() => setChangePage(-1)}>
          <Btn
            title="Back"
            width="120px"
            height="40px"
            fSize="16px"
            bgColor="#717476"
            borderRad="20px"
            margin="40px 15px 0px 0px"
            bgHover="#949494"
          />
        </BtnCont>
        <BtnCont
          onClick={async () => {
            const result = await addDoc(collection(db, "clinics"), {
              name: clinicName,
              address: clinicAdd,
              contact: clinicNum,
              open: clinicOpen,
              close: clinicClose,
              lang: clinicLang,
            });
            getAlert();
          }}
        >
          <Btn
            title="Confirm"
            width="120px"
            height="40px"
            fSize="16px"
            bgColor="#90AABB"
            borderRad="20px"
            margin="40px 15px 0px 0px"
            bgHover="#BCDFF6"
          />
        </BtnCont>
      </TwoButtonCont>
    </MainCont>
  );
};

export default SigninFormTwo;

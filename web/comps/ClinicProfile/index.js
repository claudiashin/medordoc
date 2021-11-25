import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { getDatabase, ref, set } from "firebase/database";

import {AuthenticatedUserContext} from '../../function/getFile';



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
  height: 57px;
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




const ClinicProfile = ({}) => {
  const [changeForm, setChangeForm] = useState(false);

  const [clinicName, setClinicName] = React.useState("");
  const [clinicAdd, setClinicAdd] = React.useState("");
  const [clinicNum, setClinicNum] = React.useState("");
  const [clinicOpen, setClinicOpen] = React.useState("");
  const [clinicClose, setClinicClose] = React.useState("");
  const [clinicLang, setLanguage] = React.useState([]);

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a the stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };



function writeUserData(clinicId, name, add, num, open, close, lang) {
  const db = getDatabase();
  set(ref(db, 'clinics/' + clinicId), {
    // username: name,
    // email: email,
    id: clinicId,
    clinicname: name,
    clinicadd: add,
    clinicnum: num,
    clinicopen: open,
    clinicclose: close, 
    cliniclang: lang    
  });

  console.log(clinicname);
}


const {user, users} = useContext(AuthenticatedUserContext);
// console.log(users.name)


  if (changeForm === false) {
    return (
      <MainCont>
        <button onClick={writeUserData}>click</button>
        <Title>Clinic Information</Title>
        <Form>
          <FormTitle>Clinic Name</FormTitle>
          <FormInput
            type="text"
            placeholder="Clinic Name"
            value={clinicName}
            onChange={(e) => setClinicName(e.target.value)}
          />
        </Form>
        <Form>
          <FormTitle>Clinic Address</FormTitle>
          <FormInput
            type="text"
            placeholder="Clinic Address"
            value={clinicAdd}
            onChange={(e) => setClinicAdd(e.target.value)}
          />
        </Form>
        <Form style={{ marginBottom: 50 }}>
          <FormTitle>Contact Number</FormTitle>
          <FormInput
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
              type="time"
              placeholder="Open Hour"
              value={clinicOpen}
              onChange={(e) => setClinicOpen(e.target.value)}
            />
          </FormTimeForm>
          <FormTimeForm>
            <FormTitle>Close</FormTitle>
            <FormInput
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
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
              style={{ height: 50, borderBlockStyle: "black" }}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <ButtonCont>
          <Button
            onClick={() => {
              setChangeForm(true);
            }}
          >
            Edit
          </Button>
        </ButtonCont>
      </MainCont>
    );
  }

  return (
    <MainCont>
      <Title>Clinic Information</Title>
      <Form>
        <FormTitle>Clinic Name</FormTitle>
        <FormInput
          type="text"
          placeholder="Clinic Name"
          value={clinicName}
          onChange={(e) => setClinicName(e.target.value)}
        />
      </Form>
      <Form>
        <FormTitle>Clinic Address</FormTitle>
        <FormInput
          type="text"
          placeholder="Clinic Address"
          value={clinicAdd}
          onChange={(e) => setClinicAdd(e.target.value)}
        />
      </Form>
      <Form style={{ marginBottom: 50 }}>
        <FormTitle>Contact Number</FormTitle>
        <FormInput
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
            type="time"
            placeholder="Open Hour"
            value={clinicOpen}
            onChange={(e) => setClinicOpen(e.target.value)}
          />
        </FormTimeForm>
        <FormTimeForm>
          <FormTitle>Close</FormTitle>
          <FormInput
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
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput label="Name" />}
            MenuProps={MenuProps}
            style={{ height: 50, borderBlockStyle: "black" }}
          >
            {names.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, personName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <ButtonCont>
        <Button
          onClick={() => {
            setChangeForm(false);
          }}
        >
          Confirm
        </Button>
      </ButtonCont>
    </MainCont>
  );
};

export default ClinicProfile;

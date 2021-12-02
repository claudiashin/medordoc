import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Btn from "../Btn";

const MainCont = styled.div`
  display: flex;
  flex-direction: column;
`;
const FormField = styled.fieldset`
  margin: 15px;
  border: 1px solid black;
  width: 400px;
  height: 57px;
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

const AlertBanner = styled.div`
  padding: 1rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  color: #842029;
  background-color: #f8d7da;
  border-color: #f5c2c7;
  display: ${(props) => (props.show ? "block" : "none")};
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
  "Cantonese",
  "Mandarin",
  "Japanese",
  "Korean",
  "Punjabi",
  "Hindi",
  "Farsi",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
        fontFamily: 'nunito'
  };
}

const SigninFormTwo = ({ setChangePage, submit, setInfo, info }) => {
  const [showAlert, setShowAlert] = React.useState(false);
  const [error, setError] = React.useState("");
  const theme = useTheme();

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setInfo({ lang: typeof value === "string" ? value.split(",") : value });
  };

  return (
    <MainCont>
      <AlertBanner show={showAlert}>{error}</AlertBanner>
      <Title>Clinic Information</Title>
      <FormField>
        <FormTitle>Clinic Name</FormTitle>
        <FormInput
          type="text"
          placeholder="Clinic Name"
          style={{fontFamily: 'nunito'}}
          value={info.name}
          onChange={(e) => {
            setInfo({ name: e.target.value });
          }}
        />
      </FormField>
      <FormField>
        <FormTitle>Clinic Address</FormTitle>
        <FormInput
          type="text"
          placeholder="Clinic Address"
          style={{fontFamily: 'nunito'}}
          value={info.add}
          onChange={(e) => {
            setInfo({ add: e.target.value });
          }}
        />
      </FormField>
      <FormField style={{ marginBottom: 50 }}>
        <FormTitle>Contact Number</FormTitle>
        <FormInput
          type="tel"
          placeholder="Contact Number"
          style={{fontFamily: 'nunito'}}
          value={info.num}
          onChange={(e) => {
            setInfo({ num: e.target.value });
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
            style={{fontFamily: 'nunito'}}
            value={info.open}
            onChange={(e) => {
              setInfo({ open: e.target.value });
            }}
          />
        </FormTimeForm>
        <FormTimeForm>
          <FormTitle>Close</FormTitle>
          <FormTimeInput
            type="time"
            placeholder="Open Hour"
            style={{fontFamily: 'nunito'}}
            value={info.close}
            onChange={(e) => {
              setInfo({ close: e.target.value });
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
         
            marginBottom: 5,
            color: "black",
          }}
        >
          <InputLabel style={{fontFamily: 'nunito', color: 'black'}} id="demo-multiple-name-label">Languages</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            value={info.lang}
            onChange={handleChange}
            input={<OutlinedInput label="Name" />}
            MenuProps={MenuProps}
            style={{ height: 50, borderBlockStyle: "black", fontFamily: 'nunito' }}
          >
            {names.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, info.lang, theme)}
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
            bgColor="#7c7c7c"
            borderRad="5px"
            margin="40px 15px 0px 0px"
            bgHover="#5F5F5F"
          />
        </BtnCont>
        <BtnCont
          onClick={async () => {
            setShowAlert(false);
            if (
              info.name == "" ||
              info.lang == "" ||
              info.add == "" ||
              info.num == "" ||
              info.open == "" ||
              info.close == ""
            ) {
              setError("Please fill out the form correctly");
              setShowAlert(true);
            } else {
              const result = await submit();
              if (result.clinicId) {
                setChangePage(1);
                // console.log(result);
              } else {
                setError(
                  "We have some issue to sign you up. Please try again later."
                );
                setShowAlert(true);
              }
            }
          }}
        >
          <Btn
            title="Confirm"
            width="120px"
            height="40px"
            fSize="16px"
            bgColor="#397FBF"
          borderRad="5px"
          margin="40px 15px 0px 0px"
          bgHover="#306799"
          />
        </BtnCont>
      </TwoButtonCont>
    </MainCont>
  );
};

export default SigninFormTwo;

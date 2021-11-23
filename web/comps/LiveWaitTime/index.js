import React from "react";
import styled from "styled-components";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "../../firebase";

const MainCont = styled.div`
  width: 400px;
  height: 240px;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7f2ee;
  position: relative;
`;
const TitleCont = styled.div`
  width: 300px;
  height: 50px;
  background-color: #e9d7cb;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;
const Title = styled.p`
  font-size: 22px;
  font-weight: 600;
`;
const UpdateButton = styled.button`
  background-color: #226baf;
  color: white;
  border: none;
  border-radius: 10px;
  width: 100px;
  height: 40px;
  padding: 10px;
  font-size: 16px;
  position: absolute;
  right: 20px;
  bottom: 20px;

  &:hover {
    background-color: #6494c0;
  }
`;

const LiveWaitTime = () => {
  const [time, setTime] = React.useState("");
  const handleChange = (event) => {
    setTime(event.target.value);
  };

  return (
    <MainCont>
      <TitleCont>
        <Title>Update Live Wait Time</Title>
      </TitleCont>
      <div>
        <FormControl variant="standard" sx={{ m: 4, minWidth: 300 }}>
          <InputLabel id="demo-simple-select-standard-label">
            Wait time
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={time}
            onChange={handleChange}
            label="Time"
          >
            <MenuItem value={0}>No Wait</MenuItem>
            <MenuItem value={15}>15 Minutes</MenuItem>
            <MenuItem value={30}>30 Minutes</MenuItem>
            <MenuItem value={45}>45 Minutes</MenuItem>
            <MenuItem value={60}>60 Minutes</MenuItem>
          </Select>
        </FormControl>
      </div>
      <UpdateButton
        onClick={async () => {
          const result = await addDoc(collection(db, "waittime"), {
            time: time,
          });
          alert("Your clinic wait time updated");
        }}
      >
        Update
      </UpdateButton>
    </MainCont>
  );
};

export default LiveWaitTime;

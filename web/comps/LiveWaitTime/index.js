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
  height: 280px;
  border: 1px solid #505050;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FCFCFC;
  position: relative;
`;
const TitleCont = styled.div`
  width: 300px;
  height: 50px;
  background-color: #F6E1D0;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
`;
const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #505050;
`;
const UpdateButton = styled.button`
  background-color: #90AABB;
  color: white;
  border: none;
  border-radius: 10px;
  width: 100px;
  height: 40px;
  padding: 10px;
  font-size: 16px;
  position: absolute;
  right: 25px;
  bottom: 25px;

  &:hover {
    background-color: #7592A5;
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
            <MenuItem value={0} style={{fontSize: 18}}>No Wait</MenuItem>
            <MenuItem value={15} style={{fontSize: 18}}>15 Minutes</MenuItem>
            <MenuItem value={30} style={{fontSize: 18}}>30 Minutes</MenuItem>
            <MenuItem value={45} style={{fontSize: 18}}>45 Minutes</MenuItem>
            <MenuItem value={60} style={{fontSize: 18}}>60 Minutes</MenuItem>
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

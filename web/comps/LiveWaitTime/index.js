import React, { useEffect } from "react";
import styled from "styled-components";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "../../firebase";

const MainCont = styled.div`
  width: 400px;
  // height: 300px;
  border: 1px solid #505050;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fcfcfc;
  position: relative;
`;
const TitleCont = styled.div`
  width: 300px;
  height: 50px;
  background-color: #f6e1d0;
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
  background-color: #90aabb;
  color: white;
  border: none;
  border-radius: 10px;
  width: 100px;
  height: 40px;
  padding: 10px;
  margin-bottom: 30px;
  font-size: 16px;
  // position: absolute;
  // right: 25px;
  // bottom: 25px;

  &:hover {
    background-color: #7592a5;
  }
`;

const AlertBanner = styled.div`
  padding: 1rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  color: #0c5460;
  background-color: #d1ecf1;
  border-color: #bee5eb;
  z-index: 200;
  display: ${(props) => (props.show ? "block" : "none")};

`;

const LiveWaitTime = () => {
  const [time, setTime] = React.useState("");
  const handleChange = (event) => {
    setTime(event.target.value);
  };

  const [showAlert, setShowAlert] = React.useState(false);
  const [confirm, setConfirm] = React.useState("");



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
            <MenuItem value={0} style={{ fontSize: 18 }}>
              No Wait
            </MenuItem>
            <MenuItem value={15} style={{ fontSize: 18 }}>
              15 Minutes
            </MenuItem>
            <MenuItem value={30} style={{ fontSize: 18 }}>
              30 Minutes
            </MenuItem>
            <MenuItem value={45} style={{ fontSize: 18 }}>
              45 Minutes
            </MenuItem>
            <MenuItem value={60} style={{ fontSize: 18 }}>
              60 Minutes
            </MenuItem>
          </Select>
        </FormControl>

        <AlertBanner show={showAlert}>{confirm}</AlertBanner>
      </div>
      <UpdateButton
        onClick={async () => {
          const result = await addDoc(collection(db, "waittime"), {
            time: time,
          });
          // useEffect(()=> {
          //   setTimeout(()=>{
          //     setShowAlert(true);
          //     setConfirm("Your Clinic live wait time has been updated");
          //   }, 3000);
          // }, []);
          setShowAlert(true);
          setConfirm("Your Clinic wait time has been updated");
          
          // useEffect(() => {
          //   const timeId = setTimeout(() => {
          //     // After 3 seconds set the show value to false
          //     setShowAlert(true)
          //     setConfirm("Your Clinic live wait time has been updated");
          //   }, 3000)
        
          //   return () => {
          //     clearTimeout(timeId)
          //   }
          // }, []);
        }}
      >
        Update
      </UpdateButton>
    </MainCont>
  );
};

export default LiveWaitTime;

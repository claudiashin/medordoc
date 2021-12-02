import React from "react";
import styled from "styled-components";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { db } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";

const MainCont = styled.div`
  width: 400px;
  // height: 300px;
  border: 1px solid #8e8e8e;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fcfcfc;
  position: relative;
  font-family: nunito;
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
  font-size: 18px;
  font-weight: 600;
  // color: #505050;
`;
const UpdateButton = styled.button`
  background-color: #397FBF;
  color: white;
  border: none;
  border-radius: 5px;
  width: 100px;
  height: 40px;
  padding: 10px;
  margin-bottom: 30px;
  font-size: 16px;
  font-family: nunito;
  &:hover {
    background-color: #306799;
  }
  cursor: pointer;
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

const LiveWaitTime = ({ uid }) => {
  const [time, setTime] = React.useState("");
  const handleChange = (event) => {
    setTime(event.target.value);
  };

  const [showAlert, setShowAlert] = React.useState(false);
  const [confirm, setConfirm] = React.useState("");

  return (
    <MainCont>
      <TitleCont>
        <Title>Update Today's Live Wait Time</Title>
      </TitleCont>
      <div>
        <FormControl variant="standard" sx={{ m: 4, minWidth: 300 }}>
          <InputLabel style={{fontFamily: 'nunito' }}id="demo-simple-select-standard-label">
            Wait time
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={time}
            onChange={handleChange}
            label="Time"
          >
            <MenuItem value={0} style={{ fontSize: 18, fontFamily: 'nunito' }}>
              No Wait
            </MenuItem>
            <MenuItem value={15} style={{ fontSize: 18, fontFamily: 'nunito'  }}>
              15 Minutes
            </MenuItem>
            <MenuItem value={30} style={{ fontSize: 18, fontFamily: 'nunito'  }}>
              30 Minutes
            </MenuItem>
            <MenuItem value={45} style={{ fontSize: 18, fontFamily: 'nunito'  }}>
              45 Minutes
            </MenuItem>
            <MenuItem value={60} style={{ fontSize: 18, fontFamily: 'nunito'  }}>
              60 Minutes
            </MenuItem>
          </Select>
        </FormControl>

        <AlertBanner show={showAlert}>{confirm}</AlertBanner>
      </div>
      <UpdateButton
        onClick={async () => {
          await updateDoc(doc(db, "clinics", uid), {
            waittime: time,
          });
          setShowAlert(true);
          setConfirm("Your Clinic live wait time has been updated");
          setTimeout(() => {
            setShowAlert(false);
          }, 3000);
        }}
      >
        Update
      </UpdateButton>
    </MainCont>
  );
};

export default LiveWaitTime;

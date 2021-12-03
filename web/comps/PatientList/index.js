import React, { useEffect, useState } from "react";
import styled from "styled-components";

const MainCont = styled.div`
  width: 400px;
  height: ${(props) => props.height}px;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FCFCFC;
`;
const TitleCont = styled.div`
  width: 300px;
  height: 50px;
  background-color: #F2E1D3;
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
const ListCont = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  height: 400px;
  margin-top: 35px;
`;

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  width: 350px;
  /* height: 50px; */
  margin: 8px;
  padding: 0 20px 0 20px;
  border-radius: 5px;
  overflow: scroll;
`;
const List = styled.p``;

const PatientList = ({ info }) => {
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [patientName, setPatientName] = useState("");

  useEffect(() => {
    setBookingDate(info.bookingdate ?? "");
    setBookingTime(info.bookingtime ?? "");
    setPatientName(info.patientname ?? "");
  }, [info]);

  return (
    <ListItem>
      <List>{bookingTime}</List>
      <List>{patientName}</List>
    </ListItem>
  )
  };

  export default PatientList;

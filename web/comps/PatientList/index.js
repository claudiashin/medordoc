import React, { useEffect, useState } from "react";
import styled from "styled-components";


const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  width: 350px;
  height: 50px;
  margin: 8px;
  padding: 0 20px 0 20px;
  border-radius: 5px;
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
  );
};

export default PatientList;

import React from "react";
import styled from "styled-components";

const MainCont = styled.div`
  width: 400px;
  height: ${(props) => props.height}px;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7f2ee;
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
const ListCont = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  height: 250px;
  margin-top: 80px;
`;
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

const PatientList = ({ height = "300" }) => {
  return (
    <MainCont height={height}>
      <TitleCont>
        <Title>October 8th Thursday</Title>
      </TitleCont>
      <ListCont>
        <ListItem>
          <List>9:00 AM</List>
          <List>Tom Clooney</List>
        </ListItem>
        <ListItem>
          <List>9:00 AM</List>
          <List>Tom Clooney</List>
        </ListItem>
        <ListItem>
          <List>9:00 AM</List>
          <List>Tom Clooney</List>
        </ListItem>
        <ListItem>
          <List>9:00 AM</List>
          <List>Tom Clooney</List>
        </ListItem>
        <ListItem>
          <List>9:00 AM</List>
          <List>Tom Clooney</List>
        </ListItem>
        <ListItem>
          <List>9:00 AM</List>
          <List>Tom Clooney</List>
        </ListItem>
      </ListCont>
    </MainCont>
  );
};

export default PatientList;

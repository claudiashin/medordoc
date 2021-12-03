import React, { useEffect, useReducer } from "react";
import styled from "styled-components";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { IoIosClose } from "@react-icons/all-files/io/IoIosClose";
import { BsTrash } from "react-icons/bs";

import { useState } from "react";

import { getDocs, doc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";


//card
const Maincont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 330px;
  height: 400px;
  border-radius: 10px;
  border: 1px solid black;
  background: white;
  padding-bottom: 50px;
  position: relative;
  
`;
//avatar image
const Avatarcont = styled.div`
  display: flex;
  height: 105px;
  width: 105px;
  right: 50px;
  margin: 5px;
  border-radius: 50px;
  background-color: #c4c4c4;
`;

const Avatarimg = styled.img`
  width: 100%;
  height: 100%;
  /* resize-mode:cover; */
  border-radius: 50px;
`;

//Patient info text
const Textcont = styled.div`
  display: flex;
  flex-direction: column;
  align-self: start;
  padding: 10px 30px 15px 30px;
  // margin-right: 85px;
`;
const Text = styled.text`
  font-size: 16px;
  margin-top: 5px;
  margin-bottom: 5px;
  text-align: left;
`;
const Nameheader = styled.text`
  font-size: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
  text-align: center;
  font-weight: bold;
`;
//email button
const Emailbut = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  width: 100px;
  height: 35px;
  background-color: #faf0bf;
  border-radius: 5px;
  &:hover {
    background-color: #eadca2;
    transition: 1s;
  }
`;
const Emailtext = styled.text`
  font-size: 16px;
  padding-left: 10px;
`;
//close button
const Closebutton = styled.div`
  display: flex;
  border-radius: 50%;
  margin-top: 30px;
  margin-left: 270px;
  cursor: pointer;
`;

const EmailbutCont = styled.div`
  display: flex;
`;

//showModal
const PopupCardCont = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  background-color: #fff;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  width: 280px;
  height: 250px;
  border: 1px solid #505050;
  border-radius: 5px;
  z-index: 100;
  position: absolute;
  top: 70px;
`;

const CloseCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0 30px 0;
`;

const Heading = styled.h2`
  text-align: center;
  margin: 15px;
  font-size: 18px;
  font-weight: 600;
`;

const ButtonCont = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 20px 0px 20px;
`;

const Button = styled.button`
  color: #fff;
  font-family: nunito;
  font-size: 18px;
  font-weight: 700;
  padding: 5px;
  border: none;
  border-radius: 5px;
  width: 100px;
  background-color: ${props => props.btncol};
  cursor: pointer;
`;

const PatientCard = ({

  info,
  btncol = "#397fbf",
}) => {
  const [patientName, setPatientName] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [patientConcern, setPatientConcern] = useState("");
  const [patientGender, setPatientGender] = useState("");
  const [patientId, setPatientId] = useState("");

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setPatientName(info.name ?? "");
    setPatientEmail(info.email ?? "");
    setPatientGender(info.gender ?? "");
    setPatientConcern(info.concern ?? "");
    setPatientId(info.id ?? "");
  }, [info]);
  console.log(info);

  var img = "/man.png";

  if (patientGender == "Female") {
    img = '/woman.png';
  }
  else if (patientGender == "Male") {
    img = '/man.png';
  }
  console.log(patientGender);

  return (
    <Maincont>
      <PopupCardCont show={showModal}>
        <CloseCont>
          <BsTrash size={50} />
        </CloseCont>

        <Heading>Are you sure you want to remove this patient request?</Heading>

        <ButtonCont>
          <Button
            onClick={async () => {
              await deleteDoc(doc(db, "requests", patientId));
              // console.log(patientId);
            }}
            btncol="#397fbf"
          >
            Yes
          </Button>
          <Button
            onClick={() => {
              setShowModal(false);
            }}
            size={40}
            btncol="#5c5c5c"
          >
            No
          </Button>
        </ButtonCont>
      </PopupCardCont>
      <Closebutton>
        <IoIosClose
          onClick={() => {
            setShowModal(true);
          }}
          size={40}
        />
      </Closebutton>

      <Avatarcont>
        <Avatarimg 
        id="avatar"
        src={img} />
      </Avatarcont>
      <Nameheader>
        <Text style={{ fontSize: 20 }}>{patientName}</Text>
      </Nameheader>
      <Textcont>
        <Text>{"Gender: " + patientGender}</Text>
        <Text>{"Medical Concern: " + patientConcern}</Text>
        <Text>{"Eamil: " + patientEmail}</Text>
      </Textcont>
      <EmailbutCont>
        <a href="mailto:?subject=Dear Patient!&body=You have an appointment with our doctor at ...">
          {" "}
          <Emailbut>
            <AiOutlineMail size={20} />
            <Emailtext>Email</Emailtext>
          </Emailbut>
        </a>
      </EmailbutCont>
    </Maincont>
  );
};
export default PatientCard;

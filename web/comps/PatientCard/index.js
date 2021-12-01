import React, { useEffect, useReducer } from "react";
import styled from "styled-components";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { IoIosClose } from "@react-icons/all-files/io/IoIosClose";

import { useState } from "react";

import { getDocs, doc, getDoc } from "firebase/firestore";
// import { collection, getDoc, addDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

// import PopupCard from "../PopupCard";
import { getDatabase, ref, onValue } from "firebase/database";
import { onAuthStateChanged, getAuth } from "@firebase/auth";

//card
const Maincont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 330px;
  height: 420px;
  border-radius: 10px;
  border: 1px solid black;
  background: white;
  padding-bottom: 50px;
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

const PopupCont = styled.div`
  display: flex;
  position: absolute;
  margin-top: 50px;
  align-self: center;
  justify-content: center;
`;

const EmailbutCont = styled.div`
  display: flex;
`;

//showModal 
const PopupCardCont = styled.div`
  display: flex;
  background-color: #ffffff;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  width: 320px;
  height: 300px;
  border: 2px solid #505050;
  border-radius: 10px;
`;

const CloseCont = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 5px 15px -30px 0px;
`;


const Heading = styled.h2`
  text-align: center;
  margin: 40px;
  line-height: 30px;
`;

const ButtonCont = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: white;
  margin: 0px 20px 65px 20px;
`;

const Button = styled.button`
  color: #226baf;
  font-size: 22px;
  font-weight: 900;
  border: none;
  background-color: #fff;
  cursor: pointer;
`;

const showModalContent = ({showModal, setModalContent}) => {
  return (
    <PopupCardCont>
      <CloseCont>
        <IoIosClose
          onClick={() => {
           showModal(false);
          }}
          size={40}
        />
      </CloseCont>

      <Heading>Are you sure you want to remove this patient request?</Heading>

      <ButtonCont>
        <Button
          onClick={
            (async () => {
              await deletePatient(doc(db, "requests", patientId));
            })
          }
        >
          YES
        </Button>
        {/* <Button onClick={() => CloseCard()} bgHover={bgHover}>
            NO
          </Button> */}
      </ButtonCont>
      {/* </PopupCardCont> */}
    </PopupCardCont>
  );
};

const PatientCard = ({
  imagesource = "https://placekitten.com/100/100",
  // //subject
  // button1 = "flex",
  // button2 = "flex",
  // editDoc = () => { },

  //   info,
  //button
    setShowModal,
    showModalContent,
  info,
}) => {
  const [patientName, setPatientName] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [patientConcern, setPatientConcern] = useState("");
  const [patientGender, setPatientGender] = useState("");

//   const [showModal, setShowModal] = useState(false);
//   const [modalContent, setModalContent] = useState("");

  useEffect(() => {
    setPatientName(info.name ?? "");
    setPatientEmail(info.email ?? "");
    setPatientGender(info.gender ?? "");
    setPatientConcern(info.concern ?? "");
  }, [info]);



  return (
    <Maincont>
      <Closebutton>
        <IoIosClose
          onClick={() => {
            setShowModal(true);
            showModalContent();
          }}
          size={40}
        />
      </Closebutton>

      <Avatarcont>
        <Avatarimg src={imagesource} />
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

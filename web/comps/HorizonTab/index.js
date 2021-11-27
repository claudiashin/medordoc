import React, { useState, useEffect, Component } from "react";
import Link from "next/link";
import { withRouter } from "next/router";
import styled from "styled-components";
import HeroAvatar from "../HeroAvatar";
import PatientCard from "../PatientCard";
import { DoctorInputCard, DoctorCard } from "../DoctorCard";
import ClinicProfile from "../ClinicProfile";
import Btn from "../Btn";
import { getDocs, collection, query, where, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
// import {getStorage, ref, uploadBytes} from "firebase/storage"

import { getDatabase, ref, set } from "firebase/database";

const Nav = styled("div")`
  & > * {
    margin-left: 1em;
    color: white;
  }
  background: black;
  padding: 1em;
  height: 2em;
  display: flex;
  align-items: center;
`;

const PageBody = styled("div")`
  width: 100%;
  height: 100%;
`;

const TabHead = styled("div")`
  border-bottom: 1.8px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
`;

const TabContainer = styled("div")`
  width: 100vw;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const TabBody = styled(PageBody)`
  height: 100%;
  margin-bottom: 100px;
`;

const Tab = styled("div")`
  padding: 10px 100px 10px 100px;

  color: ${({ selected }) => (selected ? "#226BAF" : "black")};
  font-weight: ${({ selected }) => (selected ? "700" : "300")};
  font-size: 24px;
`;

const MyCont = styled.div`
  width: 100vw;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const ItemCont = styled.div`
  margin: 100px;
`;
const HeaderCont = styled.div`
  margin: 40px;
  font-size: 22px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Text = styled.text``;

const MyCont2 = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  /* align-items: center; */
  /* justify-content: center; */
  flex-direction: column;
  /* position: relative; */
`;
const ItemCont2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const AddedDoctorCont = styled.div`
  margin: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DoctorCont = styled.div`
  display: flex;
  justify-content: flex-start;
  /* flex-direction: column; */
  margin: 20px;
`;

const ButtonCont = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 90%;
  margin: 30px 0px 0px 0px;
`;

const ClinicDoctors = ({ uid, showModal, setModalContent }) => {
  const [popup, setShowPopup] = useState(true);
  const [doctors, setDoctors] = useState([]);

  const reload = async (uid) => {
    const q = query(collection(db, "doctors"), where("clinicId", "==", uid));
    const querySnapshot = await getDocs(q);
    const doctors = [];
    querySnapshot.forEach((doc) => {
      var temp = doc.data();
      temp.id = doc.id;
      doctors.push(temp);
    });
    setDoctors(doctors);
  };

  const setModal = (info = {}) => {
    setModalContent(
      <DoctorInputCard
        showModal={showModal}
        uid={uid}
        info={info}
        reload={reload}
      />
    );
  };

  const deleteDoctor = async (doctorId) => {
    await deleteDoc(doc(db, "doctors", doctorId));
    reload(uid);
  }

  useEffect(() => {
    if (uid) {
      reload(uid);
    }
  }, [uid]);

  return (
    <MyCont2>
      <HeaderCont>
        <Text>List of Doctors</Text>
      </HeaderCont>

      <ButtonCont>
        <Btn
          title="Create New"
          fSize="20px"
          bgColor="#90AABB"
          bgHover="#688BA3"
          borderRad="20px"
          width="150px"
          onClick={() => {
            showModal(true);
            setModal();
          }}
        />
      </ButtonCont>

      <AddedDoctorCont>
        <ItemCont2>
          {doctors.map((doctor, index) => {
            const info = {
              id: doctor.id,
              image: "https://placekitten.com/100/100",
              gender: doctor.gender,
              language: doctor.lang,
              experience: doctor.ex,
              location: doctor.location,
              name: doctor.name,
            };
            return (
              <DoctorCont key={index}>
                <DoctorCard
                  info={info}
                  showModal={(show) => {
                    if (show) {
                      setModal(info);
                      showModal(show);
                    } else {
                      showModal(show);
                    }
                  }}
                  deleteDoctor={deleteDoctor}
                />
              </DoctorCont>
            );
          })}
        </ItemCont2>
      </AddedDoctorCont>
    </MyCont2>
  );
};

const HorizonTab = ({ router, uid, showModal, setModalContent }) => {
  const {
    query: { tab },
  } = router;

  const isTabOne = tab === "1" || tab == null;
  const isTabTwo = tab === "2";

  return (
    <TabContainer>
      <TabHead>
        <Tab selected={isTabOne}>
          <Link href={{ pathname: "/profile/", query: { tab: "1" } }}>
            <a>Clinics</a>
          </Link>
        </Tab>
        <Tab selected={isTabTwo}>
          <Link href={{ pathname: "/profile", query: { tab: "2" } }}>
            <a>Doctors</a>
          </Link>
        </Tab>
      </TabHead>
      <TabBody>
        {isTabOne && (
          <React.Fragment>
            <MyCont>
              <ItemCont>
                <HeroAvatar />
              </ItemCont>
              <ItemCont>
                <ClinicProfile uid={uid} />
              </ItemCont>
            </MyCont>
          </React.Fragment>
        )}
        {isTabTwo && (
          <React.Fragment>
            <ClinicDoctors
              uid={uid}
              showModal={showModal}
              setModalContent={setModalContent}
            ></ClinicDoctors>
          </React.Fragment>
        )}
      </TabBody>
    </TabContainer>
  );
};

export default withRouter(HorizonTab);
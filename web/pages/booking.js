import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "react-calendar/dist/Calendar.css";

//import comps
import NavBar from "../comps/NavBar";
import PatientList from "../comps/PatientList";
import LiveWaitTime from "../comps/LiveWaitTime";
import Calendar from "../comps/CalendarAPI";
import Footer from "../comps/Footer";
import QRscan from "../comps/QRscan";
import HeaderTitle from "../comps/HeaderTitle";

import { db } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  getDoc,
  doc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const MainCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #f7f2ee;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

const WaveCont = styled.div`
  width: 100%;
  object-fit: cover;
`;

const Wave = styled.img`
  width: 100%;
  @media only screen and (min-width: 500px) {
    object-fit: cover;
    height: 320px;
    width: 100%;
  }
`;

const NavBarCont = styled.div`
  width: 100%;
  // height:300px;
  position: absolute;
  top: 0;
`;

const HeaderCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BodyCont = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 10%;
`;

const Low = styled.div`
  display: flex;
  /* flex-direction: column; */
  margin: 10px;
  @media only screen and (min-width: 500px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const CalendarCont = styled.div``;

const Column = styled.div`
  display: flex;
  margin: 5px;
`;

const ListCon = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

const ContPatientList = styled.div`
  width: 400px;
  border: 1px solid #8E8E8E;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fcfcfc;
  overflow: flow;
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
`;
const ListCont = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  height: 400px;
  margin-top: 35px;
`;

const PatientBooking = ({ uid, date }) => {
  const [bookings, setPatientBooking] = useState([]);

  const getBooking = async (uid) => {
    const datestr = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    const q = query(
      collection(db, "appointment"),
      where("clinicId", "==", uid),
      where("bookingdate", "==", datestr)
    );
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot);
    const bookings = [];
    querySnapshot.forEach((doc) => {
      var temp = doc.data();
      temp.id = doc.id;
      bookings.push(temp);
    });
    console.log(bookings);
    setPatientBooking(bookings);
  };

  useEffect(() => {
    if (uid) {
      getBooking(uid);
    }
  }, [uid, date]);

  return (
    <div>
      {bookings.map((booking, index) => {
        const info = {
          clinicid: booking.clinicid,
          patientid: booking.patientid,
          bookingdate: booking.bookingdate,
          bookingtime: booking.bookingtime,
          patientname: booking.patientname,
        };
        return (
          <ListCon key={index}>
            <PatientList info={info} />
          </ListCon>
        );
      })}
    </div>
  );
};

export default function Home({}) {
  const [uid, setUid] = useState();
  const [date, setDate] = useState(new Date());

  const dateInfo = {
    bookingdate: date,
  };

  const setDateInfo = (bookingdate = date) => {
    setDate(bookingdate);
  };

  const onChange = (date) => {
    setDate(date);
  };

  useEffect(async () => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUid(user.uid);
        // setSelectedDate(user.selectedDate);
        const usersDocRef = doc(db, "clinics", user.uid);
        const data = await getDoc(usersDocRef);
        // console.log(data);
        const result = data.data();
        console.log(result);
      }
    });
  }, []);

  return (
    <MainCont>
      <WaveCont>
        <Wave src={"/background-web5.svg"}></Wave>
      </WaveCont>

      <NavBarCont>
        <NavBar />
        <HeaderCont>
          <HeaderTitle title={"Bookings"} />
        </HeaderCont>
      </NavBarCont>

      <QRscan />

      <BodyCont>
        <CalendarCont>
          <Calendar
            dateInfo={dateInfo}
            setDateInfo={setDateInfo}
            onChange={onChange}
          />
        </CalendarCont>

        <Low>
          <Column>
            <ContPatientList>
              <TitleCont>
                <Title>Bookings for: {date.toDateString()}</Title>
              </TitleCont>
              <PatientBooking uid={uid} date={date} />
            </ContPatientList>
          </Column>
          <Column>
            <LiveWaitTime uid={uid}></LiveWaitTime>
          </Column>
        </Low>
      </BodyCont>

      <Footer />
    </MainCont>
  );
}

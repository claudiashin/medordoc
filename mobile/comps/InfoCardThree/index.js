import styled from "styled-components/native";
import React, {useEffect, useState} from "react";
import { StyleSheet, View, Button, Linking, Text } from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDocs, collection, query, where, deleteDoc, doc } from "firebase/firestore";
import {db} from '../../utils/store'



const InfoCardCont = styled.View`
  width: 300px;
  border: #e9d7cb;
  padding: 20px;
  margin: 10px;
  background-color: #fff;
`;

const HeadingCont = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
`;

const Heading = styled.Text`
  font-size: ${(props) => props.heading_fs}px;
  font-weight: ${(props) => props.heading_fw};
  color: #505050;
  margin: 10px;
  text-align: center;
`;

const BodyCont = styled.View``;

const Date = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #505050;
  margin: 10px 10px 0px 10px;
`;

const Clinic = styled.Text`
  font-size: 16px;
  margin: 10px;
  color: #505050;
`;

const InfoCardThree = ({
  text = "Details",
  text2 = "January 16, 2021",
  text3 = "North Van Clinic",
  text4 = "March 12, 2021",
  text5 = "Burnaby Medical Clinic",
  text6 = "June 8, 2021",
  text7 = "Vancouver Medical Clinic",
  text8 = "September 22, 2021",
  text9 = "Burnaby Medical Clinic",
  fontsize = 18,
  weight = 700,
}) => {
  const [apptData, setApptData] = useState("")
  const [data, setData] = useState([])
  const auth = getAuth();
  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid)
      const reload = async () => {
        const q = query(collection(db, "appointment"), where("patientId", "==", uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          const appt = doc.data()
            // data.push(<Date>{apptData.bookingdate}</Date>
            //   )
            //   setData([...data])
            // console.log(appt)
            // setApptData(appt)

        });
        
       
      };
      reload()
      
    } else {
      console.log("no")
    }
  });
  
  return (
    <InfoCardCont>
      <HeadingCont>
        <Heading heading_fs={fontsize} heading_fw={weight}>
          {text}
        </Heading>
      </HeadingCont>

      <BodyCont>
 
       {data}
      </BodyCont>
    </InfoCardCont>
  );
};

const styles = StyleSheet.create({});

export default InfoCardThree;

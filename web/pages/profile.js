import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HorizonTab from "../comps/HorizonTab/index";
import NavBar from "../comps/NavBar";
import Footer from "../comps/Footer";
import QRscan from "../comps/QRscan";
import HeaderTitle from "../comps/HeaderTitle";
import { db } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDoc, doc, updateDoc } from "firebase/firestore";

const Cont = styled.div`
  display: flex;
  background-color: #f7f2ee;
  flex-direction: column;
  min-height: 80em;
  // height: 100vh;
  position: relative;
`;
const BodyCont = styled.div``;
const Modal = styled.div`
  position: absolute;
  top: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: ${(props) => (props.show ? "flex" : "none")};
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

const FooterCont = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
`;

const TabCont = styled.div`
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
`;
const HeaderCont = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 12px;
`;

export default function Profile() {
  const [uid, setUid] = useState();
  const [clinicName, setClinicName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  useEffect(async () => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUid(user.uid);
        const usersDocRef = doc(db, "clinics", user.uid);
        const data = await getDoc(usersDocRef);
        const result = data.data();
        console.log(result.name);
        // setClinicName(result.name);
      }
    });
  }, []);

  return (
    <Cont>
      <WaveCont>
        <Wave src={"/background-web5.svg"}></Wave>
      </WaveCont>

      <NavBarCont>
        <NavBar />
        <HeaderCont>
          <HeaderTitle fontSize="32" title="Profile" />
          <HeaderTitle fontSize="24" fontWeight="400" title={clinicName} />
        </HeaderCont>
      </NavBarCont>

      <QRscan />

      <BodyCont>
        <TabCont>
          <HorizonTab
            uid={uid}
            showModal={setShowModal}
            setModalContent={setModalContent}
          />
        </TabCont>
        <Modal show={showModal}>{modalContent}</Modal>
        <FooterCont>
          <Footer />
        </FooterCont>
      </BodyCont>
    </Cont>
  );
}

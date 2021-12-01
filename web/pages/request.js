import styled from "styled-components";
import { useState, useEffect } from "react";

//import comps
import PatientCard from "../comps/PatientCard";
import Footer from "../comps/Footer";
import NavBar from "../comps/NavBar";
import HeaderTitle from "../comps/HeaderTitle";
import QRscan from "../comps/QRscan";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDocs, doc, collection, query, where, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const Cont = styled.div`
  background-color: #f7f2ee;
  display: flex;
  flex-direction: column;

    width: 100%;
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

const HeaderCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavCont = styled.div`
  width: 100%;
  // height:300px;
  position: absolute;
  top: 0;
`;
const ContPatientCard = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0px 40px 20px 40px;
    
    
`;

const ContPatientCardInd = styled.div`
    display: flex;
    margin: 10px;
`;

const ContFooter = styled.div`
  display: flex;
  margin-top: 10%;
`;

const Modal = styled.div`
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: ${(props) => (props.show ? "flex" : "none")};
`;

const PatientRequest = ({ uid, showModal, setModalContent }) => {
  // const [uid, setUid] = useState();
  const [requests, setPatientRequests] = useState([]);

  const getRequest = async (uid) => {
    const q = query(collection(db, "requests"), where("clinicId", "==", uid));
    const querySnapshot = await getDocs(q);
    console.log(q);
    const requests = [];
    querySnapshot.forEach((doc) => {
      var temp = doc.data();
      temp.id = doc.id;
      requests.push(temp);
    });
    setPatientRequests(requests);
  };

  const setModal = (info = {}) => {
    setModalContent(
      <PopupCard
        showModal={showModal}
        uid={uid}
        info={info}
        getRequest={getRequest}
      />
    );
  };

  useEffect(() => {
    if (uid) {
      getRequest(uid);
    }
  }, [uid]);

  return (
    <div
        style={{display: "flex"}}
    >
      {requests.map((request, index) => {
        const info = {
          id: request.id,
          gender: request.gender,
          email: request.email,
          concern: request.concern,
          name: request.name,
          
        };
        return (
          <ContPatientCardInd key={index}>
            <PatientCard
              info={info}
              showModal={(show) => {
                if (show) {
                  setModal(info);
                  showModal(show);
                } else {
                  showModal(show);
                }
              }}
            />
          </ContPatientCardInd>
        );
      })}
    </div>
  );
};

export default function Home({ }) {
    const [uid, setUid] = useState();
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState("");
    
    useEffect(async () => {
        const auth = getAuth();
        onAuthStateChanged(auth, async (user) => {
          if (user) {
            setUid(user.uid);
            const usersDocRef = doc(db, "clinics", user.uid);
            const data = await getDoc(usersDocRef);
            // console.log(data);
            const result = data.data();
            console.log(result);
          }
        });
      }, []);

  return (
    <Cont>
      <WaveCont>
        <Wave src={"/background-web5.svg"}></Wave>
      </WaveCont>
      <NavCont>
        <NavBar />
        <HeaderCont>
          <HeaderTitle title={"Patient List"} />
        </HeaderCont>
      </NavCont>

      <QRscan />

      <ContPatientCard>
        <PatientRequest
          uid={uid}
          showModal={setShowModal}
          setModalContent={setModalContent}
        />
        <Modal show={showModal}>{modalContent}</Modal>
      </ContPatientCard>
      <ContFooter>
        <Footer />
      </ContFooter>
    </Cont>
  );
}

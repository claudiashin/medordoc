import React, {useState} from "react"
import Link from "next/link"
import { withRouter } from "next/router"
import styled from "styled-components"
import HeroAvatar from "../HeroAvatar";
import PatientCard from "../PatientCard";
import DoctorCard from "../DoctorCard";
import ClinicProfile from '../ClinicProfile';
import Btn from "../Btn"


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
`

 const PageBody = styled("div")`
  width: 100%;
  height: 100%;
  padding: 2em;
`

 const TabHead = styled("div")`
  border-bottom: 1.8px solid black;
  display: flex;
  justify-content: center;
  align-items:center;
  width: 80%;
  
`

 const TabContainer = styled("div")`
  width: 100vw;
  height: 0;
  margin-top: 60px;
  margin-bottom: 50px;
  webkit-box-shadow: -1px 0px 5px 0px rgba(184, 184, 184, 1);
  -moz-box-shadow: -1px 0px 5px 0px rgba(184, 184, 184, 1);
  box-shadow: -1px 0px 5px 0px rgba(184, 184, 184, 1);
  align-items:center;
  justify-content: center;
  display:flex;
  flex-direction:column;
`

 const TabBody = styled(PageBody)`
  height: 100%;
`

 const Tab = styled("div")`
  padding: 10px 100px 10px 100px;
  color: ${({ selected }) => (selected ? "#226BAF" : "black")};
  font-weight: ${({ selected }) => (selected ? "700" : "300")};
  font-size: 24px;
`

const MyCont = styled.div`
  width:100vw;
  min-height:500px;
  display:flex;
  align-items:center;
  justify-content:center;
`
const ItemCont = styled.div`
  margin:100px;
`
const HeaderCont = styled.div`

`
const Text = styled.text`

`
const MyCont2 = styled.div`
  width:100vw;
  min-height:500px;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
`
const ItemCont2 = styled.div`
  display:flex;

`
const DoctorCont = styled.div`
  margin:20px;
`

const DoctorCardCont = styled.div`
  position:absolute;
  top:660px;
  background:white;
  display:${props=>props.display};
`

const ButtonCont = styled.div`
  display:flex;
  justify-content:flex-end;
  width:100vw;
  margin-right:250px;
`



const MyTab = ({
}) =>{
  const [popup, setShowPopup] = useState(true)


  if(popup === true){
    return  <MyCont2>
    <HeaderCont>
      {/* replace with real header */}
      <Text>List of Doctors</Text>
    </HeaderCont>

    <ItemCont2>
      <DoctorCont>
        <PatientCard 
        name="Name: " 
        nameText="George Jordan" 
        gender="Experience: " 
        genderText="3 Years" 
        age="Gender: " 
        ageText="40" 
        medicalconcerns="Language: " 
        medicalText=" English" 
        phone="Location: " 
        phoneText="St. Joseph’s Clinic" 
        emailText="Edit" 
        button1={"none"}
        editDoc={()=>{
          setShowPopup(false)
        }}
        />
      </DoctorCont>
    </ItemCont2>

    
    <ButtonCont onClick={()=>{
        setShowPopup(false)
      }}>
      <Btn title="Create New" bgColor="#90AABB" onClick={()=>{
        setShowPopup(false)
      
      }}/>
    </ButtonCont>

  </MyCont2> 
  }else if(popup === false){
    return  <MyCont2>
    <HeaderCont>
      {/* replace with real header */}
      <Text>List of Doctors</Text>
    </HeaderCont>

    <ItemCont2>
      <DoctorCont>
      <PatientCard 
        name="Name: " 
        nameText="George Jordan" 
        gender="Experience: " 
        genderText="3 Years" 
        age="Gender: " 
        ageText="40" 
        medicalconcerns="Language: " 
        medicalText=" English" 
        phone="Location: " 
        phoneText="St. Joseph’s Clinic" 
        emailText="Edit" 
        button1={"none"}
        editDoc={()=>{
          setShowPopup(false)
        }}
        />      
        </DoctorCont>
      <DoctorCont>
      <PatientCard 
        name="Name: " 
        nameText="George Jordan" 
        gender="Experience: " 
        genderText="3 Years" 
        age="Gender: " 
        ageText="40" 
        medicalconcerns="Language: " 
        medicalText=" English" 
        phone="Location: " 
        phoneText="St. Joseph’s Clinic" 
        emailText="Edit" 
        button1={"none"}
        
        editDoc={()=>{setShowPopup(false)}}/>
      </DoctorCont>
      <DoctorCont>
      <PatientCard 
        name="Name: " 
        nameText="George Jordan" 
        gender="Experience: " 
        genderText="3 Years" 
        age="Gender: " 
        ageText="40" 
        medicalconcerns="Language: " 
        medicalText=" English" 
        phone="Location: " 
        phoneText="St. Joseph’s Clinic" 
        emailText="Edit" 
        button1={"none"}
        editDoc={()=>{setShowPopup(false)}}
        />      
        </DoctorCont>
    </ItemCont2>

    <ButtonCont >
      <Btn title="Create New" bgColor="#90AABB" />
    </ButtonCont>
    <DoctorCardCont>
      <DoctorCard xDoc={()=>{
        setShowPopup(true)
       
      }} 
      addDoc={()=>{
        setShowPopup(true)
      }}/>
    </DoctorCardCont>
  </MyCont2> 
  }
}
const HorizonTab = ({ router }) => {
  const {
    query: { tab }
  } = router

  const isTabOne = tab === "1" || tab == null
  const isTabTwo = tab === "2"

  const [clinicLang, setLanguage] = React.useState([]);
  const [clinicName, setClinicName] = React.useState("");
  const [clinicAdd, setClinicAdd] = React.useState("");
  const [clinicNum, setClinicNum] = React.useState("");
  const [clinicOpen, setClinicOpen] = React.useState("");
  const [clinicClose, setClinicClose] = React.useState("");
  const [clinicid, setClinicId] = React.useState(null);

  const info = {
    name: clinicName,
    lang: clinicLang,
    add: clinicAdd,
    num: clinicNum,
    open: clinicOpen,
    close: clinicClose,
    clinicId: clinicid
  };

  const setInfo = ({
    name = clinicName,
    lang = clinicLang,
    add = clinicAdd,
    num = clinicNum,
    open = clinicOpen,
    close = clinicClose, 
    clinicId = clinicid
  }) => {
    setClinicName(name);
    setLanguage(lang);
    setClinicAdd(add);
    setClinicNum(num);
    setClinicOpen(open);
    setClinicClose(close);
    setClinicId(clinicId);
  };


function writeUserData(clinicId, name, add, num, open, close) {
  const db = getDatabase();
  set(ref(db, 'clinics' + clinicId), {
    clinicname: name,
    clinicaddress: add,
    clinicnumber: num,
    clinicopen: open,
    clinicclose: close,
  });
}


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
        {isTabOne && <React.Fragment>
          <MyCont>
        <ItemCont>
          <HeroAvatar/>
        </ItemCont>
        <ItemCont>
         <ClinicProfile />
        </ItemCont>
        </MyCont>   
          </React.Fragment>}
        {isTabTwo && <React.Fragment>
            <MyTab></MyTab>
          </React.Fragment>}
      </TabBody>
    </TabContainer>
  )
}

export default withRouter(HorizonTab)

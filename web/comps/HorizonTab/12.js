import React, {useState} from "react"
import Link from "next/link"
import { withRouter } from "next/router"
import styled from "styled-components"
import HeroAvatar from "../HeroAvatar";
import PatientCard from "../PatientCard";
import DoctorCard from "../DoctorCard";
import SigninFormTwo from '../SigninFormTwo';
import Btn from "../Btn"
import { addDoc } from "@firebase/firestore";

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
  border-bottom: 2px solid black;
  display: flex;
  background: white;
`

 const TabContainer = styled("div")`
  width: 100vw;
  height: 30em;
  webkit-box-shadow: -1px 0px 5px 0px rgba(184, 184, 184, 1);
  -moz-box-shadow: -1px 0px 5px 0px rgba(184, 184, 184, 1);
  box-shadow: -1px 0px 5px 0px rgba(184, 184, 184, 1);
  align-items:center;
  display:flex;
  flex-direction:column;
`

 const TabBody = styled(PageBody)`
  height: 100%;
`

 const Tab = styled("div")`
  padding: 1em;
  background: ${({ selected }) => (selected ? "white" : "#F7F2EE")};
  * {
    color: black;
  }
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
  popup,
  setShowPopup,
  addDoc
}) =>{

  if(popup = true){
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
       
        />
      </DoctorCont>
      
      
    </ItemCont2>
    <ButtonCont onClick={
        setShowPopup
      }>
      <Btn title="Create New" bgColor="#90AABB" onClick={
        setShowPopup
      }/>
    </ButtonCont>

  </MyCont2> 
  }else {
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
        />      
        </DoctorCont>
    </ItemCont2>

    <ButtonCont >
      <Btn onClick={addDoc} title="Create New" bgColor="#90AABB" />
    </ButtonCont>
    <DoctorCardCont>
      <DoctorCard 
     />
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
          <SigninFormTwo />
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

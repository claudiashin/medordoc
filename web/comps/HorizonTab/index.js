import React from "react";
import styled from 'styled-components'
import 'semantic-ui-css/semantic.min.css'
import { Tab, } from 'semantic-ui-react';
import HeroAvatar from "../HeroAvatar";
import SigninForm from "../SigninForm";
import PatientCard from "../PatientCard";
import DoctorCard from "../DoctorCard"

//fix patientcard props
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
  top:0;
  background:white;
  display:${props=>props.none};
`

//replace with real button
const MyButton = styled.button`
  width:200px;
  height:50px;
  background:#90AABB;
`
const ButtonCont = styled.div`
  display:flex;
  justify-content:flex-end;
  width:100vw;
  margin-right:250px;
`
const panes = [
  {
    menuItem: 'Clinic',
    render: () => 
    <Tab.Pane attached={false}>
      <MyCont>
        <ItemCont>
          <HeroAvatar/>
        </ItemCont>
        <ItemCont>
          <SigninForm/>
        </ItemCont>
        </MyCont>    
  
    </Tab.Pane>,
  },

  {
    menuItem: 'Doctor',
    render: ({
      none = "none",
      popup=false,
      onPopUp=()=>{},
    }) => {
      if(popup == true){
      return <>
     <Tab.Pane attached={false}>
    
      <MyCont2>
        <HeaderCont>
          {/* replace with real header */}
          <Text>List of Doctors</Text>
        </HeaderCont>

        <ItemCont2>
          <DoctorCont>
            <PatientCard/>
          </DoctorCont>
          <DoctorCont>
           <PatientCard/>
          </DoctorCont>
          <DoctorCont>
           <PatientCard/>
          </DoctorCont>
        </ItemCont2>

        <ItemCont2>
          <DoctorCont>
            <PatientCard/>
          </DoctorCont>
          <DoctorCont>
           <PatientCard/>
          </DoctorCont>
          <DoctorCont>
           <PatientCard/>
          </DoctorCont>
        </ItemCont2>
        
        <ButtonCont >
          <MyButton onClick={()=>{
            onPopUp();
          }}/>
        </ButtonCont>

      </MyCont2> 
   
    </Tab.Pane>,
    </>
    }else if(popup == false){
      return  <>
      <Tab.Pane attached={false}>
    
      <MyCont2>
        <HeaderCont>
          {/* replace with real header */}
          <Text>List of Doctors</Text>
        </HeaderCont>

        <ItemCont2>
          <DoctorCont>
            <PatientCard/>
          </DoctorCont>
          <DoctorCont>
           <PatientCard/>
          </DoctorCont>
          <DoctorCont>
           <PatientCard/>
          </DoctorCont>
        </ItemCont2>

        <ItemCont2>
          <DoctorCont>
            <PatientCard/>
          </DoctorCont>
          <DoctorCont>
           <PatientCard/>
          </DoctorCont>
          <DoctorCont>
           <PatientCard/>
          </DoctorCont>
        </ItemCont2>

        <ButtonCont >
          <MyButton />
        </ButtonCont>
        <DoctorCardCont none = {none}>
          <DoctorCard />
        </DoctorCardCont>
      </MyCont2> 
   
    </Tab.Pane>,
    </>
    }
    }
  },
  
]



const HorizonTab = () => (
  <Tab menu={{ secondary: true, pointing: true }} panes={panes}  />
)

export default HorizonTab


// const panes = [
//   {
//     menuItem: 'Clinics',
//     // pane: {
//     //   key: 'tab2',
//     //   content: 'asd',
//     //   textAlign: 'center',
      
//     // },

//   },
//   {
//     menuItem: 'Doctors',
//     pane: {
//       key: 'tab3',
//       content: (
//         <Button>
//           This is a test
//         </Button>
//       ),
//     },
//   },
// ]


// const HorizonTab = ({
  
// }) =>{
//   return <Tab  style={{width:"100%"}} panes={panes} renderActiveOnly={false} >

//   </Tab>
// }

// export default HorizonTab
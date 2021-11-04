import React,{useState,useEffect} from "react";
import styled from 'styled-components';
import HorizonTab from '../comps/HorizonTab'



const Cont = styled.div`
  width:100vw;
  height:100vh;
`

export default function Profile(){
  const [showPopup, setShowPopup] = useState(true)

  return( 
  <Cont>
    <HorizonTab none = "none" onPopUp={()=>{
      setShowPopup(false);
    }} popup = {showPopup}/>
  </Cont>
  )
}
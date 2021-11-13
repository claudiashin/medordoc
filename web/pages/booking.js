import React from "react";
import styled from 'styled-components';


//import comps
import NavBar from "../comps/NavBar";
import PatientList from '../comps/PatientList';
import LiveWaitTime from '../comps/LiveWaitTime';
import Calendar from '../comps/CalendarAPI'
import Footer from '../comps/Footer';



const MainCont = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: #F7F2EE;
    width: 100%;
    height: 100%;
    justify-content: center;
`

const WaveCont = styled.div`
  width: 100%;
`;

const Wave = styled.img`
  width: 100%;
`;

const NavBarCont = styled.div`
  width:100%;
  // height:300px;
  position:absolute;
  top:0;
`;

const BodyCont = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

`
const Low = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`
const Column = styled.div`
    display: flex;
    margin: 5px;
`
const Calander = styled.div`
    width: 400px;
    height: 500px;
    background-color: #868686;
`

export default function Home() {
    return (
        <MainCont>

            <WaveCont>
                <Wave src={'/background-web5.svg'}></Wave>
            </WaveCont>

            <NavBarCont>
                <NavBar />
            </NavBarCont>

            <BodyCont>
                <Low>
                    <Calendar/>
                </Low>
                <Low>
                    <Column>
                        <LiveWaitTime></LiveWaitTime>
                    </Column>
                    <Column>
                        <PatientList></PatientList>
                    </Column>
                </Low>
            </BodyCont>

            <Footer />
        </MainCont>
    )
}
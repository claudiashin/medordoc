import React from "react";
import styled from 'styled-components';

//import comps
import PatientList from '../comps/PatientList';
import CalendarAPI from '../comps/CalendarAPI';
import NavBar from "../comps/NavBar";
import Footer from "../comps/Footer";
import Calendar from "react-calendar";



const MainCont = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    justify-content: center;
    background-color: #F7F2EE;
`
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
  width:100%;
  // height:300px;
  position:absolute;
  top:0;
`;

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
                        <PatientList
                            height="500"
                        />
                    </Column>
                </Low>
            </BodyCont>

            <Footer />
        </MainCont>
    )
}
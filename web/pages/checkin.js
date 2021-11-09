import React from "react";
import styled from 'styled-components';
<<<<<<< HEAD
import  QRComponent from '../comps/CheckIn'
=======

import NavBar from "../comps/NavBar";
>>>>>>> 7d04e40d9055d823c59c3cfe8ea641823abe40d4
import BookingForm from '../comps/BookingForm';
import Footer from "../comps/Footer";


const MainCont = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: #F7F2EE;
    width: 100vw;
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
const Qrcode = styled.div`
    width: 400px;
    height: 400px;
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
                    <Qrcode></Qrcode>
                </Low>
                <Low>
                    <BookingForm></BookingForm>
                </Low>
                    <QRComponent/>
            </BodyCont>

            <Footer/>
        </MainCont>
    )
}
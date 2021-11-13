import React,{useState} from "react";
import styled from 'styled-components';
import {useRouter} from 'next/router';

//import comps
import Btn from '../comps/Btn';
import HeaderTitle from '../comps/HeaderTitle';
import NavBar from "../comps/NavBar";
import QRComponent from '../comps/CheckIn'
import BookingForm from '../comps/BookingForm';
import Footer from "../comps/Footer";


const MainCont = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    background-color: #F7F2EE;
    width: 100vw;
    height: 100%;
    justify-content: center;
    align-items: center;
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
const BtnCont = styled.div`
    margin-top: 20px;
    margin-left: 150px;
`

export default function Home() {
    const router = useRouter();

    return (
        <MainCont>
            <WaveCont>
                <Wave src={'/background-web5.svg'}></Wave>
            </WaveCont>

            <NavBarCont>
                <NavBar />
            </NavBarCont>

            <HeaderTitle 
                title="Booking Confirmation"
                fontSize='36'
            />
            <BodyCont>

                    <QRComponent click = {{}}/>
            </BodyCont>

            <Footer/>
        </MainCont>
    )
}
import React from "react";
import styled from 'styled-components';
import {useRouter} from 'next/router';

//import comps
import BookingForm from '../comps/BookingForm';
import Btn from '../comps/Btn';
import HeaderTitle from '../comps/HeaderTitle';

const MainCont = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    height: 100vh;
    justify-content: center;
`
const Head = styled.div`
    display: flex;
    height: 100px;
    width: 100%;
    background-color: #B9D1E1;
    margin-bottom: 100px;
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
            <Head></Head>
            <HeaderTitle 
                title="Booking Confirmation"
                fontSize='36'
            />
            <BodyCont>
                <Low>
                    <Qrcode></Qrcode>
                </Low>
                <Low>
                    <BookingForm></BookingForm>
                    <BtnCont>
                        <Btn 
                            title = "Check In"
                            fSize = "16px"
                            color = "#fff"
                            bgColor = "#90AABB"
                            width = "125px"
                            height = "40px"
                            borderRad = "25px"
                            onClick={()=>router.push("/confirm")}
                        />
                    </BtnCont>
                </Low>
            </BodyCont>
        </MainCont>
    )
}
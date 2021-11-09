import React from "react";
import styled from 'styled-components';

import PatientList from '../comps/PatientList';
import LiveWaitTime from '../comps/LiveWaitTime';
import Calendar from '../comps/CalendarAPI'



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
            <Head></Head>
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
        </MainCont>
    )
}
import React from "react";
import styled from 'styled-components';

//import comps
import PatientList from '../comps/PatientList';



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
                    <Calander></Calander>
                </Low>
                <Low>
                    <Column>
                        <PatientList 
                            height="500"
                        />
                    </Column>
                </Low>
            </BodyCont>
        </MainCont>
    )
}
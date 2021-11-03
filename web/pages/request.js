import styled from "styled-components";

import PatientCard from '../comps/PatientCard';
import Footer from '../comps/Footer';
import PopupCard from '../comps/PopupCard';
import NavBar from '../comps/NavBar';

const Cont = styled.div`
    background-color: #F7F2EE;
`
const Background = styled.img`

`

const NavCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    position:absolute;
    top:0;
    
`

const ContPatientCard = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    
`
const ContPatientCardInd = styled.div`
    display: flex;
    margin: 10px;
`
const ContFooter = styled.div`
    display: flex;
    margin-top: 50px;
`

export default function Home() {
    return( <Cont>
        <Background src={'/background-web4.svg'}/>
        <NavCont>
            <NavBar/>
        </NavCont>
        
        <ContPatientCard>
            <ContPatientCardInd>
                <PatientCard/>
            </ContPatientCardInd>
            <ContPatientCardInd>
                <PatientCard/>
            </ContPatientCardInd>
            <ContPatientCardInd>
                <PatientCard/>
            </ContPatientCardInd>
            <ContPatientCardInd>
                <PatientCard/>
            </ContPatientCardInd>
            <ContPatientCardInd>
                <PatientCard/>
            </ContPatientCardInd>
            <ContPatientCardInd>
                <PatientCard/>
            </ContPatientCardInd>

        </ContPatientCard>

        <ContFooter>
            <Footer/>
        </ContFooter>
        
    </Cont>

    )
}
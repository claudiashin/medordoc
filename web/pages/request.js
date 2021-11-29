import styled from "styled-components";
import { useState } from "react";

//import comps
import PatientCard from '../comps/PatientCard';
import Footer from '../comps/Footer';
import PopupCard from '../comps/PopupCard';
import NavBar from '../comps/NavBar';
import HeaderTitle from '../comps/HeaderTitle';
import QRscan from "../comps/QRscan";

const Cont = styled.div`
    background-color: #F7F2EE;
    width: 100%;
`;

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

const Background = styled.img`
`;
const HeaderCont = styled.div`
    display: flex;
    right: 50%;
    top:200px;
    align-self: center;
    justify-content: center;
`;

const NavCont = styled.div`
    width:100%;
    // height:300px;
    position:absolute;
    top:0;
`;

const ContPatientCard = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0px 40px 20px 40px;
    
    
`;

const ContPatientCardInd = styled.div`
    display: flex;
    margin: 10px;
`;

const ContFooter = styled.div`
    display: flex;
    margin-top: 10%;
`;

//popup card 
const PopupCont = styled.div`
    display: flex;
    position: absolute;
    top: 70%;
    left: 38%;
    align-self: center;
    justify-content: center;
`;

export default function Home() {

    return (<Cont>
        <WaveCont>
            <Wave src={'/background-web5.svg'}></Wave>
        </WaveCont>
        <NavCont>
            <NavBar />
        </NavCont>

        <HeaderCont>
            <HeaderTitle title={"Patient List"} />
        </HeaderCont>


        {/* <PopupCont>
            <PopupCard/>
        </PopupCont>  */}

        <QRscan />

        <ContPatientCard>
            <ContPatientCardInd>
                <PatientCard
                    name="Name:"
                    gender="Email:"
                    age="DOB:"
                    medicalconcerns="Medical Concerns:"
                    phone="Phone:"
                    nameText=" Katie Lee"
                    genderText=" example@mail.com"
                    ageText=" 10/12/1991"
                    medicalText=" Seasonal"
                    phoneText=" 604-123-1234"
                    button2="none"
                />
            </ContPatientCardInd>
            <ContPatientCardInd>
                <PatientCard
                    name="Name:"
                    gender="Email:"
                    age="DOB:"
                    medicalconcerns="Medical Concerns:"
                    phone="Phone:"
                    nameText=" Donald Petterson"
                    genderText=" example@mail.com"
                    ageText=" 10/12/1991"
                    medicalText=" Heart"
                    phoneText=" 604-123-1354"
                    button2="none"
                />
            </ContPatientCardInd>
            <ContPatientCardInd>
                <PatientCard
                    name="Name:"
                    gender="Email:"
                    age="DOB:"
                    medicalconcerns="Medical Concerns:"
                    phone="Phone:"
                    nameText=" Jenny Truong"
                    genderText=" example@mail.com"
                    ageText=" 10/12/1991"
                    medicalText=" Allergies"
                    phoneText=" 604-123-1355"
                    button2="none"
                />
            </ContPatientCardInd>
            <ContPatientCardInd>
                <PatientCard
                    name="Name:"
                    gender="Email:"
                    age="DOB:"
                    medicalconcerns="Medical Concerns:"
                    phone="Phone:"
                    nameText=" Ben Bach"
                    genderText=" example@mail.com"
                    ageText=" 10/12/1991"
                    medicalText=" Body aches"
                    phoneText=" 604-123-2222"
                    button2="none"
                />
            </ContPatientCardInd>
            <ContPatientCardInd>
                <PatientCard
                    name="Name:"
                    gender="Email:"
                    age="DOB:"
                    medicalconcerns="Medical Concerns:"
                    phone="Phone:"
                    nameText=" Liam Parker"
                    genderText=" example@mail.com"
                    ageText=" 10/12/1991"
                    medicalText=" Diabetes"
                    phoneText=" 604-123-2222"
                    button2="none"
                />
            </ContPatientCardInd>
            <ContPatientCardInd>
                <PatientCard
                    name="Name:"
                    gender="Email:"
                    age="DOB:"
                    medicalconcerns="Medical Concerns:"
                    phone="Phone:"
                    nameText=" Julie Chu"
                    genderText=" example@mail.com"
                    ageText=" 10/12/1991"
                    medicalText=" Allergies"
                    phoneText=" 604-555-2222"
                    button2="none"
                />
            </ContPatientCardInd>
            <ContPatientCardInd>
                <PatientCard
                    name="Name:"
                    gender="Email:"
                    age="DOB:"
                    medicalconcerns="Medical Concerns:"
                    phone="Phone:"
                    nameText=" Julie Chu"
                    genderText=" example@mail.com"
                    ageText=" 10/12/1991"
                    medicalText=" Allergies"
                    phoneText=" 604-555-2222"
                    button2="none"
                />
            </ContPatientCardInd>

        </ContPatientCard>

        <ContFooter>
            <Footer />
        </ContFooter>

    </Cont>

    )
}
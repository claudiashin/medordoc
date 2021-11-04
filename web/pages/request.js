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
    left: 30px;
    
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
                <PatientCard 
                name = "Name:"
                gender = "Gender:"
                age = "Age:"
                medicalconcerns = "Medical Concerns:"
                phone = "Phone:"
                nameText = " Katie Lee"
                genderText = " Female"
                ageText = " 24"
                medicalText = " Seasonal"
                phoneText = " 604-123-1234"
                />
            </ContPatientCardInd>
            <ContPatientCardInd>
                <PatientCard
                name = "Name:"
                gender = "Gender:"
                age = "Age:"
                medicalconcerns = "Medical Concerns:"
                phone = "Phone:"                
                nameText = " Donald Petterson"
                genderText = " Male"
                ageText = " 18"
                medicalText = " Heart"
                phoneText = " 604-123-1354"
                />
            </ContPatientCardInd>
            <ContPatientCardInd>
                <PatientCard
                name = "Name:"
                gender = "Gender:"
                age = "Age:"
                medicalconcerns = "Medical Concerns:"
                phone = "Phone:"                
                nameText = " Jenny Truong"
                genderText = " Female"
                ageText = " 44"
                medicalText = " Allergies"
                phoneText = " 604-123-1355"                
                />
            </ContPatientCardInd>
            <ContPatientCardInd>
                <PatientCard
                name = "Name:"
                gender = "Gender:"
                age = "Age:"
                medicalconcerns = "Medical Concerns:"
                phone = "Phone:"                
                nameText = " Ben Bach"
                genderText = " Male"
                ageText = " 32"
                medicalText = " Body aches"
                phoneText = " 604-123-2222"                  
                />
            </ContPatientCardInd>
            <ContPatientCardInd>
                <PatientCard
                name = "Name:"
                gender = "Gender:"
                age = "Age:"
                medicalconcerns = "Medical Concerns:"
                phone = "Phone:"                
                nameText = " Liam Parker"
                genderText = " Male"
                ageText = " 28"
                medicalText = " Diabetes"
                phoneText = " 604-123-2222"                 
                />
            </ContPatientCardInd>
            <ContPatientCardInd>
                <PatientCard
                name = "Name:"
                gender = "Gender:"
                age = "Age:"
                medicalconcerns = "Medical Concerns:"
                phone = "Phone:"                
                nameText = " Julie Chu"
                genderText = " Female"
                ageText = " 32"
                medicalText = " Allergies"
                phoneText = " 604-555-2222"                 
                />
            </ContPatientCardInd>

        </ContPatientCard>

        <ContFooter>
            <Footer/>
        </ContFooter>
        
    </Cont>

    )
}
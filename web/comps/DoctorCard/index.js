import React from 'react';
import styled from 'styled-components';

const MainCont = styled.div`
    width: 500px;
    height: 650px;
    border: 1px solid #505050; 
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 10px;
`
const AvatarCont = styled.div`
    width: 130px;
    height: 130px;
    margin-top: 20px;
`
const AvatarImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
`
const FormCont = styled.div`
    display: flex;
    flex-direction: column;

`

const Form = styled.fieldset`
    margin: 15px;
    border: 1px solid black;
`
const FormTitle = styled.legend`
    margin: 0;
    font-size: 12px;
`
const FormInput = styled.input`
    border: none;
    outline: none;
    type: text;
    width: 270px;
    height: 13px;
`
const SelectCont = styled.select`
    width: 270px;
    height: 15px;
    border: none;
`
const SelectOpt = styled.option`

`

const DoctorCard = ({
    profile="https://placekitten.com/1200/1200",
    placeholder="Dr.Alex Chan"

}) => {
    return <MainCont>
        <AvatarCont>
            <AvatarImg src={profile}/>
        </AvatarCont>
        <FormCont>

            <Form>
                <FormTitle>Name</FormTitle>
                <FormInput 
                    type="text"
                    placeholder={placeholder}    
                />
            </Form>
            <Form>
                <FormTitle>Years Experience</FormTitle>
                <FormInput 
                    type="number"
                    placeholder={placeholder}
                />
            </Form>
            <Form>
                <FormTitle>Gender</FormTitle>
                <SelectCont>
                    <SelectOpt></SelectOpt>
                    <SelectOpt>Male</SelectOpt>
                    <SelectOpt>Female</SelectOpt>
                </SelectCont>
            </Form>
            <Form>
                <FormTitle>Languages</FormTitle>
                <SelectCont>
                    <SelectOpt></SelectOpt>
                    <SelectOpt>English</SelectOpt>
                    <SelectOpt>French</SelectOpt>
                    <SelectOpt>Chinese</SelectOpt>
                    <SelectOpt>Korean</SelectOpt>
                    <SelectOpt>Japanese</SelectOpt>
                    <SelectOpt>Punjabi</SelectOpt>
                    <SelectOpt>Spanish</SelectOpt>
                    <SelectOpt>Hindi</SelectOpt>
                    <SelectOpt>Russian</SelectOpt>
                </SelectCont>
            </Form>
            <Form>
                <FormTitle>Location</FormTitle>
                <FormInput 
                    type="text"
                    placeholder={placeholder}
                />
            </Form>
        </FormCont>
        {/* <Button></Button> */}
    </MainCont>
}

export default DoctorCard;
import React, {useState} from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const MainCont = styled.div`
    display: flex;
    flex-direction: column;
 
`
const Form = styled.fieldset`
    margin: 15px;
    border: 1px solid black;
    width: 400px;
    height: 55px;
`
const FormTitle = styled.legend`
    margin: 5px;
    font-size: 14px;
`
const FormInput = styled.input`
    border: none;
    outline: none;
    padding-bottom: 5px;
`
const FormTimeForm = styled.fieldset`
    margin: 15px;
    border: 1px solid black;
    width: 185px;
    height: 55px;

`
const TimeFormCont = styled.div`
    display: flex;
    margin-bottom: 30px;
`
const Title = styled.p`
    margin-left: 15px;
    font-size: 16px;
`

const Button = styled.button`
    margin: 5px;
    width: 80px;
    height: 30px;
    padding: 5px;
    background-color: #90AABB;
    color: white;
    border: none;
    border-radius: 10px;

` 
const LangMain = styled.form`

`
const LangCont = styled.select`
    width: 400px;
    height: 18px;
    margin-top: -15px;
 
    border:none;
`
const LangOpt = styled.option`

`

const SigninForm = ({

}) => {

    const [changeForm, setChangeForm] = useState(true);
    const router = useRouter();

    if(changeForm === true ) {
        return <MainCont>
            <Title>Log in Information</Title>
            <Form>
                <FormTitle>Username</FormTitle>
                <FormInput 
                    type="email"
                    placeholder="Username"
                />
            </Form>
            <Form>
                <FormTitle>Password</FormTitle>
                <FormInput 
                    type="password"
                    placeholder="Password"
                />
            </Form>
            <Form>
                <FormTitle>Email Address</FormTitle>
                <FormInput 
                    type="email"
                    placeholder="Email Address"
                />
            </Form>
            <Button
                onClick={()=>{
                    setChangeForm(false);
                }}
            >Next</Button>
        </MainCont>
    }

    return <MainCont>
        <Title>Clinic Information</Title>
        <Form>
            <FormTitle>Clinicname</FormTitle>
            <FormInput 
                type="text"
                placeholder="Clinic Name"
            />
        </Form>
        <Form>
            <FormTitle>Clinic Address</FormTitle>
            <FormInput 
                type="text"
                placeholder="Clinic Address"
            />
        </Form>
        <Form
            style={{marginBottom:50}}
        >
            <FormTitle>Contact Number</FormTitle>
            <FormInput 
                type="tel"
                placeholder="Contact Number"
            />
        </Form>
        <Title>Operation Hour</Title>
        <TimeFormCont>
            <FormTimeForm>
                <FormTitle>Open</FormTitle>
                <FormInput 
                    type="time"
                    placeholder="Open Hour"
                />
            </FormTimeForm>
            <FormTimeForm>
                <FormTitle>Close</FormTitle>
                <FormInput 
                    type="time"
                    placeholder="Open Hour"
                />
            </FormTimeForm>
        </TimeFormCont>
        <Title>Additional Information</Title>
        <Form>
            <FormTitle>Clinic Address</FormTitle>
            <LangCont>
                <LangOpt value="English">English</LangOpt>
                <LangOpt value="French">French</LangOpt>
                <LangOpt value="Chinese">Chinese</LangOpt>
                <LangOpt value="Korean">Korean</LangOpt>
                <LangOpt value="Japanese">Japanese</LangOpt>
                <LangOpt value="Punjabi">Punjabi</LangOpt>
            </LangCont>
        </Form>
     
        <Button
            onClick={()=>{
                router.push("www.bcit.ca")
            }}
        >Next</Button>
    </MainCont>
}

export default SigninForm
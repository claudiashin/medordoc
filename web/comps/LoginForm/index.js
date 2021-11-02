import React from 'react';
import styled from 'styled-components';

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
    type: text;
    padding-bottom: 5px;
`
const LastDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 15px;
    margin-top: -10px;
`
const Text = styled.p`
    font-size: 16px;
    color: #979595;
`
const TextLink = styled.a`
    font-size: 16px;
    color: #226BAF;
    margin-left: 10px;
`

const LoginForm = ({

}) => {
    return <MainCont>
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
        <LastDiv>
            <Text>
                Don't have an account?
                <TextLink
                    href="www.bcit.ca"
                >Sign up</TextLink>
            </Text>
        </LastDiv>
    </MainCont>
}

export default LoginForm
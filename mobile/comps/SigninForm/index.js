import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Provider as PaperProvider, TextInput, RadioButton } from 'react-native-paper';
import { StyleSheet, Button, View, Text } from "react-native";


const MainCont = styled.View`
    flex-direction: column;
`
const Title = styled.Text`
    font-weight: 500;
    font-size: 16px;
    margin-left: 5px;
    margin-bottom: 10px;
`
const Radio = styled.View`
    background-color: #fff;
    border: 1px solid #505050;
    border-radius: 5px;
    width: 300px;
    margin-left: 5px; 
    margin-top: 5px;
    position: relative;
`
const RadioTitle = styled.Text`
    fontWeight: 600; 
    margin-left: 15px; 
`
    
    // position: absolute;
    // top: -8px;


const SigninForm = ({
    
}) => {
    //for first form
    const [fname, setFname] = React.useState('');
    const [lname, setLname] = React.useState('');
    const [text, setText] = React.useState('');
    const [pass, setPass] = React.useState('');
    //for button
    const [changeForm, setChangeForm] = useState(true);
    //for radiobutton(gender)
    const [value, setValue] = React.useState('first');

    //for second form
    const [medcon, setMedcon] = React.useState('');

    if (changeForm === true) {
        return <MainCont>
            <PaperProvider>
                <Title>Personal Information</Title>
                <TextInput
                    style={{width:300, height: 45, margin:5, backgroundColor:'#fff'}}
                    label="First Name"
                    returnKeyType="next"
                    value={fname}
                    mode='outlined'
                    onChangeText={fname => setFname(fname)}
                />
                <TextInput
                    style={{width:300, height: 45, margin:5, backgroundColor:'#fff'}}
                    label="Last Name"
                    returnKeyType="next"
                    value={lname}
                    mode='outlined'
                    onChangeText={lname => setLname(lname)}
                />
                <TextInput
                    style={{width:300, height: 45, margin:5, backgroundColor:'#fff'}}
                    label="Email"
                    returnKeyType="next"
                    autoCapitalize="none"
                    autoComplete="email"
                    textContentType="emailAddress"
                    keyboardType='email-address'
                    value={text}
                    mode='outlined'
                    onChangeText={text => setText(text)}
                />
                <TextInput
                    style={{width:300, height: 45, margin:5, backgroundColor:'#fff'}}
                    label="Password"
                    returnKeyType="done"
                    secureTextEntry
                    value={pass}
                    mode='outlined'
                    onChangeText={pass => setPass(pass)}
                />
            <Button title="next"
                onPress={()=>{setChangeForm(false);}}
            ></Button>
            </PaperProvider>
        </MainCont>
    }

    return <MainCont>
            <PaperProvider>
            <Title>Additional Information</Title>
            <TextInput
                    style={{width:300, height: 50, margin:5, backgroundColor:'#fff'}}
                    label="First Name"
                    returnKeyType="next"
                    value={fname}
                    mode='outlined'
                    onChangeText={fname => setFname(fname)}
                />
            <Radio>
                <RadioTitle>Gender</RadioTitle>
                <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                    <RadioButton.Item style={{width: 300}} label="Male" value="Male" />
                    <RadioButton.Item style={{width: 300}} label="Female" value="Female" />
                    <RadioButton.Item style={{width: 300}} label="Prefer not to answer" value="na" />
                </RadioButton.Group>
            </Radio>
                <TextInput
                    style={{width:300, height: 50, margin:5, backgroundColor:'#fff'}}
                    label="Address"
                    returnKeyType="next"
                    autoCapitalize='sentences'
                    autoComplete='postal-address-extended-postal-code'
                    textContentType="fullStreetAddress"
                    dataDetectorTypes='address'
                    multiline={true}
                    value={text}
                    mode='outlined'
                    onChangeText={text => setText(text)}
                />
                <TextInput
                    style={{width:300, height: 50, margin:5, backgroundColor:'#fff'}}
                    label="Medical Concern"
                    returnKeyType="done"
                    autoCapitalize='sentences'
                    value={medcon}
                    multiline={true}
                    mode='outlined'
                    onChangeText={medcon => setMedcon(medcon)}
                />
        <Button title="next"
            onPress={()=>{setChangeForm(true);}}
        ></Button>
      </PaperProvider>
    </MainCont>

};


export default SigninForm

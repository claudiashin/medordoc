import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Provider as PaperProvider, TextInput } from 'react-native-paper';
import { StyleSheet, Button, View, Text } from "react-native";
import { en,registerTranslation } from 'react-native-paper-dates'
  registerTranslation('en', en)
import { DatePickerInput } from 'react-native-paper-dates';
import DropDownPicker from 'react-native-dropdown-picker';
import Btn from '../Btn';


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
    border-radius: 5px;
    width: 300px;
    margin-left: 5px; 
    margin-top: 5px;
    position: relative;
`
const DateCont = styled.View`

`
const RadioTitle = styled.Text`
    font-weight: 600; 
    margin-left: 15px; 
`
const ButCont = styled.View`
    margin-left: 180px;
    margin-top: 50px;
    margin-bottom: 100px;
`


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
    const [inputDate, setInputDate ] = React.useState('');

    const [open, setOpen] = useState(false);
    const [gender, setGender] = useState(null);
    const [items, setItems] = useState([
        {label: 'Male', gender: 'Male'},
        {label: 'Female', gender: 'Female'},
        {label: 'Prefer not to answer', gender: 'Prefer not to answer'}
    ]);

    if (changeForm === true) {
        return <MainCont>
            <PaperProvider>
                <Title>Personal Information</Title>
                <TextInput
                    style={styles.inputbox}
                    label="First Name"
                    returnKeyType="next"
                    value={fname}
                    mode='outlined'
                    onChangeText={fname => setFname(fname)}
                />
                <TextInput
                    style={styles.inputbox}
                    label="Last Name"
                    returnKeyType="next"
                    value={lname}
                    mode='outlined'
                    onChangeText={lname => setLname(lname)}
                />
                <TextInput
                    style={styles.inputbox}
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
                    style={styles.inputbox}
                    label="Password"
                    returnKeyType="done"
                    secureTextEntry
                    value={pass}
                    mode='outlined'
                    onChangeText={pass => setPass(pass)}
                />
            <ButCont>
                <Btn 
                    title = "Next"
                    fsize = '20'
                    bgcolor = "#97BDD6"
                    width = '140'
                    height = '45'
                    borderRad = '60'
                    onPress={()=>{setChangeForm(false)}}
                ></Btn>
            </ButCont>
            </PaperProvider>
        </MainCont>
    }
    return <MainCont>
            <PaperProvider>
            <Title>Additional Information</Title>
            <DateCont>
                <DatePickerInput
                    locale="en"
                    label="Date of Birth"
                    value={inputDate}
                    onChange={inputDate => setInputDate(inputDate)}
                    inputMode="start"
                    mode="outlined"
                    style={styles.inputbox}
                ></DatePickerInput>
            </DateCont>
            <Radio>
                <DropDownPicker
                    open={open}
                    value={gender}
                    items={items}
                    placeholder="Select Gender"
                    setOpen={setOpen}
                    setGender={setGender}
                    setItems={setItems}
               
                    style={{
                        width: 335,
                        height: 50,
                        borderRadius: 4,
                        borderColor: '#6d6d6d',
                        zIndex: 2
                    }}
                    />
            </Radio>
            <TextInput
                style={styles.inputbox}
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
                style={styles.inputbox}
                label="Medical Concern"
                returnKeyType="done"
                autoCapitalize='sentences'
                value={medcon}
                multiline={true}
                mode='outlined'
                onChangeText={medcon => setMedcon(medcon)}
                />
         <ButCont>
                <Btn
                    title = "Confirm"
                    fsize = '20'
                    bgcolor = "#97BDD6"
                    width = '140'
                    height = '45'
                    borderRad = '60'
                    onPress={()=>{setChangeForm(true)}}
                ></Btn>
            </ButCont>
      </PaperProvider>
    </MainCont>

};

const styles = StyleSheet.create({
    inputbox: {
        width: 335,
        height: 50,
        margin: 5,
        backgroundColor: '#fff'
    }
})


export default SigninForm

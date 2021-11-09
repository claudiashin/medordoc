import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Provider as PaperProvider, TextInput } from 'react-native-paper';
import { Datepicker, Layout, Text, ApplicationProvider, Input } from '@ui-kitten/components';
import { StyleSheet, Button, View } from "react-native";


const MainCont = styled.View`
    flex-direction: column;
`
const Title = styled.Text`
    font-weight: 500;
    font-size: 16px;
    margin-left: 5px;
    margin-bottom: 10px;
`
const styles = StyleSheet.create({
    container: {
      minHeight: 376,
    },
  });

const SigninForm = ({
    
}) => {

    const [fname, setFname] = React.useState('');
    const [lname, setLname] = React.useState('');
    const [text, setText] = React.useState('');
    const [pass, setPass] = React.useState('');

    const [changeForm, setChangeForm] = useState(true);

    const [date, setDate] = React.useState(new Date());
    const [value, setValue] = React.useState('');

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
                    autoCompleteType="email"
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
            {/* <ApplicationProvider> */}
            <Title>Additional Information</Title>
            {/* <Layout style={styles.container} level='1'>
                <Text category='h6'>
                    Selected date: {date.toLocaleDateString()}
                </Text>
                <Datepicker
                    date={date}
                    onSelect={nextDate => setDate(nextDate)}
                />
                <Input
                placeholder='Place your Text'
                value={value}
                onChangeText={nextValue => setValue(nextValue)}
                />
            </Layout>
            */}
           
        <Button title="next"
            onPress={()=>{setChangeForm(true);}}
        ></Button>
        {/* </ApplicationProvider> */}
    </MainCont>

};


export default SigninForm

import React from 'react';
import styled from 'styled-components/native';
// import { Input } from 'react-native-elements';
import { Provider as PaperProvider, TextInput } from 'react-native-paper';
import { TouchableOpacity, Text } from "react-native";


const MainCont = styled.View`
    flex-direction: column;
`
const LastDiv = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    margin-top: -10px;

`
// const Text = styled.Text`
//     font-size: 14px;
//     color: #979595;
//     margin-right: 5px;
// `



const LoginForm = ({
    
}) => {
    // const [text, onChangeText] = React.useState("Useless Text");
    // const [number, onChangeNumber] = React.useState(null);

    const [text, setText] = React.useState('');
    const [pass, setPass] = React.useState('');

    return <MainCont>
        <PaperProvider>
            <TextInput
            style={{width:300, height: 50, margin:5}}
            label="Email"
            keyboardType='email-address'
            value={text}
            mode='outlined'
            onChangeText={text => setText(text)}
            />
            <TextInput
            style={{width:300, height: 50, margin:5}}
            label="Password"
            keyboardType='visible-password'
            value={pass}
            mode='outlined'
            onChangeText={pass => setPass(pass)}
            />
        <LastDiv>
            <Text style={{color:'#575757', paddingTop:20, paddingLeft:5}}>Don't have an account?</Text>
                <TouchableOpacity><Text style={{color:'#226BAF', paddingTop:20, paddingLeft:5}}>Sign In</Text></TouchableOpacity> 
        </LastDiv>
        </PaperProvider>
    </MainCont>
};


export default LoginForm

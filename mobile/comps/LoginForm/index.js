import React from 'react';
import styled from 'styled-components/native';
import { Provider as PaperProvider, TextInput, DefaultTheme } from 'react-native-paper';
import { TouchableOpacity, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { color } from 'react-native-elements/dist/helpers';
const MainCont = styled.View`
    flex-direction: column;
`
const LastDiv = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    margin-top: -10px;
    margin-right: 5px;

`

const LoginForm = ({
    
}) => {

    const [text, setText] = React.useState('');
    const [pass, setPass] = React.useState('');

    const [data, setData] = React.useState({
        isValidUser: true,
        isValidPassword: true,
    })
    const handleValidUser = (e) =>{
        if (e.target.value.length > 8){
           backgroundColor="red"
        }
    }

    const navigation = useNavigation(); 

    return <MainCont>

        <PaperProvider>
           
            <TextInput
            style={{width:300, height: 50, margin:5, borderRadius: 0, backgroundColor:'#fff'}}
            outlineColor={handleValidUser}
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
            style={{width:300, height: 50, margin:5, backgroundColor:'#fff'}}
            label="Password"
            returnKeyType="done"
            keyboardType='visible-password'
            secureTextEntry
            value={pass}
            mode='outlined'
            onChangeText={pass => setPass(pass)}
            />
        <LastDiv>
            <Text style={{color:'#575757', paddingTop:20, paddingLeft:5}}>Don't have an account?</Text>
                <TouchableOpacity
                    onPress={()=>navigation.navigate('signup')}
                ><Text style={{color:'#226BAF', paddingTop:20, paddingLeft:5}}>Sign Up</Text></TouchableOpacity> 
        </LastDiv>
        </PaperProvider>
    </MainCont>
};


export default LoginForm

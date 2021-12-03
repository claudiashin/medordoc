import * as React from 'react';
import {useState,useEffect} from 'react';
import { TextInput, Button } from 'react-native-paper';
import { StyleSheet} from 'react-native';
import { en,registerTranslation } from 'react-native-paper-dates'
  registerTranslation('en', en)
import { DatePickerInput } from 'react-native-paper-dates';
import styled from 'styled-components';


const styles = StyleSheet.create({
    inputbox: {
        width: 380,
        height: 0,
        margin: 5,
        backgroundColor: '#fff'
    }
})
const BookingForm = ({

    dbname ='',
    dbaddress = '',
    dbconcerns = '',
    dbdob ='',
    editable=false

}) => {
  const [text, setText] = React.useState('');
  const [name, setName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [concerns, setConcerns] = React.useState('');
  const [others, setOthers] = React.useState('');
  const [bod,setBod]  = React.useState('');
//   const {inputDate, setInputDate } = React.useState < Date | undefined>(undefined);
  const [inputDate, setInputDate ] = React.useState('');

  useEffect(()=>{
       setName(dbname);
       setAddress(dbaddress);
       setConcerns(dbconcerns);
    // setBod(dbdob)
       console.log(dbname);
       console.log(dbaddress);
       console.log(bod);
      }
  ,[])

const Cont = styled.View`


`
  return <Cont>
    <TextInput
        style={styles.inputbox}
        underlineColor="#505050"
        returnKeyType="next"
        type="flat"
        label="Name"
        textContentType='name'
        value={name}
        editable={editable}
        onChangeText= {(name) => {
            setName(name);
          }}
    ></TextInput>
 
      <DatePickerInput
        locale="en"
        label="Date of Birth"
        value={bod}
        onChange={(bod) => setInputDate(bod)}
        inputMode="start"
        mode="flat"
        style={{
          width: 250

        }}
        editable={editable}
   
    ></DatePickerInput> 
{/* 
<TextInput
        style={styles.inputbox}
        underlineColor="#505050"
        returnKeyType="next"
        textContentType="date of the birth"
        type="flat"
        label="Date of the birth"
        value={dbdob}
        editable={editable}
        onChangeText={dbdob => setAddress(dbdob)}
    ></TextInput>  */}

    <TextInput
        style={styles.inputbox}
        underlineColor="#505050"
        returnKeyType="next"
        textContentType="fullStreetAddress"
        type="flat"
        label="Address"
        value={address}
        editable={editable}
        onChangeText={address => setAddress(address)}
    ></TextInput>
    <TextInput
        style={styles.inputbox}
        underlineColor="#505050"
        returnKeyType="next"
        autoCapitalize='sentences'
        type="flat"
        label="Concerns"
        value={concerns}
        editable={editable}
        onChangeText= {(val) => {
        setConcerns({concern:val});
          }}
    ></TextInput>
    </Cont>

};

export default BookingForm;



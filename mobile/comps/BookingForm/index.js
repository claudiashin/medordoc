import * as React from 'react';
import {useState,useEffect} from 'react';
import { TextInput, Button } from 'react-native-paper';
import { StyleSheet} from 'react-native';
import { en,registerTranslation } from 'react-native-paper-dates'
  registerTranslation('en', en)
import { DatePickerInput } from 'react-native-paper-dates';


const styles = StyleSheet.create({
    inputbox: {
        width: 335,
        height: 50,
        margin: 5,
        backgroundColor: '#fff'
    }
})
const BookingForm = ({
    setInfo,
    info,
    // dbaddress = '',
    // dbconcerns = '',
    // dbdob ='',
    editable= false
}) => {
  const [text, setText] = React.useState('');
  const [name, setName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [concerns, setConcerns] = React.useState('');
  const [others, setOthers] = React.useState('');
//   const {inputDate, setInputDate } = React.useState < Date | undefined>(undefined);
  const [inputDate, setInputDate ] = React.useState('');
  console.log(info.concern)

  useEffect(()=>{
       setText(info.fname)
       setName(info.lname)
       setAddress(info.add)
       setConcerns(info.concern)
      }
  ,[])

  console.log(name)

  return <>
    <TextInput
        style={styles.inputbox}
        underlineColor="#505050"
        returnKeyType="next"
        type="flat"
        label="Name"
        textContentType='name'
        value={name}
        editable={editable}
        onChangeText={name => setName(name)}
    ></TextInput>

    <DatePickerInput
        locale="en"
        label="Date of Birth"
        value={info.bd}
        onChange={(val) => setInputDate(info.bd)}
        inputMode="start"
        mode="flat"
        style={styles.inputbox}
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
    ></TextInput> */}

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
        value={info.concern}
        editable={editable}
        onChangeText= {(val) => {
            setInfo({concern:val});
          }}
    ></TextInput>
    </>

};

export default BookingForm;



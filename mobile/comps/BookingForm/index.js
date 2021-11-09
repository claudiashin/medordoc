import * as React from 'react';
import { TextInput, Button } from 'react-native-paper';
import { StyleSheet} from 'react-native';
import { en,registerTranslation } from 'react-native-paper-dates'
  registerTranslation('en', en)
import { DatePickerInput } from 'react-native-paper-dates';

import Datepick from '../DataPicker';


const styles = StyleSheet.create({
    inputbox: {
        width: 300,
        height: 50,
        margin: 5,
        backgroundColor: '#fff'
    }
})

const BookingForm = () => {
  const [text, setText] = React.useState('');
  const [name, setName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [concerns, setConcerns] = React.useState('');
  const [others, setOthers] = React.useState('');

  const {inputDate, setInputDate } = React.useState < Date | undefined>(undefined)

  return <>
    <TextInput
        style={styles.inputbox}
        underlineColor="#505050"
        returnKeyType="next"
        type="flat"
        label="Name"
        textContentType='name'
        value={name}
        readOnly="true"
        
        onChangeText={name => setName(name)}
    ></TextInput>
    <TextInput
        style={styles.inputbox}
        underlineColor="#505050"
        returnKeyType="next"
        type="flat"
        label="Phone Number"
        textContentType="telephoneNumber"
        keyboardType='phone-pad'
        value={text}

        onChangeText={text => setText(text)}
    ></TextInput>
    <DatePickerInput
        locale="en"
        label="Date of Birth"
        value={inputDate}
        onChange={(d) => setInputDate(d)}
        inputMode="start"
        mode="outlined"
        style={{width:150, margin: 10}}
    ></DatePickerInput>
    <TextInput
        style={styles.inputbox}
        underlineColor="#505050"
        returnKeyType="next"
        textContentType="fullStreetAddress"
        type="flat"
        label="Address"
        value={address}

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

        onChangeText={concerns => setConcerns(concerns)}
    ></TextInput>
    <TextInput
        style={styles.inputbox}
        underlineColor="#505050"
        returnKeyType="done"
        autoCapitalize='sentences'
        type="flat"
        label="Others"
        value={others}

        onChangeText={others => setOthers(others)}
    ></TextInput>

    </>
};
// mode="outlined" (see react-native-paper docs)
// other react native TextInput props

export default BookingForm;



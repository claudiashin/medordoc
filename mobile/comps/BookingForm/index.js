import * as React from 'react';
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
    editable='false'
}) => {
    
  const [text, setText] = React.useState('');
  const [name, setName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [concerns, setConcerns] = React.useState('');
  const [others, setOthers] = React.useState('');

//   const {inputDate, setInputDate } = React.useState < Date | undefined>(undefined);

  const [inputDate, setInputDate ] = React.useState('');

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
    <TextInput
        style={styles.inputbox}
        underlineColor="#505050"
        returnKeyType="next"
        type="flat"
        label="Phone Number"
        textContentType="telephoneNumber"
        keyboardType='phone-pad'
        value={text}
        editable={editable}
        onChangeText={text => setText(text)}
    ></TextInput>
    <DatePickerInput
        locale="en"
        label="Date of Birth"
        value={inputDate}
        onChange={inputDate => setInputDate(inputDate)}
        inputMode="start"
        mode="flat"
        style={styles.inputbox}
        editable={editable}
    ></DatePickerInput>
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
        editable={editable}
        onChangeText={others => setOthers(others)}
    ></TextInput>

    </>
};

export default BookingForm;



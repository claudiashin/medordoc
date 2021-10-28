import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet} from 'react-native';

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

  return <>
    <TextInput
      style={styles.inputbox}
      underlineColor="#505050"
      type="flat"
      label="Name"
      value={name}
      readOnly="true"
    
      onChangeText={name => setName(name)}
    ></TextInput>
    <TextInput
    style={styles.inputbox}
    underlineColor="#505050"
    type="flat"
    label="Gender"
    value={text}

    onChangeText={text => setText(text)}
  ></TextInput>
  <TextInput
    style={styles.inputbox}
    underlineColor="#505050"
    type="flat"
    label="DOB"
    value={text}

    onChangeText={text => setText(text)}
  ></TextInput>
  <TextInput
    style={styles.inputbox}
    underlineColor="#505050"
    type="flat"
    label="Address"
    value={address}

    onChangeText={address => setAddress(address)}
  ></TextInput>
  <TextInput
    style={styles.inputbox}
    underlineColor="#505050"
    type="flat"
    label="Concerns"
    value={concerns}

    onChangeText={concerns => setConcerns(concerns)}
  ></TextInput>
    <TextInput
    style={styles.inputbox}
    underlineColor="#505050"
    type="flat"
    label="Others"
    value={others}

    onChangeText={others => setOthers(others)}
  ></TextInput>
</>
};

export default BookingForm;


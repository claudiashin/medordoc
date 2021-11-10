import React, { Component } from 'react';
import { TextInput, Button } from 'react-native-paper';
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    inputbox: {
        width: 335,
        height: 50,
        margin: 5,
        backgroundColor: '#F7F2EE'
    }
})

const DrDetail = () => {

    const [text, setText] = React.useState('');
    const [name, setName] = React.useState('');
    const [lang, setLang] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [experience, setExperience] = React.useState('');
    const [others, setOthers] = React.useState('');

  return <>


    <TextInput
        style={styles.inputbox}
        underlineColor="#505050"
        type="flat"
        label="Name"
        textContentType='name'
        value={name}
        editable={false}
        onChangeText={name => setName(name)}
    ></TextInput>
    <TextInput
        style={styles.inputbox}
        underlineColor="#505050"
        type="flat"
        label="Gender"
        value={text}
        editable={false}
        onChangeText={text => setText(text)}
    ></TextInput>

    <TextInput
        style={styles.inputbox}
        underlineColor="#505050"
        textContentType="fullStreetAddress"
        type="flat"
        label="Language"
        value={lang}
        editable={false}
        onChangeText={lang => setLang(lang)}
    ></TextInput>
    <TextInput
        style={styles.inputbox}
        underlineColor="#505050"
        autoCapitalize='sentences'
        type="flat"
        label="Experience"
        value={experience}
        editable={false}
        onChangeText={experience => setExperience(experience)}
    ></TextInput>
    <TextInput
        style={styles.inputbox}
        underlineColor="#505050"
        autoCapitalize='sentences'
        type="flat"
        label="Clinic"
        value={address}
        editable={false}
        onChangeText={address => setAddress(address)}
    ></TextInput>
    <TextInput
        style={styles.inputbox}
        underlineColor="#505050"
        autoCapitalize='sentences'
        type="flat"
        label="Type"
        value={others}
        editable={false}
        onChangeText={others => setOthers(others)}
    ></TextInput>

    </>
};


export default DrDetail;
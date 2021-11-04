// import * as React from 'react';
// import { TextInput } from 'react-native-paper';
// import { StyleSheet} from 'react-native';

// const styles = StyleSheet.create({
//     inputbox: {
//         width: 300,
//         height: 50,
//         margin: 5,
//         backgroundColor: '#fff'
//     }
// })

// const BookingForm = () => {
//   const [text, setText] = React.useState('');
//   const [name, setName] = React.useState('');
//   const [address, setAddress] = React.useState('');
//   const [concerns, setConcerns] = React.useState('');
//   const [others, setOthers] = React.useState('');

//   return <>
//     <TextInput
//       style={styles.inputbox}
//       underlineColor="#505050"
//       type="flat"
//       label="Name"
//       value={name}
//       readOnly="true"
    
//       onChangeText={name => setName(name)}
//     ></TextInput>
//     <TextInput
//     style={styles.inputbox}
//     underlineColor="#505050"
//     type="flat"
//     label="Gender"
//     value={text}

//     onChangeText={text => setText(text)}
//   ></TextInput>
//   <TextInput
//     style={styles.inputbox}
//     underlineColor="#505050"
//     type="flat"
//     label="DOB"
//     value={text}

//     onChangeText={text => setText(text)}
//   ></TextInput>
//   <TextInput
//     style={styles.inputbox}
//     underlineColor="#505050"
//     type="flat"
//     label="Address"
//     value={address}

//     onChangeText={address => setAddress(address)}
//   ></TextInput>
//   <TextInput
//     style={styles.inputbox}
//     underlineColor="#505050"
//     type="flat"
//     label="Concerns"
//     value={concerns}

//     onChangeText={concerns => setConcerns(concerns)}
//   ></TextInput>
//     <TextInput
//     style={styles.inputbox}
//     underlineColor="#505050"
//     type="flat"
//     label="Others"
//     value={others}

//     onChangeText={others => setOthers(others)}
//   ></TextInput>
// </>
// };

// export default BookingForm;

// import React, { useState } from 'react';
// import { TextInput, Button } from 'react-native-paper';
// import { StyleSheet, View, Text } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';



// const styles = StyleSheet.create({
//     inputbox: {
//         width: 300,
//         height: 50,
//         margin: 5,
//         backgroundColor: '#fff'
//     },
//     datepicker: {
//         width: 300,
//         height: 50,
//         borderBottomColor: "#505050",
//         borderBottomWidth: 1,
//         marginLeft: 5,
//     },
//     datetitle: {
//         fontSize: 15,
//         color: "#555555",
//         left: 13,
//         top: 15,
//     }

// })

// const BookingForm = () => {
//   const [text, setText] = React.useState('');
//   const [name, setName] = React.useState('');
//   const [address, setAddress] = React.useState('');
//   const [concerns, setConcerns] = React.useState('');
//   const [others, setOthers] = React.useState('');

//   const [makeEdit, setEditable] = useState(true);

//   const [date, setDate] = useState(new Date(1598051730000));
//   const [mode, setMode] = useState('date');
//   const [show, setShow] = useState(false);

//   const [value, setValue] = React.useState('');


//   const onChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShow(Platform.OS === 'ios');
//     setDate(currentDate);
//   };

//   const showMode = (currentMode) => {
//     setShow(true);
//     setMode(currentMode);
//   };

//   const showDatepicker = () => {
//     showMode('date');
//   };

//   if(makeEdit === true) {
//     return <>
//     <Input
//       placeholder='Place your Text'
//       value={value}
//       onChangeText={nextValue => setValue(nextValue)}
//     />
//         <TextInput
//             style={styles.inputbox}
//             underlineColor="#505050"
//             type="flat"
//             label="Name"
//             value={name}
//             editable={false}
            
//             onChangeText={name => setName(name)}
//         ></TextInput>
//         <TextInput
//             style={styles.inputbox}
//             underlineColor="#505050"
//             type="flat"
//             label="Gender"
//             value={text}
//             editable={false}

//             onChangeText={text => setText(text)}
//         ></TextInput>
//         {/* <View 
//             style={styles.datepicker}
//         >
//             <Text style={styles.datetitle}>DOB</Text>
//             <View>
//             {show && (
//                 <DateTimePicker
//                 testID="dateTimePicker"
//                 value={date}
//                 mode={mode}
//                 display="calendar"
//                 onChange={onChange}
//                 style={{
//                     width: 400,
//                     height: 40,
//                     marginLeft: 130,
//                     // marginTop: 15,
//                     bottom: 15,
//                 }}
     
//                 />
//             )}
//             </View> 
//         </View> */}
//         <TextInput
//             style={styles.inputbox}
//             underlineColor="#505050"
//             type="flat"
//             label="Address"
//             value={address}
//             editable={false}

//             onChangeText={address => setAddress(address)}
//         ></TextInput>
//         <TextInput
//             style={styles.inputbox}
//             underlineColor="#505050"
//             type="flat"
//             label="Concerns"
//             value={concerns}
//             editable={false}

//             onChangeText={concerns => setConcerns(concerns)}
//         ></TextInput>
//             <TextInput
//             style={styles.inputbox}
//             underlineColor="#505050"
//             type="flat"
//             label="Others"
//             value={others}
//             editable={false}

//             onChangeText={others => setOthers(others)}
//         ></TextInput>

//         <Button onPress={()=>{
//             setEditable(false)
//         }}>Edit</Button>
//     </>
//   }

//   return <>
//         <TextInput
//             style={styles.inputbox}
//             underlineColor="#505050"
//             type="flat"
//             label="Name"
//             value={name}
            
//             onChangeText={name => setName(name)}
//         ></TextInput>
//         <TextInput
//             style={styles.inputbox}
//             underlineColor="#505050"
//             type="flat"
//             label="Gender"
//             value={text}

//             onChangeText={text => setText(text)}
//         ></TextInput>
//         <View 
//             style={styles.datepicker}
//         >
//             <Text style={styles.datetitle}>DOB</Text>
//             <View>
//             {show && (
//                 <DateTimePicker
//                 testID="dateTimePicker"
//                 value={date}
//                 mode={mode}
//                 display="calendar"
//                 onChange={onChange}
//                 style={{
//                     width: 400,
//                     height: 40,
//                     marginLeft: 130,
//                     // marginTop: 15,
//                     bottom: 15,
//                 }}
//                 />
//             )}
//             </View> 
//         </View>
//         <TextInput
//             style={styles.inputbox}
//             underlineColor="#505050"
//             type="flat"
//             label="Address"
//             value={address}

//             onChangeText={address => setAddress(address)}
//         ></TextInput>
//         <TextInput
//             style={styles.inputbox}
//             underlineColor="#505050"
//             type="flat"
//             label="Concerns"
//             value={concerns}

//             onChangeText={concerns => setConcerns(concerns)}
//         ></TextInput>
//             <TextInput
//             style={styles.inputbox}
//             underlineColor="#505050"
//             type="flat"
//             label="Others"
//             value={others}

//             onChangeText={others => setOthers(others)}
//         ></TextInput>
     
//         <Button onPress={()=>{
//             setEditable(true)
//         }}>Confirm</Button>
//     </>
// };

// export default BookingForm;

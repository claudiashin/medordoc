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
    dbname ='',
    dbaddress = '',
    dbconcerns = '',
    dbdob ='',
    editable='false'
}) => {
    
  const [text, setText] = React.useState('');
  const [name, setName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [concerns, setConcerns] = React.useState('');
  const [others, setOthers] = React.useState('');
//   const {inputDate, setInputDate } = React.useState < Date | undefined>(undefined);
  const [inputDate, setInputDate ] = React.useState('');

//   useEffect(()=>{
//         const getting =async()=>{
//         const docRef = doc(db, "patientuser",user);
//         const docSnap = await getDoc(docRef);
//         setInfo(docSnap.data())
//         console.log(docSnap.data())
//       }
//       getting()
//   },[])


  return <>
    <TextInput
        style={styles.inputbox}
        underlineColor="#505050"
        returnKeyType="next"
        type="flat"
        label="Name"
        textContentType='name'
        value={dbname}
        editable={editable}
        onChangeText={dbname => setName(dbname)}
    ></TextInput>

    <DatePickerInput
        locale="en"
        label="Date of Birth"
        value={dbdob}
        onChange={dbdob => setInputDate(dbdob)}
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
        value={dbaddress}
        editable={editable}
        onChangeText={dbaddress => setAddress(dbaddress)}
    ></TextInput>
    <TextInput
        style={styles.inputbox}
        underlineColor="#505050"
        returnKeyType="next"
        autoCapitalize='sentences'
        type="flat"
        label="Concerns"
        value={dbconcerns}
        editable={editable}
        onChangeText={dbconcerns => setConcerns(dbconcerns)}
    ></TextInput>
    </>

};

export default BookingForm;



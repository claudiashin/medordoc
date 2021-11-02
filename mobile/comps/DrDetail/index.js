import React from 'react';
import styled from 'styled-components/native';

import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const MainCont = styled.View`
    width: 500px;
    height: 650px;
    border: 1px solid #505050; 
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 10px;
`
const AvatarCont = styled.View`
    width: 130px;
    height: 130px;
    margin-top: 20px;
`
const AvatarImg = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
`
const FormCont = styled.View`
    display: flex;
    flex-direction: column;

`

// const Form = styled.fieldset`
//     margin: 15px;
//     border: 1px solid black;
// `
// const FormTitle = styled.legend`
//     margin: 0;
//     font-size: 12px;
// `
const FormInput = styled.TextInput`
    border: none;
    outline: none;
    width: 270px;
    height: 13px;
`
const SelectCont = styled.select`
    width: 100%;
    height: 15px;
    border: none;
`
const SelectOpt = styled.option`
    width: 100%;
`
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
    'English',
    'French',
    'Chinese',
    'Japanese',
    'Korean',
    'punjabi',
    'Hindi',
    'Spanish',
    'Russian',
  
];

function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightRegular,
    };
  }


const DoctorCard = ({
    profile="https://placekitten.com/1200/1200",
    placeholder="Dr.Alex Chan"


}) => {

    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        const {
        target: { value },
        } = event;
        setPersonName(
        // On autofill we get a the stringified value.
        typeof value === 'string' ? value.split(',') : value,
        );
    };

    return <MainCont>
        <AvatarCont>
            <AvatarImg src={profile}/>
        </AvatarCont>
        <FormCont>

            <Form>
                <FormTitle>Name</FormTitle>
                <FormInput 
                    type="text"
                    placeholder={placeholder}    
                />
            </Form>
            <Form>
                <FormTitle>Years Experience</FormTitle>
                <FormInput 
                    type="number"
                    placeholder={placeholder}
                />
            </Form>
            <Form>
                <FormTitle>Gender</FormTitle>
                <SelectCont>
                    <SelectOpt></SelectOpt>
                    <SelectOpt>Male</SelectOpt>
                    <SelectOpt>Female</SelectOpt>
                </SelectCont>
            </Form>
            <Form>
                <FormTitle>Location</FormTitle>
                <FormInput 
                    type="text"
                    placeholder={placeholder}
                />
            </Form>
            <div>
                <FormControl sx={{ m: 1, width: 400, height: 35, marginTop: 3,}}>
                    <InputLabel id="demo-multiple-name-label">Languages</InputLabel>
                    <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Name" />}
                    MenuProps={MenuProps}
                    style={{
                        height: 40, 
                        width: 390, 
                        marginLeft: 5, 
                        borderBlockColor: 'black',
                    
                    }}
                    >
                    {names.map((name) => (
                        <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, personName, theme)}
                        >
                        {name}
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>
            </div>
           
        </FormCont>
        {/* <Button></Button> */}
    </MainCont>
}

export default DoctorCard;
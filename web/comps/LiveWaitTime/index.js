import React from 'react';
import styled from 'styled-components';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const MainCont = styled.div`
    width: 550px;
    height: 270px;
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F7F2EE;
`
const TitleCont = styled.div`
    width: 350px;
    height: 60px;
    background-color: #E9D7CB;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;

`
const Title = styled.p`
    font-size: 24px;
    font-weight: bold;
`


const LiveWaitTime = () => {

    const [time, setTime] = React.useState('');
    const handleChange = (event) => {
        setTime(event.target.value);
    };

    return <MainCont>
        <TitleCont>
            <Title>Update Live Wait Time</Title>
        </TitleCont>
        <div>
            <FormControl variant="standard" sx={{ m: 4, minWidth: 300 }}>
                <InputLabel id="demo-simple-select-standard-label">Wait time</InputLabel>
                <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={time}
                onChange={handleChange}
                label="Time"
                >
                <MenuItem value={0}>No Wait</MenuItem>
                <MenuItem value={15}>15 Minutes</MenuItem>
                <MenuItem value={30}>30 Minutes</MenuItem>
                <MenuItem value={45}>45 Minutes</MenuItem>
                <MenuItem value={60}>60 Minutes</MenuItem>
                </Select>
            </FormControl>
        </div>
       
    </MainCont>
}

export default LiveWaitTime;
// import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

// const names = [
//   'Oliver Hansen',
//   'Van Henry',
//   'April Tucker',
//   'Ralph Hubbard',
//   'Omar Alexander',
//   'Carlos Abbott',
//   'Miriam Wagner',
//   'Bradley Wilkerson',
//   'Virginia Andrews',
//   'Kelly Snyder',
// ];

// function getStyles(name, personName, theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

// export default function LiveWaitTime() {
//   const theme = useTheme();
//   const [personName, setPersonName] = React.useState([]);

//   const handleChange = (event) => {
//     const {
//       target: { value },
//     } = event;
//     setPersonName(
//       // On autofill we get a the stringified value.
//       typeof value === 'string' ? value.split(',') : value,
//     );
//   };

//   return (
//     <div>
//       <FormControl sx={{ m: 1, width: 300 }}>
//         <InputLabel id="demo-multiple-name-label">Name</InputLabel>
//         <Select
//           labelId="demo-multiple-name-label"
//           id="demo-multiple-name"
//           multiple
//           value={personName}
//           onChange={handleChange}
//           input={<OutlinedInput label="Name" />}
//           MenuProps={MenuProps}
//         >
//           {names.map((name) => (
//             <MenuItem
//               key={name}
//               value={name}
//               style={getStyles(name, personName, theme)}
//             >
//               {name}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//     </div>
//   );
// }
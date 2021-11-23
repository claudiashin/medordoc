import React from 'react';
import styled from 'styled-components';
import { withStyles } from "@material-ui/core/styles";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const DarkerDisabledTextField = withStyles({
    root: {
      marginRight: 8,
      "& .MuiInputBase-root.Mui-disabled": {
        color: "black" // (default alpha is 0.38)
      }
    }
  })(TextField);

const BookingForm = () => {


    return  <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '38ch' },
                    display: 'flex',
                }}
                noValidate
                autoComplete="off"
                >
                    <div
                        style={{display: 'flex', flexDirection: 'column', margin: 10,}}
                    >
                        <DarkerDisabledTextField
                            id="standard-read-only-input"
                            label="Name"
                            defaultValue="Patient Name"
                            variant="standard"
                            disabled={true}
                        />
                        <TextField
                            id="standard-read-only-input"
                            label="Confirmation Code"
                            defaultValue="ABCDEF1234"
                            variant="standard"
                            disabled={true}
                        />
                        <TextField
                            id="standard-read-only-input"
                            label="Booking Date"
                            defaultValue="November 1st"
                            variant="standard"
                            disabled={true}
                        />
                        <TextField
                            id="standard-read-only-input"
                            label="Booking Time"
                            defaultValue="9:00 AM"
                            variant="standard"
                            disabled={true}
                        />
                    </div>
                </Box>
}

export default BookingForm;
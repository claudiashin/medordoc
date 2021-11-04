import React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


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
                        <TextField
                            id="standard-read-only-input"
                            label="Name"
                            defaultValue="Patient Name"
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="standard"
                        />
                        <TextField
                            id="standard-read-only-input"
                            label="Confirmation Code"
                            defaultValue="ABCDEF1234"
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="standard"
                        />
                        <TextField
                            id="standard-read-only-input"
                            label="Booking Date"
                            defaultValue="November 1st"
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="standard"
                        />
                        <TextField
                            id="standard-read-only-input"
                            label="Booking Time"
                            defaultValue="9:00 AM"
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="standard"
                        />
                    </div>
                </Box>
}

export default BookingForm;
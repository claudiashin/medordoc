import React, { Component, useState, setState } from 'react';
import dynamic from "next/dynamic";
import styled from 'styled-components';

import axios from 'axios';

//dialog comps from mui
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography'

const MainCont = styled.div`
    display: flex;
    
`;

const code = ['go to check in']
function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;
    const [scanResult, setScanResult] = React.useState('');

    const handleClose = () => {
      onClose(selectedValue);
    };
  
    const handleListItemClick = (value) => {
      onClose(value);
    };

    const handleError = (err) => {
      console.error(err)
    }

    const handleScan = (data) => {
      if (data) {
      setScanResult(data);
      // window.location.href = `/checkIn?ccode=${scanResult.cornit}`;
      window.location.href = `/checkin`;
      }
    };

    return (
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle
            sx={{marginLeft: 8, marginRight: 8, fontFamily: 'nunito' }}
        >Scan Patient's QR Code</DialogTitle>
        <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{width: '100%'}}
        />
        {/* <Typography>{`Coded text: ${scanResult}`}</Typography> */}
        <ListItem button onClick={() => handleListItemClick(code)} key={code}>
        </ListItem>
      </Dialog>
    );
};

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};




const QrReader = dynamic(() => import("react-qr-reader"), { ssr: false });

const QRscan = () => {

    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(code[1]);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
      };

    return  <MainCont>
        <Button 
            variant="outlined" 
            onClick={handleClickOpen}
            sx={{width: 200,
                height: 40,
                backgroundColor: "#EA9898",
                border: "none",
                color: "#fff",
                borderRadius: 0,
                position: "absolute",
                top: 250,
                right: -80,
                transform: "rotate(0.75turn)",
                margin: 0,
                boxShadow: "-3px 3px 5px grey;",
                fontFamily: 'nunito',
                '&:hover': {
                  backgroundColor: '#E97979',
                  border: "none",
                },
            }}
        >
        Check In 
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </MainCont>
}

export default QRscan;

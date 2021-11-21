import React, { Component, useState, setState } from 'react';
import dynamic from "next/dynamic";
import styled from 'styled-components';

//dialog comps from mui
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import ListItem from '@mui/material/ListItem';

const MainCont = styled.div`
    display: flex;
`;

const code = ['go to check in']
function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;
  
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
        if(data) {
            setState({
                result: data
            })
        }
    }

    return (
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle
            sx={{marginLeft: 8, marginRight: 8}}
        >Scan QRcode and Check In</DialogTitle>
        <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{width: '100%'}}
        />
        <ListItem button onClick={() => handleListItemClick(code)} key={code}>
            {/* {result.data} */}
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


    // const result = ""

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
                boxShadow: "-3px 3px 5px grey;"
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

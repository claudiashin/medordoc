import React from 'react';
import styled from 'styled-components';

const MainCont = styled.div`
    width: 550px;
    height: ${props=>props.ht}px;
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;

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
const ListCont = styled.div`
    display: flex;
    flex-direction: column;
    overflow: scroll;
    height: 250px;
    margin-top: 80px;
`
const ListItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-itmes: center;
    font-size: 24px;
    width: 450px;
`
const List = styled.p`
    
`

const PatientList = ({
    ht="300"
}) => {
    return <MainCont height={ht}>
        <TitleCont>
            <Title>October 8th Thursday</Title>
        </TitleCont>
        <ListCont>
            <ListItem>
                <List>9:00 AM</List>
                <List>Tom Clooney</List>
            </ListItem>
            <ListItem>
                <List>9:00 AM</List>
                <List>Tom Clooney</List>
            </ListItem>
            <ListItem>
                <List>9:00 AM</List>
                <List>Tom Clooney</List>
            </ListItem>
            <ListItem>
                <List>9:00 AM</List>
                <List>Tom Clooney</List>
            </ListItem>
            <ListItem>
                <List>9:00 AM</List>
                <List>Tom Clooney</List>
            </ListItem>
            <ListItem>
                <List>9:00 AM</List>
                <List>Tom Clooney</List>
            </ListItem>
        </ListCont>

    </MainCont>
}

export default PatientList;
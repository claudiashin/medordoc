import React from 'react';
import styled from 'styled-components';

const MainCont = styled.div`
    width: 550px;
    height: 270px;
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


const LiveWaitTime = () => {
    return <MainCont>
        <TitleCont>
            <Title>Update Live Wait Time</Title>
        </TitleCont>
    </MainCont>
}

export default LiveWaitTime;
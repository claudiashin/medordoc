import { flexbox } from '@mui/system';
import React, {useState} from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';


const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props=>props.bgColor};
    width: ${props=>props.width};
    height: ${props=>props.height};
    border-radius: ${props=>props.borderRad};
    margin: ${props=>props.margin};
    border: none;
    box-shadow: 2px 3px 9px #AFAFAF; 
    cursor: pointer;
    font-family: nunito;

    &:hover {
        background-color: ${props=>props.bgHover};
    }
`; 

const TextCont = styled.div`

`;

const Text = styled.p`
`;

const Btn = ({
    title = "Upload Your Clinic", 
    fSize = 22,
    color = "#fff",
    fWeight = "",
    letterSpace = 1,
    bgColor = "#EA9898",
    borderRad = 5,
    width = 250,
    height = 80,
    margin = 5,
    bgHover ="#FEC6C6",
    onClick=()=>{}

}) => {
    const router = useRouter();

    return (
        
        <Button onClick={onClick}
            bgColor={bgColor}
            width={width}
            height={height}
            borderRad={borderRad}
            margin={margin}
            bgHover={bgHover}
            >
                <TextCont>
                    <Text style={{
                        fontSize: fSize,
                        color: color,
                        fontWeight: fWeight,
                        letterSpacing: letterSpace,
                    }}>{title}</Text>
                </TextCont>
        </Button>
    )
}


export default Btn

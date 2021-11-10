import { flexbox } from '@mui/system';
import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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
    onClick=()=>{}

}) => {
    const router = useRouter();

    return (
        
        <Button onClick={onClick}
            style={{
                backgroundColor: bgColor,
                width: width,
                height: height,
                borderRadius: borderRad,
                margin: margin,

            }}>
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

import React from "react";
import styled from "styled-components";



const Maincont = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #B9D1E1;
    height: 60px;
    width: 100%;
`
const Textcont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const MODText = styled.text`
    font-size: 16px;
`;
const CRText = styled.text`
    font-size: 10px;
`

const Footer=({

})=>{
    return <Maincont>
        <Textcont>
            <MODText>MedOrDoc</MODText>
            <CRText>Copyright 2021©</CRText>
        </Textcont>
    </Maincont>
    
}


export default Footer;
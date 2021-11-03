import React from "react";
import styled from "styled-components";



const Maincont = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #B9D1E1;
    height: 95px;
    width: 100%;

`
const Textcont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Text = styled.text`
    font-size: 20px;
`



const Footer=({

})=>{
    return <Maincont>
        <Textcont>
            <Text>MedOrDoc</Text>
            <Text>Copyright 2021©</Text>
        </Textcont>
    </Maincont>
    
}


export default Footer;
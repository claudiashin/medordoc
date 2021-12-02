import React from 'react';
import styled from 'styled-components';

const HeaderCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 5px;
`;

const Title = styled.p`
    color: #5C5C5C;
    font-weight: ${props=>props.fWeight};
    font-size: ${props=>props.fSize}px;
`;

const HeaderTitle = ({
    title = "Create an Account",
    fontWeight = "bold",
    fontSize = 30,
}) => {

    return <HeaderCont>
       <Title fWeight={fontWeight} fSize={fontSize}>
           {title}</Title>
    </HeaderCont>
}

export default HeaderTitle;
import styled from 'styled-components/native'
import React from 'react'


const ButCont = styled.TouchableOpacity`
    background-color: ${props=>props.bgcolor};
    width: ${props=>props.width}px;
    height: ${props=>props.height}px;
    border-radius: ${props=>props.borderRad}px;
    justify-content: center;
    align-items: center;

`
const TextCont = styled.Text`
  justify-content: center;
  align-items: center;
  font-size: ${props=>props.fsize}px;
  font-weight: bold;
  color: #fff;

`;

const Btn = ({
    title = "Next", 
    fsize = '22',
    bgcolor = "#97BDD6",
    width = '145',
    height = '60',
    borderRad = '50',
    onPress={}
}) => {

    return (
        <ButCont
            onPress={onPress}
            bgcolor={bgcolor}
            width={width}
            height={height}
            borderRad={borderRad}
        >
            <TextCont
                fsize={fsize}
            >{title}</TextCont>
        </ButCont>
    )
}

export default Btn

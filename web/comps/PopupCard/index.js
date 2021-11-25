import styled from 'styled-components';

import {IoIosClose} from '@react-icons/all-files/io/IoIosClose';
import {useState} from 'react';

const PopupCardCont = styled.div`
    display: flex;
    background-color: #ffffff;
    flex-direction: column;
    justify-content: space-between;
    align-content: space-between;
    width: 320px;
    height: 300px;
    border: 2px solid #505050;
    border-radius: 10px;
`;

const CloseCont = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 5px 15px -30px 0px;
`;

const Close = styled.h2`
`;

const Heading = styled.h2`
    text-align: center;
    margin: 40px;
    line-height: 30px;
`;

const ButtonCont = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: white;
    margin: 0px 20px 65px 20px;
`;

const Button = styled.button`
    color: #226BAF;
    font-size: 22px;
    font-weight: 900;
    border: none;
    background-color: #fff;
    &:hover {
        color: ${props=>props.bgHover};
    }
`;

const PopupCard = ({
    ClosePop=()=>{},
    CloseCard=()=>{},
    bgHover ="#14487B",
}) => {
    
    // const [open, setOpen] = useState(true);

    // var display = "none";
    // if(open){
    //     display = "flex"
    // }
    return <PopupCardCont>
        {/* <PopupCardCont display={display}> */}
        <CloseCont>
        {/* <IoIosClose onClick={()=>setOpen(!open)} size={60}/> */}
        <IoIosClose onClick={()=>{ClosePop()}} size={40}/>

        </CloseCont>

        <Heading>Are you sure you want to remove this patient request?</Heading>

        <ButtonCont>
            <Button onClick={()=>CloseCard()} bgHover={bgHover}>YES</Button>
            <Button onClick={()=>ClosePop()} bgHover={bgHover}>NO</Button>
        </ButtonCont>
    </PopupCardCont>

}

export default PopupCard;
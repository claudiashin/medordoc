import styled from 'styled-components';

const PopupCardCont = styled.div`
    display: flex;
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
    margin: -10px 15px -30px 0px;
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
    margin: 0px 20px 45px 20px;
`;

const Button = styled.button`
    color: #226BAF;
    font-size: 22px;
    font-weight: 900;
    border: none;
    background-color: #fff;
`;

const PopupCard = ({

}) => {
    return <PopupCardCont>
        <CloseCont>
            <Close>X</Close>
        </CloseCont>

        <Heading>Are you sure you want to remove this patient request?</Heading>

        <ButtonCont>
            <Button>YES</Button>
            <Button>NO</Button>
        </ButtonCont>
    </PopupCardCont>

}

export default PopupCard;
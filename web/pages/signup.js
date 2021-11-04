import styled from 'styled-components';
import React, { useState } from 'react';
import { useRouter } from 'next/router';


import NavBar from '../comps/NavBar';
import HeaderTitle from '../comps/HeaderTitle';
import HeroLottie from '../comps/HeroLottie';
import SigninForm from '../comps/SigninForm';
import Btn from '../comps/Btn';
import myLottie from '../public/lottie_login.json'
// import HeroAvatar from '../public/HeroAvatar';

const Cont = styled.div`
    background-color: #F7F2EE;
    height: 100%;
    padding-bottom: 100px;
`;
const NavBarCont = styled.div`
    width:100%;
    // height:300px;
    position:absolute;
    top:0;
`

const Wave = styled.img`
    width: 100%;
    height: 250px;
`;

const HeaderTitleCont = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
`;

const HeroLottieCont = styled.div`
    display: flex;
    // justify-content: center;
    // align-items: center;
    // flex-wrap: wrap;
`;

const BodyCont = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

const SignInCont = styled.div`
    display: flex;
    flex-direction: column;
`;

const BtnCont = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export default function Home() {

    const [showAvatar, setShowAvatar] = useState(true);
    // const [changeForm, setChangeForm] = useState();


    if (showAvatar === true )
    return <Cont>

        <Wave src={'/background-web4.jpg'}></Wave>

        <NavBarCont>
            <NavBar />
        </NavBarCont>

        <HeaderTitleCont>
            <HeaderTitle />
        </HeaderTitleCont>


        <BodyCont>
            <HeroLottieCont>
                <HeroLottie
                showAvatar
                    source={myLottie}
                    width="550px"
                />
            </HeroLottieCont>


            <SignInCont>{/*{changeForm}*/}
                <SigninForm />
                <BtnCont onClick={()=>setShowAvatar(false)}>
                    <Btn 
                    title="Next" width="120px" height="40px" fSize="16px" bgColor="#90AABB" borderRad="20px" margin="40px 15px 0px 0px"/>
                </BtnCont>
            </SignInCont>

        </BodyCont>
    </Cont>

}
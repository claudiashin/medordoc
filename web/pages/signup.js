import styled from 'styled-components';
import React, { useState } from 'react';
import { useRouter } from 'next/router';


import NavBar from '../comps/NavBar';
import HeaderTitle from '../comps/HeaderTitle';
import HeroLottie from '../comps/HeroLottie';
import SigninForm from '../comps/SigninForm';
import SigninFormTwo from '../comps/SigninFormTwo';
import Btn from '../comps/Btn';
import InfoCard from '../comps/InfoCard';
import myLottie from '../public/lottie_login.json';
import myLottie2 from '../public/lottie_welcome.json';
import HeroAvatar from '../comps/HeroAvatar';
import Footer from '../comps/Footer';

const Cont = styled.div`
    background-color: #F7F2EE;
    height: 100%;
`;
const NavBarCont = styled.div`
    width:100%;
    // height:300px;
    position:absolute;
    top:0;
`;

const Wave = styled.img`
    width: 100%;
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
    margin-bottom: 80px;
`;

const TwoButtonCont = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const SignInCont_Two = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 40px;
`;

const Title = styled.p`
    margin-left: 15px;
    font-size: 16px;
`;

const BtnContTwo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    margin-bottom: 80px;
`;

const BodyContTwo = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

`;

const HeroLottieTwo = styled.div`
    margin-right: 10px;
`;

const InfoCardCont = styled.div`
    margin-left: 10px;
`;

const FooterCont = styled.div`
    width: 100%;
    bottom: 0;
`;


export default function Home() {
    const router = useRouter();

    const [changePage, setChangePage] = useState(0);


    if (changePage === 0)
        return <Cont>

            <Wave src={'/background_wave.jpg'}></Wave>

            <NavBarCont>
                <NavBar />
            </NavBarCont>

            <HeaderTitleCont>
                <HeaderTitle />
            </HeaderTitleCont>


            <BodyCont>
                <HeroLottieCont>
                    <HeroLottie
                        changePage
                        source={myLottie}
                        width="550px"
                    />
                </HeroLottieCont>


                <SignInCont>{/*{changeForm}*/}
                    <SigninForm />
                    <BtnCont onClick={() => setChangePage(changePage + 1)}>
                        <Btn
                            title="Next" width="120px" height="40px" fSize="16px" bgColor="#90AABB" borderRad="20px" margin="40px 15px 0px 0px" />
                    </BtnCont>
                </SignInCont>

            </BodyCont>
            
            <FooterCont>
                <Footer />
            </FooterCont>
        </Cont>

    else if (changePage === 1) {
        return <Cont>
            <Wave src={'/background_wave.jpg'}></Wave>

            <NavBarCont>
                <NavBar />
            </NavBarCont>

            <HeaderTitleCont>
                <HeaderTitle title="Complete Your Account" />
            </HeaderTitleCont>


            <BodyCont>
                <HeroLottieCont>
                    <HeroAvatar herowidth="220px" heroheight="220px" heromargin="50px 20px 40px 0px" />
                </HeroLottieCont>


                <SignInCont_Two>

                    <SigninFormTwo />

                    <TwoButtonCont>
                        <BtnCont onClick={() => setChangePage(changePage - 1)}>
                            <Btn
                                title="Back" width="120px" height="40px" fSize="16px" bgColor="#90AABB" borderRad="20px" margin="40px 15px 0px 0px" />
                        </BtnCont>
                        <BtnCont onClick={() => setChangePage(changePage + 1)}>
                            <Btn
                                title="Confirm" width="120px" height="40px" fSize="16px" bgColor="#90AABB" borderRad="20px" margin="40px 15px 0px 0px" />
                        </BtnCont>
                    </TwoButtonCont>
                </SignInCont_Two>

            </BodyCont>
            <FooterCont>
                <Footer />
            </FooterCont>
        </Cont>
    }
    else if (changePage === 2) {
        return <Cont>
            <Wave src={'/background_wave.jpg'}></Wave>

            <NavBarCont>
                <NavBar />
            </NavBarCont>

            <BodyContTwo>
                <HeroLottieTwo>
                    <HeroLottie
                        changePage
                        source={myLottie2}
                        width="400px"
                    />
                </HeroLottieTwo>
                <InfoCardCont>
                    <InfoCard />
                </InfoCardCont>
            </BodyContTwo>



            <BtnContTwo onClick={() => router.push("/login.js")}>
                <Btn title="Let's Explore" bgColor="#90AABB" width="160px" height="50px" fSize="16px" fWeight="600" borderRad="25px" />
            </BtnContTwo>

            <FooterCont>
                <Footer />
            </FooterCont>

        </Cont>

    }

}
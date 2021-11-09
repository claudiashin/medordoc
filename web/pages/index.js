import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import styled from 'styled-components';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import NavBar from '../comps/NavBar';
import HeaderTitle from '../comps/HeaderTitle';
import Btn from '../comps/Btn';
import HeroLottie from '../comps/HeroLottie';
import myLottie from '../public/lottie_receptionist.json'
import LaptopLottie from '../public/lottie_laptop.json'
import Footer from '../comps/Footer';

const MainCont = styled.div`
  background-color: #F7F2EE;
  height: 100%;
  width: 100%;
`;

const WaveCont = styled.div`
  width: 100%;
`;

const Wave = styled.img`
  width: 100%;
`;

const NavBarCont = styled.div`
  width:100%;
  // height:300px;
  position:absolute;
  top:0;
`;

const ContOne = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  /* align-items: center; */
  width: 100%;
  height: 500px;
`;

const ContTwo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  /* align-items: center; */
  width: 100%;
  height: 500px;
  background-color: #E9D7CB;
`;

const ContFour = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  /* align-items: center; */
  width: 100%;
  height: 400px;
  background-color: #E9D7CB;
`;

const MainInfoCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin: 50px; */
  width: 50%;
  
  @media only screen and (min-width: 500px) {
    text-align: center;
  }
`;

const LottieCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin: 50px; */
  @media only screen and (min-width: 500px) {
  }
`;

const BtnCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;

const BodyText = styled.p`
  font-size: 20px;
  line-height: 30px;

  @media only screen and (min-width: 500px) {
  line-height: 1;
  }
`;

//THIRD ROW
const ContThree = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const BenefitCont = styled.div`
  margin: 50px 0px 30px 80px;
`;

const FourInfoCont = styled.div`
  background-color: #fff;
  margin: 20px 80px 100px 80px;
  padding: 20px;
  display: flex;
@media only screen and (min-width: 500px) {
  flex-wrap: wrap;
  justify-content: center;
  padding: 0px;
}
/* If the screen size is 800px or more */
@media only screen and (min-width: 800px) {
  flex-wrap: nowrap;
}
`;

const InfoCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

const Heading = styled.h3`
  text-align: center;
`;

const FactText = styled.p`
  font-size: 16px;
  text-align: center;
`;
//END OF THIRD ROW

export default function Home() {
<<<<<<< HEAD

  return <Cont>
    {/* <HeaderwithNav></HeaderwithNav> */}
    <Wave src={'/background_wave.jpg'}></Wave>
=======
  return <MainCont>
    <WaveCont>
      <Wave src={'/background-web5.svg'}></Wave>
    </WaveCont>
>>>>>>> 7d04e40d9055d823c59c3cfe8ea641823abe40d4

    <NavBarCont>
      <NavBar />
    </NavBarCont>

<<<<<<< HEAD
    <BodyCont>
      <ColCont style={{ backgroundColor: '#fff' }}>
        <RowCont>
          <HeaderTitle
            title="Increase your clinic's patient base"
            fontSize="36"
            fontWeight="600"
          />
          <BodyText>
            Try MedOrDoc to enhance your clinic’s web presence and broaden your patient reach. Start by listing your clinic today.
          </BodyText>
        </RowCont>
        <RowCont>
          <HeroLottie
            source={myLottie}
            width="300px"

          />
        </RowCont>
      </ColCont>

      <ColCont>
        <RowCont>
          <HeroLottie
            source={myLottie}
            width="300px"

          />
        </RowCont>
        <RowCont>
          <HeaderTitle
            title="What is MedOrDoc?"
            fontSize="36"
            fontWeight="600"
          />
          <BodyText style={{ textAlign: 'left' }}>
            Try MedOrDoc to enhance your clinic’s web presence and broaden your patient reach. Start by listing your clinic today.
          </BodyText>
        </RowCont>
      </ColCont>

      <ColCont style={{ backgroundColor: '#fff' }}>
        <RowCont>
          <HeaderTitle
            title="Benefits of MedOrDoc"
            fontSize="36"
            fontWeight="600"
          />
        </RowCont>
        <RowCont style={{ backgroundColor: '#dad' }}>
          <SubCont>
            <IconWithText>
              <Icon src={'/profile.png'}></Icon>
              <SmText>Increase patient reach by keeping your availability status up-to-date</SmText>
            </IconWithText>
          </SubCont>
          <SubCont>
            <IconWithText>
              <Icon src={'/profile.png'}></Icon>
              <SmText>Increase patient reach by keeping your availability status up-to-date</SmText>
            </IconWithText>
          </SubCont>
          <SubCont>
            <IconWithText>
              <Icon src={'/profile.png'}></Icon>
              <SmText>Increase patient reach by keeping your availability status up-to-date</SmText>
            </IconWithText>
          </SubCont>
          <SubCont>
            <IconWithText>
              <Icon src={'/profile.png'}></Icon>
              <SmText>Increase patient reach by keeping your availability status up-to-date</SmText>
            </IconWithText>
          </SubCont>
        </RowCont>

      </ColCont>

    </BodyCont>
    <Footer/>

  </Cont>
}
=======
    {/* FIRST */}
    <ContOne>
      <MainInfoCont>
        <HeaderTitle title="Increase your clinic's patient base" />
        <BodyText>Try MedorDoc to enhance your clinic's web presence and broaden your patient reach. Start by listing your clinic today.</BodyText>
        <BtnCont>
          <Btn fSize="20px" fWeight="500" width="230px" height="70px" />
        </BtnCont>
      </MainInfoCont>

      <LottieCont>
        <HeroLottie
          source={myLottie}
          width="300px"
        />
      </LottieCont>
    </ContOne>

    {/* SECOND */}
    <ContTwo>
      <LottieCont>
        <HeroLottie
          source={myLottie}
          width="300px"
        />
      </LottieCont>
      <MainInfoCont>
        <HeaderTitle title="What is MedOrDoc?" />
        <BodyText>MedorDoc is an online platform that connects patients with doctors and serves to provide access to pateint care in the Lower Mainland. Patients will have the ability to book appointments at your walk-in clinic and smoothen the process for both parties.</BodyText>
      </MainInfoCont>
    </ContTwo>

    {/* THIRD */}
    <ContThree>
      <BenefitCont>
        <HeaderTitle title="Benefits of MedOrDoc" />
      </BenefitCont>
      <FourInfoCont>
        <InfoCont>
          <Icon src={'/profile.png'}></Icon>
          <Heading>Update Availability in Real Time</Heading>
          <FactText>Increase patient reach by keeping your availability status up-to-date</FactText>
        </InfoCont>

        <InfoCont>
          <Icon src={'/profile.png'}></Icon>
          <Heading>Connect Family Doctors with Patients</Heading>
          <FactText>Simplify the process and accept patients online</FactText>
        </InfoCont>

        <InfoCont>
          <Icon src={'/profile.png'}></Icon>
          <Heading>Manage Patients Bookings</Heading>
          <FactText>Simplify the process and accept patients online</FactText>
        </InfoCont>

        <InfoCont>
          <Icon src={'/profile.png'}></Icon>
          <Heading>Generate a QR Code</Heading>
          <FactText>Cut down the time it takes to check-in to avoid long wait times</FactText>
        </InfoCont>
      </FourInfoCont>
    </ContThree>

    {/* FOURTH */}
    <ContFour>
      <MainInfoCont>
        <HeaderTitle title="Start your free six month trial now" />
        <BtnCont>
          <Btn title="Start Now" fSize="20px" fWeight="500" width="160px" height="60px" />
        </BtnCont>
      </MainInfoCont>

      <LottieCont>
        <HeroLottie
          source={LaptopLottie}
          width="300px"
        />
      </LottieCont>
    </ContFour>

    <Footer />

  </MainCont>
}
>>>>>>> 7d04e40d9055d823c59c3cfe8ea641823abe40d4

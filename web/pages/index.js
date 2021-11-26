import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import NavBar from '../comps/NavBar';
import HeaderTitle from '../comps/HeaderTitle';
import Btn from '../comps/Btn';
import HeroLottie from '../comps/HeroLottie';
import myLottie from '../public/lottie_woman_laptop.json'
import LaptopLottie from '../public/lottie_laptop.json'
import Footer from '../comps/Footer';

const MainCont = styled.div`
  background-color: #F7F2EE;
  /* height: 100%; */
  width: 100%;
`;

const WaveCont = styled.div`
  width: 100%;
  object-fit: cover;
`;

const Wave = styled.img`
  width: 100%;
  @media only screen and (min-width: 500px) {
    object-fit: cover;
    height: 320px;
    width: 100%;
  }
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
  justify-content: center;
  width: 100%;
  height: 500px;

  @media only screen and (min-width: 500px) {
    text-align: center;
    flex-direction: row;
    flex-wrap: wrap;
    height: 100%;
    /* margin-top: 50px; */
  }
`;

const ContTwo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* height: 500px; */
  background-color: #ffffff;
  /* background-color: #E9D7CB; */
  @media only screen and (min-width: 500px) {
    flex-wrap: wrap-reverse;
    padding: 5%;
  }
`;

const ContFour = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  background-color: #ffffff;
`;

const MainInfoCont = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  /* margin: 50px; */
  width: 40%;
  margin-bottom: 50px;
  text-align: left;
  padding: 5%;
  
  @media only screen and (min-width: 500px) {
    text-align: left;

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

const ImageCont = styled.div`
`;

const BtnCont = styled.div`
  /* display: flex;
  justify-content: flex-start;
  align-items: flex-start; */
  margin-top: 60px;
`;

const BodyText = styled.p`
  font-size: 20px;
  text-align: left;

  @media only screen and (min-width: 500px) {
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
  width: 240px;
  @media only screen and (min-width: 500px) {
  min-width: 0px;
}
`;

const Icon = styled.img`
  width: 60px;
  height: 60px;
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

  const router = useRouter();

  return <MainCont>
    <WaveCont>
      <Wave src={'/background-web5.svg'}></Wave>
    </WaveCont>

    <NavBarCont>
      <NavBar />
    </NavBarCont>

    {/* FIRST */}
    <ContOne>
      <MainInfoCont>
        <HeaderTitle title="Increase your clinic's patient base" />
        <BodyText>Try MedorDoc to enhance your clinic's web presence and broaden your patient reach. Start by listing your clinic today.</BodyText>
        <BtnCont>
          <Btn title="Upload Clinic" fSize="20px" fWeight="500" width="200px" height="70px" borderRad="4px" bgHover="#E08E8E" onClick={() => router.push("/signup")} />
        </BtnCont>
      </MainInfoCont>


      <LottieCont>
        <HeroLottie
          source={myLottie}
          width="500px"
        />
      </LottieCont>
    </ContOne>

    {/* SECOND */}
    <ContTwo>
      <ImageCont>
        <Image src={'/startscreenlogo.png'} width="150px" height="300px"></Image>
        <Image src={'/twocardsmobilescreen.png'} width="200px" height="400px"></Image>
      </ImageCont>
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
          <Icon src={'/live.png'}></Icon>
          <Heading>Update Availability in Real Time</Heading>
          <FactText>Increase patient reach by keeping your availability status up-to-date</FactText>
        </InfoCont>

        <InfoCont>
          <Icon src={'/documents.png'}></Icon>
          <Heading>Connect Family Doctors with Patients</Heading>
          <FactText>Simplify the process and accept patients online</FactText>
        </InfoCont>

        <InfoCont>
          <Icon src={'/timetable.png'}></Icon>
          <Heading>Manage Patients Bookings</Heading>
          <FactText>Simplify the process and accept patients online</FactText>
        </InfoCont>

        <InfoCont>
          <Icon src={'/qr.png'}></Icon>
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
          <Btn title="Start Now" fSize="20px" fWeight="500" width="180px" height="60px" borderRad="4px" bgHover="#E08E8E" onClick={() => router.push("/signup")} />
        </BtnCont>
      </MainInfoCont>

      <LottieCont style={{}}>
        <HeroLottie
          source={LaptopLottie}
          width="300px"
        />
      </LottieCont>
    </ContFour>

    <Footer />

  </MainCont>
}

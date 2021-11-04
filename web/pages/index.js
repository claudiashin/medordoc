import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import styled from 'styled-components';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';


import DoctorCard from '../comps/DoctorCard';
import LoginForm from '../comps/LoginForm';
import SigninForm from '../comps/SigninForm';
import PatientList from '../comps/PatientList';
import LiveWaitTime from '../comps/LiveWaitTime';
import Footer from '../comps/Footer';


const Cont = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const BodyCont = styled.div`
  display: flex;
`
const Header = styled.div`
  display: inline-block;
  position: relative;
  width: 100vw;
  padding-bottom: 100%;
  vertical-align: middle;
  overflow: hidden;
`
const Wave = styled.svg`
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
`
const WavePath = styled.path`
  stroke: none; 
  fill: #B9D1E1;
  width: 100%;
`

import InfoCard from '../comps/InfoCard';
import PopupCard from '../comps/PopupCard';
import NavBar from '../comps/NavBar';
import { Menu } from '@mui/material';

export default function Home() {
  return (
    <Cont>
      <Footer></Footer>
      {/* <DoctorCard />
      <LoginForm />
      <SigninForm />
      <PatientList />
      <LiveWaitTime />
      <BodyCont>
        <Header>
          <Wave
            viewBox="0 0 500 500" 
            preserveAspectRatio="xMinYMin meet"
          >
            <WavePath 
              d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"
            />
          </Wave>
        </Header>
      </BodyCont> */}

      <HorizonTab/>
      
    </Cont>
  )
}
